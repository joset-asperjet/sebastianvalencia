"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { titulos, textos } from '../fonts'

export default function BioSection() {
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <section className="w-full px-4 relative z-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center mb-4">
          <h2 className={`text-xl font-medium ${titulos.className} text-white`}>
            Bio
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="space-y-4">
            {/* Texto principal */}
            <div className={`space-y-4 text-white/80 text-sm leading-relaxed ${!showFullBio && 'line-clamp-3'}`}>
              <p className={textos.className}>
                Nacido el 2 de julio de 1998 en Santiago de Cali, Colombia, Sebastián Valencia Velasco descubrió su pasión por la música a temprana edad. A los trece años, comenzó su viaje en la producción musical de manera autodidacta, desarrollando un estilo único a través de la experimentación con sonidos propios y melodías distintivas.
              </p>
              
              {showFullBio && (
                <div>
                  <p className={textos.className}>
                    Su evolución musical lo llevó, cinco años después, a crear sets caracterizados por una fusión única de acordes envolventes, ritmos precisos y bajos melódicos. Sus sesiones, que incorporan elementos de Progressive House y Deep House, se distinguen por crear atmósferas cautivadoras donde las percusiones precisas se entrelazan con armonías sólidas para elevar los sentidos de su audiencia.
                  </p>
                  
                  <div className="space-y-2 mt-4">
                    <h3 className={`text-sm ${titulos.className} text-white/90`}>Reconocimiento en la escena:</h3>
                    <p className={textos.className}>
                      Su talento ha sido reconocido por figuras destacadas de la música electrónica como Hernan Cattaneo, Kamilo Sanclemente, Guy Mantzur, Anthony Pappa y Steve Parry, quienes han apoyado su música en sus presentaciones.
                    </p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <h3 className={`text-sm ${titulos.className} text-white/90`}>Trayectoria artística:</h3>
                    <p className={textos.className}>
                      A lo largo de su carrera, ha tenido el privilegio de compartir escenario con artistas internacionales de renombre como Acid Pauli, Khen, Jiggler, Hidden Empire, y referentes nacionales como Kamilo Sanclemente y Giovanny Aparicio.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Botón Ver más */}
            <button
              onClick={() => setShowFullBio(!showFullBio)}
              className={`flex items-center gap-1 text-sm ${textos.className} text-white/60 hover:text-white/80 transition-colors`}
            >
              {showFullBio ? "Ver menos" : "Ver más"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFullBio ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 