"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAudioPlayer } from "../contexts/AudioPlayerContext"

const releases = [
    {
    title: "Balaphonia",
    year: "2025",
    label: "Melody of the Soul",
    artist: "Sebastian Valencia, Kamilo Sanclemente",
    cover: "https://geo-media.beatport.com/image_size/1400x1400/dbbaa186-7041-4dbf-aa1e-7f5fad20eb08.jpg",
    spotify: "https://open.spotify.com/intl-es/track/6VwDjSR9lmq9zqByiRczN5",
    apple: "https://music.apple.com/ca/song/balaphonia/1834143921",
    deezer: "https://www.deezer.com/es/album/807232401",
    preview: "/music/balaphonia.mp3"
  },
  {
    title: "Holograph / Emptyless / Pretend",
    year: "2024",
    label: "Plattenbank",
    artist: "Sebastian Valencia, Kamilo Sanclemente",
    cover: "https://geo-media.beatport.com/image_size/250x250/9df093e7-804b-48e4-bd58-33ca5ff2ed2d.jpg",
    spotify: "https://open.spotify.com/intl-es/album/7zN7WnXljV6aFwt19fw0DY",
    apple: "https://music.apple.com/mx/album/holograph-emptyless-pretend-single/1751655210",
    deezer: "https://www.deezer.com/us/album/600409782",
    preview: "/music/pretend.mp3"
  },
  {
    title: "Doom",
    year: "2024",
    label: "Selador",
    artist: "Sebastian Valencia, Kamilo Sanclemente",
    cover: "https://cdn-images.dzcdn.net/images/cover/0e5fb5ae169359b03f9809e3e79e96d6/500x500-000000-80-0-0.jpg",
    spotify: "https://open.spotify.com/intl-es/album/2N6BKAq6z5ziWrExq1rwxK",
    apple: "https://music.apple.com/ni/album/doom/1745653626?i=1745653628",
    deezer: "https://www.deezer.com/us/album/585068972",
    preview: "/music/doom.mp3"
  },
  {
    title: "Samurai (Kamilo Sanclemente & Sebastian Valencia Remix) ",
    year: "2024",
    label: "WARPP",
    artist: "Sebastian Valencia",
    cover: "https://geo-media.beatport.com/image_size/1400x1400/27b20a68-acc1-4d6e-80cb-1b3340a074ad.jpg",
    spotify: "https://open.spotify.com/intl-es/album/2N6BKAq6z5ziWrExq1rwxK",
    apple: "https://music.apple.com/ni/album/samurai-incl-kamilo-sanclemente-sebastian-valencia/1688027347",
    deezer: "https://www.deezer.com/us/artist/214042007",
    preview: "/music/nuffects.mp3"
  },
  {
    title: "Aurora's Journey",
    year: "2024",
    label: "Sommersville Records",
    artist: "Joset, Monroe Ramirez",
    cover: "https://cdn-images.dzcdn.net/images/cover/7ab63fee9f0076deef222e7f284fe30d/500x500-000000-80-0-0.jpg",
    spotify: "https://open.spotify.com/intl-es/album/6SarZkf8plLyLik3i9jmpK",
    apple: "https://music.apple.com/ni/album/auroras-journey-single/1730797163",
    deezer: "https://www.deezer.com/us/album/547721322",
    preview: "/music/aurora.mp3"
  },
]

export default function MusicReleases() {
  const { currentTrack, setCurrentTrack } = useAudioPlayer();

  const handlePlayPause = (release: typeof releases[0]) => {
    if (currentTrack?.url === release.preview) {
      // Si es el mismo track, lo detenemos
      setCurrentTrack(null);
    } else {
      // Si es un track diferente, lo reproducimos
      setCurrentTrack({
        name: release.title,
        url: release.preview,
        cover: release.cover
      });
    }
  };

  return (
    <div className="z-10 w-full max-w-md">
      <h2 className="text-xl font-titulos font-medium mb-4">Releases</h2>
      <div className="bg-zinc-900/50 rounded-xl p-4 backdrop-blur-sm">
        <div className="divide-y divide-zinc-800/50">
          {releases.map((release, index) => (
            <div key={index} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                {/* Release Cover */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={release.cover}
                    alt={`${release.title} Cover`}
                    width={300}
                    height={300}
                    className="rounded-md object-cover"
                  />
                </div>

                {/* Release Info */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-sm font-medium truncate">{release.title}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-white/60">{release.year}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-emerald-500/80">{release.label}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50"
                    onClick={() => handlePlayPause(release)}
                  >
                    {currentTrack?.url === release.preview ? (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </Button>
                  <div className="w-px h-8 bg-zinc-800/50 mx-1"></div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50"
                    onClick={() => window.open(release.spotify, "_blank")}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.601-.12-.418.18-.8.6-.92 4.56-1.021 8.52-.6 11.64 1.32.42.239.48.659.24 1.08zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.2.72-1.381C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50"
                    onClick={() => window.open(release.apple, "_blank")}
                  >
                    <svg viewBox="0 0 22.773 22.773" className="w-4 h-4 fill-current">
                      <g>
                        <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                        <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                      </g>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50"
                    onClick={() => window.open(release.deezer, "_blank")}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M17.68 0H21v4.2h-3.32V0zm-5.66 5.98h3.32v4.2h-3.32v-4.2zm-5.66 5.97h3.32v4.2H6.36v-4.2zm-5.66 6h3.32v4.2H.7v-4.2zm5.66 0h3.32v4.2H6.36v-4.2zm5.66 0h3.32v4.2h-3.32v-4.2zm5.66 0H21v4.2h-3.32v-4.2zm-11.32-3h3.32v4.2H6.36v-4.2zm5.66 0h3.32v4.2h-3.32v-4.2zm5.66 0H21v4.2h-3.32v-4.2zm-5.66-5.97h3.32v4.2h-3.32v-4.2zm5.66 0H21v4.2h-3.32v-4.2z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 