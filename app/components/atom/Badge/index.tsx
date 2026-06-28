import { cn } from "@/app/src/lib/utils";
import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className: string
  iconClassName?: string
  titleClassName?: string
}

const Badge = ({ icon, text, className, iconClassName, titleClassName }: BadgeProps) => {
  return (
    <div>
      <div className={cn("flex justify-center items-center gap-4 bg-pill-bg rounded-full py-4 px-2 ", className)}>
        <div className={cn(iconClassName)}>{icon}</div>
        <span className={cn("text-[14px] font-medium text-black -ml-2", titleClassName)}>{text}</span>
      </div>
    </div>
  )
};

export default Badge;
