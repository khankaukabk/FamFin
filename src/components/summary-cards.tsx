
"use client";

import * as React from "react";
import { DollarSign, ArrowUp, ArrowDown, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SummaryCardsProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function SummaryCards({
  totalIncome,
  totalExpenses,
  balance,
}: SummaryCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {currencyFormatter.format(totalIncome)}
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            <ArrowUp className="h-4 w-4 mr-1" />
            All earnings this period
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">
            {currencyFormatter.format(totalExpenses)}
          </div>
           <p className="text-xs text-muted-foreground flex items-center">
            <ArrowDown className="h-4 w-4 mr-1" />
            All spending this period
          </p>
        </CardContent>
      </Card>
      <Card className="shadow-md border-primary/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Balance</CardTitle>
          <Scale className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              "text-2xl font-bold",
              balance >= 0 ? "text-primary" : "text-destructive text-3xl"
            )}
          >
            {currencyFormatter.format(balance)}
          </div>
           <p className="text-xs text-muted-foreground">
            {balance >= 0 ? "Surplus - You're in the green!" : "Deficit - Time to review spending."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
