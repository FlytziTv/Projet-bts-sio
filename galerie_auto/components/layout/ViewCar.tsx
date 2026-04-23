import Image from "next/image";

export default function ViewCar() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <Image
        src="/vehicle/911/911 GT3 RS.png"
        alt="Car Image"
        fill
        className="object-contain"
      />

      <div className="absolute top-1/4 right-5 flex flex-col items-end justify-end">
        <h1 className="text-[60px] font-bold text-black">911 GT3 RS</h1>
        <p className="text-xl text-black/80">250 000,00 €</p>
      </div>

      <div className="absolute bottom-5 flex flex-row gap-2 items-center justify-center">
        <ButtonActions Number={1} />
        <ButtonActions Number={2} />
        <ButtonActions Number={3} />
      </div>
    </div>
  );
}

function ButtonActions({ Number }: { Number: number }) {
  return (
    <button className="flex items-center justify-center text-center bg-[#EEEFF2] hover:bg-[#EEEFF2]/50 rounded-full aspect-square w-12.5 cursor-pointer transition-colors duration-500 ">
      <p className="text-[#8D8D8D] font-bold">{Number}</p>
    </button>
  );
}
