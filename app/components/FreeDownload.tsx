import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaSoundcloud } from "react-icons/fa"

export default function FreeDownload() {
  return (
    <div className="z-10 w-full max-w-md">
      <h2 className="text-xl font-medium mb-4">Free Download</h2>
      <div className="bg-zinc-900/50 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex gap-4">
          {/* Track Cover */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0KoGGZCGH0kt47dk2Nqv9nhaO7Nb6U.png"
              alt="Halo 2 Intro Theme Joset Remix"
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Track Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-medium">Halo 2 - Intro Theme</h3>
            <p className="text-sm text-white/60">Joset Remix • 2024</p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-4">
          <Button
            variant="outline"
            className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50 w-full flex items-center justify-center"
            onClick={() => window.open("https://soundcloud.com/joset-audiofiles/", "_blank")}
          >
            <FaSoundcloud className="w-5 h-5 mr-2" />
            Download on Soundcloud
          </Button>
        </div>
      </div>
    </div>
  )
} 