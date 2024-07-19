import secAdsImage from '@/images/assets/secads-2.jpg';

export default function Heroads(){
    return(
        <>
        <main>
            <section
            className="h-[400px] md:h-[520px] flex flex-col items-center"
            style={{ backgroundImage: `url(${secAdsImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            //filter: "brightness(60%)",
            }}
            >
                <div className="mt-[160px]">
                    <span className='mt-[20px] font-semibold text-center text-white text-[1rem]'>Gana presencia online</span>
                    <h1 className='text-center text-white font-bold text-[2rem]'>
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
        </main>
        </>
    )
}