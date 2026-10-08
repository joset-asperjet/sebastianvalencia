import Image from "next/image"
import { GlassmorphicEffect } from "./ui/GlassmorphicEffect"

export default function HeroSection() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto -mt-12 sm:mt-0">
      <GlassmorphicEffect position="center" size="md" intensity="medium" />
      
      <Image
        src="/images/graphic/artistphoto.jpg"
        alt="Creator Profile"
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        quality={90}
        className="object-cover rounded-3xl relative z-10"
        priority
      />
    </div>
  )
} 