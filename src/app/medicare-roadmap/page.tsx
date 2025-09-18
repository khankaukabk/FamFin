
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Hospital, Stethoscope, Pill, Shield, FilePlus, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MedicareRoadmapPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:static sm:h-auto sm:border-b sm:bg-transparent sm:px-6 sm:py-4">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary">
            Medicare Enrollment Roadmap
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-headline text-xl">The Basics: Parts A & B</CardTitle>
              <CardDescription>Your starting point for Medicare coverage.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Hospital className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Part A: Hospital Insurance</h3>
                  <p className="text-muted-foreground">Covers inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care. Most people get this premium-free.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Stethoscope className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Part B: Medical Insurance</h3>
                  <p className="text-muted-foreground">Covers certain doctors' services, outpatient care, medical supplies, and preventive services. You'll pay a monthly premium for this.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight">Choose Your Path</h2>
            <p className="text-muted-foreground">After enrolling in Parts A & B, you have two main ways to get your full coverage.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Path 1: Original Medicare */}
            <Card className="transition-all duration-300 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Path 1: Original Medicare</CardTitle>
                <CardDescription>The traditional, government-administered program.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                      <span className="font-bold">A</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                      <span className="font-bold">B</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Start with Part A + Part B</h4>
                    <p className="text-sm text-muted-foreground">This is your foundation.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <PlusCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">Add Optional Coverage</h4>
                    <div className="space-y-4 pl-4 border-l-2 border-dashed border-accent">
                        <div className="flex items-start gap-4">
                            <Pill className="h-6 w-6 text-accent mt-1" />
                            <div>
                                <h5 className="font-semibold">Part D: Prescription Drugs</h5>
                                <p className="text-sm text-muted-foreground">Add a standalone plan to help cover the cost of medications.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Shield className="h-6 w-6 text-accent mt-1" />
                            <div>
                                <h5 className="font-semibold">Medicare Supplement (Medigap)</h5>
                                <p className="text-sm text-muted-foreground">Helps pay for out-of-pocket costs like deductibles and copayments. Plans are offered by private insurers, like <span className="font-bold text-accent">Blue Shield</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                
                <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        <li>Go to any doctor or hospital that accepts Medicare.</li>
                        <li>No referrals needed for specialists.</li>
                        <li>Potentially higher out-of-pocket costs without a Medigap plan.</li>
                    </ul>
                </div>

              </CardContent>
            </Card>

            {/* Path 2: Medicare Advantage */}
            <Card className="transition-all duration-300 hover:shadow-2xl border-primary/50">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Path 2: Medicare Advantage (Part C)</CardTitle>
                <CardDescription>An "all-in-one" bundled alternative.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                      <span className="font-bold">C</span>
                    </div>
                  </div>
                   <div>
                    <h4 className="font-semibold">Choose a Part C Plan</h4>
                    <p className="text-sm text-muted-foreground">Offered by private companies (like <span className="font-bold text-primary">Blue Shield</span>), these plans bundle everything together.</p>
                  </div>
                </div>
                
                 <div>
                    <h4 className="font-semibold text-lg mb-2">What's Included?</h4>
                    <div className="space-y-4 pl-4">
                        <p className="text-sm text-muted-foreground">Part C plans include everything Original Medicare covers, and often more.</p>
                        <div className="flex items-center gap-4"><div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/80 text-xs text-primary-foreground">A</div><p className="text-sm font-medium">Part A (Hospital)</p></div>
                        <div className="flex items-center gap-4"><div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/80 text-xs text-primary-foreground">B</div><p className="text-sm font-medium">Part B (Medical)</p></div>
                        <div className="flex items-center gap-4"><div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-xs text-accent-foreground">D</div><p className="text-sm font-medium">Part D (Prescriptions) - Usually included</p></div>
                    </div>
                </div>

                <Separator />

                <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        <li>Often includes extra benefits like vision, dental, and hearing.</li>
                        <li>Typically requires using doctors in the plan's network.</li>
                        <li>May have lower out-of-pocket costs but requires managing referrals.</li>
                        <li>You cannot have a Medigap policy and a Medicare Advantage Plan at the same time.</li>
                    </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        This is for informational purposes only. Consult an official Medicare advisor for personal guidance.
      </footer>
    </div>
  );
}
