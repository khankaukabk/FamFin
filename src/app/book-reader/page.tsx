"use client";

import * as React from "react";
import Link from "next/link";
import { books } from "@/lib/books";
// We replace the generic Navigation with a custom "Khan" styled one inline or imported
// We remove standard UI Cards in favor of semantic HTML and "Razor Lines"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BookSelectionPage() {
  const bookEntries = Object.entries(books);

  // Animation variants for the "Fade Up" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // "Luxurious" easing
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F9F9F7] text-stone-900 selection:bg-stone-200 selection:text-black">
      
      {/* 1. Navigation: Sticky & Frosted */}
      <nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 backdrop-blur-md bg-[#F9F9F7]/80">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity">
            KHAN / READER
          </Link>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-stone-400">
            Library Index
          </span>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
            
            {/* 2. Header: Serif & Asymmetric */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-24"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-stone-500 block mb-6">
                            The Collection
                        </span>
                        <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-stone-900">
                            Select <br/> a Volume.
                        </h1>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-stone-600 max-w-xs mb-2">
                        Immerse yourself in the archive. Select a text to begin your reading session.
                    </p>
                </div>
            </motion.div>

            {/* 3. The List: "Razor Lines" instead of Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
                {/* Top Border */}
                <div className="w-full h-[1px] bg-stone-200" />

                {bookEntries.map(([slug, book], index) => (
                    <motion.div variants={itemVariants} key={slug}>
                        <Link href={`/book-reader/${slug}`} className="group block">
                           <div className="py-10 border-b border-stone-200 flex flex-col md:flex-row md:items-baseline justify-between transition-colors duration-700 hover:bg-stone-200/20 px-2 -mx-2">
                               
                               {/* Title Section */}
                               <div className="flex items-baseline gap-6">
                                   <span className="text-[10px] text-stone-400 font-mono hidden md:inline-block">
                                       {(index + 1).toString().padStart(2, '0')}
                                   </span>
                                   <h3 className="font-serif text-3xl md:text-4xl text-stone-800 group-hover:text-black transition-colors duration-500">
                                       {book.title}
                                   </h3>
                               </div>

                               {/* Meta Data Section */}
                               <div className="flex items-center gap-8 mt-4 md:mt-0">
                                   <div className="text-right">
                                       <span className="block text-[10px] uppercase tracking-[0.25em] text-stone-400 mb-1">
                                           Length
                                       </span>
                                       <span className="font-mono text-xs text-stone-600">
                                           {book.content.length} Pages
                                       </span>
                                   </div>
                                   
                                   {/* The arrow only moves on hover */}
                                   <ArrowRight className="h-4 w-4 text-stone-300 group-hover:text-stone-900 transform group-hover:translate-x-2 transition-all duration-500 ease-out" />
                               </div>
                           </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </main>

      {/* 4. Footer: Minimal & Secondary Color */}
      <footer className="py-12 text-center border-t border-stone-200 bg-[#FAFAF9]">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
            Personal Library © 2025
        </p>
      </footer>
    </div>
  );
}