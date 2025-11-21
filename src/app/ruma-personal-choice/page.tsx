
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import type { WithId } from "@/firebase";
import { addHourLog, type HourLog } from "@/lib/hour-log-service";

import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, HeartHandshake, ClipboardList, Clock, Info, CheckSquare, Calendar, AlertCircle, PlusCircle, CalendarIcon, Timer, TimerOff, Calculator } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { HourLogActions } from "@/components/hour-log-actions";
import { Label } from "@/components/ui/label";

const dailyTasks = [
  "Assist with personal care (dressing, grooming)",
  "Provide medication reminders",
  "Prepare light meals and assist with feeding if needed",
  "Perform light housekeeping (tidying up, laundry)",
  "Offer companionship and engage in conversation",
  "Accompany to appointments or social outings",
];

const formSchema = z.object({
  date: z.date({
    required_error: "A date is required.",
  }),
  startTime: z.string().min(1, "Start time is required."),
  endTime: z.string().min(1, "End time is required."),
  notes: z.string().optional(),
}).refine(data => {
    if (!data.startTime || !data.endTime) return true;
    return data.endTime > data.startTime
}, {
  message: "End time must be after start time.",
  path: ["endTime"],
});

type FormValues = z.infer<typeof formSchema>;

export default function RumaPersonalChoicePage() {
  const firestore = useFirestore();
  const { toast } = useToast();

  const [calcStartTime, setCalcStartTime] = React.useState('');
  const [calcEndTime, setCalcEndTime] = React.useState('');
  const [calculatedDuration, setCalculatedDuration] = React.useState<number | null>(null);

  const hourLogsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, "hourLogs"), orderBy("date", "desc")) : null),
    [firestore]
  );
  const { data: hourLogs, isLoading } = useCollection<HourLog>(hourLogsQuery);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      notes: "",
    },
  });

  React.useEffect(() => {
    // Set date only on client side to avoid hydration mismatch
    if (!form.getValues("date")) {
        form.setValue("date", new Date());
    }
  }, [form]);

  React.useEffect(() => {
    if (calcStartTime && calcEndTime) {
      if (calcEndTime > calcStartTime) {
        const start = new Date(`1970-01-01T${calcStartTime}`);
        const end = new Date(`1970-01-01T${calcEndTime}`);
        const durationMs = end.getTime() - start.getTime();
        const durationHours = durationMs / (1000 * 60 * 60);
        setCalculatedDuration(durationHours);
      } else {
        setCalculatedDuration(null);
      }
    } else {
      setCalculatedDuration(null);
    }
  }, [calcStartTime, calcEndTime]);


  const onSubmit = async (values: FormValues) => {
    if (!firestore) return;

    const startDateTime = new Date(`${format(values.date, 'yyyy-MM-dd')}T${values.startTime}`);
    const endDateTime = new Date(`${format(values.date, 'yyyy-MM-dd')}T${values.endTime}`);
    const duration = (endDateTime.getTime() - startDateTime.getTime()) / (1000 * 60 * 60);

    if (duration <= 0) {
      form.setError("endTime", {
        type: "manual",
        message: "End time must be after start time.",
      });
      return;
    }

    try {
      await addHourLog(firestore, {
        date: values.date.toISOString(),
        startTime: values.startTime,
        endTime: values.endTime,
        duration: duration,
        notes: values.notes || "",
      });
      toast({
        title: "Success!",
        description: "Your hour log has been added.",
      });
      form.reset({
        startTime: "",
        endTime: "",
        notes: "",
      });
      form.setValue("date", new Date());
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem saving your entry.",
      });
    }
  };
  
  const formatTime = (time: string) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    return format(date, 'h:mm a');
  };

  const totalHours = React.useMemo(() => {
    if (!hourLogs) return 0;
    return hourLogs.reduce((acc, log) => acc + log.duration, 0);
  }, [hourLogs]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Ruma's Personal Choice Job" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Info className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Job Overview</CardTitle>
                  <CardDescription>Providing compassionate in-home care and support.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <User className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Client</h4>
                    <p className="text-muted-foreground">John Doe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HeartHandshake className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Role</h4>
                    <p className="text-muted-foreground">Personal Care Assistant</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Start Date</h4>
                    <p className="text-muted-foreground">July 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Weekly Hours</h4>
                    <p className="text-muted-foreground">36 hours per week, effective Nov 16, 2025.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <ClipboardList className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Key Responsibilities & Daily Tasks</CardTitle>
                  <CardDescription>A checklist of typical duties and activities.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dailyTasks.map((task, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Calculator className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">Quick Hour Calculator</CardTitle>
                        <CardDescription>Instantly calculate the duration between a start and end time.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    <div className="space-y-2">
                        <Label>Start Time</Label>
                        <div className="relative">
                            <Timer className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="time" className="pl-10" value={calcStartTime} onChange={(e) => setCalcStartTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>End Time</Label>
                        <div className="relative">
                            <TimerOff className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="time" className="pl-10" value={calcEndTime} onChange={(e) => setCalcEndTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center bg-muted/50 p-4 rounded-lg border h-full flex flex-col justify-center">
                        <p className="text-sm font-semibold text-muted-foreground">Total Duration</p>
                        <p className="text-2xl font-bold text-primary">
                            {calculatedDuration !== null ? `${calculatedDuration.toFixed(2)} hrs` : '-.-- hrs'}
                        </p>
                    </div>
                </div>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <PlusCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Add New Hour Entry</CardTitle>
                  <CardDescription>Log the hours you've worked.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col md:col-span-1 sm:col-span-2">
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Time</FormLabel>
                          <FormControl>
                             <div className="relative">
                              <Timer className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input type="time" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="endTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Time</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <TimerOff className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input type="time" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                   <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any notes about the shift..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Saving..." : "Save Entry"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>


          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Weekly Hour Log</CardTitle>
                  <CardDescription>A record of hours worked. Edit or delete entries as needed.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-center">Duration</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead className="text-right pr-2">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hourLogs?.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="font-medium whitespace-nowrap">{format(new Date(log.date), "EEE, MMM d")}</TableCell>
                          <TableCell className="text-sm text-muted-foreground whitespace-nowrap">{formatTime(log.startTime)} - {formatTime(log.endTime)}</TableCell>
                          <TableCell className="text-center font-semibold">{log.duration.toFixed(2)} hrs</TableCell>
                          <TableCell className="text-muted-foreground min-w-[150px]">{log.notes}</TableCell>
                          <TableCell className="text-right">
                            <HourLogActions log={log} />
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="border-t-2 border-primary/20 bg-muted/50">
                          <TableCell colSpan={2} className="font-bold">Total</TableCell>
                          <TableCell className="text-center font-bold text-lg text-primary">
                            {totalHours.toFixed(2)} hrs
                          </TableCell>
                          <TableCell colSpan={2}></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Personal Choice Program - Caregiver Portal
      </footer>
    </div>
  );
}
