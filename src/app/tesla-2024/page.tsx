
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Gauge, Hourglass, ThumbsDown, ThumbsUp, Wallet, Star } from 'lucide-react';
import { differenceInDays, differenceInWeeks } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
    const today = new Date();
    
    const totalDurationInDays = differenceInDays(endDate, startDate);
    const elapsedDays = differenceInDays(today, startDate);
    const currentProgress = Math.max(0, Math.min(100, (elapsedDays / totalDurationInDays) * 100));
    setProgress(currentProgress);

    const remainingDays = differenceInDays(endDate, today);
    const remainingWeeks = differenceInWeeks(endDate, today);

    // Calculate remaining months
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
  }, []);

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
                      <Wallet className="w-6 h-6 text-primary" />
                      Tire Buying Decision: Sentry UHP
                  </CardTitle>
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
