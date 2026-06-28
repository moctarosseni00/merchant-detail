import type { ReactNode } from "react";
import { cn } from "../src/lib/utils";

type Props = {
  label: string;
  variant: "primary" | "dark" | "light-gold" | "ouline";
  icon?: ReactNode;
  className?: string;
  labelClassName?: string;
};


const variantClasses = {
  primary: "bg-primary text-white",
  dark: "bg-btn-dark text-white",
  "light-gold": "bg-gold/28",
  ouline: "border border-pill-bg bg-transparent",
} as const;

export default function PrimaryButton({ label, variant, icon, className, labelClassName }: Props) {
  return (
    <button
      className={cn(
        "w-full py-5 text-center text-[15px] font-medium rounded-[12px]",
        variantClasses[variant || "primary"],
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {icon}
        <span className={cn("", labelClassName)}>{label}</span>
      </div>
    </button>
  );
}
