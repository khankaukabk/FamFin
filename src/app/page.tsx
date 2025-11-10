
"use client";

import * as React from "react";
import { Leaf, Plane, Shield, Warehouse, ListChecks, LogOut, Star, Car, Menu } from "lucide-react";
import type { Transaction } from "@/lib/types";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';

import { SummaryCards } from "@/components/summary-cards";
import { ExpenseDetails } from "@/components/expense-details";
import { SpendingChart } from "@/components/spending-chart";
import { Card, CardContent } from "@/components/ui/card";
import { IncomeDetails } from "@/components/income-details";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const initialTransactions: Transaction[] = [
  // Income Data
  { id: "1", type: "income", amount: 1000.0, category: "Employment", description: "DFAS", member: "Kausain", date: "2024-07-01" },
  { id: "2", type: "income", amount: 1200.0, category: "Personal", description: "Personal Choice", member: "Ammu", date: "2024-07-01" },
  { id: "3", type: "income", amount: 300.0, category: "Employment", description: "Income", member: "Musaab", date: "2024-07-01" },
  { id: "4", type: "income", amount: 292, category: "Government", description: "EBT", member: "Kaukab", date: "2024-07-01" },
  { id: "5", type: "income", amount: 360.0, category: "Government", description: "Unemployment", member: "Kaukab", date: "2024-07-01" },
  { id: "6", type: "income", amount: 536, category: "Government", description: "EBT", member: "Abbu", date: "2024-07-01" },

  // Expense Data
  { id: "7", type: "expense", amount: 807.75, category: "Housing", description: "Bank of Whittier", date: "2024-07-01" },
  { id: "8", type: "expense", amount: 632.09, category: "Loan", description: "Wells Fargo Loan", date: "2024-07-01" },
  { id: "9", type: "expense", amount: 209.56, category: "Utilities", description: "Phone Bill", date: "2024-07-01" },
  { id: "21", type: "expense", amount: 90.0, category: "Utilities", description: "Internet Bill", date: "2024-07-01" },
  { id: "10", type: "expense", amount: 411.72, category: "Transportation", description: "Tesla Finance", date: "2024-07-01" },
  { id: "11", type: "expense", amount: 350.0, category: "Utilities", description: "Alabama Utility", date: "2024-07-01" },
  { id: "12", type: "expense", amount: 201.52, category: "Loan", description: "HomeDepot Loan", date: "2024-07-01" },
  { id: "13", type: "expense", amount: 200.0, category: "Insurance", description: "State Farm Insurance", date: "2024-07-01" },
  { id: "14", type: "expense", amount: 160.0, category: "Transportation", description: "Toyota Gas", date: "2024-07-01" },
  { id: "15", type: "expense", amount: 120.0, category: "Loan", description: "Student Loan", date: "2024-07-01" },
  { id: "16", type: "expense", amount: 50.0, category: "Discretionary", description: "Amazon", date: "2024-07-01" },
  { id: "19", type: "expense", amount: 500.0, category: "Credit Card", description: "Kaukab Credit Card", date: "2024-07-01" },
  { id: "20", type: "expense", amount: 500.0, category: "Credit Card", description: "Abbu Credit Card", date: "2024-07-01" },
  { id: "22", type: "expense", amount: 18, category: "Loan", description: "iPhone Payment", date: "2024-07-01" },
];


export default function Home() {
  const [transactions, setTransactions] =
    React.useState<Transaction[]>(initialTransactions);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const { totalIncome, totalExpenses, balance, incomeTransactions, expenseTransactions } = React.useMemo(() => {
    const incomeTransactions = transactions.filter((t) => t.type === "income");
    const expenseTransactions = transactions.filter((t) => t.type === "expense");
    const totalIncome = incomeTransactions.reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = expenseTransactions.reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpenses;
    return { totalIncome, totalExpenses, balance, incomeTransactions, expenseTransactions };
  }, [transactions]);
  
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  
  React.useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleSignOut = async () => {
    if (!auth) return;
    await signOut(auth);
    router.push('/login');
  };
  
  if (isUserLoading || !user) {
    return <div>Loading...</div>
  }

  const navLinks = (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
       <Link href="/six-qualities" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <Star className="h-4 w-4 mr-2" />
          Six Qualities
        </Button>
      </Link>
      <Link href="/medicare-roadmap" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <Shield className="h-4 w-4 mr-2" />
          Medicare
        </Button>
      </Link>
       <Link href="/tesla-2024" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <Car className="h-4 w-4 mr-2" />
          Tesla
        </Button>
      </Link>
      <Link href="/travel-plan" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <Plane className="h-4 w-4 mr-2" />
          Travel
        </Button>
      </Link>
      <Link href="/farm-business-plan" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <Warehouse className="h-4 w-4 mr-2" />
          Farm
        </Button>
      </Link>
      <Link href="/meetings" passHref>
        <Button variant="ghost" className="w-full justify-start sm:w-auto" onClick={() => setIsSheetOpen(false)}>
          <ListChecks className="h-4 w-4 mr-2" />
          Meetings
        </Button>
      </Link>
      {user && (
        <Button variant="ghost" onClick={() => { handleSignOut(); setIsSheetOpen(false); }} className="w-full justify-start sm:w-auto">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      )}
    </div>
  )


  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary">
            Family Financials
          </h1>
        </div>
        
        <div className="hidden sm:flex items-center justify-end gap-2">
          {navLinks}
        </div>
        
        <div className="sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="font-headline text-2xl">Navigation</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 flex flex-col gap-2">
                        {navLinks}
                    </div>
                </SheetContent>
            </Sheet>
        </div>

      </header>
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
