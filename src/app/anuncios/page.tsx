
import Nav from '../components/Nav';
import Heroads from '../components/Heroads';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import React from 'react';
import delay from 'delay';


export const metadata: Metadata = {
    title: 'Anincios en Redes - Periferia Digital',
    description: 'Descripción específica de la página de desarrollo web.',
    openGraph: {
      title: 'Anuncios en Redes - Periferia Digital',
      description: 'Potencia tu presencia en línea con anuncios en redes sociales personalizados. Alcance su audiencia objetivo, aumenta tus conversiones y crece tu negocio con estrategias publicitarias efectivas en Facebook, Instagram.',
      images: [
        {
          url: 'https://drive.google.com/file/d/1UFr-U158IkZ3DBfTmYyiBtdVuMljKGZj/view?usp=drive_link',
          alt: 'Facebook Ads | Instagram Ads'
        }
      ],
      type: 'website'
    }
  }

export default async function Anuncios(){

  await delay(2500);

    return(
        <>
        <Nav/>
        <Heroads/>
        <Footer/>
        </>
    )
}
