import { Montserrat } from "next/font/google";
import rocket from "@/images/assets/rocketenh.png";
import Link from "next/link";

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
                  <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                  <p class="ml-2 text-black font-semibold uppercase tracking-loose">¿DONDE EMPEZAR?</p>
                  <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"></p>
                  <p class="text-sm md:text-base text-gray-800 mb-4">
                  Nuestros servicios se adaptan perfectamente a tu sector y a tus necesidades específicas. Te ofrecemos una llamada de consultoría para aclarar cualquier duda que tengas y proporcionarte el máximo valor 💎
                  </p>
            </div>
      
               <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
               <div className="container mx-auto w-full h-full">
               <div className="relative wrap overflow-hidden p-10 h-full">
               <div className="border-1 absolute h-full"
               style={{ right: '50%', border: '1px solid #006dfe', borderRadius: '60%' }}></div>
              <div className="border-2 absolute h-full"
              style={{ left: '50%', border: '1px solid #006dfe', borderRadius: '60%' }}></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-6/12 px-1 py-4 text-left">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Desarrollo web </h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Desarrollo web a medida con diseño atractivo y adaptable dispositivo, desde móviles hasta pantallas grandes.
                </p>
                <p className="text-sm font-semibold mb-4">E-commerce | Catálogo | Portafolio | Landing | </p>
                <Link href="./preciosweb"
                class="bg-transparent mr-auto text-blue-600 hover:bg-gray-100  hover:text-blue-600 font-semibold rounded shadow hover:shadow-lg py-2 px-4 border border-blue-500 hover:border-blue-600">
                VER PRECIOS</Link>
              </div>
              
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-left">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Anuncios en redes</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Atrae clientes potenciales, aumenta las ventas y haz crecer tu negocio con anuncios segmentados y efectivos.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-[1px] py-4 text-left">
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
            <img className="mx-auto -mt-36 md:-mt-36 h-[250px] w-[330px]" src={rocket.src} alt="Impulsa tu negocio" />
           </div>
           </div>
           </div>
          </div>



        </section>
    )
}