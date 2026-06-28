import Badge from "./atom/Badge";
import Fork from "./icons/Fork";
import ProgramBadge from "./icons/ProgramBadge";

type Props = {
  distance_km: number;
  category: string;
  cardType: "points" | "stamps";
};

export default function InfoRow({ distance_km, category, cardType }: Props) {
  return (
    <div className="flex flex-row items-center gap-6 pl-2 -mt-0.5 mb-0.5 -mr-5">
      <span className="text-[18px] font-bold pr-3  ">{distance_km} km</span>
      <Badge
        icon={<Fork />}
        text={category}
        className="bg-pill-bg rounded-full gap-3"
        iconClassName="pl-3 pr-1"
        titleClassName="mr-4"
      />

      <div className="ml-9 ">
        <ProgramBadge type={cardType} />
      </div>
    </div>
  );
}
