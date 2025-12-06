
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { useFirestore, useCollection, useMemoFirebase, type WithId } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { addRefund, type Refund, type NewRefund } from "@/lib/refund-service";
import { useToast } from "@/hooks/use-toast";

import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { PlusCircle, Package, Store, CalendarIcon, DollarSign, Info, ArchiveRestore } from "lucide-react";
import { RefundActions } from "@/components/refund-actions";

const formSchema = z.object({
  orderNumber: z.string().min(1, "Order number is required."),
  store: z.string().min(1, "Store name is required."),
  itemDescription: z.string().min(1, "Item description is required."),
  amount: z.coerce.number().positive("Amount must be a positive number."),
  status: z.enum(["Pending", "Refunded", "Shipped", "Rejected"]),
  returnDate: z.date({ required_error: "A return date is required." }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const statusColors: Record<Refund['status'], string> = {
    Pending: 'text-yellow-600 bg-yellow-500/10 border-yellow-500/20',
    Refunded: 'text-green-600 bg-green-500/10 border-green-500/20',
    Shipped: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    Rejected: 'text-red-600 bg-red-500/10 border-red-500/20',
};


export default function RefundTrackerPage() {
  const firestore = useFirestore();
  const { toast } = useToast();

  const refundsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, "refunds"), orderBy("returnDate", "desc")) : null),
    [firestore]
  );
  const { data: refunds, isLoading } = useCollection<Refund>(refundsQuery);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderNumber: "",
      store: "",
      itemDescription: "",
      status: "Pending",
      notes: "",
    },
  });

  React.useEffect(() => {
    if (!form.getValues("returnDate")) {
      form.setValue("returnDate", new Date());
    }
  }, [form]);

  const onSubmit = async (values: FormValues) => {
    if (!firestore) return;

    const newRefund: NewRefund = {
      ...values,
      returnDate: values.returnDate.toISOString(),
    };

    try {
      await addRefund(firestore, newRefund);
      toast({
        title: "Success!",
        description: "Your refund has been logged.",
      });
      form.reset({
          orderNumber: "",
          store: "",
          itemDescription: "",
          amount: undefined,
          status: "Pending",
          notes: "",
          returnDate: new Date(),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem saving your entry.",
      });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Refund Tracker" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <PlusCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Log a New Return</CardTitle>
                  <CardDescription>Enter the details of the item you are returning.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="orderNumber" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Number</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-10" {...field} />
                            </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="store" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Store</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="e.g., Amazon, Shein" className="pl-10" {...field} />
                            </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="itemDescription" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Description</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField control={form.control} name="amount" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Refund Amount</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input type="number" step="0.01" placeholder="0.00" className="pl-10" {...field} />
                            </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="status" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select a status" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Shipped">Shipped</SelectItem>
                                <SelectItem value="Refunded">Refunded</SelectItem>
                                <SelectItem value="Rejected">Rejected</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="returnDate" render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Return Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant="outline" className={cn("w-full text-left font-normal", !field.value && "text-muted-foreground")}>
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="notes" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes (Optional)</FormLabel>
                        <FormControl><Textarea placeholder="Tracking number, reason for return, etc." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                  )} />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Logging..." : "Log Refund"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <ArchiveRestore className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">Return History</CardTitle>
                        <CardDescription>A complete log of all your returns.</CardDescription>
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
                        <TableHead>Item</TableHead>
                        <TableHead>Order #</TableHead>
                        <TableHead>Store</TableHead>
                        <TableHead>Return Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right pr-2">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {refunds?.map((refund) => (
                        <TableRow key={refund.id}>
                          <TableCell className="font-medium">{refund.itemDescription}</TableCell>
                          <TableCell className="text-muted-foreground">{refund.orderNumber}</TableCell>
                          <TableCell className="text-muted-foreground">{refund.store}</TableCell>
                          <TableCell className="text-muted-foreground whitespace-nowrap">{format(new Date(refund.returnDate), "MMM d, yyyy")}</TableCell>
                          <TableCell>
                            <span className={cn('px-2 py-1 text-xs font-semibold rounded-full border', statusColors[refund.status])}>
                                {refund.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right font-semibold">{currencyFormatter.format(refund.amount)}</TableCell>
                          <TableCell className="text-right">
                            <RefundActions refund={refund} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                   {refunds?.length === 0 && <p className="text-center text-muted-foreground py-8">No refunds logged yet.</p>}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
