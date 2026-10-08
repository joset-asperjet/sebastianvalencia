"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useAudioPlayer } from "../contexts/AudioPlayerContext"

const tracks = [
  {
    name: "Holograph - Emptyless Pretend",
    url: "/audio/holograph.mp3",
    spotify: "https://open.spotify.com/intl-es/album/7zN7WnXljV6aFwt19fw0DY",
    apple: "https://music.apple.com/ni/album/holograph-emptyless-pretend-single/1751655210",
    beatport: "https://www.beatport.com/artist/sebastian-valencia-col/1129457"
  }
];

export default function MusicSection() {
  const { setCurrentTrack } = useAudioPlayer();

  return (
    <div className="flex flex-wrap gap-2">
      {tracks.map((track) => (
        <div key={track.name} className="flex gap-2 w-full">
          <Button
            variant="outline"
            className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
            onClick={() => setCurrentTrack(track)}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Play Preview</span>
          </Button>

          <Button
            variant="outline"
            className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
            onClick={() => window.open(track.spotify, "_blank")}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 fill-white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.601-.12-.418.18-.8.6-.92 4.56-1.021 8.52-.6 11.64 1.32.42.239.48.659.24 1.08zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span>Spotify</span>
          </Button>

          <Button
            variant="outline"
            className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
            onClick={() => window.open(track.apple, "_blank")}
          >
            <svg viewBox="0 0 22.773 22.773" className="w-4 h-4 mr-1.5 fill-white">
              <g>
                <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
              </g>
            </svg>
            <span>Music</span>
          </Button>

          <Button
            variant="outline"
            className="flex-1 bg-zinc-900 border-zinc-800 text-white h-9 px-3 text-sm font-textos transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md hover:border-transparent flex items-center justify-center"
            onClick={() => window.open(track.beatport, "_blank")}
          >
            <MoreHorizontal className="w-4 h-4 mr-1.5" />
            <span>More</span>
          </Button>
        </div>
      ))}
    </div>
  );
} 