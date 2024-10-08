"use client"
import React, { useEffect, useState } from 'react'
import Nav from "../../components/Nav.jsx";
import Mensual from "../../components/Mensual.jsx";
import Footer from "../../components/Footer.jsx";
import heroimg from '/public/images/assets/epic-imgs/restaurant.svg';
import Image from "next/image.js";
import delay from 'delay';

function Restaurantes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await delay(1000); // Wait for 2.5 seconds
      setLoading(false); // Set loading to false after delay
    };

    loadData();
  }, []);

  

   const containerStyle = {
          width: '100%',
          height: '100%',
          maxHeight: '250px',
          background: '#000000',
          '--gap': '5em',
          '--line': '1px',
          '--color': 'rgba(255, 255, 255, 0.2)',
          backgroundImage: `linear-gradient(
            -90deg,
            transparent calc(var(--gap) - var(--line)),
            var(--color) calc(var(--gap) - var(--line) + 1px),
            var(--color) var(--gap)
          ),
          linear-gradient(
            0deg,
            transparent calc(var(--gap) - var(--line)),
            var(--color) calc(var(--gap) - var(--line) + 1px),
            var(--color) var(--gap)
          )`,
          backgroundSize: 'var(--gap) var(--gap)',
        };


  return (
    <>
                <Nav/>
                <main>
                <section className="mt-5 flex flex-wrap justify-center lg:justify-between lg:flex-nowrap">
                    <div className=" mx-8 mt-[85px] h-[200px] lg:h-350px">
                <h1 className="  text-center text-[28px] font-semibold ">Desarrollo web para <span className="text-blue-500">Restaurantes</span></h1>
                <p className="text-center mt-6">Ya sea por algo simple como una carta digital, un sitio web, <br></br>o la implementación de sistemas para tener mayor control de su restaurante, <br></br><span className='font-semibold'>podemos ayudarle.</span></p>
                </div>

                <div className="">
                <Image className="md:mt-[60px] mt-[60px] mr-8 max-w-[600px] w-[100%]" src={heroimg} alt="Imagen representativa de restaurantes" />
                </div>
            

            

            </section>

            <section className="mt-[75px] mx-8  ">

                <div>
                <h2 className="text-center text-xl font-semibold">¿Cómo se compone el <span className="text-blue-500">Diseño de una Página Web para Empresas?</span></h2>

                <p className="text-center my-[30px]">
                Es una página web con páginas internas. Se utiliza para sitios empresariales, a modo institucional o de mostrar los servicios que se ofrecen.</p>
                </div>

                
            </section>

            <section className=" flex flex-wrap [&>div>h3]:flex mx-[45px] my-[50px] [&>div>h3]:items-center [&>div>h3]:mt-2 [&>div>h3>svg]:bg-blue-200 [&>div>h3>svg]:rounded-lg
            [&>div>h3>span]:ml-3">

                <div className="ml-[15px] lg:ml-[40px]">

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
               <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
               <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
               </svg>
                <span>Diseño personalizado + Diseño gráfico</span>
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3.33789 17C5.06694 19.989 8.29866 22 12.0001 22C15.7015 22 18.9332 19.989 20.6622 17" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C15.7015 2 18.9332 4.01099 20.6622 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 21.9506C13 21.9506 14.4079 20.0966 15.2947 16.9999" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.04932C13 2.04932 14.4079 3.90328 15.2947 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21.9506C11 21.9506 9.59215 20.0966 8.70532 16.9999" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 2.04932C11 2.04932 9.59215 3.90328 8.70532 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10L10.5 15L12 10L13.5 15L15 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10L2.5 15L4 10L5.5 15L7 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 10L18.5 15L20 10L21.5 15L23 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>Hasta 6 Páginas Internas</span>
                </h3>


                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16L10 13L21 18" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>Contenido que quieras mostrar</span>
                </h3>

                <h3>
                <svg width="30px" height="30px" viewBox="0 0 24 24" stroke-width="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 9L13.5 12L18 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 13.5H5" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10.5H5" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>Formulario de contacto</span>

                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span>Botón de Whats App</span>

                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
                </svg>
                <span>Optimización para Google</span>
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6.5L8.5 10.5" stroke="#000000" stroke-width="1.2"></path><path d="M8.5 13.5L15.5 17.5" stroke="#000000" stroke-width="1.2"></path></svg>
                <span>Enlace a redes sociales</span>
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16.01L12.01 15.9989" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="#000000" stroke-width="1.2"></path></svg>
                <span>Optimización para todos los dispositivos</span>
                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                </svg>
                <span>Optimización y seguridad asegurada</span>
                </h3>

                <h3>
                    
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-kitchen-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
                </svg>
                <span>Menú Digital</span>
                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-quote" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                </svg>
                <span>Reseñas y Testimonios</span>
                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                  <path d="M3 9l4 0" />
                </svg>
                <span>Integración con Plataformas de Delivery</span>
                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-text" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M9 12h6" />
                  <path d="M9 16h6" />
                </svg>
                <span>Reserva en Línea</span>
                </h3>


                </div>

                <div style={{
                    width: '18em',
                    height: '18em',
                    background: 'white',
                    borderRadius: '1em',
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderWidth: '0.4em',
                    boxShadow: '0.3em 0.3em black',
                }} className="mx-auto md:my-auto mt-[120px] md:mt-0">

                    <div style={{
                        borderRadius: "0 0 25px 25px",
                    }} className="bg-blue-300 text-center w-[100px] mx-auto font-bold text-base"> <p>PRECIO</p>
                    </div>

                    <div className="my-6 bg-[#edf5ff] text-center py-2">
                        <p className="font-bold text-[16px]">Desarrollo Web</p>
                        <p className="text-[12px] text-gray-500 line-through">$200.000</p>
                        <p className="font-semibold text-[18px]"> $180.000</p>
                    </div>

                    <div className="mt-5 mb-2 bg-[#edf5ff] text-center py-2">
                        <p className="font-bold text-[16px]">Abono mensual</p>
                        <p className="font-semibold text-[18px]"> $30.000</p>
                    </div>

                    <div className="mt-1 bg-blue-200 text-center h-[46px] rounded-b-lg">
                        <p className="font-bold text-[16px] pt-3 ">Dominio bonificado por un año</p>
                    </div>

                    </div>

                    
            </section>
            
            <section className='h-[250px] flex flex-col items-center'>
                <div className='mb-auto mt-[30px]'>
                    <div><h4 className='text-white font-bold text-center pb-4 text-lg'>Extra</h4></div>
                    <div className='[&>p]:text-white [&>p]:text-md [&>ul>li]:text-white [&>ul>li]:text-sm'>
                        <p className='font-semibold'>Asistencia en la Creación de Contenido:</p>
                        <ul>
                            <li >Redacción de descripciones de platos y creación de contenido visual.</li>
                        </ul>
                        <p className='font-semibold mt-6'>Capacitación en el Uso de la Web:</p>
                        <ul>
                            <li>Formación sobre cómo gestionar el contenido del sitio.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="z-[-1] absolute" style={containerStyle}></div>

            </section>
 
            <Mensual/>
           </main>
        

        <Footer/>
        </>

  )
}

export default Restaurantes;