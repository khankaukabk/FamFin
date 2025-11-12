
"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, X, Star, Shield, Car, Plane, Warehouse, LogOut, LayoutDashboard, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <Link href={href} passHref>
    <Button variant="ghost" className="w-full justify-start text-lg py-6" onClick={onClick}>
      {children}
    </Button>
  </Link>
);

export function Navigation() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleSignOut = async () => {
    if (!auth) return;
    setIsSheetOpen(false);
    await signOut(auth);
    router.push('/login');
  };

  if (isUserLoading || !user) {
    return null;
  }

  const navLinks = (
    <>
      <NavLink href="/" onClick={() => setIsSheetOpen(false)}>
        <Home className="mr-3" /> Home
      </NavLink>
      <NavLink href="/dashboard" onClick={() => setIsSheetOpen(false)}>
        <LayoutDashboard className="mr-3" /> Dashboard
      </NavLink>
      <NavLink href="/six-qualities" onClick={() => setIsSheetOpen(false)}>
        <Star className="mr-3" /> Six Qualities
      </NavLink>
      <NavLink href="/medicare-roadmap" onClick={() => setIsSheetOpen(false)}>
        <Shield className="mr-3" /> Medicare
      </NavLink>
      <NavLink href="/tesla-2024" onClick={() => setIsSheetOpen(false)}>
        <Car className="mr-3" /> Tesla
      </NavLink>
      <NavLink href="/travel-plan" onClick={() => setIsSheetOpen(false)}>
        <Plane className="mr-3" /> Travel
      </NavLink>
      <NavLink href="/farm-business-plan" onClick={() => setIsSheetOpen(false)}>
        <Warehouse className="mr-3" /> Farm
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-4 right-4 z-50">
       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm">
            <Menu className={cn("h-6 w-6 transition-transform duration-300", isSheetOpen && "rotate-90 scale-0")} />
            <X className={cn("h-6 w-6 absolute transition-transform duration-300", !isSheetOpen && "-rotate-90 scale-0")} />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[400px] bg-background/90 backdrop-blur-xl p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="font-headline text-2xl text-primary">Navigation</SheetTitle>
          </SheetHeader>
          <div className="p-4 flex flex-col justify-between h-[calc(100%-81px)]">
            <div className="flex flex-col gap-1">
              {navLinks}
            </div>
            <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start text-lg py-6 text-muted-foreground">
                <LogOut className="mr-3" /> Sign Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
