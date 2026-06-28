"use client"
import MerchantPage from "./components/MerchantPage";
import { merchant, pointsProgram, stampCard, offers } from "./components/mockData";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 justify-center items-start bg-[#f0f0f0] min-h-screen">
      <div className="shadow-2xl overflow-hidden">
        <MerchantPage
          merchant={merchant}
          pointsProgram={pointsProgram}
          stampCard={stampCard}
          offers={offers}
          cardType="points"
        />
      </div>
      <div className="shadow-2xl  overflow-hidden">
        <MerchantPage
          merchant={merchant}
          pointsProgram={pointsProgram}
          stampCard={stampCard}
          offers={offers}
          cardType="stamps"
        />
      </div>
    </div>
  );
}
