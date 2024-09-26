import Link from "next/link";
import Instagram from "./Instagram";
import Facebook from "./Facebook";


export default function Footer() {
  return (
    <footer className=" flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-evenly">

      <div  className="font-normal">
        &copy; 2024 PERIFERIA DIGITAL
      </div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        
       
        <li>
          <div
            className="font-normal transition-colors hover:text-gray-800 focus:text-gray-800"
          >
            <Link href="/contacto" className="border-b border-gray-900 text-black hover:text-gray-800 hover:border-gray-800 font-semibold">
            Contactanos</Link>
          </div>
        </li>
      </ul>
      <div className="">
        {/* flex mx-2 gap-x-4 my-4 */}

        
    {/* <Instagram/> */}  
      {/*<Facebook />*/}
      </div>
    </footer>
  );
}