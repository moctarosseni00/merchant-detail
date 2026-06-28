import { cn } from "@/app/src/lib/utils";
import WhiteStar from "../../icons/WhiteStart";
import Image from "next/image";

const ProgressBar = ({ progress, reward }: { progress: number; reward: string }) => {
  return (
    <div className="relative -ml-0.5 h-8 rounded-full overflow-visible mb-2 bg-white">
      <div
        className="absolute left-0 top-0 h-full bg-gold rounded-full"
        style={{ width: `${progress * 100}%` }}
      />
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card-points border-2 border-gold",
          "flex items-center justify-center z-10",
          "bg-gold border-white border-4 p-1"
        )}
        style={{ left: `calc(${progress * 100}% - 31px)` }}
      >
        <WhiteStar />
      </div>
      {/* Reward slot at end */}
      <div className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2",
        "w-8 h-8 rounded-full border border-4  border-[#EBEBEB] bg-white",
        "flex items-center justify-center z-10",
      )}
      >
        <Image src={reward} alt="Reward" width={20} height={20} />
      </div>
    </div >
  )
};

export default ProgressBar;