
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Car, Plane, Hotel, Route, Clock, Milestone, MapPin, Coffee, DollarSign, Utensils, Camera, Bus, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TravelPlanPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop_blur-sm sm:static sm:h-auto sm:border-b sm:bg-transparent sm:px-6 sm:py-4">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary">
            Travel Plan: Alabama to Philadelphia
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* By Car */}
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Car className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl">By Car</CardTitle>
                  <CardDescription>A scenic road trip adventure.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Estimated Driving Time</p>
                  <p className="text-muted-foreground">13-14 hours (without stops)</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  Estimated Cost
                </h4>
                <div className="space-y-4 pl-6">
                  <div>
                    <p className="font-semibold">Vehicle Costs</p>
                    <p className="text-sm text-muted-foreground">Tesla (EV): ~$65-75 for charging</p>
                    <p className="text-sm text-muted-foreground">Toyota (Gas): ~$105-130 for fuel</p>
                  </div>
                  <div>
                    <p className="font-semibold">Common Costs</p>
                    <p className="text-sm text-muted-foreground">Lodging (1 night): ~$150</p>
                    <p className="text-sm text-muted-foreground">Food & Snacks (5 people): ~$125</p>
                  </div>
                   <div>
                    <p className="font-semibold">Total Estimated Cost</p>
                     <p className="text-sm text-muted-foreground">With Tesla: ~$340-350</p>
                     <p className="text-sm text-muted-foreground">With Toyota: ~$380-405</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Route className="h-5 w-5 text-accent" />
                  Roadmap
                </h4>
                <div className="space-y-4 relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                  <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Start: Hoover, AL (Day 1 - 7:00 AM)</p>
                      <p className="text-sm text-muted-foreground">Begin your journey bright and early to make the most of the day!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Brunch Stop: Nashville, TN (~10:00 AM)</p>
                      <p className="text-sm text-muted-foreground">Take I-65 N for ~3 hours. A perfect spot for a break in the Music City.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Hotel className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Overnight Stop: Roanoke, VA (~5:00 PM)</p>
                      <p className="text-sm text-muted-foreground">~8-9 hours from start. Nestled in the Blue Ridge Mountains, it's an ideal place to rest and recharge overnight.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Coffee className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Final Stretch (Day 2 - 9:00 AM)</p>
                      <p className="text-sm text-muted-foreground">After breakfast, take I-81 N to I-76 E. Enjoy the scenic views as you drive towards Pennsylvania.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Destination: Philadelphia, PA (~4:00 PM)</p>
                      <p className="text-sm text-muted-foreground">Welcome to the City of Brotherly Love! Time to explore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* By Plane */}
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Plane className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl">By Plane</CardTitle>
                  <CardDescription>The fast track to your destination.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold">Estimated Travel Time</p>
                    <p className="text-muted-foreground">~5-7 hours (including airport time)</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-accent" />
                    Estimated Cost
                  </h4>
                  <div className="space-y-3 pl-6">
                    <div>
                      <p className="font-semibold">Round-Trip Airfare</p>
                      <p className="text-sm text-muted-foreground">Per Person: ~$150 (booked in advance)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Additional Costs</p>
                      <p className="text-sm text-muted-foreground">Baggage Fees: ~$30-60 per bag</p>
                      <p className="text-sm text-muted-foreground">Ground Transport (to/from airport): ~$50-100</p>
                    </div>
                    <div>
                      <p className="font-semibold">Total Estimated Cost (5 people)</p>
                      <p className="text-sm text-muted-foreground">Airfare: ~$750</p>
                      <p className="text-sm text-muted-foreground">Total: ~$900-1000 (including extras)</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Route className="h-5 w-5 text-accent" />
                  Roadmap
                </h4>
                <div className="space-y-4 relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">To the Airport (e.g., 10:00 AM)</p>
                      <p className="text-sm text-muted-foreground">A quick ~20-30 minute drive from Hoover to Birmingham-Shuttlesworth (BHM).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Flight: BHM to PHL (~12:30 PM)</p>
                      <p className="text-sm text-muted-foreground">A ~2 hour flight. Arrive at the airport 1.5-2 hours early to get through security smoothly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Arrival & City Transit (~3:00 PM)</p>
                      <p className="text-sm text-muted-foreground">Grab a rideshare or take the SEPTA train for a ~20-30 minute trip to the city center.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Destination: Philadelphia, PA (~3:30 PM)</p>
                      <p className="text-sm text-muted-foreground">You've arrived! Enjoy your trip and all the city has to offer.</p>
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>

          {/* Philadelphia Stay */}
           <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl xl:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Hotel className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl">Philadelphia Stay</CardTitle>
                  <CardDescription>Budget for your week-long visit.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  Estimated Weekly Costs
                </h4>
                <div className="space-y-4 pl-6">
                  <div>
                    <p className="font-semibold flex items-center gap-2"><Hotel className="h-4 w-4" /> Weekly Lodging</p>
                    <p className="text-sm text-muted-foreground">Hotel (7 nights): ~$1,680 (2 rooms @ $120/night)</p>
                  </div>
                   <div>
                    <p className="font-semibold flex items-center gap-2"><Utensils className="h-4 w-4" /> Food & Dining</p>
                    <p className="text-sm text-muted-foreground">Daily Budget: ~$180-250 for a family of 5</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-accent" />
                  Activity & Sightseeing Ideas
                </h4>
                <div className="space-y-2 pl-6 text-sm text-muted-foreground">
                  <p>• Visit Independence Hall & the Liberty Bell</p>
                  <p>• Explore Reading Terminal Market</p>
                  <p>• Run up the "Rocky Steps" at the Art Museum</p>
                  <p>• Enjoy the Magic Gardens</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Trip Estimate */}
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl xl:col-span-3 border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Wallet className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl">Total Trip Estimate</CardTitle>
                  <CardDescription>Grand total for your family's 1-week trip.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  Overall Cost Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-6">
                  {/* By Car (Tesla) */}
                  <div className="space-y-2">
                    <p className="font-semibold text-base flex items-center gap-2"><Car className="h-5 w-5" /> Trip by Car (Tesla)</p>
                    <p className="text-sm text-muted-foreground">Travel: ~$345</p>
                    <p className="text-sm text-muted-foreground">Weekly Stay: ~$3,180 (mid-range)</p>
                    <p className="font-bold text-primary text-lg mt-2">Total: ~$3,525</p>
                  </div>

                  {/* By Car (Toyota) */}
                  <div className="space-y-2">
                    <p className="font-semibold text-base flex items-center gap-2"><Car className="h-5 w-5" /> Trip by Car (Toyota)</p>
                    <p className="text-sm text-muted-foreground">Travel: ~$395</p>
                    <p className="text-sm text-muted-foreground">Weekly Stay: ~$3,180 (mid-range)</p>
                    <p className="font-bold text-primary text-lg mt-2">Total: ~$3,575</p>
                  </div>
                  
                  {/* By Plane */}
                  <div className="space-y-2">
                    <p className="font-semibold text-base flex items-center gap-2"><Plane className="h-5 w-5" /> Trip by Plane</p>
                    <p className="text-sm text-muted-foreground">Travel: ~$950</p>
                    <p className="text-sm text-muted-foreground">Weekly Stay: ~$3,180 (mid-range)</p>
                    <p className="font-bold text-primary text-lg mt-2">Total: ~$4,130</p>
                  </div>
                </div>
              </div>
               <Separator />
               <div className="px-6 text-sm text-muted-foreground">
                  <p><span className="font-semibold">Note:</span> These are mid-range estimates. Costs for lodging and food in Philadelphia are calculated as: 7 nights hotel (~$1680) + 7 days food (~$1500 for 5 people) for a weekly stay total of ~$3180. Travel costs are added on top. Your actual expenses may vary.</p>
               </div>
            </CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        © 2025 Created by the Khan Family
      </footer>
    </div>
  );
}

    