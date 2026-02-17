"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Menu, Crown, LayoutDashboard, Home, Leaf, Gamepad2, Users, ClipboardCheck, 
  Briefcase, GraduationCap, Timer, BookOpen, Heart, 
  ArchiveRestore, Code, DollarSign, Swords, Zap, Car, Plane, Warehouse, Shield, Star, LogOut, RotateCw, Calculator
} from "lucide-react";

const styles = `
  .font-serif { font-family: 'Playfair Display', serif; }
  .text-gold { color: #bf953f; }
`;

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <SheetClose asChild>
    <Link href={href} passHref>
      <div 
        onClick={onClick}
        className="group w-full flex items-center gap-4 px-4 py-4 text-lg font-light text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer border-l-2 border-transparent hover:border-[#bf953f]"
      >
        {children}
      </div>
    </Link>
  </SheetClose>
);

const NavGroupLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="px-4 pt-6 pb-2">
      <p className="text-xs font-bold text-[#bf953f] uppercase tracking-[0.2em]">{children}</p>
    </div>
);

export function Navigation({ title, showRestartButton = false, onRestart, timer }: { title: string; showRestartButton?: boolean; onRestart?: () => void; timer?: string; }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

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

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  if (isUserLoading || !user) {
    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-center border-b border-[#bf953f]/20 bg-black/90 px-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-[#bf953f] animate-spin" />
            </div>
        </header>
    );
  }

  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-[#bf953f]/20 bg-black/80 px-4 sm:px-6 backdrop-blur-xl shadow-2xl">
        
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full border border-[#bf953f]/30 hover:bg-[#bf953f]/20 hover:text-white hover:border-[#bf953f]">
                    <Menu className="h-6 w-6 text-[#bf953f]" />
                </Button>
            </SheetTrigger>
            
            <SheetContent side="left" className="w-full sm:w-[400px] bg-black border-r border-[#bf953f]/30 p-0 flex flex-col shadow-[10px_0_50px_rgba(0,0,0,0.8)]">
                
                <SheetHeader className="p-8 border-b border-[#bf953f]/20 bg-gradient-to-b from-[#bf953f]/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <Crown className="w-6 h-6 text-[#bf953f]" />
                        <SheetTitle className="font-serif text-3xl text-white tracking-wide font-normal">Directory</SheetTitle>
                    </div>
                    {/* --- FIX: Added Description to satisfy warning --- */}
                    <SheetDescription className="sr-only">
                        Main navigation menu
                    </SheetDescription>
                </SheetHeader>
                
                <ScrollArea className="flex-1 bg-black">
                  <div className="py-2 flex flex-col">
                      <NavGroupLabel>General</NavGroupLabel>
                      <NavLink href="/" onClick={closeSheet}><Home className="w-5 h-5 text-[#bf953f]/70" /> Home</NavLink>
                      <NavLink href="/dashboard" onClick={closeSheet}><LayoutDashboard className="w-5 h-5 text-[#bf953f]/70" /> Dashboard</NavLink>
                      <NavLink href="/refund-tracker" onClick={closeSheet}><ArchiveRestore className="w-5 h-5 text-[#bf953f]/70" /> Refund Tracker</NavLink>
                      <NavLink href="/financial-records" onClick={closeSheet}><DollarSign className="w-5 h-5 text-[#bf953f]/70" /> Financial Records</NavLink>
                      
                      <div className="mx-4 my-2 border-t border-[#bf953f]/10" />
                      
                      <NavGroupLabel>Family & Health</NavGroupLabel>
                      <NavLink href="/healthcare/kaukab-safura" onClick={closeSheet}><Heart className="w-5 h-5 text-[#bf953f]/70" /> Kaukab & Safura</NavLink>
                      <NavLink href="/ruma-personal-choice" onClick={closeSheet}><Briefcase className="w-5 h-5 text-[#bf953f]/70" /> Ruma's Job</NavLink>
                      <NavLink href="/medicare-roadmap" onClick={closeSheet}><Shield className="w-5 h-5 text-[#bf953f]/70" /> Medicare Roadmap</NavLink>
                      
                      <div className="mx-4 my-2 border-t border-[#bf953f]/10" />
                      
                      <NavGroupLabel>Projects & Planning</NavGroupLabel>
                      <NavLink href="/tesla-2024" onClick={closeSheet}><Car className="w-5 h-5 text-[#bf953f]/70" /> Tesla Plan</NavLink>
                      <NavLink href="/travel-plan" onClick={closeSheet}><Plane className="w-5 h-5 text-[#bf953f]/70" /> Travel Plan</NavLink>
                      <NavLink href="/farm-business-plan" onClick={closeSheet}><Warehouse className="w-5 h-5 text-[#bf953f]/70" /> Farm Plan</NavLink>
                      <NavLink href="/cost-calculator" onClick={closeSheet}><Calculator className="w-5 h-5 text-[#bf953f]/70" /> Cost Calculator</NavLink>
                      
                      <div className="mx-4 my-2 border-t border-[#bf953f]/10" />
                      
                      <NavGroupLabel>Education</NavGroupLabel>
                      <NavLink href="/six-qualities" onClick={closeSheet}><Star className="w-5 h-5 text-[#bf953f]/70" /> Six Qualities</NavLink>
                      <NavLink href="/rohingya-class-report" onClick={closeSheet}><Users className="w-5 h-5 text-[#bf953f]/70" /> Rohingya Report</NavLink>
                      <NavLink href="/rohingya-attendance" onClick={closeSheet}><ClipboardCheck className="w-5 h-5 text-[#bf953f]/70" /> Rohingya Attendance</NavLink>
                      <NavLink href="/security-plus-test" onClick={closeSheet}><BookOpen className="w-5 h-5 text-[#bf953f]/70" /> Security+ Test</NavLink>
                      <NavLink href="/speed-reader" onClick={closeSheet}><Zap className="w-5 h-5 text-[#bf953f]/70" /> Zen Reader</NavLink>
                      
                      <div className="mx-4 my-2 border-t border-[#bf953f]/10" />
                      
                      <NavGroupLabel>Leisure</NavGroupLabel>
                      <NavLink href="/table-tennis" onClick={closeSheet}><Gamepad2 className="w-5 h-5 text-[#bf953f]/70" /> Table Tennis</NavLink>
                      <NavLink href="/aoe4-build-order" onClick={closeSheet}><Swords className="w-5 h-5 text-[#bf953f]/70" /> AoE4 Build Order</NavLink>
                  </div>
                </ScrollArea>
                
                <div className="p-6 border-t border-[#bf953f]/20 bg-neutral-900">
                  <SheetClose asChild>
                    <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start text-lg py-4 text-red-400 hover:text-red-300 hover:bg-red-900/20 font-light">
                        <LogOut className="mr-3 w-5 h-5" /> Sign Out
                    </Button>
                  </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
        
        <div className="flex-grow flex items-center justify-center">
            {timer !== undefined ? (
              <div className="flex items-center gap-3 font-mono text-xl font-medium text-[#bf953f] bg-[#bf953f]/10 px-4 py-1 rounded-full border border-[#bf953f]/20">
                <Timer className="h-5 w-5 animate-pulse" />
                <span>{timer}</span>
              </div>
            ) : (
              <h1 className="font-serif text-2xl font-normal tracking-wide text-white text-center">
                {title}
              </h1>
            )}
        </div>

        <div className="w-12 flex justify-end">
          {showRestartButton && (
            <Button variant="outline" size="icon" className="h-10 w-10 border-[#bf953f]/50 text-[#bf953f] hover:bg-[#bf953f] hover:text-black rounded-full" onClick={onRestart}>
              <RotateCw className="h-5 w-5" />
              <span className="sr-only">Restart</span>
            </Button>
          )}
        </div>
    </header>
    </>
  );
}
