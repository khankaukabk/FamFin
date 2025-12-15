
"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";

import { SummaryCards } from "@/components/summary-cards";
import { ExpenseDetails } from "@/components/expense-details";
import { SpendingChart } from "@/components/spending-chart";
import { Card, CardContent } from "@/components/ui/card";
import { IncomeDetails } from "@/components/income-details";
import { Navigation } from "@/components/ui/navigation";


const initialTransactions: Transaction[] = [
  // Income Data
  { id: "1", type: "income", amount: 1000.0, category: "Employment", description: "DFAS", member: "Kausain", date: "2024-07-01" },
  { id: "3", type: "income", amount: 300.0, category: "Employment", description: "Income", member: "Musaab", date: "2024-07-01" },
  { id: "23", type: "income", amount: 300.0, category: "Government", description: "SSA Treas", member: "Aminuddin", date: "2024-07-01" },
  { id: "25", type: "income", amount: 200.0, category: "Government", description: "EBT", member: "Aminuddin", date: "2024-07-01" },
  { id: "24", type: "income", amount: 2000.0, category: "Employment", description: "Monthly", member: "Ruma", date: "2024-07-01" },

  // Expense Data
  { id: "7", type: "expense", amount: 830, category: "Housing", description: "Bank of Whittier", date: "2024-07-01" },
  { id: "8", type: "expense", amount: 632.09, category: "Loan", description: "Wells Fargo Loan", date: "2024-07-01" },
  { id: "9", type: "expense", amount: 209.56, category: "Utilities", description: "Phone Bill", date: "2024-07-01" },
  { id: "21", type: "expense", amount: 90.0, category: "Utilities", description: "Internet Bill", date: "2024-07-01" },
  { id: "10", type: "expense", amount: 411.72, category: "Transportation", description: "Tesla Finance", date: "2024-07-01" },
  { id: "11", type: "expense", amount: 350.0, category: "Utilities", description: "Alabama Utility", date: "2024-07-01" },
  { id: "12", type: "expense", amount: 201.52, category: "Loan", description: "HomeDepot Loan", date: "2024-07-01" },
  { id: "13", type: "expense", amount: 200.0, category: "Insurance", description: "State Farm Insurance", date: "2024-07-01" },
  { id: "14", type: "expense", amount: 160.0, category: "Transportation", description: "Toyota Gas", date: "2024-07-01" },
  { id: "15", type: "expense", amount: 120.0, category: "Loan", description: "Student Loan", date: "2024-07-01" },
  { id: "16", type: "expense", amount: 100, category: "Discretionary", description: "Amazon", date: "2024-07-01" },
  { id: "22", type: "expense", amount: 18, category: "Loan", description: "iPhone Payment", date: "2024-07-01" },
];


export default function DashboardPage() {
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
  

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Khan Family" />
      <main className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <SummaryCards
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />
        <div className="grid grid-cols-1 gap-4 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <SpendingChart transactions={transactions} />
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
               <Card>
                  <CardContent className="p-4 md:p-6">
                    <IncomeDetails transactions={incomeTransactions} />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <ExpenseDetails transactions={expenseTransactions} />
                  </CardContent>
                </Card>
            </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        © 2025 Created by the Khan Family
      </footer>
    </div>
  );
}
