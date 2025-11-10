
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Gauge, Hourglass, Zap, ThumbsUp, ThumbsDown, BatteryCharging, Wrench, Shield, Leaf } from 'lucide-react';
import { differenceInDays, differenceInWeeks, differenceInMonths } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const StatCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | number }) => (
  <div className="flex flex-col items-center justify-center rounded-lg bg-muted p-4 text-center">
    <Icon className="h-8 w-8 text-primary" />
    <p className="mt-2 text-3xl font-bold">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default function Tesla2024Page() {
  const [countdown, setCountdown] = React.useState({ months: 0, weeks: 0, days: 0 });
  const [progress, setProgress] = React.useState(0);

  const loanStartDate = new Date('2024-08-01');
  const loanEndDate = new Date('2030-08-01'); // 72-month loan

  React.useEffect(() => {
    // This code runs only on the client, after hydration, to prevent a mismatch
    const today = new Date();
    
    const remainingDays = differenceInDays(loanEndDate, today);
    const remainingWeeks = differenceInWeeks(loanEndDate, today);
    const remainingMonths = differenceInMonths(loanEndDate, today);

    setCountdown({
      months: remainingMonths > 0 ? remainingMonths : 0,
      weeks: remainingWeeks > 0 ? remainingWeeks : 0,
      days: remainingDays > 0 ? remainingDays : 0,
    });

    const totalDuration = differenceInDays(loanEndDate, loanStartDate);
    const elapsedDuration = differenceInDays(today, loanStartDate);
    const calculatedProgress = Math.max(0, Math.min(100, (elapsedDuration / totalDuration) * 100));
    setProgress(calculatedProgress);

  }, []);

  const pros = [
    { icon: Zap, text: 'Instant torque and exhilarating acceleration.' },
    { icon: Leaf, text: 'Zero tailpipe emissions, better for the environment.' },
    { icon: BatteryCharging, text: 'Convenient home charging and access to Supercharger network.' },
  ];

  const cons = [
    { icon: Wrench, text: 'Build quality can be inconsistent on some units.' },
    { icon: Shield, text: 'Insurance premiums can be higher than for comparable gasoline cars.' },
    { icon: Zap, text: 'Range can be significantly lower in cold weather.' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            2024 Tesla Model Y
          </h1>
        </div>
      </header>

      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Loan Payoff Countdown</CardTitle>
              <CardDescription>Time remaining until the 72-month loan is fully paid off.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <StatCard icon={Calendar} label="Months" value={countdown.months} />
                <StatCard icon={Hourglass} label="Weeks" value={countdown.weeks} />
                <StatCard icon={Gauge} label="Days" value={countdown.days} />
              </div>
              <div>
                <Progress value={progress} className="h-4" />
                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                  <span>Loan Start: {loanStartDate.toLocaleDateString()}</span>
                  <span>Payoff Date: {loanEndDate.toLocaleDateDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Vehicle Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://i.imgur.com/4GjwE3j.png"
                  alt="Tesla Model Y"
                  width={600}
                  height={400}
                  className="mb-4 rounded-lg object-cover"
                />
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Model:</strong> Model Y Long Range</p>
                  <p><strong>Color:</strong> Pearl White Multi-Coat</p>
                  <p><strong>Range (EPA est.):</strong> 310 miles</p>
                  <p><strong>0-60 mph:</strong> 4.8 seconds</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Pros & Cons</CardTitle>
                <CardDescription>A balanced look at the ownership experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-green-600">
                    <ThumbsUp className="h-5 w-5" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3 rounded-md bg-green-500/10 p-2">
                        <pro.icon className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-sm text-muted-foreground">{pro.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                    <ThumbsDown className="h-5 w-5" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3 rounded-md bg-red-500/10 p-2">
                        <con.icon className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                        <span className="text-sm text-muted-foreground">{con.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Vehicle analysis for the Khan Family - 2024
      </footer>
    </div>
  );
}

    