"use client"

import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx'
import Neonbtn from '../components/Neonbtn.js';


export default function Contacto(){

    return(
        <>
        <Nav />
        <main className='h-[440px] bg-[#0e0e0e]'>

        <section >
            <div className='h-[200px] pt-[36px] flex justify-center'>
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