import secAdsImage from '/public/images/assets/secads-2.jpg';
import FacebookSP from '/public/images/assets/facebookInSmarthPhone.jpg';
import Image from 'next/image';


export default function Heroads(){
    return(
        <>
        <main>
            <section
            className="h-[450px] md:h-[520px] flex flex-col items-center"
            style={{ backgroundImage: `url(${secAdsImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maskImage: 'linear-gradient(black 95%, transparent)',
            //filter: "brightness(60%)",
            }}
            >
                <div className="mt-[120px] mx-4">
                    <p className='mt-[16px] mb-[16px] font-semibold text-center text-[#bfbfbf] text-[1rem]'>Impulsa tus redes sociales</p>
                    <h1 className='text-center text-white font-bold text-[1.4rem]'>
                        INSTAGRAM & FACEBOOK ADS
                    </h1>
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

            
                <artile className=" py-[40px]">
                    <p className='text-[#54595F] text-center font-medium my-4'>Lleva tu marca al siguiente nivel</p>
                    <h2 className='text-center md:text-left text-[1.2rem] font-semibold mb-6 ml-4 mx-8 md:mx-[30px]'>¿Por qué necesitarias servicios de <span className='text-blue-500'>Facebook & Instagram Ads?</span></h2>
                    <section className='flex flex-wrap justify-center lg:grid lg:grid-cols-2 mx-4 md:mx-[30px]'>
                        <div className="mx-8 md:mx-0 lg:mr-8 lg:mt-8">
                            <p className={`my-4 text-[1rem] text-[#54595F]`}>Los servicios de Instagram y Facebook Ads son fundamentales para cualquier negocio que busque mejorar su presencia en línea y alcanzar sus objetivos de marketing.</p>
                            <p className={`my-6 text-[1rem] text-[#54595F]`}>Estas plataformas ofrecen una segmentación precisa, permitiendo que tus anuncios lleguen a audiencias específicas basadas en intereses y ubicación. Con un alcance global masivo y la capacidad de generar leads y ventas directas, estos anuncios optimizan tus inversiones publicitarias. Además, proporcionan herramientas analíticas detalladas para medir el rendimiento y ajustar estrategias en tiempo real. </p>
                            <p className={`my-6 text-[1rem] text-[#54595F]`}>Con opciones creativas y formatos diversos, Instagram y Facebook Ads te ayudan a aumentar la visibilidad de tu marca y a interactuar directamente con tu audiencia, manteniéndote competitivo en el mercado digital actual.</p>
                        </div>
                        <div className='max-w-[512px] max-h-[480px] flex justify-center items-center'>
                            
                            <Image src={FacebookSP} alt="Imagen facebook ads" className='w-full h-full lg:max-h-[512px]'/>                            
                            
                        </div>
                    </section>
                    
                </artile>
            
            <section className="flex items-center justify-center bg-[#ebf0f9] w-full h-[80px] my-[70px]">
                <div className='pb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-quote" width="42" height="42" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    </svg>
                </div>
                <div>
                <p className='font-raleway text-xs md:text-md font-semibold text-center '>&quot;Si tu negocio no está en Internet, tu negocio no existe.&quot; <br></br> Bill Gates</p>

                </div>
                
            </section>
        </main>
        </>
    )
}