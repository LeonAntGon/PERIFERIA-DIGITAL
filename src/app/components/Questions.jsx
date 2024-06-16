import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    subsets:['latin'],
  })

export default function Questions() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const web = "Una página web es esencial para establecer presencia online, alcanzar nuevos clientes, brindar información sobre productos/servicios, mejorar la visibilidad y credibilidad de un negocio.";

  const anuncios = "El uso de Facebook Ads impacta positivamente a un negocio al aumentar la visibilidad, llegar a una audiencia específica, generar clientes potenciales y mejorar las ventas."

  const comunity = "El objetivo del Community Manager es construir y gestionar comunidades online, interactuar con la audiencia, fomentar la lealtad de los clientes, aumentar la visibilidad y participación en redes sociales para convertir clientes potenciales."

  const mensajeria = "Ideal si recibes muchas consultas y buscas ofrecer soporte 24/7; asimismo, permite personalizar la experiencia del cliente y reducir costos."

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
       key="1" aria-label="Accordion 1" title="¿Cual es la necesidad de una pagina web?">
        <p className="text-sm">{web}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="2" aria-label="Accordion 2" title="¿Como impacta el uso de Facebook Ads?">
        <p className="text-sm">{anuncios}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="3" aria-label="Accordion 3" title="¿Cual es el objetivo del comunity manager?">
        <p className="text-sm">{comunity}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="4" aria-label="Accordion 3" title="¿Cuando y por qué es recomendable la mensajería automatizada?">
        <p className="text-sm">{mensajeria}</p>
      </AccordionItem>
    </Accordion>
    </div>
    </section>
  );
}
