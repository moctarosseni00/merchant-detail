import type { ComponentType } from "react";
import type { PointsProgram } from "./mockData";
import LogoBurgerKing from "./icons/LogoBurgerKing";
import LogoStarBuck from "./icons/LogoStartBuck";
import Exclamation from "./icons/Exclamation";
import ProgressBar from "./atom/ProgessBar";

type BrandLogoKey = "BURGER KING" | "STARBUKS";

const BRAND_LOGOS: Record<BrandLogoKey, ComponentType> = {
  "BURGER KING": LogoBurgerKing,
  "STARBUKS": LogoStarBuck,
};

type Props = {
  program: PointsProgram;
};

export default function PointsCard({ program }: Props) {
  const nextReward = program.rewards.find((r) => r.trigger_value > program.userPoints) ?? null;
  const progress = nextReward
    ? Math.min(program.userPoints / nextReward.trigger_value, 1)
    : 1;
  const ptsNeeded = nextReward ? nextReward.trigger_value - program.userPoints : 0;

  const BrandLogo: ComponentType | null =
    BRAND_LOGOS[program.brand as BrandLogoKey] ?? null;


  return (
    <div className="-ml-0.5 flex flex-row rounded-2xl overflow-hidden shadow-xl ">
      <div className="relative pl-5 pt-3.5 pb-3.5  bg-primary flex-1" style={{ backgroundImage: 'url(/burgerking_cover.png)', backgroundSize: 'contain', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}>


        {/* Top row */}
        <div className="relative flex items-center mb-0.5">
          <span className="text-white font-bold text-[18px] -ml-0.5 pr-12" >
            {program.brand}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-[18px]">
              {program.userPoints} <span className="text-[16px]">pts</span>
            </span>
          </div>
        </div>

        {/* Earn rule */}
        <div className="flex flex-row gap-1.5 mb-6">
          <Exclamation />
          <span className="text-white text-[10px]">
            {program.earn_rule_text}
          </span>
        </div>
        <div className="w-3/5">
          <ProgressBar progress={progress} reward={nextReward?.image_url || ""} />
        </div>

        {/* Next reward text */}
        {ptsNeeded > 0 && (
          <p className="text-white text-[12px] -mt-0.5 ">Next reward at {ptsNeeded} pts</p>
        )}
      </div>
      <div className="bg-white  w-[100px]">
        {BrandLogo && (
          <div className="w-[40px] h-[40px] rounded-full w-full pl-10 mt-5">
            <BrandLogo />
          </div>
        )}
      </div>
    </div>
  );
}
