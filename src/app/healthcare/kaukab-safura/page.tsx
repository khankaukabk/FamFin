
"use client";

import * as React from "react";
import Image from "next/image";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { User, Shield, Briefcase, Stethoscope, Pill, Hospital, AlertTriangle, DollarSign } from "lucide-react";

const planDetails = {
    planName: "Blue Shield Trio HMO",
    members: [
        { name: "Kaukab", id: "X12345678" },
        { name: "Safura", id: "X87654321" },
    ],
    groupNumber: "G98765",
    pcp: "Dr. John Doe, MD",
    medicalGroup: "Allied Pacific of California",
    coveragePeriod: "01/01/2025 - 12/31/2025",
    deductible: { individual: 0, family: 0 },
    outOfPocketMax: { individual: 1500, family: 3000 },
};

const coverage = [
    { service: "Primary Care Visit", copay: 15, icon: Stethoscope },
    { service: "Specialist Visit", copay: 30, icon: User },
    { service: "Urgent Care", copay: 30, icon: Hospital },
    { service: "Emergency Room", copay: 100, icon: AlertTriangle, note: "Waived if admitted" },
    { service: "Generic Drugs", copay: 10, icon: Pill },
    { service: "Brand Name Drugs", copay: 35, icon: Pill },
];

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });

export default function KaukabSafuraHealthcarePage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="Healthcare Plans" />
            <main className="flex-1 p-4 sm:px-6 md:p-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    <Card>
                        <CardHeader className="flex flex-row items-start gap-4">
                             <div className="flex-shrink-0">
                                <Image
                                    src="https://i.imgur.com/aYAIGzo.jpeg"
                                    alt="Blue Shield Logo"
                                    width={64}
                                    height={64}
                                    className="rounded-lg border-2 border-white shadow-md"
                                />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl">{planDetails.planName}</CardTitle>
                                <CardDescription>Health Plan Details for Kaukab & Safura</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3">
                                    <Briefcase className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Group Number</h4>
                                        <p className="text-muted-foreground">{planDetails.groupNumber}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Stethoscope className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Primary Care Physician (PCP)</h4>
                                        <p className="text-muted-foreground">{planDetails.pcp}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Hospital className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Medical Group/IPA</h4>
                                        <p className="text-muted-foreground">{planDetails.medicalGroup}</p>
                                    </div>
                                </div>
                            </div>
                             <Separator className="my-6" />
                             <div className="space-y-4">
                                <h3 className="font-semibold text-lg flex items-center gap-2"><User className="h-5 w-5 text-primary"/>Members</h3>
                                {planDetails.members.map(member => (
                                <div key={member.id} className="flex justify-between items-center bg-muted/50 p-3 rounded-lg border">
                                    <p className="font-medium">{member.name}</p>
                                    <p className="text-sm text-muted-foreground font-mono">ID: {member.id}</p>
                                </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><DollarSign className="h-6 w-6"/>Financial Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                                <h4 className="font-semibold">Deductible</h4>
                                <div className="flex justify-between text-muted-foreground"><span>Individual:</span> <span className="font-medium text-foreground">{currencyFormatter.format(planDetails.deductible.individual)}</span></div>
                                <div className="flex justify-between text-muted-foreground"><span>Family:</span> <span className="font-medium text-foreground">{currencyFormatter.format(planDetails.deductible.family)}</span></div>
                           </div>
                           <div className="space-y-2">
                                <h4 className="font-semibold">Out-of-Pocket Maximum</h4>
                                <div className="flex justify-between text-muted-foreground"><span>Individual:</span> <span className="font-medium text-foreground">{currencyFormatter.format(planDetails.outOfPocketMax.individual)}</span></div>
                                <div className="flex justify-between text-muted-foreground"><span>Family:</span> <span className="font-medium text-foreground">{currencyFormatter.format(planDetails.outOfPocketMax.family)}</span></div>
                           </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl flex items-center gap-2"><Shield className="h-6 w-6"/>Coverage Details</CardTitle>
                            <CardDescription>Your costs for common medical services.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-2/3">Service</TableHead>
                                        <TableHead className="text-right">Your Cost (Copay)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {coverage.map(({ service, copay, icon: Icon, note }) => (
                                        <TableRow key={service}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                                                    <div>
                                                        {service}
                                                        {note && <p className="text-xs text-muted-foreground">{note}</p>}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right font-semibold">{currencyFormatter.format(copay)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <footer className="text-center p-4 text-muted-foreground text-xs">
                This is a summary. For full details, refer to your plan documents.
            </footer>
        </div>
    );
}
