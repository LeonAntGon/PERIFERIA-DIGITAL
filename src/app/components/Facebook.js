import React, { useState } from 'react';
import {Link} from "@nextui-org/react";
//import './styles/Instagram.css';

export default function Instagram() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
    <Link href="https://www.facebook.com/profile.php?id=61562921791406">
    <div
      className={`border-gray-700 border-[1px] bg-[#f7f7f8] hover:text-[#367fa4] hover:bg-[#d6edff] max-w-[23ch] text-center p-[1.5em] rounded-lg relative overflow-hidden transition duration-300 ease-in-out transform flex flex-col justify-center items-center gap-4`}
      style={{
        paddingBlock: "1.6em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`icon ${hovered ? 'opacity-0' : 'opacity-100'}`}>
      <svg width="32px" height="32px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
      <strong
        className={`block font-[1.4rem] text-black ${hovered ? 'opacity-0' : 'opacity-100'}`}
        style={{ letterSpacing: "-.035em" }}
      >
        Facebook
      </strong>
      <div className={`text-[#464853] leading-6 text-base ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        Siguenos para saber más de nosotros
      </div>
      <span
        className={`absolute inset-0 flex justify-center items-center rounded-lg font-bold transition-all duration-300 ease-cubic-60-40 ${hovered ? 'top-0 text-[1.2em]' : 'top-full'}`}
        style={{ color: hovered ? '#367fa4' : 'transparent' }}
      >
        Seguir
      </span>
    </div>
    </Link>
    </>
    
  );
};

//