"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const StatCard = ({
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
  <div className={cn("bg-muted/50 border rounded-lg p-4 flex items-center", className)}>
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-4">
      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  </div>
);
