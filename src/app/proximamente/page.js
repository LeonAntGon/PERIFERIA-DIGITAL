"use client"
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hamster from './components/Hamster'

export default function Proximamente(){
    return(
        <>
        <Nav/>
        <main className='h-[100vh] flex flex-wrap content-center flex-col justify-center '>  
          <div><Hamster/></div>
          <div><p className='text-center text-gray-800 font-semibold mx-8 mt-4'>Debido a la alta demanda, actualmente no estamos brindando este servicio de manera temporal.</p></div>
        </main>
        <Footer/>
        </>
    )
}