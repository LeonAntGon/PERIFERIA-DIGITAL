import { Roboto } from "next/font/google";
import { Saira_Condensed } from "next/font/google";
import Services from "./Services";

import Drawing from "./Drawing";
import WordsRotatingComp from "./Wordsrotatingcomp";


const saira = Saira_Condensed({
    weight: "700",
    subsets:['latin'],
  })
  

export default function Hero() {
    
        const containerStyle = {
          width: '100%',
          height: '100%',
          maxHeight: '550px',
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

        
  return (
    <main>

      <section className="h-[550px] flex flex-col items-center">
        <div className="mt-[120px] mx-4">
            <Drawing/>
            <WordsRotatingComp/>
            <div className="mt-[10px] flex justify-center">
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
        </div>
        <div className="z-[-1] absolute" style={containerStyle}></div>
                
                
             
            </section>
            
            
            {/*<section className="flex content-between items-center max-h-[500px]">

                <div className="w-[40%]">
                    <h1 style={{
                    backgroundImage: 'linear-gradient(to right, #41C5C5, #006DC3)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextStroke: '0.3px black',
                    textStroke: '1px black'
                    
                    }} className={`text-center pl-2 text-[16px] sm:text-[18px] ${robo.className}`}>ESTRATEGIAS DIGITALES <br></br> PARA TU &nbsp;
                    <span >NEGOCIO</span></h1>
                </div>
                <div className="w-[60%]">
                    <img className="w-[100%] h-[100%]" src={chess.src} alt="Hero image"/>
                </div>
            </section>*/}
            

            <Services />
        </main>
    )
}