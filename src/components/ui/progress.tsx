import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  label?: string;
}

function Progress({ className, value = 0, label, ...props }: ProgressProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label ? (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span>{Math.round(value)}%</span>
        </div>
      ) : null}
      <div
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.max(0, Math.min(100, value))}
        role="progressbar"
        className="h-2 rounded-full bg-secondary"
      >
        <div
          className="h-full rounded-full bg-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.35)] transition-all"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

export { Progress };
