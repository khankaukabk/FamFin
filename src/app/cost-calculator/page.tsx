
'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Printer, RotateCcw, Calculator, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';

// --- DATA STRUCTURE ---
const DEFAULT_RECIPE = [
    {
        id: 'sponge',
        title: "The Sponge Base",
        items: [
            { id: 1, name: "Farm-Fresh Eggs", qty: 6, cost: 0.16, unit: "ea" },
            { id: 2, name: "Organic Flour", qty: 1, cost: 0.14, unit: "cup" },
            { id: 3, name: "Granulated Sugar", qty: 1, cost: 0.32, unit: "cup" },
            { id: 4, name: "Baking Powder", qty: 0.5, cost: 0.06, unit: "tsp" },
            { id: 5, name: "Powder Milk", qty: 1, cost: 0.00, unit: "tbsp" },
        ]
    },
    {
        id: 'creme',
        title: "Crème & Embellishments",
        items: [
            { id: 6, name: "European Butter", qty: 1, cost: 3.44, unit: "lb" },
            { id: 7, name: "Fine Powdered Sugar", qty: 2, cost: 0.25, unit: "cup" },
            { id: 8, name: "Pure Madagascar Vanilla", qty: 1, cost: 2.82, unit: "tbsp" },
        ]
    },
    {
        id: 'packaging',
        title: "Presentation",
        items: [
            { id: 9, name: "Atelier Box & Branding", qty: 1, cost: 1.12, unit: "set" },
        ]
    }
];

