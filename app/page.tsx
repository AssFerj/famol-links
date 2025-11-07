import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { sellers } from "@/data/sellers";

export default function Home() {
  return (
    <div className="bg-background text-secondary p-4 md:p-10 text-white flex flex-col items-center justify-center min-h-screen"
    style={{
      backgroundImage: "url('/bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      <main className="max-w-[1200px]">
        <h1 className="text-2xl text-center font-bold text-shadow uppercase">Compre online com os nossos consultores de vendas.</h1>
        <p className="text-lg text-center text-info text-shadow uppercase">Por quem você quer ser atendido?</p>
        <p className="text-lg text-center text-info text-shadow uppercase">É só clicar na foto.</p>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-4">
            <div >
              <h2 className="text-xl text-info font-bold flex items-center gap-2">
                <HiLocationMarker />
                Camocim
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sellers.filter((seller) => seller.location === "Camocim").map((seller) => (
                <Link key={seller.id} href={`/camocim/${seller.id}`} target="_blank" className="flex flex-col items-center">
                  <Image src={seller.image} alt={seller.name} width={150} height={150} className="border-6 border-primary rounded-full p-0 hover:scale-110 transition-all" />
                  <span className="mt-2 text-white font-bold">{seller.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl text-info font-bold flex items-center gap-2">
                <HiLocationMarker />
                Granja
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sellers.filter((seller) => seller.location === "Granja").map((seller) => (
                <Link key={seller.id} href={`/granja/${seller.id}`} target="_blank" className="flex flex-col items-center">
                  <Image src={seller.image} alt={seller.name} width={150} height={150} className="border-6 border-primary rounded-full p-0 hover:scale-110 transition-all" />
                  <span className="mt-2 text-white font-bold">{seller.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl text-info font-bold flex items-center gap-2">
                <HiLocationMarker />
                Jijoca
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sellers.filter((seller) => seller.location === "Jijoca").map((seller) => (
                <Link key={seller.id} href={`/jijoca/${seller.id}`} target="_blank" className="flex flex-col items-center">
                  <Image src={seller.image} alt={seller.name} width={150} height={150} className="border-6 border-primary rounded-full p-0 hover:scale-110 transition-all" />
                  <span className="mt-2 text-white font-bold">{seller.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}