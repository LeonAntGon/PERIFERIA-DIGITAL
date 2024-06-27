import Script from 'next/script';

export default function Contact() {
  return (
    <main>
      <section>


        <div>
          <Script
            strategy="afterInteractive" // Load after initial hydration
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          />

          <dotlottie-player
            src="https://lottie.host/784b15fc-3032-4011-a681-4e1a3f0cf5e6/0rrGbGT9Al.json"
            background="transparent"
            speed="1"
            style={{ width: 300, height: 300 }}
            loop
            autoplay
          />
        </div>

        
      </section>
    </main>
  );
}