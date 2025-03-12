import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">

      <div className="container px-4 mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative" >
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="foto do cachorro"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 rounded-lg border-white">
            <Image
              src={about2Img}
              alt="foto do cachorro"
              fill
              quality={100}
              priority
            />
          </div>

        </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold">Sobre</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec fermentum ultricies, nulla nisl ultricies
            tortor, ac vestibulum mi nunc a mi. Nulla tincidunt, nunc nec
            fermentum ultricies, nulla nisl ultricies tortor, ac vestibulum mi
            nunc a mi.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Aberto dede 1999
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Equipe com veterinario
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500"/>
              Qualidade é nossa prioridade
            </li>
          </ul>

          <div className="flex gap-2">
          <a
          data-aos="fade-up-left"
          data-aos-delay="100"
           href={'https://wa.me/5571988139379?text=olá vim do site e gosotaria de mais informações'}
              target="_blank"
          className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
          >
            <WhatsappLogo className="w-5 h-5 text-white"/>
            Contato via WhatsApp
          </a>
          <a 
          data-aos="fade-up"
          data-aos-duration="3000"
          href="https://www.google.com.br/maps/place/Salvador+Shopping/@-12.978345,-38.4598068,17z/data=!3m1!4b1!4m6!3m5!1s0x71616510cac211f:0xd5a41097a534a48b!8m2!3d-12.9783503!4d-38.4551934!16s%2Fg%2F121gpt80?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
          >
            <MapPin className="w-5 h-5 text-black"/>
            Endereço da loja
          </a>
          </div>

        </div>

        </div>

      </div>
    </section>
  );
}
