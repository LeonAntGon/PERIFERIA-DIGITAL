"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
    subsets:['latin'],
  })

export default function Questions() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const web = "Un sitio web personalizado asegura que tu marca se destaque con un diseño único y adaptable a todos los dispositivos, desde móviles hasta pantallas grandes. También optimizamos el sitio para mejorar la experiencia del usuario y facilitar la conversión.";

  const ads = "Los resultados de Google Ads pueden variar según la competencia y la configuración de la campaña, pero normalmente verás un aumento en el tráfico y conversiones dentro de las primeras semanas. Nos enfocamos en optimizar cada campaña para maximizar el rendimiento."

  const reseñasia = "Tener un \"Gestor de Reseñas con IA\" es crucial para tu negocio porque responde automáticamente a los comentarios en Google Maps las 24/7, mejorando la atención al cliente y fortaleciendo tu reputación. Además, al interactuar con las reseñas, demuestras a los motores de búsqueda que valoras la atención al cliente, lo que ayuda a mejorar tu posicionamiento SEO y aumenta la visibilidad de tu negocio."

  const diferencia = "Nos distinguimos por nuestra atención personalizada, la implementación de tecnología avanzada, como la inteligencia artificial para la automatización, y un enfoque estratégico que trasciende lo superficial. Nos enfocamos en lograr resultados medibles y sostenibles que contribuyan al crecimiento de tu negocio, lo que a su vez impulsa nuestro propio desarrollo."

  return (
    <section className="mb-[60px]">
    <div className="flex  mt-[70px] mb-[50px]">
    <div class="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
     <h3 className=" whitespace-nowrap font-bold px-2 text-[18px]">Preguntas frecuentes</h3>
     <div class="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
 </div>
    
    <div className={` mx-[20px] ${mont.className}`}>
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}  
    >
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`}
       key="1" aria-label="Accordion 1" title="¿Qué ventajas tiene un sitio web desarrollado a medida con Periferia Digital?">
        <p className="text-sm">{web}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="2" aria-label="Accordion 2" title="¿Qué tan rápido puedo ver resultados con Google Ads?">
        <p className="text-sm">{ads}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="4" aria-label="Accordion 3" title='¿Por qué es importante tener un "Gestor de Reseñas con IA"?'>
        <p className="text-sm">{reseñasia}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="3" aria-label="Accordion 4" title="¿Qué diferencia a Periferia Digital de otras agencias de marketing digital?">
        <p className="text-sm">{diferencia}</p>
      </AccordionItem>
      
    </Accordion>
    </div>
    </section>
  );
}
