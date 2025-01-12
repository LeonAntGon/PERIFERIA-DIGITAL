import Link from "next/link";

export default function Pricing(): JSX.Element {

    const whatsappNumber = "+5493816659628";
    const baseUrl = "https://api.whatsapp.com/send";
    let encodedMessageExpress = "Hola, me interesó su plan de Web en 48 horas por $40.000 pesos.";
    let encodedMessagePremium = "Hola, me interesa saber más sobre las diferentes opciones que ofrecen para un sitio web personalizado.";
    const whatsappLinkExpress = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessageExpress}&type=phone_number&app_absent=0`;
    const whatsappLinkPremium = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessageExpress}&type=phone_number&app_absent=0`;


    return <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
            <div
                className="rounded-2xl border border-blue-300 p-6 shadow-sm ring-1 ring-blue-300 sm:order-last sm:px-8 lg:p-12"
            >
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                        Web personalizada <br></br> <span className="text-sm text-gray-500"> Hecha para destacar </span>
                        
                    

                      
                    
                    </h2>

                    <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-3xl"> Consultar </strong><span className="text-sm font-medium text-gray-700">/pago único</span>
                        <div className="grid grid-cols-[1fr_auto_1fr] my-[16px]">
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                    <span className="text-gray-700">Abonar mensual</span>
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                </div>

                        
                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                                      

                    

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Sistema de Reseñas </span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Mejores practicas SEO </span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Chat-Bot asistente virtual </span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700">Paginas inter-conectadas</span>
                    </li>
                    


                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Todo del Web express</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Google Analytics </span>
                    </li>
                </ul>

                <Link
                    href={whatsappLinkPremium}
                    className="mt-8 block rounded-full border border-black bg-black px-12 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 hover:ring-1 hover:ring-black focus:outline-none focus:ring"
                >
                    Me interesa!
                </Link>
            </div>

            <div className="rounded-2xl border border-blue-300 p-6 shadow-sm sm:px-8 lg:p-12">
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                        Web express <br></br> <span className="text-sm text-gray-500">Tu Web en solo 48hrs</span>
                        
                    

                      
                    
                    </h2>

                    <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-3xl"> 300.000$ </strong><span className="text-sm font-medium text-gray-700">/pago único</span>
                        <div className="grid grid-cols-[1fr_auto_1fr] my-[16px]">
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                    <span className="text-gray-700">Abono mensual: $20.000</span>
                    <div className="w-full h-[0.5px] bg-gray-400 my-[12px]"></div>
                </div>

                        
                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Landing Page</span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Botón de Whats-App </span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700"> Links de Redes sociales </span>
                    </li>

                    <li className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700">Sección con Google Maps</span>
                    </li>
                </ul>

                

                <li className="flex items-center gap-1 mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-blue-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <span className="text-gray-700">SEO Básico</span>
                    </li>
                    
                    

                <Link
                    href={whatsappLinkExpress}
                    className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                    Me interesa!
                </Link>
            </div>
        </div>
    </div>;
}