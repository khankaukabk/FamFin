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
        // Allow empty string for better typing experience, default to 0 for math
        const numValue = value === '' ? 0 : parseFloat(value);
        
        setRecipeData(prevData => prevData.map(section => {
            if (section.id !== sectionId) return section;
            return {
                ...section,
                items: section.items.map(item => {
                    if (item.id !== itemId) return item;
                    // If user clears input, store as 0 internally but UI handles it
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
        <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#C5A059]/30 pb-20">
            {/* Nav & Mobile-Friendly Controls */}
            <div className="no-print pt-6 px-4 md:px-6">
                <Navigation title="Cost Calculator" />
                
                {/* Control Bar: Stacks on mobile, Row on desktop */}
                <div className="flex flex-col md:flex-row justify-center gap-3 my-8 md:my-10">
                    <Button 
                        onClick={handleReset} 
                        variant="outline" 
                        className="w-full md:w-auto border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white rounded-none tracking-widest text-xs h-12 md:h-10"
                    >
                        <RotateCcw className="mr-2 h-4 w-4" /> RESET DEFAULTS
                    </Button>
                    <div className="flex gap-3">
                        <Button onClick={copyForDocs} className="flex-1 bg-[#1A1A1A] hover:bg-[#333] text-white rounded-none tracking-widest text-xs h-12 md:h-10">
                            <Copy className="mr-2 h-4 w-4" /> COPY
                        </Button>
                        <Button onClick={handlePrint} variant="outline" className="flex-1 border-[#1A1A1A] rounded-none tracking-widest text-xs h-12 md:h-10">
                            <Printer className="mr-2 h-4 w-4" /> PDF
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Luxury Container */}
            <div 
                ref={containerRef}
                className="w-full md:max-w-[900px] mx-auto bg-white shadow-xl md:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-[6px] border-[#C5A059]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                {/* Header Section */}
                <header className="text-center p-8 md:p-16 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Production Costing
                    </h1>
                    <p className="text-[#C5A059] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                        <Calculator className="h-3 w-3" /> Live Dynamic Ledger
                    </p>
                </header>

                {/* SCROLLABLE TABLE WRAPPER FOR MOBILE */}
                <div className="overflow-x-auto w-full px-4 md:px-16 pb-16">
                    {/* Minimum width ensures columns don't squish on tiny screens */}
                    <table className="w-full min-w-[600px] md:min-w-0 text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-[#1A1A1A]">
                                <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold w-[35%]">Ingredient</th>
                                <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold w-[20%] text-center">Qty</th>
                                <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold w-[25%] text-left pl-4">Unit Cost</th>
                                <th className="py-4 px-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold text-right w-[20%]">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeData.map((section) => (
                                <React.Fragment key={section.id}>
                                    {/* Section Header */}
                                    <tr className="bg-[#fbfbfb]">
                                        <td colSpan={4} className="py-3 px-2 text-[11px] uppercase tracking-widest font-semibold text-[#C5A059]">
                                            {section.title}
                                        </td>
                                    </tr>
                                    
                                    {/* Ingredients Rows */}
                                    {section.items.map((item) => (
                                        <tr key={item.id} className="border-b border-[#E5E5E5] hover:bg-gray-50 transition-colors group">
                                            {/* NAME */}
                                            <td className="py-4 px-2 text-sm font-medium text-[#1A1A1A]">
                                                {item.name} <br className="md:hidden"/>
                                                <span className="text-[10px] text-gray-400 font-normal">({item.unit})</span>
                                            </td>

                                            {/* QTY INPUT */}
                                            <td className="py-4 px-2 text-center">
                                                <input 
                                                    type="number" 
                                                    value={item.qty}
                                                    onChange={(e) => handleInputChange(section.id, item.id, 'qty', e.target.value)}
                                                    className="w-16 md:w-20 bg-gray-50 border border-transparent focus:bg-white hover:border-gray-200 focus:border-[#C5A059] rounded-sm py-1 px-1 outline-none text-sm text-center font-mono text-gray-700 transition-all"
                                                    step="0.1"
                                                />
                                            </td>

                                            {/* COST INPUT */}
                                            <td className="py-4 px-2">
                                                <div className="flex items-center text-sm font-mono text-gray-600 pl-2">
                                                    <span className="mr-1 text-gray-400">$</span>
                                                    <input 
                                                        type="number" 
                                                        value={item.cost}
                                                        onChange={(e) => handleInputChange(section.id, item.id, 'cost', e.target.value)}
                                                        className="w-20 md:w-24 bg-transparent border-b border-dashed border-gray-300 focus:border-[#C5A059] outline-none text-sm font-mono py-1"
                                                        step="0.01"
                                                    />
                                                </div>
                                            </td>

                                            {/* ROW TOTAL */}
                                            <td className="py-4 px-2 text-sm text-right font-mono font-bold text-[#1A1A1A]">
                                                {fmt(item.qty * item.cost)}
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}

                            {/* GRAND TOTAL */}
                            <tr className="border-t-4 border-[#1A1A1A] bg-white">
                                <td colSpan={2} className="pt-8 pb-4 text-left text-xs text-gray-400 uppercase tracking-widest hidden md:table-cell">
                                    * Real-time Valuation
                                </td>
                                <td className="pt-8 pb-4 text-right text-lg md:text-xl italic font-serif text-[#1A1A1A]">
                                    Total Cost:
                                </td>
                                <td className="pt-8 pb-4 text-right text-2xl md:text-3xl font-bold text-[#C5A059] font-serif">
                                    {fmt(calculateGrandTotal())}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile Scroll Hint */}
                    <div className="md:hidden mt-4 flex justify-center items-center text-[10px] text-gray-400 uppercase tracking-widest animate-pulse">
                        <span className="mr-2">Scroll for details</span> <ArrowRight className="h-3 w-3" />
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@700&display=swap');
                
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
                    body { background-color: white !important; }
                    div { 
                        box-shadow: none !important; 
                        border: none !important;
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
                    input { border: none !important; background: transparent !important; padding:0; }
                }
            `}</style>
        </div>
    );
}