"use client";

import * as React from "react";
import { Leaf } from "lucide-react";
import type { Transaction } from "@/lib/types";

import { SummaryCards } from "@/components/summary-cards";
import { TransactionForm } from "@/components/transaction-form";
import { RecentTransactions } from "@/components/recent-transactions";
import { SpendingChart } from "@/components/spending-chart";
import { FinancialAdvice } from "@/components/financial-advice";
import { Card, CardContent } from "@/components/ui/card";

const initialTransactions: Transaction[] = [
  {
    id: "1",
    type: "income",
    amount: 5200,
    category: "Salary",
    description: "Monthly Salary",
    date: "2024-07-01",
  },
  {
    id: "2",
    type: "expense",
    amount: 1500,
    category: "Housing",
    description: "Rent",
    date: "2024-07-01",
  },
  {
    id: "3",
    type: "expense",
    amount: 450.75,
    category: "Food",
    description: "Groceries",
    date: "2024-07-05",
  },
  {
    id: "4",
    type: "expense",
    amount: 120.0,
    category: "Transportation",
    description: "Gas",
    date: "2024-07-08",
  },
  {
    id: "5",
    type: "income",
    amount: 300,
    category: "Freelance",
    description: "Web Design Project",
    date: "2024-07-10",
  },
  {
    id: "6",
    type: "expense",
    amount: 85.5,
    category: "Entertainment",
    description: "Movie tickets",
    date: "2024-07-12",
  },
];

export default function Home() {
  const [transactions, setTransactions] =
    React.useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction = { ...transaction, id: crypto.randomUUID(), date: new Date() };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const { totalIncome, totalExpenses, balance } = React.useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpenses;
    return { totalIncome, totalExpenses, balance };
  }, [transactions]);

  const spendingHabits = React.useMemo(() => {
    const expenseByCategory = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(expenseByCategory)
      .map(([category, amount]) => `${category}: $${amount.toFixed(2)}`)
      .join(", ");
  }, [transactions]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary md:text-2xl">
            Family Financials
          </h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <SummaryCards
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardContent className="p-4 md:p-6">
              <RecentTransactions transactions={transactions} />
            </CardContent>
          </Card>
          <div className="space-y-4">
             <TransactionForm addTransaction={addTransaction} />
          </div>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardContent className="p-2 md:p-6">
              <SpendingChart transactions={transactions} />
            </CardContent>
          </Card>
          <div className="space-y-4">
            <FinancialAdvice
              income={totalIncome}
              expenses={totalExpenses}
              spendingHabits={spendingHabits}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
