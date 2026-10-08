"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { FaSteam, FaWindows, FaPlaystation, FaXbox } from "react-icons/fa"
import { SiNintendoswitch } from "react-icons/si"
import { IconType } from "react-icons"
import { useState } from "react"

type Platform = "windows" | "playstation" | "xbox" | "switch"

interface NewsItem {
  id: number
  title: string
  image: string
  excerpt: string
  categories: string[]
  steamUrl: string
  platforms: Platform[]
}

const news: NewsItem[] = [
  {
    id: 1,
    title: "Joset Unleash Horror Through Immersive Sound Design for Poveglia",
    image: "/poveglia.jpg",
    excerpt: "Music producer Joset joins the chilling 'Poveglia' project to craft an otherworldly audio experience. Known for his innovative work in electronic music, Joset was called upon to design the sound effects for 'Poveglia', a horror game set on the mythical Italian island that once housed victims of the bubonic plague. His experience as a producer will allow him to bring the horrors of Poveglia to life with a unique and immersive soundscape. Experience the terror now in Early Access, as Joset continues to perfect the soundscape for the full release!",
    categories: ["Gaming", "Collaboration"],
    steamUrl: "https://store.steampowered.com/app/2260450/Poveglia_The_Island_of_Non_Return/",
    platforms: ["windows", "playstation", "xbox", "switch"],
  },
]

const platformIcons: Record<Platform, { icon: IconType; label: string }> = {
  windows: { icon: FaWindows, label: "Windows" },
  playstation: { icon: FaPlaystation, label: "PlayStation" },
  xbox: { icon: FaXbox, label: "Xbox" },
  switch: { icon: SiNintendoswitch, label: "Nintendo Switch" },
}

export default function NewsSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="w-full px-4 relative z-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-white">News</h2>
          <Button variant="link" className="text-white">
            Ver más
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src="/poveglia.jpg"
              alt="Joset & Inti Games"
              width={800}
              height={450}
              className="object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
                Gaming
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
                Collaboration
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-medium mb-3 text-white">
              Joset Unleash Horror Through Immersive Sound Design for Poveglia
            </h3>
            <div className="relative">
              <p className={`text-sm text-white/60 mb-4 ${expandedItems.includes(1) ? '' : 'line-clamp-2'}`}>
                Music producer Joset joins the chilling 'Poveglia' project to craft an otherworldly audio experience. Known for his innovative work in electronic music, Joset was called upon to design the sound effects for 'Poveglia', a horror game set on the mythical Italian island that once housed victims of the bubonic plague. His experience as a producer will allow him to bring the horrors of Poveglia to life with a unique and immersive soundscape. Experience the terror now in Early Access, as Joset continues to perfect the soundscape for the full release!
              </p>
              <button
                onClick={() => toggleExpand(1)}
                className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition-colors"
              >
                {expandedItems.includes(1) ? (
                  <>
                    Show less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show more
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Platforms */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <h4 className="text-sm font-medium text-white/80">Available on:</h4>
                <div className="flex items-center gap-3">
                  <FaWindows className="w-6 h-6 text-white" />
                  <FaPlaystation className="w-6 h-6 text-white" />
                  <FaXbox className="w-6 h-6 text-white" />
                  <SiNintendoswitch className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Steam Button */}
              <div className="pt-4 border-t border-zinc-800">
                <Button
                  variant="outline"
                  className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white py-6 text-lg"
                  onClick={() => window.open("https://store.steampowered.com/app/2260450/Poveglia_The_Island_of_Non_Return/", "_blank")}
                >
                  <FaSteam className="w-6 h-6 mr-2" />
                  Buy on Steam
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 