import customerserv from '/public/images/assets/icons/customerservice.png';
import support from '/public/images/assets/icons/support.png';
import security from '/public/images/assets/icons/security.png';
import Image from 'next/image';

export default function Mensual(): JSX.Element {
    return (
        <section className='border-y-[0.4px] border-gray-300 shadow-lg px-6 pt-8 pb-12'>
            <h2 className='text-center text-2xl font-bold pb-4'>¿Qué incluye el <span className='text-[#d8bb00] '>abono mensual?</span></h2>
            <div className='flex flex-wrap justify-center [&>div>h3]:flex [&>div>h3]:text-[#d8bb00] [&>div>h3]:font-semibold 
            [&>div>h3]:items-center gap-x-8 [&>div>h3>svg]:mr-2 [&>div>h3>img]:mr-2 [&>div>h3]:mt-3'>
                <div>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 3v18h18" />
                            <path d="M20 18v3" />
                            <path d="M16 16v5" />
                            <path d="M12 13v8" />
                            <path d="M8 16v5" />
                            <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
                        </svg>
                        Estadísticas de visitas
                    </h3>
                    <p>Análisis detallado de tráfico web y comportamiento de usuarios.</p>
                    <h3>
                        <Image src={customerserv} className="w-[40px]" alt="Soporte Técnico" />
                        Soporte Técnico
                    </h3>
                    <p>Asistencia especializada para resolver problemas técnicos.</p>
                    <h3>
                        <Image src={support} className="w-[40px]" alt="Mantenimiento" />
                        Mantenimiento
                    </h3>
                    <p>Actualización y optimización regular del sitio web.</p>
                </div>
                <div>
                    <h3>
                        <svg width="40px" height="40px" strokeWidth="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M6 18.01L6.01 17.9989" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 6.01L6.01 5.99889" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M2 9.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H2.6C2.26863 10 2 9.73137 2 9.4Z" stroke="#000000" strokeWidth="1.2"></path>
                            <path d="M2 21.4V14.6C2 14.2686 2.26863 14 2.6 14H21.4C21.7314 14 22 14.2686 22 14.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="#000000" strokeWidth="1.2"></path>
                        </svg>
                        Hosting
                    </h3>
                    <p>Almacenamiento seguro y en funcionamiento 24/7</p>
                    <h3>
                        <Image className="w-[40px]" src={security} alt="Seguridad" />
                        Seguridad
                    </h3>
                    <p>Protección contra amenazas y ataques cibernéticos.</p>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-24-hours" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
                            <path d="M4 5v4h4" />
                            <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
                            <path d="M18 15v2a1 1 0 0 0 1 1h1" />
                            <path d="M21 15v6" />
                        </svg>
                        Monitoreo 24hs
                    </h3>
                    <p>Vigilancia continua para garantizar el funcionamiento del sitio.</p>
                </div>
            </div>
        </section>
    )
}