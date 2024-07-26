"use client"
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx';
import Questions from './components/Questions.jsx';
import React from 'react';

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Questions />
    <Footer />
    </>
  );
}
