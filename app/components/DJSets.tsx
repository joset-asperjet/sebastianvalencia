"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'
import { titulos, textos } from '../fonts'

const djSets = [
    {
        title: "@B One Radio #CodeMusicLabel",
        date: "12.12.2024",
        cover: "images/bone.png",
        mixcloud: "https://soundcloud.com/joset-audiofiles/joset-b-one-radio-medellin-codemusiclabel?in=joset-audiofiles/sets/dj-sets"
      },
  {
    title: "@Sala Kbron, Cali-Co",
    date: "06.04.2024",
    cover: "images/djsetkabron.png",
    mixcloud: "https://soundcloud.com/joset-audiofiles/joset-sala-kbron-060423?in=joset-audiofiles/sets/dj-sets"
  },
  {
    title: "Sala Kbron, Cali-Co",
    date: "17.02.2024",
    cover: "images/djsetkabron2.png",
    mixcloud: "https://www.mixcloud.com/joset/techno-night-2024/"
  },
]

export default function DJSets() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-4 relative z-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl ${titulos.className} text-white`}>DJ Sets</h2>
        </div>

        <div className="relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
          >
            {djSets.map((set, index) => (
              <SwiperSlide key={index} className="!w-[240px] sm:!w-[260px] md:!w-[280px]">
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={set.cover}
                    alt={set.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className={`text-lg ${titulos.className} font-medium text-white mb-1`}>{set.title}</h3>
                      <p className={`text-sm ${textos.className} text-white/60`}>{set.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-white/70 !w-8 !h-8 !bg-zinc-800/50 !rounded-full after:!text-sm"></div>
            <div className="swiper-button-next !text-white/70 !w-8 !h-8 !bg-zinc-800/50 !rounded-full after:!text-sm"></div>
          </Swiper>
        </div>
      </div>

      <div className="z-10 w-full max-w-md">
        <div className="border-t border-gray-700/30 my-2"></div>
      </div>

      <div className="z-10 w-full max-w-md mx-auto mt-10">
        <h2 className={`text-xl ${titulos.className} mb-4`}>Bio</h2>
        <div className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm">
          <div className={`relative ${!isExpanded && "max-h-[120px] overflow-hidden"}`}>
            <p className={`text-sm ${textos.className} text-white/80 leading-relaxed`}>
              When I was 7 years old, my brother came home with a cassette of Trance-Factory, that compilation whose cover showed a little figure with its tongue out and wearing a balaclava. At that time, my consciousness wasn't fully developed, but the combination of melancholy and adrenaline in a single musical style awakened a strange but pleasant sensation in me.
            </p>
            <p className={`text-sm ${textos.className} text-white/80 leading-relaxed mt-4`}>
              Later, I learned that the genre is called 'trance' for this reason. Nowadays, a part of me relives that sensation every time I hear melancholic beats with percussion that inspires dancing. At 13, I decided to start producing electronic music with a small dose of absurd and conceptual content.
            </p>
            <p className={`text-sm ${textos.className} text-white/80 leading-relaxed mt-4`}>
              So that's what my project is about, reviving a bit of the fun that old-school electronic music had, while maintaining the seriousness that my role as an artist on the dance floor represents. There is a word that defines this idea, and it is <span className="italic">jocoserious</span>.
            </p>
            <div className="flex justify-start mt-8">
              <Image
                src="/simbol.png"
                alt="Decorative element"
                width={64}
                height={64}
                className="opacity-80 w-16 h-16"
              />
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
            )}
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-sm text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 group relative"
            >
              <span className="group-hover:scale-105 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/60 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                {isExpanded ? "Read less" : "Read more"}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5 animate-bounce'}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
              {!isExpanded && (
                <span className="absolute -inset-1 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 