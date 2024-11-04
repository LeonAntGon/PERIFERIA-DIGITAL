import Link from 'next/link'; // Añadir importación de Link

export default function Footer() {
  return (
<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center sm:justify-start">
          
        </div>
        
            <div style={{
              background: 'linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98)',
              padding: '1px',
              borderRadius: '1.2rem',
              boxShadow: '0px 1rem 0.6rem -0.9rem #000000e1',
              width:"100%"
            }}>
              <div style={{
                fontSize: '1rem',
                color: '#bec4cf',
                background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)',
                padding: '1.5rem',
                borderRadius: '1.2rem'
              }}>
               Nos enfocamos en atraer no solo más clientes, sino clientes de calidad que reconozcan y aprecien el valor de tu negocio.
            </div>
            </div>

        
        

        
      </div>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-900">Nosotros</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Inicio
              </Link>
            </li>
            
            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/contacto">
                Contacto
              </Link>
            </li>

            
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-900 ">Nuestros servicios</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/desarrolloweb">
                Desarrollo Web
              </Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/gestor-de-reseñas">Gestor de Reseñas</Link>
            </li>

            <li>
              <Link className="text-gray-700 transition hover:text-gray-700/75" href="/google-ads"> Google Ads </Link>
            </li>
            
          </ul>
        </div>

        

        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-900">Contacto</p>

          <ul className="mt-8 space-y-4 text-sm">
          <li>
              <div
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">+54 9 381 665 9628</span>
              </div>
            </li>
            <li>
              <div
                className="flex items-center gap-1.5 justify-start rtl:sm:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 text-gray-700">periferiadigital0@gmail.com</span>
              </div>
            </li>

            

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 flex-1 not-italic text-gray-700 leading-5">
                Argentina <br></br> San Miguel de Tucumán
              </address>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-900 ">Redes sociales</p>

          <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          {/*<li>
            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-900 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>*/}

          <li>
            <Link
              href="https://www.instagram.com/periferia.digital.oficial/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-900 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/periferia-digital/"
              rel="noreferrer"
              target="_blank"
              className="stroke-gray-900 transition hover:stroke-gray-700/75" // Añadido para la transición
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="stroke-gray-900 transition hover:stroke-gray-700/75" width="28px" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 17V13.5V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7.01L7.01 6.99889" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </Link>
          </li>

          

          
        </ul>
          
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">Todos los derechos reservados.</span>

     
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Periferia Digital</p>
      </div>
    </div>
  </div>
</footer>
  );
}
