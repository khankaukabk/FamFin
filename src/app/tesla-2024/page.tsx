
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Gauge, Hourglass, ThumbsDown, ThumbsUp, Wallet, Star, Car, FileText, Wrench } from 'lucide-react';
import { differenceInDays, differenceInWeeks } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const StatCard = ({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center ${className}`}>
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-4">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const receiptItems = [
    { description: 'Sentry UHP Tires (235/45 R18)', qty: 4, unitPrice: 75.00, amount: 300.00 },
    { description: 'Installation & Life of Tire Maintenance', qty: 4, unitPrice: 25.00, amount: 100.00 },
    { description: 'Certificates for Refund, Replacement', qty: 4, unitPrice: 12.95, amount: 51.80 },
    { description: 'Waste Tire Disposal Fee', qty: 4, unitPrice: 3.50, amount: 14.00 },
    { description: 'State Required Tire Fee', qty: 4, unitPrice: 1.00, amount: 4.00 },
    { description: 'Sales Tax', qty: 1, unitPrice: 29.83, amount: 29.83 },
];

const totalCost = receiptItems.reduce((acc, item) => acc + item.amount, 0);


export default function Tesla2024Page() {
  const [countdown, setCountdown] = React.useState<{
    months: number;
    weeks: number;
    days: number;
  } | null>(null);
  const [progress, setProgress] = React.useState(0);

  const startDate = new Date('2024-05-14T00:00:00');
  const endDate = new Date('2027-05-13T00:00:00');
  
  React.useEffect(() => {
    const calculateCountdown = () => {
      const today = new Date();
      
      const totalDurationInDays = differenceInDays(endDate, startDate);
      const elapsedDays = differenceInDays(today, startDate);
      const currentProgress = Math.max(0, Math.min(100, (elapsedDays / totalDurationInDays) * 100));
      setProgress(currentProgress);

      const remainingDays = differenceInDays(endDate, today);
      const remainingWeeks = differenceInWeeks(endDate, today);

      let remainingMonths = (endDate.getFullYear() - today.getFullYear()) * 12;
      remainingMonths -= today.getMonth();
      remainingMonths += endDate.getMonth();
      if (today.getDate() > endDate.getDate()) {
          remainingMonths--;
      }
      
      setCountdown({
        months: remainingMonths <= 0 ? 0 : remainingMonths,
        weeks: remainingWeeks,
        days: remainingDays,
      });
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:flex-row sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
           <h1 className="font-headline text-4xl font-bold text-foreground">
              Tesla Tire Lifespan Estimate
            </h1>
        </div>
      </header>

      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-10">
             <p className="text-slate-500 mt-2 text-lg text-center">
              A Three-Year Plan from May 2024 to May 2027
            </p>

            <Card className="bg-white/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                    <Car className="w-6 h-6 text-primary" />
                    Vehicle & Lease Details
                </CardTitle>
                 <CardDescription>Tesla 2024 Sedan Model 3, Rear-Wheel Drive</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">Lease Start Date</TableCell>
                            <TableCell className="text-right">May 14, 2024</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Total Vehicle Price</TableCell>
                            <TableCell className="text-right">$40,630.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold pl-8 text-muted-foreground">Online Order Fee</TableCell>
                            <TableCell className="text-right text-muted-foreground">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold pl-8 text-muted-foreground">Destination Fee</TableCell>
                            <TableCell className="text-right text-muted-foreground">$1,390.00</TableCell>
                        </TableRow>
                        <TableRow className="border-t-2 border-primary/20">
                            <TableCell className="font-bold text-lg text-primary">Total Lease Payment</TableCell>
                            <TableCell className="font-bold text-lg text-right text-primary">$9,889.33</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                    <Calendar className="w-6 h-6 text-primary" />
                    Timeline Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-4 rounded-lg border">
                        <p className="text-sm font-semibold text-slate-500">Start Date</p>
                        <p className="text-lg font-medium text-slate-800">{startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-lg border">
                        <p className="text-sm font-semibold text-slate-500">End Date</p>
                        <p className="text-lg font-medium text-slate-800">{endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                   </div>
                </div>
                <div className="text-center bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg">
                    <p className="font-semibold">Total Duration: 36 Months (3 Years)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                        <Gauge className="w-6 h-6 text-primary" />
                        Current Progress
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-center text-slate-600">You are halfway through your three-year span — 18 months down, 18 to go!</p>
                    <div>
                        <Progress value={progress} className="h-4" />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>May 14, 2024</span>
                            <span className="font-semibold">{progress.toFixed(0)}% Complete</span>
                            <span>May 13, 2027</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                    <Hourglass className="w-6 h-6 text-primary" />
                    Remaining Countdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                {countdown ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard icon={Hourglass} label="Months Remaining" value={`${countdown.months}`} />
                    <StatCard icon={Calendar} label="Weeks Remaining" value={`${countdown.weeks}`} />
                    <StatCard icon={Hourglass} label="Days Remaining" value={`${countdown.days}`} />
                  </div>
                ) : (
                  <p className="text-center text-slate-500">Calculating remaining time...</p>
                )}
                 <div className="mt-6 text-center text-sm text-slate-500 bg-slate-50 p-3 rounded-md border">
                    <p>From <strong className="font-semibold">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong> to <strong className="font-semibold">May 13, 2027</strong></p>
                 </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                    <Wrench className="w-6 h-6 text-primary" />
                    Next Tire Rotation: 5,000 Mile Service
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-blue-600">NEXT SERVICE DUE AT</p>
                        <p className="text-3xl font-bold text-blue-800">22,367 mi</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-yellow-600">EST. MILES REMAINING</p>
                        <p className="text-3xl font-bold text-yellow-800">0 mi</p>
                    </div>
                </div>
                 <div className="bg-slate-100 border border-slate-200 text-center rounded-lg p-4">
                    <p className="font-semibold text-slate-800">Estimated Service Date: Tuesday, November 11, 2025</p>
                    <p className="text-xs text-slate-500 mt-1">Based on an estimated current mileage of 37,167 mi and an average of 1,100 miles/month.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                      <FileText className="w-6 h-6 text-primary" />
                      Final Receipt Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg border">
                            <p className="text-sm font-semibold text-slate-500">Vehicle</p>
                            <p className="text-lg font-medium text-slate-800">2024 Tesla Model 3 RWD</p>
                       </div>
                       <div className="bg-slate-50 p-4 rounded-lg border">
                            <p className="text-sm font-semibold text-slate-500">Mileage at Installation</p>
                            <p className="text-lg font-medium text-slate-800">17,367 miles</p>
                       </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Qty</TableHead>
                                <TableHead className="text-right">Unit Price</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {receiptItems.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.description}</TableCell>
                                    <TableCell className="text-center">{item.qty}</TableCell>
                                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 flex justify-end">
                        <div className="w-full md:w-1/3">
                            <div className="flex justify-between items-center bg-slate-100 p-3 rounded-lg border">
                                <p className="text-lg font-bold text-slate-800">Total Cost</p>
                                <p className="text-lg font-bold text-slate-900">${totalCost.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white/50">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                      <Wallet className="w-6 h-6 text-primary" />
                      Tire Buying Decision: Sentry UHP
                  </CardTitle>
                  <CardDescription>
                      <span className="font-bold text-lg text-primary">$75</span> / tire | <span className="font-semibold text-base text-muted-foreground">Total: $300 for four</span>
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                      <Image 
                          src="https://i.imgur.com/zYOJlsF.png" 
                          alt="Sentry UHP Tire" 
                          width={235}
                          height={300}
                          className="rounded-lg object-cover w-full shadow-md border"
                      />
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-emerald-800 flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-5 h-5" />
                        Pros
                      </h3>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-700">
                        <li><span className="font-semibold">Very Affordable:</span> At $75 per tire, the upfront cost is low.</li>
                        <li><span className="font-semibold">Good User Reviews:</span> A 4.3-star rating from over 2,300 reviews indicates solid satisfaction.</li>
                        <li><span className="font-semibold">Versatile:</span> Labeled as "All-Season" and "Performance."</li>
                        <li><span className="font-semibold">Fuel Efficient:</span> May contribute to better mileage.</li>
                      </ul>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-rose-800 flex items-center gap-2 mb-3">
                        <ThumbsDown className="w-5 h-5" />
                        Cons
                      </h3>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-700">
                        <li><span className="font-semibold">Short Tread Life:</span> 23K-30K mile estimate means more frequent replacement.</li>
                        <li><span className="font-semibold">Average Comfort:</span> Rated only 2 out of 4 for both "Quiet Ride" and "Comfort."</li>
                        <li><span className="font-semibold">Potential Hidden Costs:</span> Low tread life may negate initial savings over time.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-2xl text-slate-700">
                      <Star className="w-6 h-6 text-primary" />
                      Tire Buying Decision: Premium Option
                  </CardTitle>
                   <CardDescription>
                      <span className="font-bold text-lg text-primary">$214</span> / tire | <span className="font-semibold text-base text-muted-foreground">Total: $856 for four</span>
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex-shrink-0">
                      <Image 
                          src="https://i.imgur.com/uxFSOjz.png" 
                          alt="Premium Tire" 
                          width={235}
                          height={300}
                          className="rounded-lg object-cover w-full shadow-md border"
                      />
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-emerald-800 flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-5 h-5" />
                        Pros
                      </h3>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-700">
                        <li><span className="font-semibold">Longer Tread Life:</span> Typically offer 50K+ mile treadwear warranties.</li>
                        <li><span className="font-semibold">Superior Comfort:</span> Engineered for a quiet and smooth ride, ideal for luxury EVs.</li>
                        <li><span className="font-semibold">Excellent Performance:</span> Better handling, braking, and stability in all conditions.</li>
                         <li><span className="font-semibold">Brand Reputation:</span> Established brands often mean higher quality control and reliability.</li>
                      </ul>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-rose-800 flex items-center gap-2 mb-3">
                        <ThumbsDown className="w-5 h-5" />
                        Cons
                      </h3>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-700">
                        <li><span className="font-semibold">Higher Upfront Cost:</span> Significantly more expensive per tire.</li>
                        <li><span className="font-semibold">Overkill for some drivers:</span> The advanced features may not be necessary for standard daily driving.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Vehicle analysis for the Khan Family - 2024
      </footer>
    </div>
  );
}

