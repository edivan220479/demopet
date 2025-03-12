import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20   pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded -lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={58}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "100%",
                    maxWidth: "100%"
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gop-8 mb-12 mt-5">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Pet Shop Demostração</h3>
              <p className="mb-4">Cuidando do Seu Melhor Amigo com Amor e Dedicação</p>
              <a href={"https://wa.me/5571988139379?text=Olá, Seja bem vido a Pet Shop Demostração"}
              target="_blank"
              className="bg-green-500 px-4 py-1 rounded-md ">
                Contato via WhatsApp
              </a>
            </div>
            
            <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email:xxxxxxxxxxxxxxxx</p>
            <p>Tel:xxxxxxxx</p>
            <p>End:xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div> 
            
            <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              
              <a href={'https://www.facebook.com/edivan.fernandes.9?locale=pt_BR'}
              target="_blank"
              >
                <FacebookLogo className="w-8 h-8"/>
              </a>

              <a href={"https://www.instagram.com/edivan.servlight/"}
              target="_blank"
              >
                <InstagramLogo className="w-8 h-8" />
              </a>

              <a href={"https://www.youtube.com/channel/UCU_8hTBlBDrhQbaonji_Idg"}
              target="_blank"
              >
                <YoutubeLogo className="w-8 h-8"/>
              </a>             
            </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
