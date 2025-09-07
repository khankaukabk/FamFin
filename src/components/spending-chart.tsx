"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { Transaction } from "@/lib/types";

interface SpendingChartProps {
  transactions: Transaction[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function SpendingChart({ transactions }: SpendingChartProps) {
  const chartData = React.useMemo(() => {
    const expenseByCategory = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(expenseByCategory).map(([category, total]) => ({
      category,
      total,
    }));
  }, [transactions]);
  
  const chartConfig = {
    total: {
      label: "Total",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  return (
    <>
      <CardHeader className="px-0 pt-0">
        <CardTitle className="font-headline text-lg">Spending Breakdown</CardTitle>
        <CardDescription>
          Visualize where your money is going each month.
        </CardDescription>
      </CardHeader>
      <div className="h-[400px] w-full">
        {chartData.length > 0 ? (
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ left: 10, right: 10 }}
              accessibilityLayer
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="category"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                width={100}
                className="text-sm"
              />
              <XAxis dataKey="total" type="number" hide />
              <Tooltip
                cursor={{ fill: "hsl(var(--muted))" }}
                content={<ChartTooltipContent formatter={(value) => currencyFormatter.format(value as number)} />}
              />
              <Bar dataKey="total" radius={5} fill="var(--color-total)" />
            </BarChart>
          </ChartContainer>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">No expense data to display.</p>
          </div>
        )}
      </div>
    </>
  );
}
