import "../components/styles/cardsweb.css"

import entrepeneur from "@/images/assets/icons/entrepeneur.png";
import shop from "@/images/assets/icons/shop.png";
import company from "@/images/assets/icons/company.png";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@nextui-org/react";

export default function Web(){
    return(
        <main>

            <section className="mt-[40px]">
            <h1 className="font-semibold text-2xl text-center">Planes de <span className="text-blue-500">Diseño & Desarrollo Web</span></h1>
            <p className="text-center my-8 text-md">Elegí el tipo de <span className="font-semibold">página web que mejor se adapte a tu negocio </span></p>

            </section>

            <section className="flex gap-x-4 justify-evenly flex-wrap gap-y-8 my-[70px]">
            
            <Link href={'./desarrolloweb/economica'} className="pointer">
                <div class="carta  ">
                <div class="carta-details ">
                <Image src={entrepeneur} alt="emprendedor" className="h-[80px] mx-auto" />
                <h2 class="text-center font-semibold">Página Web para emprendedores</h2>
                <p class="text-[#868686] text-sm text-center">Web económica</p>
                </div>
                <button class="carta-button">SABER MÁS</button>
                </div>
            </Link>
                
                <Link href={'./desarrolloweb/tienda'} className="pointer">
                <div class="carta">
                    <div class="carta-details">
                    <Image src={shop} alt="tienda" className="h-[80px] mt-2 mx-auto" />
                    <h2 class="text-center font-semibold">Página Web para Tiendas</h2>
                    <p class="text-[#868686] text-sm text-center">Catálogo & Venta Online</p>
                    </div>
                    <button class="carta-button">SABER MÁS</button>
                </div>
                </Link>
                

                <Link href={'./desarrolloweb/empresa'} className="pointer">
                <div class="carta">
                <div class="carta-details">
                <Image src={company} alt="empresa" className="h-[80px] mt-2 mx-auto" />
                <h3 class="text-center font-semibold">Página Web para Empresas</h3>
                <p class="text-[#868686] text-sm text-center">Diseño profesional y más </p>
                </div>
                <button class="carta-button">SABER MÁS</button>
                </div>
                </Link>

                
            </section>

        </main>
    );
}