import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    subsets:['latin'],
  })

export default function Questions() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const web = "Una página web es esencial para establecer presencia online, alcanzar nuevos clientes, brindar información sobre productos/servicios, mejorar la visibilidad y credibilidad de un negocio.";

  const anuncios = "El uso de anuncios en Instagram y Facebook aumenta significativamente la visibilidad de tu negocio, permitiéndote llegar a una audiencia específica, generar clientes potenciales y mejorar las ventas. Dependiendo de tu negocio, las estrategias de retargeting pueden variar, pero nuestro objetivo principal es potenciar tus publicaciones para maximizar su impacto."

  const mensajeria = "Ideal si recibes muchas consultas y buscas ofrecer soporte 24/7; asimismo, permite personalizar la experiencia del cliente y reducir costos."

  const general = "Sí, claro. En el enlace de contacto, encontrarás nuestro número de WhatsApp y un formulario para una asistencia más rápida si lo prefieres 🖥️"

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
      key="2" aria-label="Accordion 2" title="¿Como impacta el uso de los anuncios?">
        <p className="text-sm">{anuncios}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="4" aria-label="Accordion 3" title="¿Cuando y por qué es recomendable la mensajería automatizada?">
        <p className="text-sm">{mensajeria}</p>
      </AccordionItem>
      <AccordionItem className={`[&>h2>button>div>span]:text-[16px] [&>h2>button>div>span]:font-semibold`} 
      key="3" aria-label="Accordion 4" title="¿Puedo contactarles directamente para aclarar mis dudas?">
        <p className="text-sm">{general}</p>
      </AccordionItem>
      
    </Accordion>
    </div>
    </section>
  );
}
