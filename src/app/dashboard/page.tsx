"use client";

import * as React from "react";
import type { Transaction } from "@/lib/types";
import { Navigation } from "@/components/ui/navigation";
import { 
  Wallet, TrendingUp, TrendingDown, Home, Car, Smartphone, 
  CreditCard, ShoppingBag, Shield, Utensils, Landmark, 
  ArrowUpRight, ArrowDownRight, User, PieChart, Crown, Diamond,
  Users, BarChart3, Layers
} from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  .font-serif { font-family: 'Playfair Display', serif; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  .text-gradient-gold {
    background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-enter { animation: fade-in-up 0.5s ease-out forwards; }
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
  { id: "16", type: "expense", amount: 100, category: "Discretionary", description: "Amazon", date: "2024-07-01" },
  { id: "22", type: "expense", amount: 18, category: "Loan", description: "iPhone Payment", date: "2024-07-01" },
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

// --- COMPONENT: MEMBER CARD ---
const MemberCard = ({ name, income, expense }: { name: string, income: number, expense: number }) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  const net = income - expense;
  
  return (
    <div className="flex-none w-40 p-4 rounded-2xl bg-[#111] border border-white/10 flex flex-col items-center text-center shadow-lg snap-center">
      <div className="w-12 h-12 rounded-full bg-[#bf953f]/10 border border-[#bf953f]/30 flex items-center justify-center text-[#bf953f] font-serif font-bold mb-3">
        {initials}
      </div>
      <h3 className="text-white font-medium text-sm mb-2">{name}</h3>
      
      <div className="w-full space-y-1">
        {income > 0 && (
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>In</span>
            <span className="text-emerald-400">+${income.toLocaleString()}</span>
          </div>
        )}
        {expense > 0 && (
          <div className="flex justify-between text-[10px] text-neutral-400">
            <span>Out</span>
            <span className="text-rose-400">-${expense.toLocaleString()}</span>
          </div>
        )}
      </div>
      
      <div className={`mt-3 pt-2 border-t border-white/5 w-full text-xs font-bold ${net >= 0 ? 'text-[#bf953f]' : 'text-neutral-500'}`}>
        {net >= 0 ? '+' : ''}${net.toLocaleString()}
      </div>
    </div>
  );
};

// --- COMPONENT: CATEGORY ROW ---
const CategoryRow = ({ category, amount, total }: { category: string, amount: number, total: number }) => {
  const Icon = getCategoryIcon(category);
  const percent = (amount / total) * 100;
  
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="flex-none p-2 rounded-lg bg-white/5 text-neutral-400">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-end mb-1">
          <span className="text-sm text-white font-medium">{category}</span>
          <span className="text-sm text-neutral-200">${amount.toLocaleString()}</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-[#bf953f]" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: TRANSACTION ROW (No Date, Member Focus) ---
const TransactionRow = ({ t }: { t: Transaction }) => {
  const Icon = getCategoryIcon(t.category);
  const isIncome = t.type === 'income';

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border-b border-white/5 hover:bg-white/5 transition-colors group">
      <div className={`
        flex-none w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
        ${isIncome 
          ? 'bg-[#bf953f]/10 border-[#bf953f]/20 text-[#bf953f]' 
          : 'bg-white/5 border-white/10 text-neutral-400'}
      `}>
        <Icon className="w-4 h-4" />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <h4 className="font-medium text-white truncate pr-2 text-sm">{t.description}</h4>
          <span className={`font-serif text-base tracking-wide whitespace-nowrap ${isIncome ? 'text-[#bf953f]' : 'text-white'}`}>
            {isIncome ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 0 })}
          </span>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 border border-white/5">
                <User className="w-3 h-3 text-[#bf953f]" />
                <span className="text-[10px] text-neutral-300 font-medium uppercase tracking-wider">{t.member}</span>
            </div>
            <span className="text-[10px] text-neutral-600 uppercase tracking-wider">{t.category}</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<'members' | 'income' | 'expenses'>('members');
  const [transactions] = React.useState<Transaction[]>(initialTransactions);

  // 1. Calculate General Stats
  const stats = React.useMemo(() => {
    const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
    return { income, expenses, balance: income - expenses };
  }, [transactions]);

  // 2. Aggregate Data by Member
  const memberStats = React.useMemo(() => {
    const map: Record<string, { income: number, expense: number }> = {};
    transactions.forEach(t => {
      if (!map[t.member]) map[t.member] = { income: 0, expense: 0 };
      if (t.type === 'income') map[t.member].income += t.amount;
      else map[t.member].expense += t.amount;
    });
    return Object.entries(map).map(([name, data]) => ({ name, ...data }));
  }, [transactions]);

  // 3. Aggregate Data by Category
  const categoryStats = React.useMemo(() => {
    const incomeCats: Record<string, number> = {};
    const expenseCats: Record<string, number> = {};
    
    transactions.forEach(t => {
      if (t.type === 'income') {
        incomeCats[t.category] = (incomeCats[t.category] || 0) + t.amount;
      } else {
        expenseCats[t.category] = (expenseCats[t.category] || 0) + t.amount;
      }
    });
    
    return {
      income: Object.entries(incomeCats).sort((a, b) => b[1] - a[1]),
      expense: Object.entries(expenseCats).sort((a, b) => b[1] - a[1])
    };
  }, [transactions]);

  // 4. Filter Transactions List
  const displayTransactions = React.useMemo(() => {
    if (activeTab === 'members') return []; 
    return transactions.filter(t => t.type === (activeTab === 'income' ? 'income' : 'expense'));
  }, [transactions, activeTab]);

  return (
    <>
      <style>{styles}</style>
      <div className="fixed inset-0 bg-[#050505] text-neutral-100 font-sans overflow-hidden flex flex-col">
        
        {/* NAVIGATION */}
        <div className="z-50 relative">
             <Navigation title="Wealth Overview" />
        </div>

        {/* SCROLLABLE AREA */}
        <main className="flex-grow overflow-y-auto no-scrollbar pb-32 px-4 pt-4 space-y-8 z-10">
          
          {/* NET WORTH HEADER */}
          <div className="text-center py-6">
            <p className="text-[#bf953f] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 flex items-center justify-center gap-2">
                <Crown className="w-3 h-3" /> Total Family Liquidity
            </p>
            <h1 className="text-5xl font-serif text-white tracking-tight mb-2">
                ${stats.balance.toLocaleString()}
            </h1>
            <div className="flex justify-center gap-4 text-xs font-medium">
                <span className="text-emerald-500/80">In: ${stats.income.toLocaleString()}</span>
                <span className="text-neutral-600">|</span>
                <span className="text-rose-500/80">Out: ${stats.expenses.toLocaleString()}</span>
            </div>
          </div>

          {/* TAB CONTENT */}
          {activeTab === 'members' ? (
            <div className="space-y-8 animate-enter">
              
              {/* MEMBER SCROLL */}
              <div>
                <h3 className="px-2 text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Users className="w-4 h-4 text-[#bf953f]" /> Member Breakdown
                </h3>
                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto no-scrollbar gap-4 px-2 pb-4 snap-x">
                    {memberStats.map((m) => (
                        <MemberCard key={m.name} name={m.name} income={m.income} expense={m.expense} />
                    ))}
                </div>
              </div>

              {/* TOP CATEGORIES PREVIEW */}
              <div className="bg-[#111] rounded-3xl border border-white/5 p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                   <BarChart3 className="w-4 h-4 text-[#bf953f]" /> Highest Expenses
                </h3>
                <div className="space-y-2">
                    {categoryStats.expense.slice(0, 5).map(([cat, amt]) => (
                        <CategoryRow key={cat} category={cat} amount={amt} total={stats.expenses} />
                    ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="animate-enter space-y-6">
                
                {/* BREAKDOWN CARD */}
                <div className="bg-[#111] rounded-3xl border border-white/5 p-6">
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-[#bf953f]" /> {activeTab === 'income' ? 'Income' : 'Expense'} Categories
                    </h3>
                    <div className="space-y-2">
                        {(activeTab === 'income' ? categoryStats.income : categoryStats.expense).map(([cat, amt]) => (
                            <CategoryRow key={cat} category={cat} amount={amt} total={activeTab === 'income' ? stats.income : stats.expenses} />
                        ))}
                    </div>
                </div>

                {/* DETAILED LIST */}
                <div>
                    <h3 className="px-2 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">
                        Detailed Ledger
                    </h3>
                    <div className="space-y-1">
                        {displayTransactions.map((t) => (
                            <TransactionRow key={t.id} t={t} />
                        ))}
                    </div>
                </div>
            </div>
          )}

        </main>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="absolute bottom-6 left-4 right-4 z-40">
          <div className="bg-black/90 backdrop-blur-xl border border-[#bf953f]/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-1.5 flex justify-between">
            {[
              { id: 'members', icon: Users, label: 'Members' },
              { id: 'income', icon: ArrowUpRight, label: 'Income' },
              { id: 'expenses', icon: ArrowDownRight, label: 'Expenses' }
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
