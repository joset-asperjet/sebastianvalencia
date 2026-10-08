"use client"

import Image from "next/image"

const SpaceInvaderLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8 animate-pulse">
          <Image
            src="/images/graphic/logo.png"
            alt="Loading"
            fill
            className="object-contain brightness-150"
            priority
          />
        </div>

        <div className="mt-4 text-white text-sm font-mono text-center tracking-widest animate-pulse">
          LOADING...
        </div>
      </div>
    </div>
  )
}

export default SpaceInvaderLoader 