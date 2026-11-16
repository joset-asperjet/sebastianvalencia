"use client"

import Image from "next/image"

const brands = [
  {
    name: "Clubsonica Records",
    logo: "/images/brands/club-sonica.png",
  },
  {
    name: "Kling Klong",
    logo: "/images/brands/kling-klong.png",
  },
  {
    name: "Brand 6",
    logo: "/images/brands/12.png",
  },
  {
    name: "Brand 7",
    logo: "/images/brands/7.png",
  },
  {
    name: "Brand 8",
    logo: "/images/brands/8.png",
  },
  {
    name: "Brand 9",
    logo: "/images/brands/9.png",
  },
]

export default function BrandsSection() {
  return (
    <div className="z-10 w-full flex flex-col items-center">
      <h2 className="text-lg font-titulos font-medium mb-6 text-white/80">Labels</h2>
      <div className="relative w-full max-w-md overflow-hidden py-2">
        {/* Degradados en los bordes para una transición suave */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* Tira animada de izquierda a derecha con pausa al pasar el cursor */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex items-center gap-8 pr-8">
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-20 h-10 sm:w-24 sm:h-12">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:brightness-125"
                    sizes="96px"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 pr-8" aria-hidden="true">
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-20 h-10 sm:w-24 sm:h-12">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:brightness-125"
                    sizes="96px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
