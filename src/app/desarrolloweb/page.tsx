import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import React from 'react';
import delay from 'delay';
import TypewriterWeb from "./components/TypewriterWeb";
import heroimg from '/public/images/assets/web-hero-optimized-og.jpg';
import Mensual from '../components/Mensual';
import ServiceCard from './components/ServiceCard';
import Pricing from './components/Pricing';
import WhatsappLive from '../components/snippets/wsp/WhatsappLive';

export const metadata: Metadata = {
  title: 'Desarrollo Web - Periferia Digital',
  description: 'Paginas web a medida para tu negocio.',
  openGraph: {
    title: 'Desarrollo Web - Periferia Digital',
    description: 'Presencia online al alcance de tus dedos.',
    type: 'website'
  }
}

export default async function Desarrolloweb() {

  
  await delay(2500); // Espera 2.5 segundos


  return (
    <div>
      <Nav />
      <main>

            <section
            className="h-[450px] md:h-[520px] flex flex-col items-center"
            style={{
                backgroundImage: `url(${heroimg.src})`, // Solo se usa heroimg
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maskImage: 'linear-gradient(black 95%, transparent)',
                //filter: "brightness(60%)",
                }}
            >
                <div className="mt-[120px] mx-[34px]">
                    <p className='mt-[16px] mb-[16px] font-semibold text-center text-[#bfbfbf] text-[1rem]'>Gana presencia online</p>
                    <h2 className='text-center text-white font-bold text-[1.4rem]'>
                        <TypewriterWeb/>
                    </h2>
                </div>
                <div className="mt-[60px] flex justify-center">
                <a 
                 target="_blank"
                 href="https://calendly.com/periferiadigital0/reserve-su-llamada-por-zoom">
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
                Solicita tu presupuesto
                <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M2 21L17 21" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L22 21" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="#FFFFFF" stroke-width="1.5"></path></svg>
                </span>
               </button>
                </a>   
                
                </div>
                
            </section>

            <section className='my-[70px]'>
            <div className="grid grid-cols-[1fr_auto_1fr] mb-[30px]">
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                <h3 className='text-[16px] font-bold px-2 text-xl text-center'>Creamos y desarrollamos el sitio web ideal para tu negocio</h3>
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
            </div>
            
            <div className='flex justify-evenly flex-wrap gap-y-5'>
              
              <ServiceCard title='Presenta tu negocio al mundo'
              description='Tu página web es la vitrina de tus servicios y representa a tu empresa, el espacio ideal para captar nuevos clientes. Cuando alguien busca un producto o servicio específico, ¿crees que confiará más en una empresa con página web o sin ella?'
              number='01' 
              svg={<svg width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 12.5L8 14.5L7 18L8 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}/>

<ServiceCard title='Conéctate con tus clientes'
              description='Cuando un cliente busca un producto específico, no suele perder tiempo navegando demasiado en internet. Las páginas mejor posicionadas en los resultados de búsqueda captan más la atención de los compradores. Aumenta tu visibilidad con una web optimizada.'
              number='02' 
              svg={<svg width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}/>

<ServiceCard title='Optimizamos tu posicionamiento SEO en Google'
              description='Tu página web es también el mejor canal para que tus clientes se pongan en contacto contigo y expresen sus necesidades. Además, les proporciona toda la información clave: ubicación, horarios, incidencias y más.'
              number='03' 
              svg={<svg width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000000" stroke-width="1.5"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}/>

<ServiceCard title='Alcanza a más clientes por menos'
              description='Con una web corporativa, cualquier persona, esté donde esté, puede conocer tus productos y servicios. Expande el alcance de tu negocio y refuerza la fidelidad de tus clientes actuales, consolidando la reputación de tu marca.'
              number='04' 
              svg={<svg width="36px" height="36px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6.5L8.5 10.5" stroke="#000000" stroke-width="1.5"></path><path d="M8.5 13.5L15.5 17.5" stroke="#000000" stroke-width="1.5"></path></svg>}/>
            </div>
            </section>

            <section
                className="py-[70px] bg-white border-y-[0.4px] border-gray-300 shadow-lg"
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#F3F3F3',
                    backgroundImage: `linear-gradient(0deg, transparent 24%, #E1E1E1 25%, #E1E1E1 26%, transparent 27%, transparent 74%, #E1E1E1 75%, #E1E1E1 76%, transparent 77%, transparent)`,
                    backgroundSize: '55px 55px',
                }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-left mb-4">¿Por qué es fundamental tener una página web?</h2>
                    <p className="text-md text-left">El entorno empresarial está en constante cambio, y junto con él, la forma en que tus clientes se conectan contigo. Antes, las recomendaciones de amigos y familiares eran clave para elegir un servicio; hoy en día, todos sabemos que la búsqueda comienza en internet. Por eso, necesitas una página web para que tus futuros clientes puedan encontrarte fácilmente en el mundo digital.</p>
                    <h2 className="text-2xl font-bold text-left mt-[50px] mb-4">Ventajas de contar con una página web de calidad</h2>
                    <p className="text-md text-left">Una página web bien diseñada no solo aumenta tu visibilidad en internet, sino que también impulsa tus oportunidades de venta y mejora la confianza de tus clientes.</p>
                    <p className="text-md text-left">Tener una presencia digital sólida es fundamental para cualquier negocio, sin importar su tamaño, incluso si no realizas ventas en línea.</p>
                    <p className="text-md text-left">Descubre aquí todos los beneficios de una página web adaptada para tu caso en específico.</p>
                </div>
            </section>

            <section className='my-[40px]'>
                <div className="grid grid-cols-[1fr_auto_1fr] mb-[30px]">
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                    <h3 className='text-[16px] font-bold px-2 text-xl text-center'>Precios</h3>
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                </div>

                <Pricing/>
            </section>
            
            
            
            <Mensual/>

            <WhatsappLive encodedMessage="Me gustaria saber más sobre la creación de paginas web!"/>
      </main>
      <Footer />
    </div>
  );
}