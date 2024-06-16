import { Montserrat } from "next/font/google";
import rocket from "@/images/assets/rocket.png";

const mont = Montserrat({
    subsets:['latin'],
  })

export default function Services(){
    return(
        <section className="mt-4">


            <div className="flex">
               <div class="w-full h-[0.5px] Altura de la línea bg-gray-400 my-[12px]"></div>
                <h3 className={`text-[16px] font-bold px-2 text-xl ${mont.className}`}>Servicios</h3>
                <div class="w-full h-[0.5px] Altura de la línea bg-gray-400 my-[12px]"></div>
            </div>


            
            <div className="bg-white text-black">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-4 md:my-14">
      
               <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
               <div className="container mx-auto w-full h-full">
               <div className="relative wrap overflow-hidden p-10 h-full">
               <div className="border-1 absolute h-full"
               style={{ right: '50%', border: '1px solid #006dfe', borderRadius: '60%' }}></div>
              <div className="border-2 absolute h-full"
              style={{ left: '50%', border: '1px solid #006dfe', borderRadius: '60%' }}></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Desarrollo web </h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Desarrollo web a medida con diseño atractivo y adaptable dispositivo, desde móviles hasta pantallas grandes.
                </p>
                <p className="text-sm font-semibold">E-commerce | Portafolio | Landing pages | Catálogo</p>
              </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-left">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Facebook Ads</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Atrae clientes potenciales, aumenta las ventas y haz crecer tu negocio con anuncios segmentados y efectivos.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className={`mb-3 font-bold text-lg md:text-xl text-center ${mont.className}`}>Comunity management</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                  Conversion de potenciales clientes mediante optimización en las redes sociales y el manejo de las mismas.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Mensajeria automatizada</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                  Bots de consultoría y automatizacion de mensajes via Whats App, Instagram, Facebook y web.
                </p>
              </div>
            </div>
            </div>
            <img className="mx-auto -mt-36 md:-mt-36 h-[402px] w-[277px]" src={rocket.src} alt="Impulsa tu negocio" />
           </div>
           </div>
           </div>
          </div>



        </section>
    )
}