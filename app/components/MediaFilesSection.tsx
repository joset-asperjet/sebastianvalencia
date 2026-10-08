"use client"

import { Button } from "@/components/ui/button"
import { FaGoogleDrive } from "react-icons/fa"
import { titulos, textos } from '../fonts'
import { useAudioPlayer } from "../contexts/AudioPlayerContext"

export default function MediaFilesSection() {
  return (
    <section className="w-full px-4 relative z-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl ${titulos.className} text-white`}>Media Files</h2>
        </div>

        <div className="bg-zinc-900 rounded-xl overflow-hidden p-6">
          <h3 className={`text-xl ${titulos.className} mb-6 text-white`}>
            Press Kit & Assets
          </h3>
          <div className="space-y-4">
            <p className={`text-sm ${textos.className} text-white/60 mb-6`}>
              Including high-resolution images, bio and logo...
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1 bg-zinc-800 border-zinc-700 text-white py-3 text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
                onClick={() => window.open("//drive.google.com/drive/folders/1HhQjqnVg9CWmVjOKTOuysMuIf9GrPPBp", "_blank")}
              >
                <FaGoogleDrive className="w-6 h-6 mr-2" />
                Media Files
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-zinc-800 border-zinc-700 text-white py-3 text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
                onClick={() => window.open("https://drive.google.com/drive/folders/1ZzyCg8DEIWtbBPfDG40WRD5_I-gxHJ5d", "_blank")}
              >
                <FaGoogleDrive className="w-6 h-6 mr-2" />
                Branding Files
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 