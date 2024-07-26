
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Web from '../components/Web';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Desarrollo Web - Periferia Digital',
  description: 'Descripción específica de la página de desarrollo web.',
  openGraph: {
    title: 'Desarrollo Web - Periferia Digital',
    description: 'Presencia online al alcance de tus dedos.',
    images: [
      {
        url: 'https://drive.google.com/file/d/1UFr-U158IkZ3DBfTmYyiBtdVuMljKGZj/view?usp=drive_link',
        alt: 'Desarrollo Web'
      }
    ],
    type: 'website'
  }
}

export default function Desarrolloweb() {
  return (
    <div>
      <Nav />
      <Web />
      <Footer />
    </div>
  );
}