//import Script from 'next/script';
import Whatsapp from './Whatsapp';

export default function Contact() {
  return (
    <main className='h-auto bg-[#010001]'>
      <section >


        <div className='h-[300px] flex justify-center'>
        <iframe src="https://lottie.host/embed/19e5e41f-55af-4509-9245-ab94b02e1ad9/h1MTodJBqA.json"></iframe> 
        </div>
        

        
        {/*<iframe src="https://lottie.host/embed/784b15fc-3032-4011-a681-4e1a3f0cf5e6/0rrGbGT9Al.json"></iframe>*/}
        

      </section>
      <Whatsapp />
    </main>
  );
}