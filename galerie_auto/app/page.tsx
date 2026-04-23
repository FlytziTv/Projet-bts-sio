import VehicleCard from "@/components/card/VehicleCard";
import NavBar from "@/components/layout/NavBar";
import ViewCar from "@/components/layout/ViewCar";

export default function Home() {
  return (
    <div className=" min-h-screen w-350 mx-auto flex flex-col pb-5">
      <NavBar />

      <ViewCar />

      <div className="flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-0">
          <h2 className="text-2xl font-semibold">Catalogue de nos véhicules</h2>
          <p className="text-black/40">
            Tout nos vehicles disponible a la vente
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5.5">
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
        </div>
      </div>
    </div>
  );
}
