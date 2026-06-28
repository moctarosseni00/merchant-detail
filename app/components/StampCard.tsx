import type { ComponentType } from "react";
import type { StampCard as StampCardType } from "./mockData";
import LogoBurgerKing from "./icons/LogoBurgerKing";
import LogoStarBuck from "./icons/LogoStartBuck";
import Image from "next/image";
import { cn } from "../src/lib/utils";

type BrandLogoKey = "BURGER KING" | "STARBUKS";

const BRAND_LOGOS: Record<BrandLogoKey, ComponentType> = {
  "BURGER KING": LogoBurgerKing,
  "STARBUKS": LogoStarBuck,
};

type Props = {
  card: StampCardType;
};

export default function StampCard({ card }: Props) {
  const BrandLogo: ComponentType | null =
    BRAND_LOGOS[card.brand as BrandLogoKey] ?? null;

  const stamps = Array.from({ length: card.stamps_required - 1 }, (_, i) => i < card.userStamps);

  return (
    <div className=" rounded-2xl flex " style={{ backgroundColor: "#252525" }}>
      {/* Left: stamps */}
      <div
        className="flex-1 p-4"
        style={{ backgroundImage: `url(/startbuck_cover.png)`, backgroundSize: 'contain', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}>
        <div className="relative flex items-center mb-8">
          <span className="text-white font-bold text-[18px] -ml-0.5 pr-22" >{card.brand}</span>
          <span className="text-white font-bold text-[15px]">
            {card.userStamps} / {card.stamps_required}
          </span>
        </div>
        <div className="grid grid-cols-[repeat(4,36px)] gap-1">
          {stamps.map((filled, i) => (
            <span key={i} className={cn(
              "relative !w-[37px] h-[37px] rounded-full bg-gold flex items-center justify-center overflow-hidden",
              filled ? "bg-gold" : "bg-white/80",

            )}>
              {card.card_logo_url ? (
                <Image
                  src={card.card_logo_url}
                  alt={card.brand}
                  width={25}
                  height={25}
                  className={cn("object-cover rounded-full ", !filled && "grayscale")}
                />
              ) : (
                <span className="text-sm font-bold text-white">{card.brand.charAt(0).toUpperCase()}</span>
              )}
              {!filled && <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#ffffff90',
                  pointerEvents: 'none'
                }}
              />}

            </span>
          ))}

          <span className={cn(
            "relative !w-[37px] h-[37px] rounded-full bg-gold flex items-center justify-center overflow-hidden",
            card.stamps_required == card.userStamps ? "bg-gold" : "bg-white/80",
          )}>
            <Image
              src={"/reward.png"}
              alt={card.brand}
              width={25}
              height={25}
              className="object-cover rounded-full "
            />
            {card.userStamps < card.stamps_required && <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#ffffff20',
                pointerEvents: 'none'
              }}
            />}
          </span>
        </div>
      </div>


      <div className="bg-pill-bg   rounded-r-2xl w-[98px]">
        {BrandLogo && (
          <div className="w-[40px] h-[40px] rounded-full w-full pl-9 mt-6">
            <BrandLogo />
          </div>
        )}
      </div>
    </div>
  );
}
