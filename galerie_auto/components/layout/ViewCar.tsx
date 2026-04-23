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
      {/* Image dynamique */}
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={activeCar.images}
          alt={activeCar.name}
          fill
          className="object-contain "
          priority
        />
      </div>

      <div className="absolute top-1/6 right-5 flex flex-col items-end justify-end">
        <h1 className="text-[60px] font-bold text-black">{activeCar.name}</h1>
        <p className="text-xl text-black/80">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(activeCar.price)}
        </p>
      </div>

      <div className="absolute bottom-5 flex flex-row gap-2 items-center justify-center z-10">
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
