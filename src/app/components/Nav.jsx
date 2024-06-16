"use client"
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from '@/images/assets/logowhitetransparent.png';
import Image from "next/image";



export default function App() {
  const menuItems = [
    "Inicio",
    "Trabajos",
    "Contacto",
  ];

  return (
    <Navbar disableAnimation isBordered>
      
      

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo />*/}
          <Link href="./" className="pointer"><Image src={logo.src} alt="logo" height={60} width={60} /></Link>
          

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-blue-500 text-black "
              
              href={`./${item === "Inicio" ? " " : item.toLowerCase()}`}
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
