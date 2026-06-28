import Image from "next/image";

type Props = {
  cover_image_url: string | null;
  logo_url: null | string;
  merchantName: string;
};

export default function HeroImage({ cover_image_url, logo_url, merchantName }: Props) {
  const initial = merchantName.charAt(0).toUpperCase();

  return (
    <div className="relative w-full h-[160px] -mr-1">
      {cover_image_url ? (
        <Image
          src={cover_image_url}
          alt={`${merchantName} cover`}
          fill
          className="object-cover rounded-[14px] w-auto !h-[154px]"
          priority
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-300 rounded-[14px] !h-[154px]" />
      )}

      <div className="absolute bottom-0 right-6.5 translate-y-1/2 z-10">
        <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center overflow-hidden">
          {logo_url ? (
            <Image
              src={logo_url}
              alt={merchantName}
              width={42}
              height={42}
              className="object-cover rounded-full"
            />
          ) : (
            <span className="text-xl font-bold text-primary">{initial}</span>
          )}
        </div>
      </div>
    </div>
  );
}
