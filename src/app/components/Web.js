import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function Web(){
  return(
  <main>

    <h1 className="text-center font-semibold py-4 text-xl">Desarrollo Web</h1>
    <h2 className="ml-4 lg:mx-[48px] text-[15px] font-bold text-[#0109ff] opacity-[50%]"> - Emprendedores -</h2>
    <p className="mx-3 lg:mx-[48px] text-[14px] mt-3">Los planes para emprendedores son aplicables a vendedores de productos físicos o digitales, como revendedores, tiendas de indumentaria o comerciantes de productos de marca.</p>
    <p className="mx-3 lg:mx-[48px] text-[13px] mt-1">La cantidad de productos puede afectar significativamente el abonar de la página o el mantenimiento</p>
    <section className="flex flex-wrap justify-center">
      {/*Emprendedor básico */}
        <Card 
        style={{
          background: 'linear-gradient(to right, #41C5C5, #006DC3)',
          
          }}
          color="gray" variant="gradient" className="w-full max-w-[22rem] p-6 mx-2 my-5 lg:my-0">
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-4 rounded-none border-b border-white/10 pb-8 text-center"
        >
        <Typography
        
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          EMPRENDEDOR BÁSICO
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-4 "
        >
          <p className=" text-4xl">$30.000</p>
          <p className="self-end text-md">Mantenimiento: $12.000/m</p>
        </Typography>
        </CardHeader>
        <CardBody className="p-0">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Modalidad catálogo</Typography>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Modalidad e-commerce</Typography>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Links a redes sociales</Typography>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
            Diseño básico
            </Typography>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Promociones & Codigos de descuento
            </Typography>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Link a número de Whats-App
            </Typography>
          </li>
          
          </ul>
          </CardBody>
          <CardFooter className="mt-8 p-0">
          <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          <p className={`text-black my-1`}>Adquirir</p>
        </Button>
       </CardFooter>  
       </Card>


      {/*Emprendedor stándar */}
       <Card 
       style={{
        background: 'linear-gradient(to right, #db708c, #482865)',
        
        }
        }color="gray" variant="gradient" className="w-full max-w-[22rem] p-6 bg-black mx-2 my-5 lg:my-0">
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-6 rounded-none border-b border-white/10 pb-8 text-center"
        >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          EMPRENDEDOR ESTÁNDAR
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-4 "
        >
          <p className=" text-4xl">$45.000</p>
          <p className="self-end text-md">Mantenimiento: $18.000/m</p>
        </Typography>
        </CardHeader>
        <CardBody className="p-0">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="text-sm">Todo del EMPRENDEDOR BÁSICO</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Dominio personalizado</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
            Diseño personalizado
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Seguimiento de visitas
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Link a grupo o comunidad
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Link a Whats-App</Typography>
          </li>
          </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
          <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          <p className={`text-black my-1`}>Adquirir</p>
        </Button>
       </CardFooter>  
       </Card>

       {/*Emprendedor profesional */}
       <Card 
       style={{
        background: 'linear-gradient(to right, #515151, #000000)',
        
        }}
        color="gray" variant="gradient" className="w-full max-w-[22rem] p-6 bg-black mx-2 my-5 md:mt-4 lg:my-0">
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          EMPRENDEDOR PROFESIONAL
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-4 "
        >
          <p className=" text-4xl">$110.000</p>
          <p className="self-end text-md">Mantenimiento: $40.000/m</p>
        </Typography>
        </CardHeader>
        <CardBody className="p-0">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="text-sm">Todo del EMPRENDEDOR ESTÁNDAR</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Optimización de SEO</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
            Diseño profesinal
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Campaña E-Mail marketing
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Automatización de envíos
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Prioridad de mantenimiento
            </Typography>
          </li>
          </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
          <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          <p className={`text-black my-1`}>Adquirir</p>
        </Button>
       </CardFooter>  
       </Card>
    </section>
  </main>
  )
}
