//import Script from 'next/script';
import world from '@/images/assets/world.mp4'

export default function Contact() {
  return (
    <main className='h-auto bg-[#010001]'>
      <section >


        <div className='h-[150px] flex justify-center'>
          <video autoPlay muted loop className="w-[150px] h-[150px]">
            <source src={world} type="video/mp4" />
          </video>
        </div>

        
        {/*<iframe src="https://lottie.host/embed/784b15fc-3032-4011-a681-4e1a3f0cf5e6/0rrGbGT9Al.json"></iframe>*/}
        

      </section>
    </main>
  );
}