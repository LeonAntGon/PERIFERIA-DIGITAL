import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx';
import Questions from './components/Questions';
import React from 'react';
import WhatsappLive from './components/snippets/wsp/WhatsappLive';
import "./globals.css";

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Questions />
    <WhatsappLive encodedMessage="Hola! ¿Hablamos con Periferia Digital?"/>
    <Footer />
    </>
  );
}
