"use client";

import { useState } from "react";
import { vehiclesData } from "@/data/vehicles";
import Image from "next/image";

export default function ViewCar() {
  const featuredCars = vehiclesData.filter((v) => v.vedettes).slice(0, 6);

  const [activeIndex, setActiveIndex] = useState(0);

  if (featuredCars.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Aucune voiture en vedette pour le moment.
      </div>
    );
  }

  const activeCar = featuredCars[activeIndex];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <div className="absolute top-24 md:top-1/4 md:right-5 flex flex-col items-center md:items-end justify-center z-10 w-full px-4 md:px-0">
        <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-black text-center md:text-right leading-tight">
          {activeCar.name}
        </h1>
        <p className="text-lg md:text-xl text-black/80 mt-2">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(activeCar.price)}
        </p>
      </div>

      {/* Image dynamique */}
      <div className="relative w-full max-w-250 h-[40vh] md:h-[60vh] mt-20 md:mt-0 z-0">
        <Image
          src={activeCar.images}
          alt={activeCar.name}
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute bottom-5 flex flex-wrap gap-2 items-center justify-center z-10 w-full px-4">
        {featuredCars.map((_, index) => (
          <ButtonActions
            key={index}
            number={index + 1}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ButtonActions({
  number,
  isActive,
  onClick,
}: {
  number: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-center rounded-full aspect-square w-12.5 cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-black text-white"
          : "bg-[#EEEFF2] hover:bg-[#EEEFF2]/50 text-[#8D8D8D]"
      }`}
    >
      <p className="font-bold">{number}</p>
    </button>
  );
}
