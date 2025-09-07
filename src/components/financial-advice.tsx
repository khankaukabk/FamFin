"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getPersonalizedFinancialAdvice } from "@/ai/flows/personalized-financial-advice";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FinancialAdviceProps {
  income: number;
  expenses: number;
  spendingHabits: string;
}

export function FinancialAdvice({
  income,
  expenses,
  spendingHabits,
}: FinancialAdviceProps) {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetAdvice = async () => {
    setIsLoading(true);
    setAdvice("");
    try {
      if (income === 0 && expenses === 0) {
        toast({
          title: "Add some transactions first!",
          description: "We need some data to give you financial advice.",
          variant: "destructive",
        });
        return;
      }
      const result = await getPersonalizedFinancialAdvice({
        income,
        expenses,
        spendingHabits,
      });
      setAdvice(result.advice);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error Getting Advice",
        description:
          "Something went wrong while generating your advice. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          <CardTitle className="font-headline text-lg">AI Financial Advisor</CardTitle>
        </div>
        <CardDescription>
          Get AI-powered insights based on your financial data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={handleGetAdvice}
          disabled={isLoading}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Generate My Advice"
          )}
        </Button>
        {advice && (
          <div className="mt-4 animate-in fade-in rounded-lg border bg-muted/50 p-4 text-sm shadow-inner">
            <p className="whitespace-pre-wrap">{advice}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
