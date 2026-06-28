import { cn } from "@/app/src/lib/utils";
import Star from "./Start";

type Props = {
  type: "points" | "stamps";
};

export default function ProgramBadge({ type }: Props) {
  return (
    <div className={cn(
      "w-[48px] h-[48px] border-6 border-primary rounded-full flex items-center justify-center items-center",
      type === "stamps" && "border-gold p-1.25"
    )}>
      {type === "points" ? <span className="text-gold"><Star /></span> : <div className="border border-5 border-primary rounded-full w-full h-full " />}
    </div>
  );

}
