import './styles/card.css'
//import { Button } from "@material-tailwind/react";
export default function Precios(){
    return(
        <main>
            <h1 className="text-center font-semibold my-8 text-xl">Desarrollo Web</h1>
    <h2 className="mx-8 lg:mx-[48px] text-[18px] font-bold text-[#0109ff] opacity-[50%]"> - Planes para emprendedores -</h2>
    <p className="mx-8 lg:mx-[48px] text-[18px] mt-3">Los planes para emprendedores son aplicables a vendedores de productos físicos o digitales, como revendedores, tiendas de indumentaria o comerciantes de productos de marca.</p>
    <p className="mx-8 lg:mx-[48px] text-[15px] mt-1 font-semibold">La cantidad de productos puede afectar significativamente el abonar de la página o el mantenimiento. </p>
    <p className="mx-8 lg:mx-[48px] text-[15px] mt-1 font-semibold">Hasta 20 productos y 4 secciones estos son los precios base:</p>
    <section className="flex flex-wrap justify-center"></section>
        
        <section className=" grid justify-center 
        md:flex md:flex-wrap md:justify-evenly md:my-[80px] my-[40px]">
            {/*Básico */}
             <div className="card">
             <div className="pricing-block-content">
             <p className="pricing-plan">EMPRENDEDOR BÁSICO</p>
             <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
             <p className="price-number">
             $<span className="price-integer">30.000</span>
             </p>
             </div>
             <div className="pricing-note">Mantenimiento: $12.000/m</div>
             <ul className="check-list" role="list">
             <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Modalidad catálogo
            </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Modalidad e-commerce
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Links a redes sociales
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Diseño básico
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Promociones & Codigos de descuento
          </li>
          <li className="check-list-item">
          <span className="rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-x" width="15" height="15" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4l10 16" />
            <path d="M17 4l-10 16" />
            </svg>
            </span>
            Link a Whats-App
          </li>
        </ul>
      </div>
    </div>


     {/*Estándar */}
             <div 
             style={{
                background: 'linear-gradient(to right, #ffffff, #d7edff)',
                
                }
                } className="card my-[50px] md:my-0">
             <div className="pricing-block-content">
             <p className="pricing-plan">EMPRENDEDOR ESTÁNDAR</p>
             <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
             <p className="price-number">
             $<span className="price-integer">45.000</span>
             </p>
             </div>
             <div className="pricing-note">Mantenimiento: $18.000/m</div>
             <ul className="check-list" role="list">
             <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Todo del EMPRENDEDOR BÁSICO
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Dominio personalizado
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Diseño personalizado | Optimización de contenido
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Seguimiento de visitas
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Link a grupo o comunidad
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Link a Whats-App
          </li>
        </ul>
      </div>
    </div>


     {/*Premium */}
             <div className="card"
             style={{
                background: 'linear-gradient(to right, #fff4df, #ffe2ad)',                
                }
                }
             >
             <div className="pricing-block-content">
             <p className="pricing-plan">EMPRENDEDOR PREMIUM</p>
             <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
             <p className="price-number">
             $<span className="price-integer">120.000</span>
             
             </p>
             
             </div>
             <div className="pricing-note">Mantenimiento: $40.000/m</div>
             <div className="pricing-note"></div>
             <ul className="check-list" role="list">
             <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Todo del EMPRENDEDOR ESTÁNDAR
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Optimización de SEO
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Diseño profesinal UX 
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Campaña E-Mail marketing
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Automatización de envíos
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Prioridad de mantenimiento
          </li>

        </ul>
        {/*
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          <p className={`text-black my-1`}>Adquirir</p>
        </Button>*/ }
      </div>
      </div>  
        </section>
        
        <section className=" grid justify-center 
        md:flex md:flex-wrap md:justify-evenly md:my-[80px] my-[40px]">
             
     {/*Estándar */}
             <div 
             style={{
                background: 'linear-gradient(to right, #ffffff, #afafaf)',
                
                }
                } className="card my-[50px] md:my-0">

             <div className="pricing-block-content">
             <p className="pricing-plan">PROFESINAL BÁSICO</p>
             <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
             <p className="price-number">
             $<span className="price-integer">55.000</span>
             </p>
             
             </div>
             <div className="pricing-note">Mantenimiento $10.000</div>
             <ul className="check-list" role="list">
             <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Dominio personalizado
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Diseño atractivo y profesional
          </li>
          
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Seguimiento de visitas
          </li>
          
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Link a redes sociales
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Link a Whats-App
          </li>
          <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#62cf7f' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#62cf7f"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#62cf7f"
                />
              </g>
            </svg>
            Hasta 3 secciones
          </li>
        </ul>
      </div>
    </div>


     {/*ESTÁNDAR */}
             <div className="card"
             style={{
                background: 'linear-gradient(to right, #63c3e1, #c4e3e0)',                
                }
                }
             >
             <div className="pricing-block-content">
             <p className="pricing-plan">PROFESIONAL ESTÁNDAR
             </p>
             <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
             <p className="price-number">
             $<span className="price-integer">70.000</span>
             
             </p>
             
             </div>
             <div className="pricing-note">Mantenimiento: $25.000/m</div>
             <div className="pricing-note"></div>
             <ul className="check-list" role="list">
             <li className="check-list-item">
             <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Todo del PROFESIONAL ESTÁNDAR
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Optimización de SEO recurrente
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Diseño profesinal: Diseño gráfico | Transiciones | Formulario
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Google Ads aplicable
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Secciones : Reseña | Maps
          </li>
          <li className="check-list-item">
          <svg
              version="1.0"
              preserveAspectRatio="xMidYMid meet"
              height="16"
              viewBox="0 0 30 30.000001"
              zoomAndPan="magnify"
              width="16"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '000000' }}
            >
              <defs>
                <clipPath id="id1">
                  <path
                    fill="#000000"
                    clipRule="nonzero"
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fillRule="nonzero"
                  fillOpacity="1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill="#000000"
                />
              </g>
            </svg>
            Hasta 5 secciones
          </li>

        </ul>
        {/*
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          <p className={`text-black my-1`}>Adquirir</p>
        </Button>*/ }
      </div>
      </div>  
        </section>
    </main>
    )
}
