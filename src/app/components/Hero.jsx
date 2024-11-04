import { Saira_Condensed } from "next/font/google";
import Services from "./Services";
import Drawing from "./animations/Drawing";
import WordsRotatingComp from "./animations/Wordsrotatingcomp.jsx";


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

      <section className="h-[550px] flex flex-col items-center"
      style={{
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)',
            maskSize: '100% 100%'
      }}>
        <div className="mt-[120px] mx-4">
            <Drawing/>
            <WordsRotatingComp/>
            <div className="mt-[10px] flex justify-center">
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
                Agenda una llamada
                <svg className="ml-2 mr-[-2px]" width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2V6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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