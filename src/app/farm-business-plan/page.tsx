
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Warehouse, Fence, Bird, Users, DollarSign, LineChart, Handshake, Target, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function FarmBusinessPlanPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Poultry Micro-Farm Business Plan
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          
          <Card>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">Executive Summary</CardTitle>
                        <CardDescription>A high-level overview of the poultry project.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">This poultry project will operate on a 3,000 sq ft area, utilizing small-scale infrastructure to raise 50 layer chicks for egg production and up to 200 broiler chicks through scaling. The project will use two 10’x10’ coops and incorporate fencing and netting. A unique component includes labor exchange with local community members in return for fresh chicken donations. The goal is to build a sustainable, low-cost, community-supported poultry operation from October 2025 through October 2026.</p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Warehouse className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-xl">Infrastructure Plan</CardTitle>
                            <CardDescription>Physical assets and layout.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Component</TableHead>
                                <TableHead>Size/Qty</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Chicken Coops</TableCell>
                                <TableCell>(2) 10’x10’</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-medium">Netting</TableCell>
                                <TableCell>~400 sq ft</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Fencing</TableCell>
                                <TableCell>~200 linear ft</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-medium font-bold">Total Area Used</TableCell>
                                <TableCell className="font-bold">~3,000 sq ft</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                     <div className="flex items-center gap-3">
                        <Bird className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-xl">Poultry Stocking Plan</CardTitle>
                            <CardDescription>Initial and scaling stock.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Initial Stocking – Oct 2025</h4>
                         <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                            <li><span className="font-semibold">50 Layers:</span> Start producing eggs by ~March 2026</li>
                            <li><span className="font-semibold">50 Broilers:</span> 6–8 week harvest cycle begins December 2025</li>
                        </ul>
                    </div>
                     <Separator />
                    <div>
                        <h4 className="font-semibold mb-2">Broiler Growth Plan</h4>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Month</TableHead>
                                    <TableHead>Broilers Added</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Oct 2025</TableCell><TableCell>50</TableCell><TableCell className="text-right">50</TableCell></TableRow>
                                <TableRow><TableCell>Dec 2025</TableCell><TableCell>+20</TableCell><TableCell className="text-right">70</TableCell></TableRow>
                                <TableRow><TableCell>Feb 2026</TableCell><TableCell>+20</TableCell><TableCell className="text-right">90</TableCell></TableRow>
                                <TableRow><TableCell>Apr 2026</TableCell><TableCell>+30</TableCell><TableCell className="text-right">120</TableCell></TableRow>
                                <TableRow><TableCell>Jun 2026</TableCell><TableCell>+40</TableCell><TableCell className="text-right">160</TableCell></TableRow>
                                <TableRow><TableCell>Aug 2026</TableCell><TableCell>+40</TableCell><TableCell className="text-right">200</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
                 <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">Labor Exchange & Community Impact</CardTitle>
                        <CardDescription>A model for community ownership and support.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">This initiative includes up to 15 broilers donated every 6 months to support community members who assist with daily operations. Two consistent local workers will alternate weekday shifts to maintain coops, feed animals, and manage harvests. This model builds community ownership and awareness.</p>
            </CardContent>
          </Card>
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-xl">Startup Budget Estimate</CardTitle>
                            <CardDescription>One-time initial investment.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Item</TableHead><TableHead className="text-right">Cost (USD)</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>2 Coops (10'x10’)</TableCell><TableCell className="text-right">$1,000</TableCell></TableRow>
                            <TableRow><TableCell>Chicks (50L + 50B)</TableCell><TableCell className="text-right">$200</TableCell></TableRow>
                            <TableRow><TableCell>Fencing & Netting</TableCell><TableCell className="text-right">$500</TableCell></TableRow>
                            <TableRow><TableCell>Feed (1st 2 months)</TableCell><TableCell className="text-right">$300</TableCell></TableRow>
                            <TableRow><TableCell>Feeders/Waterers</TableCell><TableCell className="text-right">$100</TableCell></TableRow>
                            <TableRow><TableCell>Misc (Lighting, Tools)</TableCell><TableCell className="text-right">$150</TableCell></TableRow>
                            <TableRow><TableCell>Brooder Heat Lamps</TableCell><TableCell className="text-right">$75</TableCell></TableRow>
                            <TableRow><TableCell>Labor/Training Costs</TableCell><TableCell className="text-right">$200</TableCell></TableRow>
                            <TableRow><TableCell className="font-bold">Total Estimate</TableCell><TableCell className="font-bold text-right">$2,525</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                     <div className="flex items-center gap-3">
                        <LineChart className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-xl">Financial Projections</CardTitle>
                            <CardDescription>Recurring costs and revenue.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div>
                        <h4 className="font-semibold mb-2">Monthly Operating Costs (Avg from Jan 2026)</h4>
                        <Table>
                             <TableBody>
                                <TableRow><TableCell>Feed (Layers + Broilers)</TableCell><TableCell className="text-right">$250</TableCell></TableRow>
                                <TableRow><TableCell>Utilities & Supplies</TableCell><TableCell className="text-right">$50</TableCell></TableRow>
                                <TableRow><TableCell>Replacement chicks</TableCell><TableCell className="text-right">$40</TableCell></TableRow>
                                <TableRow><TableCell>Labor honorarium</TableCell><TableCell className="text-right">$100</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold">Total Monthly</TableCell><TableCell className="font-bold text-right">$440</TableCell></TableRow>
                            </TableBody>
                        </Table>
                         <p className="text-xs text-muted-foreground mt-2">Note: An annual marketing budget of $150 is allocated separately.</p>
                    </div>
                     <Separator />
                    <div>
                        <h4 className="font-semibold mb-2">Estimated Monthly Revenue (starting July 2026)</h4>
                         <Table>
                             <TableHeader><TableRow><TableHead>Source</TableHead><TableHead>Quantity</TableHead><TableHead className="text-right">Revenue</TableHead></TableRow></TableHeader>
                             <TableBody>
                                <TableRow><TableCell>Eggs (~1,050)</TableCell><TableCell>$3/dozen</TableCell><TableCell className="text-right">$315</TableCell></TableRow>
                                <TableRow><TableCell>Broilers (30 birds)</TableCell><TableCell>$11.50/unit</TableCell><TableCell className="text-right">$345</TableCell></TableRow>
                                <TableRow><TableCell className="font-bold">Total Revenue</TableCell><TableCell></TableCell><TableCell className="font-bold text-right">$660</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Handshake className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-xl">Capital Stack & Breakeven</CardTitle>
                            <CardDescription>Funding and profitability analysis.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Funding Breakdown (Total: $2,525)</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                            <li><span className="font-semibold">Owner’s equity/sweat equity:</span> $1,000</li>
                            <li><span className="font-semibold">Community grant or microloan:</span> $1,000</li>
                             <li><span className="font-semibold">Donated materials/labor:</span> $525</li>
                        </ul>
                    </div>
                    <Separator />
                     <div>
                        <h4 className="font-semibold mb-2">Breakeven Point Analysis</h4>
                        <p className="text-sm text-muted-foreground">With a projected monthly net of <span className="font-semibold text-primary">$75</span>, the project could break even in ~34 months. However, with upfront capital covered and shared costs, cash-flow positive operations could be achieved as early as <span className="font-semibold text-primary">Month 7-8 (May-June 2026)</span>.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <div className="flex items-start gap-4">
                        <Tractor className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <CardTitle className="font-headline text-xl">Social Impact Narrative</CardTitle>
                             <CardDescription>The "why" behind the project.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">This project offers a dignified food solution through community farming. By integrating labor exchange, it builds economic inclusion and strengthens ties within the neighborhood. Fresh meat and eggs are offered at low prices to the community while providing sustainable, culturally relevant food. This is not just a farming initiative—it's a model of empowerment, outreach (Dawah), and local resilience through shared responsibility.</p>
                </CardContent>
            </Card>
          </div>
          
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Business Plan prepared for the Khan Family - October 2025-2026
      </footer>
    </div>
  );
}
