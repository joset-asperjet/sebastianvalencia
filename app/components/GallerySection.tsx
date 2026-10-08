"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Camera, MapPin, Calendar } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-fade"

// Tipo para las imágenes de la galería
type GalleryImage = {
  src: string
  event: string
  location: string
  photographer: string
  date: string
}

// Datos de ejemplo (luego podrás reemplazarlos con tus propias fotos)
const galleryImages: GalleryImage[] = [
    {
    src: "/images/graphic/diapo04.jpg",
    event: "Robag Wruhmen",
    location: "Sala Kbron",
    photographer: "La Pergola",
    date: "2025"
  },
  {
    src: "/images/graphic/diapo01.png",
    event: "Acid Pauli",
    location: "Centro de Eventos Valle del Pacifico",
    photographer: "Visual Joker",
    date: "2022"
  },
  {
    src: "/images/graphic/DIAPO02.png",
    event: "Alfa Romero",
    location: "La Frencuencia Violeta",
    photographer: "Andrea López",
    date: "2023"
  },

{
  src: "/images/graphic/diapo04.png",
  event: "Sala Kbron Residency",
  location: "Sala Kbron",
  photographer: "Hector Rebellón",
  date: "2024"
}
]

export default function GallerySection() {
  return (
    <section className="w-full px-4 relative z-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-titulos font-medium text-white">
            Gallery
          </h2>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="w-full aspect-[4/3]"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="swiper-no-swiping">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.event}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={index === 0}
                    quality={90}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Información de la foto */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-2 z-10">
                    <h3 className="text-lg font-titulos font-medium">{image.event}</h3>
                    <div className="flex flex-col gap-1 text-sm text-white/80 font-textos">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        <span>{image.photographer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{image.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
} 