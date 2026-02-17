'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RotateCcw, Calculator, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

// --- DATA STRUCTURE ---
const INITIAL_DATA = {
    cakes: [
        {
            id: 'cake_vanilla',
            title: "1. Vanilla Cake (2 lb)",
            sections: [
                {
                    name: "Sponge Base",
                    items: [
                        { id: 'c_v_1', name: "Eggs", qty: 6, cost: 0.16, unit: "ea" },
                        { id: 'c_v_2', name: "Flour", qty: 1, cost: 0.14, unit: "cup" },
                        { id: 'c_v_3', name: "Granulated Sugar", qty: 1, cost: 0.32, unit: "cup" },
                        { id: 'c_v_4', name: "Baking Powder", qty: 0.5, cost: 0.06, unit: "tsp" },
                        { id: 'c_v_5', name: "Powder Milk", qty: 1, cost: 0.00, unit: "tbsp" },
                    ]
                },
                {
                    name: "Buttercream & Filling",
                    items: [
                        { id: 'c_v_6', name: "Butter", qty: 1, cost: 3.44, unit: "lb box" },
                        { id: 'c_v_7', name: "Powdered Sugar", qty: 2, cost: 0.25, unit: "cup" },
                        { id: 'c_v_8', name: "Vanilla Extract", qty: 1, cost: 2.82, unit: "tbsp" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'c_v_9', name: "Cake Box", qty: 1, cost: 1.00, unit: "box" },
                        { id: 'c_v_10', name: "Logo Sticker", qty: 1, cost: 0.12, unit: "ea" },
                    ]
                }
            ]
        },
        {
            id: 'cake_choc',
            title: "2. Chocolate Cake (2 lb)",
            sections: [
                {
                    name: "Sponge Base",
                    items: [
                        { id: 'c_c_1', name: "Eggs", qty: 6, cost: 0.16, unit: "ea" },
                        { id: 'c_c_2', name: "Flour", qty: 1, cost: 0.14, unit: "cup" },
                        { id: 'c_c_3', name: "Sugar (Granulated)", qty: 1, cost: 0.32, unit: "cup" },
                        { id: 'c_c_4', name: "Baking Powder", qty: 0.5, cost: 0.06, unit: "tsp" },
                        { id: 'c_c_5', name: "Powder Milk", qty: 1, cost: 0.00, unit: "tbsp" },
                        { id: 'c_c_6', name: "Cocoa Powder", qty: 2, cost: 0.14, unit: "tbsp" },
                    ]
                },
                {
                    name: "Buttercream & Filling",
                    items: [
                        { id: 'c_c_7', name: "Butter", qty: 1, cost: 3.44, unit: "lb box" },
                        { id: 'c_c_8', name: "Powdered Sugar", qty: 2, cost: 0.25, unit: "cup" },
                        { id: 'c_c_9', name: "Vanilla Extract", qty: 1, cost: 2.82, unit: "tbsp" },
                        { id: 'c_c_10', name: "Ganache", qty: 1, cost: 4.71, unit: "cup" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'c_c_11', name: "Cake Box", qty: 1, cost: 1.00, unit: "box" },
                        { id: 'c_c_12', name: "Logo Sticker", qty: 1, cost: 0.12, unit: "ea" },
                    ]
                }
            ]
        }
    ],
    cupcakes: [
        {
            id: 'cup_vanilla',
            title: "1. Vanilla Cupcakes (12ct)",
            sections: [
                {
                    name: "Base Mix",
                    items: [
                        { id: 'cp_v_1', name: "Cake Mix", qty: 1, cost: 1.00, unit: "box" },
                        { id: 'cp_v_2', name: "Eggs", qty: 3, cost: 0.16, unit: "ea" },
                        { id: 'cp_v_3', name: "Oil", qty: 0.5, cost: 0.62, unit: "cup" }, 
                        { id: 'cp_v_4', name: "Water", qty: 1, cost: 0.00, unit: "cup" },
                    ]
                },
                {
                    name: "Cream & Decor",
                    items: [
                        { id: 'cp_v_5', name: "Whipped Cream", qty: 3, cost: 1.28, unit: "cup" }, 
                        { id: 'cp_v_6', name: "Sugar", qty: 0.5, cost: 0.32, unit: "cup" },
                        { id: 'cp_v_7', name: "Decor/Fruit", qty: 1, cost: 0.00, unit: "var" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'cp_v_8', name: "Delivery Box", qty: 1, cost: 1.42, unit: "box" },
                        { id: 'cp_v_9', name: "Logo Sticker", qty: 1, cost: 0.13, unit: "ea" },
                    ]
                }
            ]
        },
        {
            id: 'cup_choc',
            title: "2. Chocolate Cupcakes (12ct)",
            sections: [
                {
                    name: "Base Mix",
                    items: [
                        { id: 'cp_c_1', name: "Standard Base", qty: 1, cost: 1.79, unit: "batch" },
                        { id: 'cp_c_2', name: "Cocoa Powder", qty: 1, cost: 0.14, unit: "sp" },
                        { id: 'cp_c_3', name: "Hershey's Syrup", qty: 2, cost: 0.10, unit: "sp" },
                    ]
                },
                {
                    name: "Cream & Decor",
                    items: [
                        { id: 'cp_c_4', name: "Whipped Cream", qty: 3, cost: 1.28, unit: "cup" },
                        { id: 'cp_c_5', name: "Sugar", qty: 0.5, cost: 0.32, unit: "cup" },
                        { id: 'cp_c_6', name: "Choc Chips / Ganache", qty: 1, cost: 0.00, unit: "cup" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'cp_c_7', name: "Box & Sticker", qty: 1, cost: 1.55, unit: "set" },
                    ]
                }
            ]
        },
        {
            id: 'cup_red',
            title: "3. Red Velvet Cupcakes",
            sections: [
                {
                    name: "Base Mix",
                    items: [
                        { id: 'cp_r_1', name: "Standard Base", qty: 1, cost: 1.79, unit: "batch" },
                        { id: 'cp_r_2', name: "Red Food Color", qty: 1, cost: 0.00, unit: "dash" },
                        { id: 'cp_r_3', name: "Cocoa Powder", qty: 1, cost: 0.14, unit: "sp" },
                    ]
                },
                {
                    name: "Frosting",
                    items: [
                        { id: 'cp_r_4', name: "Whipped Cream", qty: 3, cost: 1.28, unit: "cup" },
                        { id: 'cp_r_5', name: "Sugar", qty: 2, cost: 0.02, unit: "sp" },
                        { id: 'cp_r_6', name: "Philly Cream Cheese", qty: 1, cost: 0.00, unit: "bar" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'cp_r_7', name: "Box & Sticker", qty: 1, cost: 1.55, unit: "set" },
                    ]
                }
            ]
        },
        {
            id: 'cup_floral',
            title: "4. Floral Buttercream",
            sections: [
                {
                    name: "Base Mix",
                    items: [
                        { id: 'cp_f_1', name: "Standard Base", qty: 1, cost: 1.79, unit: "batch" },
                    ]
                },
                {
                    name: "Frosting",
                    items: [
                        { id: 'cp_f_2', name: "Butter", qty: 1, cost: 0.00, unit: "bar" },
                        { id: 'cp_f_3', name: "Granulated Sugar", qty: 0.66, cost: 0.32, unit: "cup" },
                        { id: 'cp_f_4', name: "Whipped Cream", qty: 0.5, cost: 1.28, unit: "cup" },
                        { id: 'cp_f_5', name: "Vanilla Extract", qty: 1, cost: 0.00, unit: "sp" },
                    ]
                },
                {
                    name: "Packaging",
                    items: [
                        { id: 'cp_f_6', name: "Box & Sticker", qty: 1, cost: 1.55, unit: "set" },
                    ]
                }
            ]
        }
    ]
};

