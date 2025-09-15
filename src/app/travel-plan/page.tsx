
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Car, Plane, Hotel, Route, Clock, Milestone, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TravelPlanPage() {
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
            Travel Plan: Alabama to Philadelphia
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* By Car */}
          <Card className="shadow-lg backdrop-blur-sm bg-background/20">
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
                  <p className="text-muted-foreground">14-16 hours (without stops)</p>
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
                      <p className="font-semibold">Start: Hoover, AL</p>
                      <p className="text-sm text-muted-foreground">Begin your journey bright and early!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Leg 1: I-65 N to Nashville, TN</p>
                      <p className="text-sm text-muted-foreground">~3 hours. A good spot for a quick coffee break.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Hotel className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Overnight Stop: Roanoke, VA</p>
                      <p className="text-sm text-muted-foreground">~8-9 hours from start. Ideal for resting overnight.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Coffee className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Leg 2: I-81 N towards Pennsylvania</p>
                      <p className="text-sm text-muted-foreground">The final stretch of your drive.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Destination: Philadelphia, PA</p>
                      <p className="text-sm text-muted-foreground">Welcome to the City of Brotherly Love!</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* By Plane */}
          <Card className="shadow-lg backdrop-blur-sm bg-background/20">
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
                
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Route className="h-5 w-5 text-accent" />
                  Roadmap
                </h4>
                <div className="space-y-4 relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Drive to Birmingham-Shuttlesworth (BHM)</p>
                      <p className="text-sm text-muted-foreground">~20-30 minute drive from Hoover.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Flight: BHM to PHL</p>
                      <p className="text-sm text-muted-foreground">~2 hour flight. Arrive 1.5-2 hours early for security.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Travel from Philadelphia Int'l (PHL)</p>
                      <p className="text-sm text-muted-foreground">~20-30 minute drive or train to city center.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Milestone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Destination: Philadelphia, PA</p>
                      <p className="text-sm text-muted-foreground">Enjoy your trip!</p>
                    </div>
                  </div>
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
