
"use client";

import * as React from "react";
import { Leaf } from "lucide-react";
import type { Transaction } from "@/lib/types";

import { SummaryCards } from "@/components/summary-cards";
import { RecentTransactions } from "@/components/recent-transactions";
import { SpendingChart } from "@/components/spending-chart";
import { FinancialAdvice } from "@/components/financial-advice";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

  const { totalIncome, totalExpenses, balance, incomeTransactions, expenseTransactions } = React.useMemo(() => {
    const incomeTransactions = transactions.filter((t) => t.type === "income");
    const expenseTransactions = transactions.filter((t) => t.type === "expense");
    const totalIncome = incomeTransactions.reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = expenseTransactions.reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpenses;
    return { totalIncome, totalExpenses, balance, incomeTransactions, expenseTransactions };
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
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary">
            Family Financials
          </h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <SummaryCards
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div className="col-span-1 flex flex-col gap-4 md:col-span-2">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
               <Card>
                  <CardContent className="p-4 md:p-6">
                    <RecentTransactions 
                      title="Income"
                      description="A list of your earnings."
                      transactions={incomeTransactions} 
                    />
                  </CardContent>
                </Card>
              <div className="flex flex-col gap-4">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <SpendingChart transactions={transactions} />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <RecentTransactions 
                      title="Expenses"
                      description="A list of your spending."
                      transactions={expenseTransactions} 
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
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
