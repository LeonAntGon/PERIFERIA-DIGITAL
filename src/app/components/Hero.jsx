import { Roboto } from "next/font/google"
import { Saira_Condensed } from "next/font/google"
import chess from '@/images/assets/chessblue.jpg'
import rocket from '@/images/assets/rocket_moon.mp4'
import Services from "./Services"

const robo = Roboto({
    weight: "900",
    subsets:['latin'],
  })

const saira = Saira_Condensed({
    weight: "800",
    subsets:['latin'],
  })

export default function Hero(){
    return(
        <main >


            
            <section className="h-screen relative z-10">
                <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
                <source src={rocket} type="video/mp4" />
            </video>
            </section>
            
            <section></section>
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