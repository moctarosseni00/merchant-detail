import Header from "./Header";
import HeroImage from "./HeroImage";
import InfoRow from "./InfoRow";
import PointsCard from "./PointsCard";
import StampCard from "./StampCard";
import OfferCard from "./OfferCard";
import Contacts from "./Contacts";
import PrimaryButton from "./PrimaryButton";
import type {
  Merchant,
  PointsProgram,
  StampCard as StampCardType,
  Offer,
} from "./mockData";
// User.tsx exports a people/members icon; Flame.tsx exports an activity icon
import PeopleIcon from "./icons/User";
import ActivityIcon from "./icons/Flame";
import Badge from "./atom/Badge";
import ArrowUp from "./icons/ArrowUp";
import { cn } from "../src/lib/utils";

type Props = {
  merchant: Merchant;
  pointsProgram: PointsProgram;
  stampCard: StampCardType;
  offers: Offer[];
  cardType: "points" | "stamps";
};

export default function MerchantPage({
  merchant,
  pointsProgram,
  stampCard,
  offers,
  cardType,
}: Props) {
  return (
    <div className="w-full max-w-[402px] mx-auto bg-white min-h-screen px-[20px]">
      <Header title="Starbuks" />

      <HeroImage
        cover_image_url={merchant.cover_image_url}
        logo_url={merchant.logo_url}
        merchantName={merchant.name}
      />

      {/* Extra top padding accounts for the logo badge overhanging the hero */}
      <div className="pt-4">
        {/* Name + description */}
        <div className="px-2 mb-3">
          <h1 className="text-[18px] font-bold mb-1 text-back">{merchant.name}</h1>
          <p className="text-[14px] font-medium text-muted leading-[1.4]">{merchant.description}</p>
        </div>

        <InfoRow
          distance_km={merchant.distance_km}
          category={merchant.category}
          cardType={cardType}
        />

        {/* Stats row */}
        <div className={cn("flex flex-row gap-4 items-center py-2", cardType === "points" ? "mb-7" : "mb-10.5")}>
          <Badge
            icon={<PeopleIcon />}
            text={`${merchant.members_count}+ members`}
            className="bg-transparent border border-gray-200 px-4 pr-3 py-3"
            titleClassName="pr-2 -ml-2.5"
          />
          <Badge
            icon={<ActivityIcon />}
            text="Active this week"
            className="bg-transparent border border-gray-200 pr-3 py-3 "
            iconClassName="pl-1.5"
          />
        </div>

        {/* Current card */}
        <div className={cn("px-2 mb-3.5 mt-2 ", cardType === "points" ? "mb-3.5" : "mb-4")}>
          <h3 className="text-[16px] font-bold">Current card</h3>
        </div>

        {cardType === "points" ? (
          <PointsCard program={pointsProgram} />
        ) : (
          <StampCard card={stampCard} />
        )}

        {/* Tap for full terms */}
        <PrimaryButton
          label="Tap for full terms"
          variant="light-gold"
          className={cn(
            "rounded-full py-3.5 font-semibold text-[16px] !gap-0 mt-5 mb-6",
          )}
          labelClassName={cn("-mt-1 -mr-1.5")}
          icon={
            <span className="flex items-center justify-center bg-gold w-5.5 h-5.5 rounded-full -mt-1 -ml-1">
              <span className="ml-0.5 -mb-0.5 "><ArrowUp /></span>
            </span>
          }

        />

        {/* Reward option */}
        <div className={cn("mb-6 -mr-1")}>
          <PrimaryButton
            label="Reward option"
            variant="dark"
            className=" -ml-0.5"
            labelClassName="text-[16px] text-medium -ml-1 -mb-0.5"
          />
        </div>

        {/* Active offers — points state only */}
        {cardType === "points" && (
          <div className="mb-5">
            <h3 className="text-[16px] font-bold px-2  mb-3">Active offers</h3>
            <div className="-mr-1">
              <div className="flex flex-col gap-3.5 -ml-1">
                {offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
              </div>
            </div>
          </div>
        )}

        <Contacts opening_hours={merchant.opening_hours} phone={merchant.phone} />

        <div className="flex flex-col gap-4 pt-7 pb-6">
          <PrimaryButton label="Directions" variant="primary" />
          <PrimaryButton label="Call" variant="ouline" />
        </div>
      </div>
    </div>
  );
}
