import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TypewriterAds from './components/TypewriterAds'
import heroimg from '/public/images/assets/google-logo.jpg';
import OurOffer from './components/OurOffer';
import WhatsappLive from '../components/snippets/wsp/WhatsappLive';

export default function gestorDeResenas(){
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
                maskImage: 'linear-gradient(black 95%, transparent)',
                //filter: "brightness(60%)",
                }}
            >
                <div className="mt-[120px] mx-[34px]">
                    <p className='mt-[16px] mb-[16px] font-semibold text-center text-[#bfbfbf] text-[1rem]'>Posicionamiento Web</p>
                    <h2 className='text-center text-white font-bold text-[1.4rem]'>
                        <TypewriterAds/>
                    </h2>
                </div>
                <div className="mt-[80px] flex justify-center">
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
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M20 20H4V4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 16.5L12 9L15 12L19.5 7.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
               </button>
                </a>   
                
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
                    <h2 className="text-2xl font-bold text-left mb-4">Google Ads (anteriormente Google AdWords)</h2>
                    <p className="text-md text-left">es la plataforma publicitaria de Google y su principal fuente de ingresos, lanzada inicialmente en el año 2000. Desde entonces, ha dominado el mercado de la publicidad digital. En 2016, los ingresos de Google Ads alcanzaron los $79 mil millones de dólares, dejando a Facebook Ads en segundo lugar con $26 mil millones.</p>
                    <h3 className="text-2xl font-bold text-left mt-[50px] mb-3">¿Qué hace tan atractiva a esta plataforma de anuncios?</h3>
                    <p className="text-md text-left">Google Ads permite a las empresas pagar para destacarse en internet, aunque no se trata solo de pagar para aparecer. Su mayor ventaja es la capacidad de mostrar anuncios a un público altamente segmentado.</p>
                    <p className="text-md text-left mt-2"><span className='font-semibold'>Por ejemplo:</span>Una empresa de suplementos podría lanzar un producto de vitaminas para personas mayores de 60 años y aprovechar la segmentación para llegar a un público específico, en lugar de publicitar para una audiencia amplia y poco relacionada con el producto.</p>
                    <h3 className="text-2xl font-bold text-left mt-[50px] mb-3">¿Cómo funciona Google Ads?</h3>
                    <p className="text-md text-left">Contrario a lo que podría parecer, Google Ads no funciona con una tarifa fija para aparecer en los resultados de búsqueda. En realidad, es una subasta en la que los anunciantes pujan por clics. Sin embargo, el anuncio mejor posicionado no es necesariamente el que ofrece la mayor cantidad de dinero, ya que Google también evalúa la calidad del anuncio a través del Ad Rank.</p>
                    <h3 className="text-2xl font-bold text-left mt-[50px] mb-3">¿De qué se compone el Ad Rank?</h3>
                    <p className='mb-1'>De forma resumida, el Ad Rank se compone por:</p>
                    <p>Índice de calidad (IQ) x oferta máxima de Costo por Clic (CPC)</p>
                    <p>Lo que significa que si el índice de calidad de un anuncio es alto, puede lograr una buena posición en la subasta incluso con una <span>oferta menor</span> que la de la competencia.</p>    
                    <h3 className="text-2xl font-bold text-left mt-[50px] mb-3">Conclusión</h3>
                    <p className='mb-1'>Google Ads es una herramienta esencial en cualquier estrategia de marketing digital, especialmente en campañas de anuncios patrocinados. Aunque es un universo complejo en el que los principiantes pueden cometer errores, aprender de ellos y planificar correctamente puede hacer que Google Ads se convierta en una parte clave y permanente de una estrategia de adquisición de clientes.</p>
                </div>
                
            </section>

            <OurOffer/>
            <WhatsappLive encodedMessage="Me interesa saber más sobre el sus servicios de Google Ads"/>
            </main>
        <Footer/>

        </>
    )
}