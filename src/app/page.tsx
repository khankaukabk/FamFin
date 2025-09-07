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
  // Income Data
  { id: "1", type: "income", amount: 1000.0, category: "Employment", description: "DFAS (Kausain)", date: "2024-07-01" },
  { id: "2", type: "income", amount: 1200.0, category: "Personal", description: "Personal Choice (Ammu)", date: "2024-07-01" },
  { id: "3", type: "income", amount: 300.0, category: "Employment", description: "Income (Musaab)", date: "2024-07-01" },
  { id: "4", type: "income", amount: 250.0, category: "Government", description: "EBT (Kaukab)", date: "2024-07-01" },
  { id: "5", type: "income", amount: 360.0, category: "Government", description: "Unemployment (Kaukab)", date: "2024-07-01" },
  { id: "6", type: "income", amount: 500.0, category: "Government", description: "EBT (Abbu)", date: "2024-07-01" },

  // Expense Data
  { id: "7", type: "expense", amount: 807.75, category: "Housing", description: "Bank of Whittier", date: "2024-07-01" },
  { id: "8", type: "expense", amount: 632.09, category: "Loan", description: "Wells Fargo Loan", date: "2024-07-01" },
  { id: "9", type: "expense", amount: 440.0, category: "Utilities", description: "Phone & WiFi", date: "2024-07-01" },
  { id: "10", type: "expense", amount: 411.72, category: "Transportation", description: "Tesla Finance", date: "2024-07-01" },
  { id: "11", type: "expense", amount: 350.0, category: "Utilities", description: "Alabama Utility", date: "2024-07-01" },
  { id: "12", type: "expense", amount: 201.52, category: "Loan", description: "HomeDepot Loan", date: "2024-07-01" },
  { id: "13", type: "expense", amount: 200.0, category: "Insurance", description: "State Farm Insurance", date: "2024-07-01" },
  { id: "14", type: "expense", amount: 160.0, category: "Transportation", description: "Toyota Gas", date: "2024-07-01" },
  { id: "15", type: "expense", amount: 120.0, category: "Loan", description: "Student Loan", date: "2024-07-01" },
  { id: "16", type: "expense", amount: 50.0, category: "Discretionary", description: "Amazon", date: "2024-07-01" },
  { id: "19", type: "expense", amount: 500.0, category: "Credit Card", description: "Kaukab Credit Card", date: "2024-07-01" },
  { id: "20", type: "expense", amount: 500.0, category: "Credit Card", description: "Abbu Credit Card", date: "2024-07-01" },
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
