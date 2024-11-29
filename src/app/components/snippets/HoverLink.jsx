"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const HoverLink = ({ href, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='text-light'
        style={{
          color: 'white',
          fontSize: '0.8rem',
          fontFamily: 'inherit',
          fontWeight: 800,
          cursor: 'pointer',
          position: 'relative',
          border: 'white',
          background: 'none',
          textTransform: 'uppercase',
          transition: 'color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          outline: 'none',
          textDecoration: 'none',
        }}
      >
         {text}
        <span
        className='bg-light'
          style={{
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '-2px',
            left: hover ? '0%' : '50%',
            width: hover ? '100%' : '0%',
            height: '2px',
            transition: 'width 400ms cubic-bezier(0.25, 0.8, 0.25, 1), left 400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          }}
        />
      
    </Link>
  );
};

export default HoverLink;