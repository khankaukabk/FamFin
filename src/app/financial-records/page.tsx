
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar, DollarSign, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const refundHistory = [
    {
        orderNumber: "112-1855153-9091414",
        itemDescription: "Ray-Ban RB4458D Sunglasses, Black/Dark Green Polarized, 65 mm",
        amount: 148.93,
        status: "Shipped",
        returnDate: "2025-11-15", 
        notes: "Return sent, waiting on refund."
    },
    {
        orderNumber: "113-0671246-9570651",
        itemDescription: "Ray-Ban RB3845 Explorer 5 Sunglasses, Gunmetal/Brown Polarized, 60 mm & Ray-Ban RB3755 Sunglasses, Gunmetal/Green Polarized, 62 mm",
        amount: 0.00,
        status: "Refunded",
        returnDate: "2025-11-18",
        notes: "Refund has been processed."
    },
    {
        orderNumber: "112-5192070-4834616",
        itemDescription: "Ray-Ban RB3737CH Chromance Rectangular Sunglasses, Black/Grey Gradient Polarized, 60 mm",
        amount: 0.00,
        status: "Pending",
        returnDate: "2025-11-20",
        notes: "Empty box received. Waiting on refund."
    }
];

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
                            <CardDescription>Details for recent returns.</CardDescription>
                        </CardHeader>
                    </Card>

                    {refundHistory.map((refund, index) => (
                        <Card key={refund.orderNumber}>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Package className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <p className="font-semibold">Item(s)</p>
                                            <p className="text-muted-foreground">{refund.itemDescription}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold">Order #</p>
                                            <p className="text-muted-foreground">{refund.orderNumber}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Return Date</p>
                                            <p className="text-muted-foreground">{new Date(refund.returnDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                         <div>
                                            <p className="font-semibold">Status</p>
                                            <Badge variant={refund.status === 'Refunded' ? 'default' : 'outline'}>{refund.status}</Badge>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Amount</p>
                                            <p className="text-green-600 font-bold">{currencyFormatter.format(refund.amount)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Notes</p>
                                        <p className="text-muted-foreground">{refund.notes}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
