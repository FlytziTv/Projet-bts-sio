import VehicleCard from "@/components/card/VehicleCard";
import NavBar from "@/components/layout/NavBar";
import ViewCar from "@/components/layout/ViewCar";
import { vehiclesData } from "@/data/vehicles";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-350 mx-auto flex flex-col px-4 pb-5 overflow-x-hidden">
      <NavBar />

      <ViewCar />

      <div className="flex-1 flex flex-col gap-5 mt-10 md:mt-0">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold">Catalogue de nos véhicules</h2>
          <p className="text-black/40">
            Tout nos vehicles disponible a la vente
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {vehiclesData.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}
