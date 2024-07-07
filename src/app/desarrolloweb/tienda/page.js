"use client"
import Nav from "../../components/Nav.jsx";
import Mensual from "../../components/Mensual.jsx";
import Footer from "../../components/Footer.jsx";
import heroimg from '@/images/assets/epic-imgs/shopping.svg';
import Image from "next/image.js";

export default function Tienda(){
    return(
        <>

        <Nav/>

        <main>
            <section className="mt-5 mx-8 flex flex-wrap lg:flex-nowrap">
                <div className=" mt-[85px] h-[200px] lg:h-350px">
                <h1 className="  text-center text-[28px] font-semibold ">Diseño de páginas web para <span className="text-blue-500">Tiendas online & Catálogos </span></h1>
                <p className="text-center mt-6">¿Querés tener un sitio para vender de forma online, o necesitas un catálogo profesional que muestre tus productos o servicios? Esta es la mejor opción. </p>
                </div>

                <div className="">
                <Image className=" mt-[90px] lg:mt-0 max-w-[600px] w-[100%]" src={heroimg} alt="" />
                </div>
            

            

            </section>

            <section className="mt-[75px] mx-8  ">

                <div>
                <h2 className="text-center text-xl font-semibold">¿Cómo se compone el <span className="text-blue-500">Diseño de una Página Web para Tiendas Online?</span></h2>

                <p className="text-center my-[30px]">
                Es un sitio web con secciones internas y una plataforma integrada para vender tus servicios/productos y generar ingresos sin comisiones.
                En caso de no usar los servicios de compra/venta online, se otorga descuento del <span className="font-semibold">30%</span>.</p>
                </div>

                
            </section>

            <section className=" flex flex-wrap [&>div>h3]:flex mx-[45px] my-[50px] [&>div>h3]:items-center [&>div>h3]:mt-2 [&>div>h3>svg]:bg-blue-200 [&>div>h3>svg]:rounded-lg
            [&>div>h3>svg]:mr-3">

                <div>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brush" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
               <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
               <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
               </svg>
                Diseño personalizado
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3.33789 17C5.06694 19.989 8.29866 22 12.0001 22C15.7015 22 18.9332 19.989 20.6622 17" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C15.7015 2 18.9332 4.01099 20.6622 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 21.9506C13 21.9506 14.4079 20.0966 15.2947 16.9999" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.04932C13 2.04932 14.4079 3.90328 15.2947 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21.9506C11 21.9506 9.59215 20.0966 8.70532 16.9999" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 2.04932C11 2.04932 9.59215 3.90328 8.70532 7" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10L10.5 15L12 10L13.5 15L15 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10L2.5 15L4 10L5.5 15L7 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 10L18.5 15L20 10L21.5 15L23 10" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Hasta 6 Páginas Internas
                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shirt" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                </svg>
                Administración y actualización de productos
                </h3>


                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16L10 13L21 18" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Contenido que quieras mostrar (textos/imágenes/videos)
                </h3>

                <h3>
                <svg width="34px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" stroke="#000000" stroke-width="1.2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19Z" stroke="#000000" stroke-width="1.2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05 17H15V6.6C15 6.26863 14.7314 6 14.4 6H1" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M5.65 17H3.6C3.26863 17 3 16.7314 3 16.4V11.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M2 9L6 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9H20.6101C20.8472 9 21.0621 9.13964 21.1584 9.35632L22.9483 13.3836C22.9824 13.4604 23 13.5434 23 13.6273V16.4C23 16.7314 22.7314 17 22.4 17H20.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path><path d="M15 17H16" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path></svg>
                Diferentes formas de entrega (Envío gratis, Retiro por tienda, Envío con costo)
                </h3>

                <h3>
                <svg width="30px" height="30px" viewBox="0 0 24 24" stroke-width="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M17 17L21 21" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Buscador de productos
                </h3>

                <h3>
                <svg width="30px" height="30px" viewBox="0 0 24 24" stroke-width="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 9L13.5 12L18 9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 13.5H5" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10.5H5" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5" stroke="#000000" stroke-width="1.2" stroke-linecap="round"></path></svg>
                Formulario de contacto

                </h3>

                <h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
                </svg>
                Optimización para posicionamiento en Google
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6.5L8.5 10.5" stroke="#000000" stroke-width="1.2"></path><path d="M8.5 13.5L15.5 17.5" stroke="#000000" stroke-width="1.2"></path></svg>
                Enlace a redes sociales
                </h3>

                <h3>
                <svg width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16.01L12.01 15.9989" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="#000000" stroke-width="1.2"></path></svg>
                Optimización para todos los dispositivos
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
                }} className="mx-auto my-auto mt-[120px] md:mt-0">

                    <div style={{
                        borderRadius: "0 0 25px 25px",
                    }} className="bg-blue-300 text-center w-[100px] mx-auto font-bold"> <p>Precio</p>
                    </div>

                    <div className="my-6 bg-blue-100 text-center py-2">
                        <p className="font-bold text-[16px]">Desarrollo Web</p>
                        <p className="font-semibold text-[18px]"> $90.000</p>
                    </div>

                    <div className="my-6 bg-blue-100 text-center py-2">
                        <p className="font-bold text-[16px]">Abono mensual</p>
                        <p className="font-semibold text-[18px]"> $10.000</p>
                    </div>

                    <div className="mt-6 bg-blue-300 text-center h-[45px] rounded-b-lg">
                        <p className="font-bold text-[16px] pt-3 ">Dominio por un año</p>
                    </div>

                    </div>

                    
            </section>
            

            <Mensual/>

        </main>

        <Footer/>

        </>
    )
}