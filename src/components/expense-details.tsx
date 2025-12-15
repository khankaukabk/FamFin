
"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { CardTitle, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

interface ExpenseDetailsProps {
  transactions: Transaction[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function ExpenseDetails({ transactions }: ExpenseDetailsProps) {
  const { expenseByCategory, totalExpenses } = React.useMemo(() => {
    const expenseByCategory = transactions.reduce((acc, transaction) => {
      const category = transaction.category || "Other";
      if (!acc[category]) {
        acc[category] = {
          total: 0,
          sources: [],
        };
      }
      acc[category].total += transaction.amount;
      acc[category].sources.push(transaction);
      return acc;
    }, {} as Record<string, { total: number; sources: Transaction[] }>);

    const totalExpenses = transactions.reduce((acc, t) => acc + t.amount, 0);

    return { expenseByCategory, totalExpenses };
  }, [transactions]);

  const sortedCategories = Object.keys(expenseByCategory).sort();

  return (
    <>
      <CardHeader className="px-0 pt-0">
        <CardTitle className="font-headline text-lg">Expenses</CardTitle>
        <CardDescription>
          A breakdown of expenses by category.
        </CardDescription>
      </CardHeader>
      <div className="space-y-6">
        {sortedCategories.map((category) => (
          <div key={category}>
            <div className="flex justify-between items-center mb-2 pb-2">
              <h4 className="font-semibold text-base md:text-lg text-foreground">
                {category}
              </h4>
              <p className="font-bold text-base md:text-lg text-red-600">
                {currencyFormatter.format(expenseByCategory[category].total)}
              </p>
            </div>
            <div className="pl-2 sm:pl-4 space-y-2 pt-2">
              {expenseByCategory[category].sources.map((item) => (
                <div key={item.id} className="flex justify-between items-center group">
                  <p className="text-muted-foreground text-sm sm:text-base truncate">
                    {item.description}
                  </p>
                  <p className="font-medium text-foreground mr-2 sm:mr-4 text-sm sm:text-base">
                    {currencyFormatter.format(item.amount)}
                  </p>
                </div>
              ))}
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
         <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-primary/20">
          <h4 className="font-bold text-lg text-primary">Total Expenses</h4>
          <p className="font-bold text-xl text-primary">
            {currencyFormatter.format(totalExpenses)}
          </p>
        </div>
      </div>
    </>
  );
}
