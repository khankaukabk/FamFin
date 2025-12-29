
"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { 
  Wallet, TrendingUp, TrendingDown, Home, Car, Smartphone, 
  CreditCard, ShoppingBag, Shield, Utensils, Landmark, 
  ArrowUpRight, ArrowDownRight, Calendar, User, PieChart
} from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-enter { animation: fade-in-up 0.5s ease-out forwards; }
`;

// --- DATA & TYPES ---
const initialTransactions: Transaction[] = [
  // Income
  { id: "1", type: "income", amount: 1000.0, category: "Employment", description: "DFAS", member: "Kausain", date: "2024-07-01" },
  { id: "3", type: "income", amount: 300.0, category: "Employment", description: "Income", member: "Musaab", date: "2024-07-01" },
  { id: "27", type: "income", amount: 1000.0, category: "Employment", description: "Monthly", member: "Safura", date: "2024-07-01" },
  { id: "24", type: "income", amount: 1000.0, category: "Employment", description: "Monthly", member: "Ruma", date: "2024-07-01" },
  { id: "25", type: "income", amount: 200.0, category: "Government", description: "EBT", member: "Aminuddin Khan", date: "2024-07-01" },
  { id: "23", type: "income", amount: 300.0, category: "Government", description: "SSA Treas", member: "Aminuddin Khan", date: "2024-07-01" },
  { id: "26", type: "income", amount: 300.0, category: "Government", description: "EBT", member: "Kaukab", date: "2024-07-01" },
  // Expense
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
  { id: "28", type: "expense", amount: 250.0, category: "Food", description: "Bulk Chicken & Shopping", date: "2024-07-01" },
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'housing': return Home;
    case 'transportation': return Car;
    case 'utilities': return Smartphone;
    case 'loan': return CreditCard;
    case 'food': return Utensils;
    case 'insurance': return Shield;
    case 'government': return Landmark;
    case 'employment': return Wallet;
    default: return ShoppingBag;
  }
};

// --- COMPONENT: STAT CARD ---
const StatCard = ({ title, amount, type, icon: Icon }: { title: string, amount: number, type: 'neutral' | 'positive' | 'negative', icon: any }) => (
  <div className="relative overflow-hidden p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl group">
    <div className={`absolute top-0 right-0 p-16 rounded-full blur-[40px] opacity-20 pointer-events-none transition-colors duration-500
      ${type === 'positive' ? 'bg-emerald-500' : type === 'negative' ? 'bg-rose-500' : 'bg-blue-500'}`} 
    />
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${type === 'positive' ? 'bg-emerald-500/20 text-emerald-400' : type === 'negative' ? 'bg-rose-500/20 text-rose-400' : 'bg-blue-500/20 text-blue-400'}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <p className="text-neutral-400 text-sm font-medium tracking-wide uppercase">{title}</p>
      <h3 className="text-3xl font-bold text-white mt-1">
        ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </h3>
    </div>
  </div>
);

// --- COMPONENT: TRANSACTION ROW ---
const TransactionRow = ({ t, delay }: { t: Transaction, delay: number }) => {
  const Icon = getCategoryIcon(t.category);
  const isIncome = t.type === 'income';

  return (
    <div 
      style={{ animationDelay: `${delay}ms` }}
      className="animate-enter flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm active:bg-white/10 transition-colors"
    >
      <div className={`flex-none p-3 rounded-xl ${isIncome ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
        <Icon className="w-5 h-5" />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-white truncate pr-2">{t.description}</h4>
          <span className={`font-mono font-bold whitespace-nowrap ${isIncome ? 'text-emerald-400' : 'text-white'}`}>
            {isIncome ? '+' : '-'}${t.amount.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center mt-1 text-xs text-neutral-500">
          <span className="flex items-center gap-1"><User className="w-3 h-3"/> {t.member}</span>
          <span className="flex items-center gap-1">{t.category} • {new Date(t.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'income' | 'expenses'>('overview');
  const [transactions] = React.useState<Transaction[]>(initialTransactions);

  const stats = React.useMemo(() => {
    const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
    return { income, expenses, balance: income - expenses };
  }, [transactions]);

  const filteredTransactions = React.useMemo(() => {
    if (activeTab === 'overview') return transactions.slice(0, 5); // Just recent
    return transactions.filter(t => t.type === (activeTab === 'income' ? 'income' : 'expense'));
  }, [transactions, activeTab]);

  return (
    <>
      <style>{styles}</style>
      <div className="fixed inset-0 bg-neutral-950 text-neutral-100 font-sans overflow-hidden flex flex-col">
        
        {/* BACKGROUND AMBIENCE */}
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[50%] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        {/* HEADER */}
        <header className="flex-none pt-safe px-6 py-6 flex justify-between items-center z-10">
          <div>
            <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-1">Family Dashboard</p>
            <h1 className="text-2xl font-bold text-white">Khan Finances</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
            K
          </div>
        </header>

        {/* SCROLLABLE CONTENT AREA */}
        <main className="flex-grow overflow-y-auto no-scrollbar pb-24 px-6 space-y-8 z-10">
          
          {/* OVERVIEW CARDS */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-enter">
              <StatCard title="Total Balance" amount={stats.balance} type="neutral" icon={Wallet} />
              <div className="grid grid-cols-2 gap-4">
                <StatCard title="Income" amount={stats.income} type="positive" icon={TrendingUp} />
                <StatCard title="Expenses" amount={stats.expenses} type="negative" icon={TrendingDown} />
              </div>
            </div>
          )}

          {/* SECTION HEADER */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">
              {activeTab === 'overview' ? 'Recent Activity' : activeTab === 'income' ? 'Income Sources' : 'Expense List'}
            </h2>
            {activeTab === 'overview' && (
              <button onClick={() => setActiveTab('expenses')} className="text-xs text-emerald-400 font-medium">View All</button>
            )}
          </div>

          {/* TRANSACTION LIST */}
          <div className="space-y-3 pb-20">
            {filteredTransactions.map((t, i) => (
              <TransactionRow key={t.id} t={t} delay={i * 50} />
            ))}
            
            {filteredTransactions.length === 0 && (
               <div className="p-8 text-center text-neutral-500 bg-neutral-900/50 rounded-2xl border border-white/5 border-dashed">
                 No transactions found.
               </div>
            )}
          </div>

        </main>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="flex-none border-t border-white/10 bg-neutral-900/80 backdrop-blur-xl pb-safe">
          <div className="flex justify-around items-center p-2">
            {[
              { id: 'overview', icon: PieChart, label: 'Overview' },
              { id: 'income', icon: ArrowUpRight, label: 'Income' },
              { id: 'expenses', icon: ArrowDownRight, label: 'Expenses' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex flex-col items-center gap-1 p-3 rounded-xl transition-all w-24
                  ${activeTab === tab.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-neutral-500 hover:text-neutral-300'}
                `}
              >
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'fill-current' : ''}`} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
