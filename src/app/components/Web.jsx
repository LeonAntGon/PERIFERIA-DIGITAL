
import "../components/styles/cardsweb.css";
import entrepeneur from "/public/images/assets/icons/entrepeneur.png";
import shop from "/public/images/assets/icons/shop.png";
import company from "/public/images/assets/icons/company.png";
import Image from "next/image";
import Link from "next/link";
import heroimg from '/public/images/assets/web-hero-optimized.jpg';
import TypewriterWeb from "./animations/TypewriterWeb";

export default function Web(){
    return(
        <main>

            <section
            className="h-[450px] md:h-[520px] flex flex-col items-center"
            style={{ backgroundImage: `url(${heroimg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maskImage: 'linear-gradient(black 95%, transparent)',
            //filter: "brightness(60%)",
            }}
            >
                <div className="mt-[120px] mx-4">
                    <p className='mt-[16px] mb-[16px] font-semibold text-center text-[#bfbfbf] text-[1rem]'>Gana presencia online</p>
                    <h2 className='text-center text-white font-bold text-[1.4rem]'>
                        <TypewriterWeb/>
                    </h2>
                </div>
                <div className="mt-[60px]">
                <a 
                 href="https://api.whatsapp.com/send?phone=5493813380751">
                <button
                style={{filter: "brightness(100%)"}}
                className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                <span
                  style={{
                    backgroundImage: 'conic-gradient(from 90deg at 50% 50%, #364ac6 0%, hsl(206deg 66.51% 49.59%) 50%, hsl(161.07deg 53.43% 40.35%) 100%)',
                  }}
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
                >
                </span>
                <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2"
                >
                Contactanos
                <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                ></path>
                </svg>
                </span>
               </button>
                </a>
   
                
                </div>
            </section>
            
            <h2 className="text-center text-blue-300 text-xl font-semibold my-10">Planes</h2>
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