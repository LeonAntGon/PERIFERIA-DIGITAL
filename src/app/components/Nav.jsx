import { Roboto } from "next/font/google";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from '/public/images/assets/logo-transparent.png';
import Image from "next/image";
import './styles/shinetitle.css';
import HoverLink from "./snippets/HoverLink"

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
      case "Gestor de Reseñas con IA":
        return "/gestor-de-resenas";
      case "Google Ads":
        return "google-ads";
      default:
        return `/${item.toLowerCase().replace(/ /g, "")}`;
    }
  };

  const menuItems = [
    "Inicio",
    "Desarrollo web",
    "Gestor de Reseñas con IA",
    "Google Ads",
    "Contacto",
  ];

  return (
    <>
    <Navbar disableAnimation isBordered className="bg-black" >
      
      

      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand className="md:mx-auto">
          
          <Link href="/" className="pointer "><Image className="" src={logo.src} alt="logo" height={30} width={30} />
          <div className="z-10 h-[100%]">
                    
                    <h1 className={`shine z-20 pt-2 pl-1 ${robo.className}`}
                    style={{
                      backgroundImage: 'linear-gradient(to right, #e7e58e , #b39253)', // Actualizado
                      WebkitTextStroke: '0.3px white', 
                      color: 'transparent',
                      letterSpacing: '1px', 
                    }}
                    >PERIFERIA DIGITAL</h1>
                </div>
                </Link>
        </NavbarBrand>
      </NavbarContent>




      <div className="hidden lg:flex items-center mr-6">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <HoverLink href={generateHref(item)} text={item} />
                </li>
              ))}
            </ul>
          </div>



      <NavbarContent className="flex md:hidden" justify="end">
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