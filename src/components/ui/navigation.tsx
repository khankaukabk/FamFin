
"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Star, Shield, Car, Plane, Warehouse, LogOut, LayoutDashboard, Home, Leaf, Gamepad2, Users, ClipboardCheck, Briefcase, GraduationCap, RotateCw, Timer, BookOpen, Heart, ArchiveRestore, Code, DollarSign, Swords, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <SheetClose asChild>
    <Link href={href} passHref>
      <Button variant="ghost" className="w-full justify-start text-lg py-6" onClick={onClick}>
        {children}
      </Button>
    </Link>
  </SheetClose>
);

const NavGroupLabel = ({ children }: { children: React.ReactNode }) => (
    <p className="px-4 pt-4 pb-2 text-sm font-semibold text-muted-foreground">{children}</p>
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
    // You might want a loading spinner here
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center justify-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary animate-spin" />
            </div>
        </header>
    );
  }
  
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Navigation</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] bg-background/90 backdrop-blur-xl p-0 flex flex-col">
                <SheetHeader className="p-6 border-b">
                    <SheetTitle className="font-headline text-2xl text-primary">Navigation</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex-1">
                  <div className="p-4 flex flex-col gap-1">
                      <NavGroupLabel>General</NavGroupLabel>
                      <NavLink href="/" onClick={closeSheet}><Home className="mr-3" /> Home</NavLink>
                      <NavLink href="/dashboard" onClick={closeSheet}><LayoutDashboard className="mr-3" /> Dashboard</NavLink>
                      <NavLink href="/refund-tracker" onClick={closeSheet}><ArchiveRestore className="mr-3" /> Refund Tracker</NavLink>
                      <NavLink href="/financial-records" onClick={closeSheet}><DollarSign className="mr-3" /> Financial Records</NavLink>

                      <Separator className="my-2" />
                      <NavGroupLabel>Family & Health</NavGroupLabel>
                      <NavLink href="/healthcare/kaukab-safura" onClick={closeSheet}><Heart className="mr-3" /> Kaukab & Safura's Plan</NavLink>
                      <NavLink href="/healthcare/aminuddin" onClick={closeSheet}><Users className="mr-3" /> Aminuddin's Plan</NavLink>
                      <NavLink href="/ruma-personal-choice" onClick={closeSheet}><Briefcase className="mr-3" /> Ruma's Job</NavLink>
                      <NavLink href="/medicare-roadmap" onClick={closeSheet}><Shield className="mr-3" /> Medicare Roadmap</NavLink>
                      
                      <Separator className="my-2" />
                      <NavGroupLabel>Projects & Planning</NavGroupLabel>
                      <NavLink href="/tesla-2024" onClick={closeSheet}><Car className="mr-3" /> Tesla Plan</NavLink>
                      <NavLink href="/travel-plan" onClick={closeSheet}><Plane className="mr-3" /> Travel Plan</NavLink>
                      <NavLink href="/farm-business-plan" onClick={closeSheet}><Warehouse className="mr-3" /> Farm Plan</NavLink>

                      <Separator className="my-2" />
                      <NavGroupLabel>Education & Community</NavGroupLabel>
                      <NavLink href="/six-qualities" onClick={closeSheet}><Star className="mr-3" /> Six Qualities</NavLink>
                      <NavLink href="/rohingya-class-report" onClick={closeSheet}><Users className="mr-3" /> Rohingya Report</NavLink>
                      <NavLink href="/rohingya-attendance" onClick={closeSheet}><ClipboardCheck className="mr-3" /> Rohingya Attendance</NavLink>
                      <NavLink href="/citizenship-test" onClick={closeSheet}><GraduationCap className="mr-3" /> Citizenship Test</NavLink>
                      <NavLink href="/security-plus-test" onClick={closeSheet}><BookOpen className="mr-3" /> Security+ Test</NavLink>
                      <NavLink href="/speed-reader" onClick={closeSheet}><Zap className="mr-3" /> Zen Reader</NavLink>
                      
                      <Separator className="my-2" />
                      <NavGroupLabel>Fun & Games</NavGroupLabel>
                      <NavLink href="/table-tennis" onClick={closeSheet}><Gamepad2 className="mr-3" /> Table Tennis</NavLink>
                      <NavLink href="/coding-sandbox" onClick={closeSheet}><Code className="mr-3" /> Coding Sandbox</NavLink>
                      <NavLink href="/aoe4-build-order" onClick={closeSheet}><Swords className="mr-3" /> AoE4 Build Order</NavLink>
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <SheetClose asChild>
                    <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start text-lg py-6 text-muted-foreground">
                        <LogOut className="mr-3" /> Sign Out
                    </Button>
                  </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
        
        <div className="flex-grow flex items-center justify-center">
            {timer !== undefined ? (
              <div className="flex items-center gap-2 font-mono text-lg font-semibold text-primary">
                <Timer className="h-5 w-5" />
                <span>{timer}</span>
              </div>
            ) : (
              <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl text-center">
                {title}
              </h1>
            )}
        </div>


        <div className="w-10">
          {showRestartButton && (
            <Button variant="outline" size="icon" className="h-10 w-10" onClick={onRestart}>
              <RotateCw className="h-5 w-5" />
              <span className="sr-only">Restart Test</span>
            </Button>
          )}
        </div>
    </header>
  );
}
