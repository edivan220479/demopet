import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";

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

        </div>
      </div>
    </section>
  );
}
