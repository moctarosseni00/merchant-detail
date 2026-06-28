import type { ComponentType } from "react";
import Image from "next/image";
import type { Offer } from "./mockData";
import LogoStarBuck from "./icons/LogoStartBuck";
import PrimaryButton from "./PrimaryButton";
import { cn } from "../src/lib/utils";

const BRAND_LOGOS: Record<string, ComponentType> = {
  Starbuks: LogoStarBuck,
  STARBUKS: LogoStarBuck,
};

type Props = {
  offer: Offer;
};

export default function OfferCard({ offer }: Props) {
  const BrandLogo = BRAND_LOGOS[offer.brand] ?? null;


  return (
    <div className={cn("flex rounded-2xl overflow-hidden bg-white shadow-sm bg-pill-bg", offer.style === "order" && "bg-primary")}>
      <div
        className={cn(
          "w-[119px] shrink-0 bg-primary flex items-center justify-center py-3",
          offer.style === "point" && "bg-pill-bg"
        )}
        style={!offer.image_url ? {
          backgroundImage: 'url(startbuck_cover.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat'
        } : {}}>

        {offer.style === "featured" ? (
          <div className="flex items-center justify-center ">
            <span className="text-gold font-black text-[36px] text-center ml-2 mb-1 rotate-270 leading-[20px]">
              {offer.discount_label}
            </span>
          </div>
        ) : offer.image_url ? (
          <div className="w-26 h-26 rounded-xl overflow-hidden relative">
            <Image
              src={offer.image_url}
              alt={offer.headline}
              fill
              sizes="228px"
              className="object-cover"
            />
          </div>
        ) : (<div className="hidden" />)}
      </div>

      {/* Right panel */}
      <div className={cn(
        "flex-1 p-3 bg-pill-bg  ml-0.5",
        offer.style === "order" && "bg-primary text-white",
      )}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="min-w-0">
            <p className={cn(
              "font-bold ",
              offer.style === "featured" ? "mb-3 text-[16px]" : "text-[18px]"
            )}>{offer.brand}</p>
            <p className={cn(
              "text-[16px] font-bold leading-tight",
              offer.style !== "featured" && "text-[14px]",
            )}>{offer.headline}</p>
            {offer.code && (
              <p className="text-[14px] text-muted mt-0.5">{offer.code}</p>
            )}
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0  border-4 border-white">
            <BrandLogo />
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className={cn("flex-1  text-primary ", offer.style === "order" && "text-white")}>
            <p className="text-[14px] font-bold leading-none -mt-1.5">Expires in</p>
            <p className="text-[14px] font-bold">{offer.expires_in}</p>
          </div>
          <div className="pr-0.5">
            <PrimaryButton
              label="Claim"
              variant="dark"
              className="rounded-full py-2 px-6 pt-2.5"
              labelClassName={cn(
                "text-[14px] ",
                offer.style === "featured" && "-mb-0.5 mb-0.5",
                offer.style === "order" && "-"
              )}
            />
          </div>
        </div>
      </div>
    </div >
  );
}
