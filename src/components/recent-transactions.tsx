"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CardTitle, CardDescription, CardHeader } from "./ui/card";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <>
      <CardHeader className="px-0 pt-0">
        <CardTitle className="font-headline text-lg">Recent Transactions</CardTitle>
        <CardDescription>
          A list of your recent income and expenses.
        </CardDescription>
      </CardHeader>
      <div className="relative h-[400px] overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead className="w-[200px]">Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  {transaction.type === "income" ? (
                    <ArrowUpCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4 text-red-500" />
                  )}
                  {transaction.description}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{transaction.category}</Badge>
                </TableCell>
                <TableCell>{format(transaction.date, "LLL dd, y")}</TableCell>
                <TableCell
                  className={cn(
                    "text-right font-semibold",
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  )}
                >
                  {transaction.type === "income" ? "" : "-"}
                  {currencyFormatter.format(transaction.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
