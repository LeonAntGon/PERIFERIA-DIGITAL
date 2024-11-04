import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TypewriterReseñas from './components/TypewriterReseñas'
import heroimg from '/public/images/assets/google-maps.jpg';
import GpsMoving from './components/gpsMoving';
import AnimatedBeam from './components/animatedBeam';
import WhatsappLive from '../components/snippets/wsp/WhatsappLive';

export default function gestorDeResenas(){
    
     
    const containerStyle = {
        width: '100%',
        height: '100%',
        
        background: '#000000',
        '--gap': '5em',
        '--line': '1px',
        '--color': 'rgba(255, 255, 255, 0.2)',
        backgroundImage: `linear-gradient(
          -90deg,
          transparent calc(var(--gap) - var(--line)),
          var(--color) calc(var(--gap) - var(--line) + 1px),
          var(--color) var(--gap)
        ),
        linear-gradient(
          0deg,
          transparent calc(var(--gap) - var(--line)),
          var(--color) calc(var(--gap) - var(--line) + 1px),
          var(--color) var(--gap)
        )`,
        backgroundSize: 'var(--gap) var(--gap)',
      };

    return(
        <>
        
        <Nav/>
        <main>
        <section
            className="h-[450px] md:h-[520px] flex flex-col items-center"
            style={{
                backgroundImage: `url(${heroimg.src})`, // Solo se usa heroimg
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                //maskImage: 'linear-gradient(black 95%, transparent)',
                //filter: "brightness(60%)",
                }}
            >
                <div className="mt-[120px] mx-[34px]">
                    <p className='mt-[16px] mb-[16px] font-semibold text-center text-gray-200 text-[1rem]'>Impulsado con Inteligencia Digital</p>
                    <h2 className='text-center text-white font-bold text-[1.4rem]'>
                        <TypewriterReseñas/>
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
                 Solicita tu Demo
                 <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
               </button>
                </a>   
                
                </div>
                <div className='mt-4'>
                    <p className='text-gray-200  text-sm font-semibold'>Demostración gratis de 7 días</p>
                </div>
                
        </section>


        <section className='border-t border-b border-gray-300 gap-20'
        style={containerStyle}>
            <div className="grid grid-cols-[1fr_auto_1fr] py-[60px] ">
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                <h3 className='text-[16px] font-bold px-2 text-xl text-center text-gray-100'>La importancia de las reseñas en Google Maps</h3>
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
            </div>
            <div className='mx-[50px] md:mx-[90px]'>
                  <p className='text-gray-200'>Según diversas investigaciones y encuestas sobre el comportamiento del consumidor:</p>
                  <ul className='list-disc pl-5 [&>li]:text-gray-200'>
                    <li>Cerca del <span style={{color: 'yellow'}}>90%</span> de los consumidores afirma leer reseñas en línea antes de tomar decisiones de compra. Esto incluye reseñas en Google Maps y otros sitios.</li>
                    <li>Alrededor del <span style={{color: 'yellow'}}>70%</span> de los consumidores considera que las reseñas son un factor importante al decidir a dónde ir a comer o qué negocio visitar.</li>
                    <li>Un estudio de BrightLocal indicó que <span style={{color: 'yellow'}}>85%</span> de los consumidores confían en las reseñas en línea tanto como en recomendaciones personales.</li>
                  </ul>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] py-[60px] ">
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                <h3 className='text-[16px] font-bold px-2 text-xl text-center text-gray-100'>Necesitas posicionar en Google Maps</h3>
                <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
            </div>


            <div className='mx-[50px] md:mx-[90px]'>
                  <p className='text-gray-200'>Según diversas investigaciones y encuestas sobre el comportamiento del consumidor:</p>
                  <ul className='list-disc pl-5 [&>li]:text-gray-200'>
                    <li>La mayoría de las búsquedas en Google Maps son de personas que buscan negocios cercanos para visitarlos pronto, beneficiando a los primeros resultados.</li>
                    <li>Las empresas bien posicionadas en Google Maps pueden ver un aumento de <span className='text-yellow-300'>10 a 30% en visitas</span> a su ubicación física o sitio web. </li>
                  </ul>
            </div>
            <div className='my-8'>
                <GpsMoving/>
            </div>

        </section>

        <section>
        <div className="grid grid-cols-[1fr_auto_1fr] pt-[60px] pb-[50px] ">
                <div className="w-full h-[0.5px] bg-gray-900 my-[12px]"></div>
                <h3 className='text-[16px] font-bold px-2 text-xl text-center text-black'>Nuestra oferta</h3>
                <div className="w-full h-[0.5px] bg-gray-900 my-[12px]"></div>
            </div>
        </section>

        <div className='flex flex-wrap  lg:flex-nowrap justify-center'>
            <div className='mx-[60px]'>
                <p className="md:mt-[40px]" style={{letterSpacing: '2px'}}>Al responder las reseñas de tus clientes,<span className='font-semibold'> Google mejora tu posicionamiento</span>, pero entendemos que no siempre tienes tiempo para hacerlo. Con nuestro gestor automático con IA, podrás responder a las reseñas de tu negocio de manera automática, 24/7.</p>

                <p className="md:mt-[20px]" style={{letterSpacing: '2px'}}>Esta herramienta no solo es más económica que opciones como Google Ads o un sitio web, sino que se enfoca en uno de los activos más importantes para tu negocio: su <span className='font-semibold'>reputación</span>.</p>
            </div>
            <AnimatedBeam/>
        </div>

        
            <div className='flex flex-wrap justify-center flex-col align-content-center' > 
                <div className='flex justify-center'>
                    <a
                    href="#"
                    className=" md:max-w-[400px] mt-8 block rounded-full border border-black bg-black px-12 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 hover:ring-1 hover:ring-black focus:outline-none focus:ring"
                    >
                    Consigue una Demostración!
                    </a>
                </div>
                <div>
                <p className='text-center'>Sin cargo por 7 días</p>
                </div>
            
            
            </div>
            
            <WhatsappLive encodedMessage="Me interesa saber más sobre el Gestor de Reseñas con Inteligencia Artificial porfavor"/>
        </main>
        <Footer/>
        
        </>
    )
}