export default function InteractiveCostCalculator() {
    const [data, setData] = useState(INITIAL_DATA);
    const [activeTab, setActiveTab] = useState<'cakes' | 'cupcakes'>('cakes');
    const { toast } = useToast();

    // Reset Function
    const handleReset = () => {
        setData(INITIAL_DATA);
        toast({
            title: "Standard Restored",
            description: "All values reset to original recipe.",
        });
    };

    // Helper: Focus handler to auto-select text
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    // 1. Logic for updating Quantity or Unit Cost (Updates Total automatically)
    const updateItem = (category: 'cakes' | 'cupcakes', recipeId: string, itemId: string, field: 'qty' | 'cost', value: string) => {
        // FIX: Strip leading zeros (e.g., "08" becomes "8")
        let cleanValue = value;
        if (value.length > 1 && value.startsWith('0') && value[1] !== '.') {
            cleanValue = value.substring(1);
        }

        const numValue = cleanValue === '' ? 0 : parseFloat(cleanValue);
        
        setData(prev => ({
            ...prev,
            [category]: prev[category].map(recipe => {
                if (recipe.id !== recipeId) return recipe;
                return {
                    ...recipe,
                    sections: recipe.sections.map(section => ({
                        ...section,
                        items: section.items.map(item => {
                            if (item.id !== itemId) return item;
                            return { ...item, [field]: isNaN(numValue) ? 0 : numValue };
                        })
                    }))
                };
            })
        }));
    };

    // 2. Logic for updating TOTAL directly
    const updateTotal = (category: 'cakes' | 'cupcakes', recipeId: string, itemId: string, newTotalValue: string) => {
        // FIX: Strip leading zeros
        let cleanValue = newTotalValue;
        if (newTotalValue.length > 1 && newTotalValue.startsWith('0') && newTotalValue[1] !== '.') {
            cleanValue = newTotalValue.substring(1);
        }

        const numTotal = cleanValue === '' ? 0 : parseFloat(cleanValue);

        setData(prev => ({
            ...prev,
            [category]: prev[category].map(recipe => {
                if (recipe.id !== recipeId) return recipe;
                return {
                    ...recipe,
                    sections: recipe.sections.map(section => ({
                        ...section,
                        items: section.items.map(item => {
                            if (item.id !== itemId) return item;
                            
                            // Prevent division by zero
                            if (item.qty === 0) return item;

                            const newUnitCost = numTotal / item.qty;
                            return { ...item, cost: newUnitCost };
                        })
                    }))
                };
            })
        }));
    };

    // Calculate Total for a specific recipe
    const calculateRecipeTotal = (recipe: any) => {
        return recipe.sections.reduce((acc: number, section: any) => {
            return acc + section.items.reduce((s: number, i: any) => s + (i.qty * i.cost), 0);
        }, 0);
    };

    // Helper to format currency
    const fmt = (num: number) => `$${num.toFixed(2)}`;

    return (
        <div className="min-h-screen bg-black pb-20">
            {/* Nav & Controls */}
            <div className="no-print">
                <Navigation title="Cost Calculator" />
                
                <div className="max-w-4xl mx-auto px-4">
                    {/* Category Tabs */}
                    <div className="flex justify-center mt-6 mb-4">
                        <div className="inline-flex rounded-lg border border-white/10 bg-neutral-900 p-1">
                            <button
                                onClick={() => setActiveTab('cakes')}
                                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${activeTab === 'cakes' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-white'}`}
                            >
                                Cakes (2lb)
                            </button>
                            <button
                                onClick={() => setActiveTab('cupcakes')}
                                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${activeTab === 'cupcakes' ? 'bg-primary text-black' : 'text-muted-foreground hover:text-white'}`}
                            >
                                Cupcakes
                            </button>
                        </div>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-center mb-8 md:mb-10">
                        <Button 
                            onClick={handleReset} 
                            variant="outline" 
                            className="w-full md:w-auto border-primary text-primary hover:bg-primary hover:text-black rounded-lg tracking-widest text-xs h-12 md:h-10"
                        >
                            <RotateCcw className="mr-2 h-4 w-4" /> RESET DEFAULTS
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="w-full md:max-w-4xl mx-auto bg-neutral-950 shadow-2xl border border-white/10 rounded-2xl mb-20">
                {/* Header */}
                <header className="text-center p-8 md:p-12 pb-8 border-b border-white/10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-white font-serif">
                        Production Costing
                    </h1>
                    <p className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                        <Calculator className="h-3 w-3" /> {activeTab === 'cakes' ? 'Standard Round Cakes' : 'Cupcake Batches'}
                    </p>
                </header>

                <div className="p-0 md:p-8">
                    {/* Map through the active recipes */}
                    {data[activeTab].map((recipe, rIdx) => (
                        <div key={recipe.id} className="mb-12 border-b-2 border-dashed border-white/5 last:border-0 pb-12">
                            
                            {/* Recipe Title Row */}
                            <div className="px-6 py-4 bg-white/5 mx-4 md:mx-0 rounded-t-lg border-b border-white/10">
                                <h2 className="text-xl italic text-white font-serif">{recipe.title}</h2>
                            </div>

                            <div className="overflow-x-auto w-full px-4 md:px-0">
                                <table className="w-full min-w-[600px] md:min-w-0 text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold w-[35%]">Ingredient</th>
                                            <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold w-[20%] text-center">Qty</th>
                                            <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold w-[25%] text-left pl-4">Unit Cost</th>
                                            <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-right w-[20%]">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sections.map((section, sIdx) => (
                                            <React.Fragment key={sIdx}>
                                                <tr className="bg-transparent">
                                                    <td colSpan={4} className="py-3 px-2 text-[11px] uppercase tracking-widest font-semibold text-primary pt-6">
                                                        {section.name}
                                                    </td>
                                                </tr>
                                                
                                                {section.items.map((item) => (
                                                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                        {/* NAME */}
                                                        <td className="py-3 px-2 text-sm font-medium text-white">
                                                            {item.name} <br className="md:hidden"/>
                                                            <span className="text-[10px] text-muted-foreground font-normal">({item.unit})</span>
                                                        </td>

                                                        {/* QUANTITY INPUT */}
                                                        <td className="py-3 px-2 text-center">
                                                            <input 
                                                                type="number" 
                                                                value={item.qty}
                                                                onFocus={handleFocus}
                                                                onChange={(e) => updateItem(activeTab, recipe.id, item.id, 'qty', e.target.value)}
                                                                className="w-16 md:w-20 bg-neutral-800 border border-neutral-700 focus:bg-black hover:border-neutral-600 focus:border-primary rounded-md py-1 px-1 outline-none text-sm text-center font-mono text-white transition-all"
                                                                step="0.1"
                                                            />
                                                        </td>

                                                        {/* UNIT COST INPUT */}
                                                        <td className="py-3 px-2">
                                                            <div className="flex items-center text-sm font-mono text-white pl-2">
                                                                <span className="mr-1 text-muted-foreground">$</span>
                                                                <input 
                                                                    type="number" 
                                                                    value={item.cost}
                                                                    onFocus={handleFocus}
                                                                    onChange={(e) => updateItem(activeTab, recipe.id, item.id, 'cost', e.target.value)}
                                                                    className="w-20 md:w-24 bg-transparent border-b border-dashed border-neutral-600 focus:border-primary outline-none text-sm font-mono py-1"
                                                                    step="0.01"
                                                                />
                                                            </div>
                                                        </td>

                                                        {/* TOTAL COST INPUT (EDITABLE) */}
                                                        <td className="py-3 px-2 text-right">
                                                            <div className="flex items-center justify-end text-sm font-mono text-white font-bold">
                                                                <span className="mr-1 text-muted-foreground">$</span>
                                                                <input 
                                                                    type="number" 
                                                                    // We calculate total for display, formatted to 2 decimals
                                                                    value={(item.qty * item.cost).toFixed(2)}
                                                                    onFocus={handleFocus}
                                                                    onChange={(e) => updateTotal(activeTab, recipe.id, item.id, e.target.value)}
                                                                    className="w-20 bg-transparent border-b border-transparent hover:border-dashed hover:border-neutral-600 focus:border-primary outline-none text-sm font-mono py-1 text-right font-bold text-white"
                                                                    step="0.01"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}

                                        {/* Recipe Total */}
                                        <tr className="bg-white/5 border-t border-white/10">
                                            <td colSpan={2} className="pt-6 pb-6 pl-4 text-left text-[10px] text-muted-foreground uppercase tracking-widest hidden md:table-cell">
                                                * Includes Packaging
                                            </td>
                                            <td className="pt-6 pb-6 text-right text-lg font-serif text-white italic">
                                                Total Cost:
                                            </td>
                                            <td className="pt-6 pb-6 pr-4 text-right text-2xl font-bold text-primary font-serif">
                                                {fmt(calculateRecipeTotal(recipe))}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="md:hidden mt-2 text-center text-[9px] text-muted-foreground uppercase tracking-widest animate-pulse flex justify-center items-center">
                                    Swipe <ArrowRight className="h-3 w-3 mx-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Bulk Reference Section */}
                    <div className="mt-8 px-4 md:px-0">
                        <div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
                            <h3 className="text-center text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-6">Bulk Costing Ledger</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    {l:"Eggs", p:"$0.16 ea"}, {l:"Butter", p:"$3.44/lb"}, {l:"Flour", p:"$0.14/cup"},
                                    {l:"Sugar", p:"$0.32/cup"}, {l:"Vanilla", p:"$2.82/tbsp"}, {l:"Cocoa", p:"$0.14/tbsp"},
                                    {l:"Whip Cream", p:"$0.16/oz"}, {l:"Cake Box", p:"$1.00 ea"}, {l:"Cake Mix", p:"$1.00/box"}
                                ].map((item, i) => (
                                    <div key={i} className="bg-black/40 border border-white/5 p-3 rounded text-center">
                                        <span className="block text-[10px] font-bold text-primary uppercase">{item.l}</span>
                                        <span className="text-[10px] text-muted-foreground font-mono">{item.p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                    -webkit-appearance: none; margin: 0; 
                }
                input[type=number] { -moz-appearance: textfield; }
                
                @media print {
                    .no-print { display: none !important; }
                    body { background-color: white !important; color: black !important; }
                    div { box-shadow: none !important; border: none !important; background-color: white !important; color: black !important; }
                    h1, h2, h3, p, span, td, th { color: black !important; }
                    .text-primary { color: black !important; font-weight: bold; }
                    .text-muted-foreground { color: #666 !important; }
                    .bg-neutral-900, .bg-neutral-950, .bg-black { background-color: white !important; }
                    table { width: 100% !important; min-width: 0 !important; }
                    .overflow-x-auto { overflow: visible !important; }
                    input { color: black !important; border: none !important; }
                }
            `}</style>
        </div>
    );
}