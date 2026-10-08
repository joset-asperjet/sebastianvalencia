"use client"

import HeroSection from "./components/HeroSection"
import SocialLinks from "./components/SocialLinks"
import LatestRelease from "./components/LatestRelease"
import FreeDownload from "./components/FreeDownload"
import ShowsList from "./components/ShowsList"
import BrandsSection from "./components/BrandsSection"
import NewsSection from "./components/NewsSection"
import MediaFilesSection from "./components/MediaFilesSection"
import CountryList from "./components/CountryList"
import BookingSection from "./components/BookingSection"
import MusicReleases from "./components/MusicReleases"
import DJSets from "./components/DJSets"
import BioSection from "./components/BioSection"
import GallerySection from "./components/GallerySection"
import TechnicalRider from "./components/TechnicalRider"
import { HighlightsList } from "@/components/HighlightsList"
import { highlightsData } from "./components/HighlightsData"
import { titulos, textos } from './fonts'
import { AudioPlayerProvider } from "./contexts/AudioPlayerContext"
import { useAudioPlayer } from "./contexts/AudioPlayerContext"
import AudioPlayer from "./components/AudioPlayer"

function AudioPlayerWrapper() {
  const { currentTrack, setCurrentTrack } = useAudioPlayer();

  return currentTrack ? (
    <AudioPlayer
      audioUrl={currentTrack.url}
      trackName={currentTrack.name}
      cover={currentTrack.cover}
      onClose={() => setCurrentTrack(null)}
    />
  ) : null;
}

export default function Home() {
  return (
    <AudioPlayerProvider>
      <main className="min-h-screen bg-black text-white flex flex-col">
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 gap-8">
          <div className="absolute inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 to-black"></div>
          </div>

          <HeroSection />

          <h1 className={`z-10 text-6xl md:text-7xl ${titulos.className} tracking-tighter text-center`}>Sebastian Valencia</h1>

          <SocialLinks />
          
          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <LatestRelease />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <ShowsList />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          


          <MusicReleases />
          <BrandsSection />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>
          
          <GallerySection />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <BioSection />
          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <TechnicalRider />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <HighlightsList highlights={highlightsData} />

          <div className="z-10 w-full max-w-md">
            <div className="border-t border-gray-700/30 my-2"></div>
          </div>

          <MediaFilesSection />

        </div>
        <AudioPlayerWrapper />
      </main>
    </AudioPlayerProvider>
  );
}

