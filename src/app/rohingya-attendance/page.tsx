
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const members = [
  "Shom M.",
  "Mohammed A.",
  "Somuda B.",
  "Abu J.",
  "Mohammed S.",
  "Roziya B.",
  "Anowar S.",
  "Mohammed S.",
  "Jamal H.",
  "Ramida B.",
  "Mohammed Nur H.",
  "Noor A.",
  "Noor K."
];

export default function RohingyaAttendancePage() {
  const [attendance, setAttendance] = React.useState<Record<string, boolean>>({});

  const handleCheckChange = (name: string) => {
    setAttendance(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Rohingya Wellness Group Attendance" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Attendance Sheet</CardTitle>
              <CardDescription>Mark attendance for the wellness group session.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="session-date">Date of Session</Label>
                  <Input id="session-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-number">Session #</Label>
                  <Input id="session-number" type="number" placeholder="e.g., 4" />
                </div>
              </div>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[70%]">Name</TableHead>
                      <TableHead className="text-center">Attendance (mark with check)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((name, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell className="text-center">
                          <Checkbox
                            id={`attendance-${index}`}
                            checked={!!attendance[name]}
                            onCheckedChange={() => handleCheckChange(name)}
                            aria-label={`Mark ${name} as present`}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Attendance tracking for Rohingya Wellness Group.
      </footer>
    </div>
  );
}