export default function InteractiveCostCalculator() {
    const [recipeData, setRecipeData] = useState(DEFAULT_RECIPE);
    const containerRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();

    // Reset Function
    const handleReset = () => {
        setRecipeData(DEFAULT_RECIPE);
        toast({
            title: "Standard Restored",
            description: "All values reset to original recipe.",
        });
    };

    // Update Logic
    const handleInputChange = (sectionId: string, itemId: number, field: 'qty' | 'cost', value: string) => {
        const numValue = value === '' ? 0 : parseFloat(value);
        
        setRecipeData(prevData => prevData.map(section => {
            if (section.id !== sectionId) return section;
            return {
                ...section,
                items: section.items.map(item => {
                    if (item.id !== itemId) return item;
                    return { ...item, [field]: isNaN(numValue) ? 0 : numValue };
                })
            };
        }));
    };

    // Calculation Helper
    const calculateGrandTotal = () => {
        return recipeData.reduce((acc, section) => {
            const sectionTotal = section.items.reduce((sum, item) => sum + (item.qty * item.cost), 0);
            return acc + sectionTotal;
        }, 0);
    };

    const copyForDocs = () => {
        if (containerRef.current) {
            const range = document.createRange();
            range.selectNode(containerRef.current);
            window.getSelection()?.removeAllRanges();
            window.getSelection()?.addRange(range);
            try {
                document.execCommand('copy');
                toast({ title: "Copied to Clipboard", description: "Ready to paste into docs." });
            } catch (err) {
                toast({ title: "Error", variant: "destructive" });
            }
            window.getSelection()?.removeAllRanges();
        }
    };

    const handlePrint = () => window.print();
    const fmt = (num: number) => `$${num.toFixed(2)}`;

    return (
        <div className="min-h-screen bg-black pb-20">
            {/* Nav & Mobile-Friendly Controls */}
            <div className="no-print">
                <Navigation title="Cost Calculator" />
                
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center gap-3 my-8 md:my-10">
                        <Button 
                            onClick={handleReset} 
                            variant="outline" 
                            className="w-full md:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg tracking-widest text-xs h-12 md:h-10"
                        >
                            <RotateCcw className="mr-2 h-4 w-4" /> RESET DEFAULTS
                        </Button>
                        <div className="flex gap-3">
                            <Button onClick={copyForDocs} className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground rounded-lg tracking-widest text-xs h-12 md:h-10">
                                <Copy className="mr-2 h-4 w-4" /> COPY
                            </Button>
                            <Button onClick={handlePrint} variant="outline" className="flex-1 rounded-lg tracking-widest text-xs h-12 md:h-10">
                                <Printer className="mr-2 h-4 w-4" /> PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div 
                ref={containerRef}
                className="w-full md:max-w-4xl mx-auto bg-neutral-950 shadow-2xl border border-white/10 rounded-2xl"
            >
                {/* Header Section */}
                <header className="text-center p-8 md:p-12 pb-8 border-b border-white/10">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-white font-serif">
                        Production Costing
                    </h1>
                    <p className="text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                        <Calculator className="h-3 w-3" /> Live Dynamic Ledger
                    </p>
                </header>

                {/* SCROLLABLE TABLE WRAPPER FOR MOBILE */}
                <div className="overflow-x-auto w-full px-4 md:px-8 pb-8">
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
                            {recipeData.map((section) => (
                                <React.Fragment key={section.id}>
                                    <tr className="bg-white/5">
                                        <td colSpan={4} className="py-3 px-2 text-[11px] uppercase tracking-widest font-semibold text-primary">
                                            {section.title}
                                        </td>
                                    </tr>
                                    
                                    {section.items.map((item) => (
                                        <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 px-2 text-sm font-medium text-white">
                                                {item.name} <br className="md:hidden"/>
                                                <span className="text-[10px] text-muted-foreground font-normal">({item.unit})</span>
                                            </td>

                                            <td className="py-4 px-2 text-center">
                                                <input 
                                                    type="number" 
                                                    value={item.qty}
                                                    onChange={(e) => handleInputChange(section.id, item.id, 'qty', e.target.value)}
                                                    className="w-16 md:w-20 bg-neutral-800 border border-neutral-700 focus:bg-black hover:border-neutral-600 focus:border-primary rounded-md py-1 px-1 outline-none text-sm text-center font-mono text-white transition-all"
                                                    step="0.1"
                                                />
                                            </td>

                                            <td className="py-4 px-2">
                                                <div className="flex items-center text-sm font-mono text-white pl-2">
                                                    <span className="mr-1 text-muted-foreground">$</span>
                                                    <input 
                                                        type="number" 
                                                        value={item.cost}
                                                        onChange={(e) => handleInputChange(section.id, item.id, 'cost', e.target.value)}
                                                        className="w-20 md:w-24 bg-transparent border-b border-dashed border-neutral-600 focus:border-primary outline-none text-sm font-mono py-1"
                                                        step="0.01"
                                                    />
                                                </div>
                                            </td>

                                            <td className="py-4 px-2 text-sm text-right font-mono font-bold text-white">
                                                {fmt(item.qty * item.cost)}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}

                            <tr className="border-t-2 border-primary/50">
                                <td colSpan={2} className="pt-8 pb-4 text-left text-xs text-muted-foreground uppercase tracking-widest hidden md:table-cell">
                                    * Real-time Valuation
                                </td>
                                <td className="pt-8 pb-4 text-right text-lg md:text-xl font-serif text-white">
                                    Total Cost:
                                </td>
                                <td className="pt-8 pb-4 text-right text-2xl md:text-3xl font-bold text-primary font-serif">
                                    {fmt(calculateGrandTotal())}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="md:hidden mt-4 flex justify-center items-center text-[10px] text-muted-foreground uppercase tracking-widest animate-pulse">
                        <span className="mr-2">Scroll for details</span> <ArrowRight className="h-3 w-3" />
                    </div>
                </div>
            </div>

            {/* Custom Styles for Print */}
            <style jsx global>{`
                /* Remove number spinner arrows */
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                    -webkit-appearance: none; 
                    margin: 0; 
                }
                input[type=number] {
                    -moz-appearance: textfield;
                }
                
                @media print {
                    .no-print { display: none !important; }
                    body { background-color: white !important; color: black !important; }
                    div { 
                        box-shadow: none !important; 
                        border: none !important;
                        background-color: white !important;
                        color: black !important;
                    }
                    h1, p, span, td, th {
                        color: black !important;
                    }
                    th {
                        color: #6B7280 !important; /* gray-500 */
                    }
                    tr {
                        border-color: #E5E7EB !important; /* gray-200 */
                    }
                    .text-primary {
                        color: #A16207 !important; /* A dark yellow for print */
                    }
                    .w-full.md\\:max-w-\\[900px\\].mx-auto {
                        padding: 0 !important;
                    }
                    .overflow-x-auto { 
                        overflow: visible !important;
                        padding: 0 !important;
                    }
                    table { 
                        min-width: 0 !important; 
                        width: 100% !important; 
                    }
                    input { border: none !important; background: transparent !important; padding:0; color: black !important;}
                }
            `}</style>
        </div>
    );
}
