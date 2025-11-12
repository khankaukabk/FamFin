
"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Star, Shield, Car, Plane, Warehouse, LogOut, LayoutDashboard, Home, Leaf, Gamepad2 } from "lucide-react";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <SheetClose asChild>
    <Link href={href} passHref>
      <Button variant="ghost" className="w-full justify-start text-lg py-6" onClick={onClick}>
        {children}
      </Button>
    </Link>
  </SheetClose>
);

export function Navigation({ title }: { title: string }) {
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
    await signOut(auth);
    router.push('/login');
  };

  const closeSheet = () => {
    // We don't need to do anything here anymore with SheetClose
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
  

  const navLinks = (
    <>
      <NavLink href="/" onClick={closeSheet}>
        <Home className="mr-3" /> Home
      </NavLink>
      <NavLink href="/dashboard" onClick={closeSheet}>
        <LayoutDashboard className="mr-3" /> Dashboard
      </NavLink>
       <NavLink href="/table-tennis" onClick={closeSheet}>
        <Gamepad2 className="mr-3" /> Table Tennis
      </NavLink>
      <NavLink href="/six-qualities" onClick={closeSheet}>
        <Star className="mr-3" /> Six Qualities
      </NavLink>
      <NavLink href="/medicare-roadmap" onClick={closeSheet}>
        <Shield className="mr-3" /> Medicare
      </NavLink>
      <NavLink href="/tesla-2024" onClick={closeSheet}>
        <Car className="mr-3" /> Tesla
      </NavLink>
      <NavLink href="/travel-plan" onClick={closeSheet}>
        <Plane className="mr-3" /> Travel
      </NavLink>
      <NavLink href="/farm-business-plan" onClick={closeSheet}>
        <Warehouse className="mr-3" /> Farm
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Navigation</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] bg-background/90 backdrop-blur-xl p-0">
                <SheetHeader className="p-6 border-b">
                    <SheetTitle className="font-headline text-2xl text-primary">Navigation</SheetTitle>
                </SheetHeader>
                <div className="p-4 flex flex-col justify-between h-[calc(100%-81px)]">
                    <div className="flex flex-col gap-1">
                        {navLinks}
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start text-lg py-6 text-muted-foreground">
                          <LogOut className="mr-3" /> Sign Out
                      </Button>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
        
        <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl text-center flex-grow">
          {title}
        </h1>

        <div className="w-10"></div>
    </header>
  );
}
