"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { titulos } from '../fonts'

export default function BookingSection() {
  return (
    <div className="z-10 w-full max-w-md relative">
      <div className="relative z-10">
        <section className="w-full px-4 relative z-10">
          <div className="mx-auto max-w-md">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-titulos font-medium text-white">
                Booking
              </h2>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden p-4 border border-zinc-800/50 relative">
              {/* Logos decorativos - Fila superior */}
              <div className="absolute top-0 left-0 w-20 h-20 opacity-20 -rotate-12 transform -translate-y-6 -translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-0 left-1/4 w-20 h-20 opacity-20 rotate-12 transform -translate-y-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-0 left-2/4 w-20 h-20 opacity-20 -rotate-12 transform -translate-y-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-20 rotate-12 transform -translate-y-6 translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>

              {/* Logos decorativos - Fila inferior */}
              <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20 rotate-12 transform translate-y-6 -translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute bottom-0 left-1/4 w-20 h-20 opacity-20 -rotate-12 transform translate-y-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute bottom-0 left-2/4 w-20 h-20 opacity-20 rotate-12 transform translate-y-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20 -rotate-12 transform translate-y-6 translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>

              {/* Logos decorativos - Laterales */}
              <div className="absolute top-1/4 left-0 w-20 h-20 opacity-20 rotate-12 transform -translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-2/4 left-0 w-20 h-20 opacity-20 -rotate-12 transform -translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-1/4 right-0 w-20 h-20 opacity-20 -rotate-12 transform translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>
              <div className="absolute top-2/4 right-0 w-20 h-20 opacity-20 rotate-12 transform translate-x-6">
                <Image src="/images/graphic/logo.png" alt="" fill className="object-contain brightness-150" priority />
              </div>

              <div className="space-y-2 mb-4 relative">
                <h3 className="text-base font-titulos font-medium text-white">
                  Available for Shows
                </h3>
              </div>

              <div className="flex gap-2 relative">
                {/* Email Button */}
                <Button
                  variant="outline"
                  className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
                  onClick={() => window.location.href = "mailto:sebsbooking@gmail.com"}
                >
                  <Mail className="w-4 h-4 mr-1.5" />
                  <span>Contact Now</span>
                </Button>

                {/* WhatsApp Button */}
                <Button
                  variant="outline"
                  className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
                  onClick={() => window.open("https://wa.me/573148850393", "_blank")}
                >
                  <FaWhatsapp className="w-4 h-4 mr-1.5" />
                  <span>Chat Now</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 