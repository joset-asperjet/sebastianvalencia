"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

const brands = [
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
      <h2 className="text-lg font-titulos font-medium mb-8 text-white/80">Labels</h2>
      <div className="w-full max-w-md">
        <div className="flex flex-row justify-center items-center gap-6 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex-1 flex items-center justify-center max-w-[100px] md:max-w-[120px]">
              <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-100 hover:opacity-100 transition-all duration-300 hover:brightness-125"
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 15vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 