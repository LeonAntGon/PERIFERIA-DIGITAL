"use client"

import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import toledo from '@/images/capturas/toledo.png'
import male from '@/images/capturas/malemoda.png'
import milena from '@/images/capturas/milenaindumentaria.png'



const img = [toledo, male, milena ]
const titles = ["Taller de Joyería Toledo","Male Moda", "Milena Indumentaria"]
const description = [
  "Pagina Web para taller de Joyería y reparaciones de joyas",
  "Indumentaria de ropa femenina con gran variedad en el catalogo", 
  "Indumentaria mayoriasta y minorista de ropa femenina"]
const links = ["https://joyeriatoledo.online","https://malemoda.shop","https://milenaindumentaria.shop"]


export default function Trabajos(){
    return(
        <>
        <Nav />
        <main className="py-12 px-4">
            <h1 className="text-center">Trabajos</h1>
            <section className="flex flex-wrap justify-around my-5">
            {img.map((img, index) => (
                <div className={`inline-block min-w-13 min-h-13 max-w-[290px] max-h-[540px]
                rounded-lg my-5`} key={index}>
                <div className="w-[275px] h-[368px] mx-2 mt-3">
                    <img className="w-full h-full rounded-lg" src={img.src} alt="" />
                </div>
                <div className="mx-2">
                    <h2 className={`text-center font-semibold `}>{titles[index]}</h2>
                    <p className={``}>{description[index]}</p>
                    <p className="text-center "><a className="text-blue-500 underline" href={`${links[index]}`}>{links[index]}</a></p>
                </div>
                </div>
                ))}
            </section>
        </main>

        <Footer />
        </>
    )
}