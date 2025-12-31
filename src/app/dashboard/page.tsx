
"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { Navigation } from "@/components/ui/navigation"; // Bringing back your menu
import { 
  Wallet, TrendingUp, TrendingDown, Home, Car, Smartphone, 
  CreditCard, ShoppingBag, Shield, Utensils, Landmark, 
  ArrowUpRight, ArrowDownRight, User, PieChart, Crown, Diamond
} from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  .font-serif { font-family: 'Playfair Display', serif; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  /* Luxury Gold Gradient Text */
  .text-gradient-gold {
    background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-enter { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
`;

// --- DATA ---
const initialTransactions: Transaction[] = [
  // Income
  { id: "1", type: "income", amount: 1000.0, category: "Employment", description: "DFAS", member: "Kausain", date: "2024-07-01" },
  { id: "3", type: "income", amount: 300.0, category: "Employment", description: "Income", member: "Musaab", date: "2024-07-01" },
  { id: "27", type: "income", amount: 1000.0, category: "Employment", description: "Monthly", member: "Safura", date: "2024-07-01" },
  { id: "24", type: "income", amount: 1000.0, category: "Employment", description: "Monthly", member: "Ruma", date: "2024-07-01" },
  { id: "25", type: "income", amount: 200.0, category: "Government", description: "EBT", member: "Aminuddin", date: "2024-07-01" },
  { id: "23", type: "income", amount: 300.0, category: "Government", description: "SSA Treas", member: "Aminuddin", date: "2024-07-01" },
  { id: "26", type: "income", amount: 300.0, category: "Government", description: "EBT", member: "Kaukab", date: "2024-07-01" },
  // Expense
  { id: "7", type: "expense", amount: 830, category: "Housing", description: "Bank of Whittier", date: "2024-07-01" },
  { id: "8", type: "expense", amount: 632.09, category: "Loan", description: "Wells Fargo Loan", date: "2024-07-01" },
  { id: "9", type: "expense", amount: 209.56, category: "Utilities", description: "Phone Bill", date: "2024-07-01" },
  { id: "10", type: "expense", amount: 411.72, category: "Transportation", description: "Tesla Finance", date: "2024-07-01" },
  { id: "12", type: "expense", amount: 201.52, category: "Loan", description: "HomeDepot Loan", date: "2024-07-01" },
  { id: "13", type: "expense", amount: 200.0, category: "Insurance", description: "State Farm", date: "2024-07-01" },
  { id: "28", type: "expense", amount: 250.0, category: "Food", description: "Bulk Chicken & Supplies", date: "2024-07-01" },
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

// --- LUXURY COMPONENT: STAT CARD ---
const StatCard = ({ title, amount, type, icon: Icon }: { title: string, amount: number, type: 'neutral' | 'positive' | 'negative', icon: any }) => (
  <div className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black shadow-2xl group">
    {/* Ambient Glow */}
    <div className={`absolute top-0 right-0 p-20 rounded-full blur-[60px] opacity-10 pointer-events-none
      ${type === 'positive' ? 'bg-[#bf953f]' : type === 'negative' ? 'bg-rose-900' : 'bg-white'}`} 
    />
    
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl border backdrop-blur-md
          ${type === 'positive' 
            ? 'bg-[#bf953f]/10 border-[#bf953f]/20 text-[#bf953f]' 
            : type === 'negative' 
            ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' 
            : 'bg-white/5 border-white/10 text-white'}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        {type === 'neutral' && <Diamond className="w-4 h-4 text-[#bf953f] opacity-50" />}
      </div>
      
      <div>
        <p className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">{title}</p>
        <h3 className={`font-serif text-3xl font-medium tracking-tight
          ${type === 'positive' ? 'text-gradient-gold' : 'text-white'}
        `}>
          ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h3>
      </div>
    </div>
  </div>
);

// --- LUXURY COMPONENT: TRANSACTION ROW ---
const TransactionRow = ({ t, delay }: { t: Transaction, delay: number }) => {
  const Icon = getCategoryIcon(t.category);
  const isIncome = t.type === 'income';

  return (
    <div 
      style={{ animationDelay: `${delay}ms` }}
      className="animate-enter flex items-center gap-4 p-4 rounded-xl border-b border-white/5 hover:bg-white/5 transition-colors group"
    >
      {/* Icon Circle */}
      <div className={`
        flex-none w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
        ${isIncome 
          ? 'bg-[#bf953f]/10 border-[#bf953f]/20 text-[#bf953f]' 
          : 'bg-white/5 border-white/10 text-neutral-400 group-hover:text-white'}
      `}>
        <Icon className="w-4 h-4" />
      </div>
      
      {/* Details */}
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-medium text-neutral-200 truncate pr-4 text-sm">{t.description}</h4>
          <span className={`font-serif text-base tracking-wide whitespace-nowrap ${isIncome ? 'text-[#bf953f]' : 'text-white'}`}>
            {isIncome ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 0 })}
          </span>
        </div>
        <div className="flex justify-between items-center text-[10px] text-neutral-600 uppercase tracking-wider font-medium">
          <span className="flex items-center gap-1"><User className="w-3 h-3"/> {t.member}</span>
          <span>{new Date(t.date).toLocaleDateString()}</span>
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
    if (activeTab === 'overview') return transactions.slice(0, 6); // Just recent
    return transactions.filter(t => t.type === (activeTab === 'income' ? 'income' : 'expense'));
  }, [transactions, activeTab]);

  return (
    <>
      <style>{styles}</style>
      <div className="fixed inset-0 bg-[#050505] text-neutral-100 font-sans overflow-hidden flex flex-col">
        
        {/* TOP NAVIGATION (From previous step) */}
        {/* We wrap it to keep it sticky but allow content below to scroll */}
        <div className="z-50 relative">
             <Navigation title="Portfolio" />
        </div>

        {/* SCROLLABLE CONTENT AREA */}
        <main className="flex-grow overflow-y-auto no-scrollbar pb-32 px-4 pt-6 space-y-8 z-10">
          
          {/* HEADER SECTION */}
          <div className="flex justify-between items-end px-2">
            <div>
                <p className="text-[#bf953f] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <Crown className="w-3 h-3" /> Family Wealth
                </p>
                <h1 className="text-3xl font-serif text-white">
                    Khan Estate
                </h1>
            </div>
          </div>

          {/* OVERVIEW CARDS */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-enter">
              {/* Main Balance Card - Full Width */}
              <StatCard title="Net Liquid Assets" amount={stats.balance} type="positive" icon={Wallet} />
              
              {/* Split Cards */}
              <div className="grid grid-cols-2 gap-3">
                <StatCard title="Inflow" amount={stats.income} type="neutral" icon={ArrowUpRight} />
                <StatCard title="Outflow" amount={stats.expenses} type="negative" icon={ArrowDownRight} />
              </div>
            </div>
          )}

          {/* LIST HEADER */}
          <div className="flex items-center justify-between pt-4 px-2 border-b border-white/5 pb-2">
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
              {activeTab === 'overview' ? 'Latest Transactions' : activeTab === 'income' ? 'Sources of Funds' : 'Expenditures'}
            </h2>
            {activeTab === 'overview' && (
              <button onClick={() => setActiveTab('expenses')} className="text-xs text-[#bf953f] hover:text-white transition-colors uppercase tracking-widest font-bold">See All</button>
            )}
          </div>

          {/* TRANSACTION LIST */}
          <div className="space-y-1 pb-10">
            {filteredTransactions.map((t, i) => (
              <TransactionRow key={t.id} t={t} delay={i * 50} />
            ))}
            
            {filteredTransactions.length === 0 && (
               <div className="py-12 text-center text-neutral-600 bg-white/5 rounded-xl border border-dashed border-white/10">
                 <p className="font-serif italic">No records found for this period.</p>
               </div>
            )}
          </div>

        </main>

        {/* BOTTOM NAVIGATION BAR (Floating Glass) */}
        <div className="absolute bottom-6 left-4 right-4 z-40">
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-1.5 flex justify-between">
            {[
              { id: 'overview', icon: PieChart, label: 'Overview' },
              { id: 'income', icon: TrendingUp, label: 'Income' },
              { id: 'expenses', icon: TrendingDown, label: 'Expenses' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex-1 flex flex-col items-center gap-1 py-3 rounded-xl transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-[#bf953f] text-black shadow-lg translate-y-[-2px]' 
                    : 'text-neutral-500 hover:text-white hover:bg-white/5'}
                `}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
