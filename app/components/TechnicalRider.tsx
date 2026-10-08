"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, PlayCircle, Sliders, Headphones, Table2 } from "lucide-react"
import { titulos, textos } from '../fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type Equipment = {
  id: string
  name: string
  category: "player" | "mixer" | "monitoring" | "table"
  image: string
  description: string
  specs: string[]
}

const equipment: Equipment[] = [
  {
    id: "cdj-3000-1",
    name: "CDJ-3000",
    category: "player",
    image: "/images/equipment/12.png",
    description: "Pioneer CDJ-3000 professional player",
    specs: []
  },
  {
    id: "cdj-3000-2",
    name: "CDJ-3000",
    category: "player",
    image: "/images/equipment/12.png",
    description: "Pioneer CDJ-3000 professional player",
    specs: []
  },
  {
    id: "cdj-3000-3",
    name: "CDJ-3000",
    category: "player",
    image: "/images/equipment/12.png",
    description: "Pioneer CDJ-3000 professional player",
    specs: []
  },
  {
    id: "djm-900",
    name: "Pioneer DJM-V10",
    category: "mixer",
    image: "/images/equipment/11.png",
    description: "Professional mixer with integrated effects and high-quality processing",
    specs: [
      "4 channels with EQ and filters",
      "Beat FX and Sound Color FX effects",
      "Integrated USB sound card",
      "Balanced XLR outputs",
      "Microphone input with EQ"
    ]
  },
  {
    id: "monitor-1",
    name: "Stage Monitor #1",
    category: "monitoring",
    image: "/images/equipment/monitoring2.png",
    description: "Professional active stage monitor",
    specs: []
  },
  {
    id: "monitor-2",
    name: "Stage Monitor #2",
    category: "monitoring",
    image: "/images/equipment/monitoring2.png",
    description: "Professional active stage monitor",
    specs: []
  },
  {
    id: "dj-booth",
    name: "DJ Booth",
    category: "table",
    image: "",
    description: "",
    specs: [
      "HEIGHT: 90cm",
      "WIDTH: 150cm - 200cm",
      "DEPTH: 60cm - 70cm"
    ]
  }
]

const categories = [
  { id: "player", name: "Audio Player", icon: PlayCircle },
  { id: "mixer", name: "Mixer", icon: Sliders },
  { id: "monitoring", name: "Monitoring", icon: Headphones },
  { id: "table", name: "DJ Booth", icon: Table2 },
]

const styles = `
  @keyframes slideHint {
    0%, 100% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-8px);
    }
  }

  @media (max-width: 639px) {
    .animate-slide-hint {
      animation: slideHint 2s ease-in-out infinite;
    }
  }

  @media (min-width: 640px) {
    .animate-slide-hint {
      animation: none;
    }
  }
`

export default function TechnicalRider() {
  const [selectedCategory, setSelectedCategory] = useState<string>("player")
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null)

  const filteredEquipment = equipment.filter(item => item.category === selectedCategory)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedEquipment(null)
  }

  return (
    <section className="w-full px-4 relative z-10">
      <style jsx global>{styles}</style>
      <div className="mx-auto max-w-md">
        <div className="flex items-center mb-4">
          <h2 className={`text-xl font-medium ${titulos.className} text-white`}>
            Technical Rider
          </h2>
        </div>

        <div className="space-y-6">
          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${textos.className} transition-colors ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#FF9D3C]/10 via-[#811DFF]/10 to-[#8098FF]/10 bg-[#2B2B2B]/80 backdrop-blur-md text-white"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>

          {/* Lista de equipos */}
          {(selectedCategory === "player" || selectedCategory === "monitoring") ? (
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                navigation={false}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  }
                }}
                className="mySwiper"
              >
                {filteredEquipment.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`bg-zinc-900/50 rounded-xl p-3 backdrop-blur-sm flex flex-col ${
                        selectedCategory === "player" ? "animate-slide-hint" : ""
                      }`}
                    >
                      {item.image && (
                        <div className="relative w-full h-28 mb-3 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h3 className={`text-base ${titulos.className} font-medium mb-1.5`}>{item.name}</h3>
                      <p className={`text-xs ${textos.className} text-white/60`}>{item.description}</p>
                      <div className="space-y-0.5 mt-auto">
                        {item.specs.map((spec, index) => (
                          <p key={index} className={`text-[10px] ${textos.className} text-white/40`}>{spec}</p>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {selectedCategory === "player" && (
                <p className={`text-red-500 text-xs text-center italic ${textos.className} mt-4`}>
                  Minimum requirement: 3x CDJ-3000 (additional units can be added)
                </p>
              )}
            </div>
          ) : selectedCategory === "mixer" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900/50 rounded-xl p-3 backdrop-blur-sm flex flex-col"
                >
                  {item.image && (
                    <div className="relative w-full h-28 mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className={`text-base ${titulos.className} font-medium mb-1.5`}>{item.name}</h3>
                  <p className={`text-xs ${textos.className} text-white/60`}>{item.description}</p>
                  <div className="space-y-0.5 mt-auto">
                    {item.specs.map((spec, index) => (
                      <p key={index} className={`text-[10px] ${textos.className} text-white/40`}>{spec}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* Texto opcional para Mixer */}
          {selectedCategory === "mixer" && (
            <p className={`text-red-500 text-xs text-center italic ${textos.className}`}>
              Optional: Allen & Heath 96 or Pioneer 900NXS2 
            </p>
          )}

          {/* Texto para DJ Booth */}
          {selectedCategory === "table" && (
            <div className="space-y-4">
              <div className="bg-zinc-900/50 rounded-xl p-3 border border-white/10">
                <h3 className={`text-base ${titulos.className} text-white mb-2`}>
                  DJ BOOTH REQUEST
                </h3>
                <div className="space-y-2">
                  <p className={`text-white/80 text-xs ${textos.className}`}>
                    TRUSS TABLE OR PLATFORM TABLE
                  </p>
                  <div>
                    <p className={`text-white/80 text-xs ${titulos.className} mb-1.5`}>SPECIFICATIONS:</p>
                    <ul className="space-y-1 text-white/80 text-[10px]">
                      <li className={textos.className}>HEIGHT: 90cm</li>
                      <li className={textos.className}>WIDTH: 150cm - 200cm</li>
                      <li className={textos.className}>DEPTH: 60cm - 70cm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Texto para Monitoring */}
          {selectedCategory === "monitoring" && (
            <div className="space-y-4">
              <p className={`text-white/80 text-xs ${textos.className} text-center`}>
                monitoring system with 2x 15" active speakers
              </p>
              <div className="space-y-2">
                <p className={`text-white/60 italic text-xs ${textos.className} text-center`}>
                  * artist recommended brands:
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/void.png"
                      alt="Void"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/2.png"
                      alt="Brand 2"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/3.png"
                      alt="Brand 3"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/4.png"
                      alt="Brand 4"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/5.png"
                      alt="Brand 5"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src="/images/equipment/brands/6.png"
                      alt="Brand 6"
                      fill
                      className="object-contain filter brightness-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 