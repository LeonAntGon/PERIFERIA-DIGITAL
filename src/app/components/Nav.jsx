import { Roboto } from "next/font/google";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from '/public/images/assets/logo-transparent.png';
import Image from "next/image";
import './styles/shinetitle.css';
import Sliderbar from "./animations/Sliderbar";

const robo = Roboto({
  weight: "900",
  subsets:['latin'],
})

export default function App() {
  const generateHref = (item) => {
    switch (item) {
      case "Inicio":
        return "/";
      case "Desarrollo web":
        return "/desarrolloweb";
      case "Sistemas de automatización":
        return "/automatizar";
      default:
        return `/${item.toLowerCase().replace(/ /g, "")}`;
    }
  };

  const menuItems = [
    "Inicio",
    "Desarrollo web",
    "Anuncios",
    "Sistemas de automatización",
    "Contacto",
  ];

  return (
    <>
    <Sliderbar/>
    <Navbar disableAnimation isBordered className="bg-black">
      
      

      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand className="md:mx-auto">
          {/* <AcmeLogo />*/}
          <Link href="/" className="pointer "><Image className="pt-1" src={logo.src} alt="logo" height={32} width={32} />
          <div className="z-10 h-[100%]">
                    {/*<h1 className={`z-20 absolute text-[40px] font-bold font-italic ${saira.className}`}
                    style={{
                        textStroke: '1px black',
                        WebkitTextStroke: '1.5px black',
                        backgroundImage: 'linear-gradient(to right, #41C5C5, #006DC3)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }} >PERIFERA DIGITAL</h1>*/}
                    <h1 className={`shine z-20 pt-2 pl-1 ${robo.className}`}
                    style={{
                      backgroundImage: 'linear-gradient(to right, #e7e58e , #b39253)', // Actualizado
                      WebkitTextStroke: '0.3px white', // Cambiado a blanco
                      color: 'transparent',
                      letterSpacing: '1px', // Agregado
                    }}
                    >PERIFERIA DIGITAL</h1>
                </div>
                </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="" justify="end">
        <NavbarMenuToggle className="text-white"/>
      </NavbarContent>

      



      <NavbarMenu className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-blue-500 text-black "
              
              href={generateHref(item)}
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  );
}
