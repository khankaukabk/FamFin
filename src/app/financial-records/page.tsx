
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar, DollarSign, Info } from "lucide-react";

const refundDetails = {
    orderNumber: "112-1855153-9091414",
    itemDescription: "Ray-Ban RB4458D Sunglasses, Black/Dark Green Polarized, 65 mm",
    amount: 148.93,
    status: "Shipped",
    returnDate: "2025-11-15", 
    notes: "Return sent, waiting on refund."
};

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function FinancialRecordsPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="Financial Records" />
            <main className="flex-1 p-4 sm:px-6 md:p-8">
                <div className="mx-auto max-w-2xl space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Return History</CardTitle>
                            <CardDescription>Details for a recent return.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Package className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="font-semibold">Item</p>
                                        <p className="text-muted-foreground">{refundDetails.itemDescription}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold">Order #</p>
                                        <p className="text-muted-foreground">{refundDetails.orderNumber}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Return Date</p>
                                        <p className="text-muted-foreground">{new Date(refundDetails.returnDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                     <div>
                                        <p className="font-semibold">Status</p>
                                        <Badge variant="outline">{refundDetails.status}</Badge>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Amount</p>
                                        <p className="text-green-600 font-bold">{currencyFormatter.format(refundDetails.amount)}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">Notes</p>
                                    <p className="text-muted-foreground">{refundDetails.notes}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
