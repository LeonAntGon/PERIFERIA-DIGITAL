import { Montserrat } from "next/font/google";
import rocket from "@/images/assets/rocketenh.png";
import Link from "next/link";

const mont = Montserrat({
    subsets:['latin'],
  })

export default function Services(){
    return(
        <section className="mt-[40px]">


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
                <Link href="/preciosweb" passHref>
                <button
                className="relative flex items-center justify-center w-[130px] h-10 bg-black text-white font-semibold gap-2 cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.103)] transition duration-300 overflow-hidden"
                style={{ border: 'none' }}
                onMouseOver={(e) => {
                const before = e.currentTarget.querySelector('span');
                before.style.transform = 'translate(100%,-50%)';
                before.style.borderRadius = '0';
                }}
                onMouseOut={(e) => {
                const before = e.currentTarget.querySelector('span');
                 before.style.transform = '';
                before.style.borderRadius = '50%';
                }}
                onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translate(5px,5px)';
                 }}
                 onMouseUp={(e) => {
                e.currentTarget.style.transform = '';
                }}
                >
               VER PRECIOS
              <span
              className="absolute bg-white rounded-full"
              style={{
              width: '130px',
              height: '130px',
              left: '-100%',
              top: '0',
              transitionDuration: '0.3s',
              mixBlendMode: 'difference',
              }}
             ></span>
             </button>
                </Link>
              </div>
              
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4">
                <h4 className={`mb-3 font-bold text-lg md:text-xl ${mont.className}`}>Trafficker Digital</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Maximiza las probabilidades de venta asegurando que tu contenido llegue a la audiencia correcta mediante anuncios estrategicos.</p>
                <p className="text-sm font-semibold mb-4">Instagram Ads | Facebook Ads </p>
                <Link href="/proximamente" passHref>
                <button
                className="mt-4 relative flex items-center justify-center w-[130px] h-10 bg-black text-white font-semibold gap-2 cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.103)] transition duration-300 overflow-hidden"
                style={{ border: 'none' }}
                onMouseOver={(e) => {
                const before = e.currentTarget.querySelector('span');
                before.style.transform = 'translate(100%,-50%)';
                before.style.borderRadius = '0';
                }}
                onMouseOut={(e) => {
                const before = e.currentTarget.querySelector('span');
                 before.style.transform = '';
                before.style.borderRadius = '50%';
                }}
                onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translate(5px,5px)';
                 }}
                 onMouseUp={(e) => {
                e.currentTarget.style.transform = '';
                }}
                >
               VER PRECIOS
              <span
              className="absolute bg-white rounded-full"
              style={{
              width: '130px',
              height: '130px',
              left: '-100%',
              top: '0',
              transitionDuration: '0.3s',
              mixBlendMode: 'difference',
              }}
             ></span>
             </button>
                </Link>

                
                
              </div>
              
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-[1px] py-4 text-left">
                <h4 className={`mb-3 font-bold text-lg md:text-xl text-center ${mont.className}`}>Mensajeria automatizada</h4>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                Bots de consultoría y/o respuesta con automatizacion de mensajes via Whats App, Instagram, Facebook y web.</p>
                <Link href="/proximamente" passHref>
                <button
                className="mt-4 relative flex items-center justify-center w-[130px] h-10 bg-black text-white font-semibold gap-2 cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.103)] transition duration-300 overflow-hidden"
                style={{ border: 'none' }}
                onMouseOver={(e) => {
                const before = e.currentTarget.querySelector('span');
                before.style.transform = 'translate(100%,-50%)';
                before.style.borderRadius = '0';
                }}
                onMouseOut={(e) => {
                const before = e.currentTarget.querySelector('span');
                 before.style.transform = '';
                before.style.borderRadius = '50%';
                }}
                onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translate(5px,5px)';
                 }}
                 onMouseUp={(e) => {
                e.currentTarget.style.transform = '';
                }}
                >
               VER PRECIOS
              <span
              className="absolute bg-white rounded-full"
              style={{
              width: '130px',
              height: '130px',
              left: '-100%',
              top: '0',
              transitionDuration: '0.3s',
              mixBlendMode: 'difference',
              }}
             ></span>
             </button>
                </Link>

                
                
              </div>
              
            </div>
            
            </div>
            
           </div>
           </div>
           </div>
          </div>

        </section>
    )
}