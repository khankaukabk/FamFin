
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar, DollarSign, Info, Hourglass, CheckCircle } from "lucide-react";
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
        amount: 332.5,
        status: "Refunded",
        returnDate: "2025-11-18",
        notes: "Refund has been processed."
    },
    {
        orderNumber: "112-5192070-4834616",
        itemDescription: "Ray-Ban RB3737CH Chromance Rectangular Sunglasses, Black/Grey Gradient Polarized, 60 mm",
        amount: 199.5,
        status: "Pending",
        returnDate: "2025-11-20",
        notes: "Empty box received. Waiting on refund."
    },
    {
        orderNumber: "114-1234567-8901234",
        itemDescription: "Ray-Ban Mens RB3527 Rectangular Sunglasses, Matte Black/Dark Green, 61 mm",
        amount: 101.66,
        status: "Pending",
        returnDate: "2025-12-07",
        notes: "Waiting on refund."
    },
    {
        orderNumber: "112-8996770-1377804",
        itemDescription: "Ray-Ban RB3684CH Chromance Rectangular Sunglasses, Black/Polarized Dark Grey, 58 mm",
        amount: 140.94,
        status: "Pending",
        returnDate: "2025-12-10",
        notes: "Waiting on refund"
    },
    {
        orderNumber: "112-5578454-0937824",
        itemDescription: "Ray-Ban RB3717 Rectangular Sunglasses, Legend Gold/Polarized Blue, 60 mm",
        amount: 146.88,
        status: "Refunded",
        returnDate: "2025-12-12",
        notes: "Refund has been processed."
    },
    {
        orderNumber: "112-1281513-4967466",
        itemDescription: "Ray-Ban RB3796 003/R5 62MM Silver/Crystal Lens Blue Rectangular Sunglasses for Men for Women +BUNDLE with ACCESSORY EYEWEAR KIT",
        amount: 165.02,
        status: "Refunded",
        returnDate: "2025-12-12",
        notes: "Return complete."
    },
    {
        orderNumber: "112-3955469-5837844",
        itemDescription: "Ray-Ban RB3796 002/B1 59MM Black/Crystal Lens Dark Grey Rectangular Sunglasses for Men for Women +BUNDLE with ACCESSORY EYEWEAR KIT",
        amount: 165.02,
        status: "Refunded",
        returnDate: "2025-12-12",
        notes: "Return complete."
    }
];

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const RefundCard = ({ refund }: { refund: typeof refundHistory[0] }) => (
    <Card>
        <CardContent className="pt-6">
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <Package className="h-5 w-5 text-muted-foreground mt-1" />
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
                 {refund.notes && (
                    <div>
                        <p className="font-semibold">Notes</p>
                        <p className="text-muted-foreground">{refund.notes}</p>
                    </div>
                 )}
            </div>
        </CardContent>
    </Card>
);

export default function FinancialRecordsPage() {
    const waitingForRefund = refundHistory.filter(r => r.status === 'Pending' || r.status === 'Shipped');
    const refunded = refundHistory.filter(r => r.status === 'Refunded');

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="Financial Records" />
            <main className="flex-1 p-4 sm:px-6 md:p-8">
                <div className="mx-auto max-w-2xl space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Return History</CardTitle>
                            <CardDescription>A log of all product returns and their status.</CardDescription>
                        </CardHeader>
                    </Card>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Hourglass className="h-6 w-6 text-primary" />
                            <h2 className="font-headline text-2xl font-semibold">Waiting on Refund</h2>
                        </div>
                        {waitingForRefund.length > 0 ? (
                           waitingForRefund.map((refund) => <RefundCard key={refund.orderNumber} refund={refund} />)
                        ) : (
                            <p className="text-muted-foreground pl-10">No items are currently pending a refund.</p>
                        )}
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-6">
                         <div className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                            <h2 className="font-headline text-2xl font-semibold">Refunded</h2>
                        </div>
                        {refunded.length > 0 ? (
                            refunded.map((refund) => <RefundCard key={refund.orderNumber} refund={refund} />)
                        ) : (
                            <p className="text-muted-foreground pl-10">No items have been refunded yet.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
