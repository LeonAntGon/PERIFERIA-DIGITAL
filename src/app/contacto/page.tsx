import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx'
import Neonbtn from '../components/animations/Neonbtn.jsx';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Contacto - Periferia Digital',
    openGraph: {
      images: [
        {
          url: 'https://drive.google.com/file/d/1UFr-U158IkZ3DBfTmYyiBtdVuMljKGZj/view?usp=drive_link',
          alt: 'Facebook Ads | Instagram Ads'
        }
      ],
      type: 'website'
    }
  }
export default function Contacto(){

    return(
        <>
        <Nav />
        <main className='h-[520px] bg-[#0e0e0e]'>
            <h2 className='pt-[30px] text-center text-xl font-semibold text-gray-200'>Contactanos </h2>

        <section >
            <div className='h-[200px] lg:h-[300px] pt-[36px] flex justify-center'>
            <iframe src="https://lottie.host/embed/19e5e41f-55af-4509-9245-ab94b02e1ad9/h1MTodJBqA.json"></iframe> 
            </div>
            {/*<iframe src="https://lottie.host/embed/784b15fc-3032-4011-a681-4e1a3f0cf5e6/0rrGbGT9Al.json"></iframe>*/}
            </section>


            <section className='flex justify-center mt-6'>
                <Neonbtn/>
            </section>
        </main>
        <Footer />
        </>
    );
};