import { Vehicle } from "@/types/vehicle";
import Image from "next/image";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="bg-[#EEEFF2] p-5 flex flex-col gap-4 rounded-lg shadow-md w-full h-full justify-between">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center gap-2.5">
          <CardInfos text={vehicle.energy} />
          <CardInfos text={vehicle.year.toString()} />
        </div>

        <CardImage images={vehicle.images} name={vehicle.name} />

        <CardStats
          name={vehicle.name}
          price={vehicle.price.toLocaleString("fr-FR") + " €"}
          pulseOverboost={vehicle.stats.powerHP.toString() + " ch"}
          acceleration={vehicle.stats.acceleration0to100.toString() + " s"}
          autonomy={
            vehicle.stats.autonomyKm
              ? vehicle.stats.autonomyKm.toString() + " km"
              : vehicle.stats.fuelConsumption?.toString() + " L/100km"
          }
        />
      </div>

      <ButtonActions />
    </div>
  );
}

function CardInfos({ text }: { text: string }) {
  return (
    <p className="py-1 px-2 rounded-sm bg-white text-center text-xs text-black">
      {text}
    </p>
  );
}

function CardImage({ images, name }: { images: string; name: string }) {
  return (
    <div className="w-full h-43.5 px-13.5">
      <div className="relative w-full h-full">
        <Image
          src={images || "/vehicle/default.png"}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

function CardStats({
  name,
  price,
  pulseOverboost,
  acceleration,
  autonomy,
}: {
  name: string;
  price: string;
  pulseOverboost: string;
  acceleration: string;
  autonomy: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-black">{name}</h1>
        <p className="text-sm text-[#535457]">Des {price}</p>
      </div>

      <TextStats
        value={pulseOverboost}
        title="Puissance Overboost avec Launch Control"
      />
      <TextStats
        value={acceleration}
        title="Accélération de 0 à 100 km/h avec Launch Control"
      />
      <TextStats value={autonomy} title="Autonomie combinée (WLTP)" />
    </div>
  );
}

function TextStats({ value, title }: { value: string; title: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-black font-medium">{value}</p>
      <p className="text-xs text-[#535457]">{title}</p>
    </div>
  );
}

function ButtonActions() {
  return (
    <div className="w-full flex flex-col sm:grid sm:grid-cols-2 items-center gap-2.5 mt-2">
      <button className="w-full py-2.5 bg-black border border-black text-white text-center rounded-md text-sm font-normal hover:bg-black/80 transition-colors duration-300">
        Voir les détails
      </button>
      <button className="w-full py-2.5 bg-transparent border border-black text-black text-center rounded-md text-sm font-normal hover:bg-black/10 transition-colors duration-300">
        Acheter
      </button>
    </div>
  );
}
