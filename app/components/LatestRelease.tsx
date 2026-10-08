import Image from "next/image"
import { Button } from "../components/ui/button"
import { useState, useRef, useEffect } from "react"
import { MoreHorizontal } from "lucide-react"
import { titulos, textos } from '../fonts'

export default function LatestRelease() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const audioElement = audioRef.current

    const handleEnded = () => {
      setIsPlaying(false)
    }

    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded)
    }

    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  return (
    <div className="z-10 w-full max-w-md relative">
      <h2 className={`text-xl font-medium ${titulos.className} mb-4 relative z-10`}>Latest Release</h2>
      <div className="bg-zinc-900/50 rounded-xl p-4 backdrop-blur-sm relative z-10">
        <div className="flex gap-4">
          {/* Release Cover with Audio Player */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src="https://geo-media.beatport.com/image_size/1400x1400/dbbaa186-7041-4dbf-aa1e-7f5fad20eb08.jpg"
              alt="Holograph / Emptyless / Pretend - Single"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <audio
              ref={audioRef}
              src="music/balaphonia.mp3"
              preload="none"
            />
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg group"
              aria-label={isPlaying ? "Pause Holograph preview" : "Play Holograph preview"}
            >
              <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg">
                {isPlaying ? (
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-1 h-3 bg-black mx-0.5"></div>
                    <div className="w-1 h-3 bg-black mx-0.5"></div>
                  </div>
                ) : (
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                )}
              </div>
            </button>
          </div>

          {/* Release Info */}
          <div className="flex-grow min-w-0">
            <h3 className={`text-lg ${titulos.className} font-medium`}>Balaphonia</h3>
            <p className={`text-sm ${textos.className} text-white/60`}>Sebastian Valencia, <br /> Kamilo Sanclemente • 2025</p>
            {/* Beatport Hype Tag */}
            <div className="mt-2">
              <div className="bg-[#39C0DE] text-white text-xs font-bold py-1 px-3 rounded-none inline-flex items-center drop-shadow-lg">
                <span>Top #1 on Beatport Organic House</span>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <Button
            variant="outline"
            className="bg-zinc-800/50 border-zinc-700 w-full text-white hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent hover:m-0"
            onClick={() => window.open("https://open.spotify.com/intl-es/track/6VwDjSR9lmq9zqByiRczN5", "_blank")}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.601-.12-.418.18-.8.6-.92 4.56-1.021 8.52-.6 11.64 1.32.42.239.48.659.24 1.08zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
          </Button>
          <Button
            variant="outline"
            className="bg-zinc-800/50 border-zinc-700 w-full text-white hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent hover:m-0"
            onClick={() => window.open("https://music.apple.com/mx/song/balaphonia-extended-mix/1834143925", "_blank")}
          >
            <svg viewBox="0 0 22.773 22.773" className="w-5 h-5 mr-2 fill-white">
              <g>
                <path
                  d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                  c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
                />
                <path
                  d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                  c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                  c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                  c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                  c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                  c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
                />
              </g>
            </svg>
            Music
          </Button>
          <Button
            variant="outline"
            className="bg-zinc-800/50 border-zinc-700 w-full text-white hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent hover:m-0"
            onClick={() => window.open("https://www.beatport.com/artist/sebastian-valencia-col/1129457", "_blank")}
          >
            <MoreHorizontal className="w-5 h-5 mr-2" />
            More
          </Button>
        </div>
      </div>
    </div>
  )
}