import { Roboto } from "next/font/google"
import { Saira_Condensed } from "next/font/google"
import chess from '@/images/assets/chessblue.jpg'
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

            <section className="flex content-between items-center">

                <div className="w-[40%]">
                    <h1 className={`text-center text-[16px] ${robo.className}`}>ESTRATEGIAS DIGITALES <br></br> PARA TU &nbsp;
                    <span className={`text-[20px] stroke-black ${saira.className}`}
                    style={{
                        color: '#87b9ff',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: '#000000',
                    }}>NEGOCIO</span></h1>
                </div>
                <div className="w-[60%]">
                    <img className="w-[100%] h-[100%]" src={chess.src} alt="Hero image"/>
                </div>
            </section>
            

            <Services />
        </main>
    )
}