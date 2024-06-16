import { Typography } from "@material-tailwind/react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">

      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 PERIFERIA DIGITAL
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link href="/trabajos">
            Trabajos
            </Link>
            
          </Typography>
        </li>
       
        <li>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link href="/contacto">
            Contactanos</Link>
          </Typography>
        </li>
      </ul>
    </footer>
  );
}