
"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { CardTitle, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

interface IncomeDetailsProps {
  transactions: Transaction[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function IncomeDetails({ transactions }: IncomeDetailsProps) {
  const incomeByMember = React.useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      const member = transaction.member || "Other";
      if (!acc[member]) {
        acc[member] = {
          total: 0,
          sources: [],
        };
      }
      acc[member].total += transaction.amount;
      acc[member].sources.push(transaction);
      return acc;
    }, {} as Record<string, { total: number; sources: Transaction[] }>);
  }, [transactions]);

  const sortedMembers = Object.keys(incomeByMember).sort();

  return (
    <>
      <CardHeader className="px-0 pt-0">
        <CardTitle className="font-headline text-lg">Income</CardTitle>
        <CardDescription>
          A breakdown of income by family member.
        </CardDescription>
      </CardHeader>
      <div className="space-y-6">
        {sortedMembers.map((member) => (
          <div key={member}>
            <div className="flex justify-between items-center mb-2 pb-2">
              <h4 className="font-semibold text-base md:text-lg text-foreground">
                {member}
              </h4>
              <p className="font-bold text-base md:text-lg text-green-600">
                {currencyFormatter.format(incomeByMember[member].total)}
              </p>
            </div>
            <div className="pl-2 sm:pl-4 space-y-2 pt-2">
              {incomeByMember[member].sources.map((item) => (
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
      </div>
    </>
  );
}
