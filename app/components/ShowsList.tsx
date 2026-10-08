import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft, List, Grid } from "lucide-react"

interface Show {
  date: {
    month: string
    day: string
    year: string
  }
  venue: string
  city: string
  country: string
  time: string
  isInternational?: boolean
}

const shows: Show[] = [
    {
    date: { month: "NOV", day: "02", year: "2025" },
    venue: "Sébastien Léger",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
    {
    date: { month: "Sep", day: "09", year: "2025" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
    {
    date: { month: "Jul", day: "26", year: "2025" },
    venue: "Robag Wruhmen",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "MAR", day: "01", year: "2025" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "20", year: "2025" },
    venue: "AudioWave",
    city: "Medellín",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "14", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "NOV", day: "15", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "13", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "AGO", day: "25", year: "2024" },
    venue: "Hotel Marriott Cali",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "06", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "02", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "30", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "29", year: "2024" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "24", year: "2024" },
    venue: "Alfa Romero",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "DIC", day: "07", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "01", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "NOV", day: "04", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "23", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "22", year: "2023" },
    venue: "Sun Theory Showcase",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "15", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "AGO", day: "26", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "AGO", day: "12", year: "2023" },
    venue: "GMS Lanzamiento",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "21", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAY", day: "27", year: "2023" },
    venue: "After Noon Delight",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAY", day: "26", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ABR", day: "29", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "25", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "18", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "04", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "28", year: "2023" },
    venue: "Rhum",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "20", year: "2023" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "13", year: "2023" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "27", year: "2022" },
    venue: "Sala Kbron",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "17", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "NOV", day: "12", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "OCT", day: "20", year: "2022" },
    venue: "La Pergola Pascual",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "OCT", day: "16", year: "2022" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "OCT", day: "14", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "16", year: "2022" },
    venue: "Oliver Huntemann ",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "AGO", day: "28", year: "2022" },
    venue: "Mathame & Charlotte de Witte",
    city: "Paramo",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "AGO", day: "27", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "AGO", day: "18", year: "2022" },
    venue: "Zorro Azul",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "23", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "19", year: "2022" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "03", year: "2022" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "17", year: "2022" },
    venue: "Senses Sessions",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "16", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "09", year: "2022" },
    venue: "Nu Breed Final",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ABR", day: "28", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ABR", day: "13", year: "2022" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "20", year: "2022" },
    venue: "Acid Pauli",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "MAR", day: "18", year: "2022" },
    venue: "La Frecuencia Violeta",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "24", year: "2022" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "09", year: "2022" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "18", year: "2021" },
    venue: "Ciudad Solar",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "07", year: "2021" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "24", year: "2021" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "17", year: "2021" },
    venue: "Eliptica",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "AGO", day: "21", year: "2021" },
    venue: "Khen",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "AGO", day: "07", year: "2021" },
    venue: "Bazart",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "11", year: "2020" },
    venue: "Love Tree",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "06", year: "2020" },
    venue: "Eliptica",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "NOV", day: "14", year: "2020" },
    venue: "Nomade Proyecto",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "26", year: "2020" },
    venue: "Nomade Proyecto",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "24", year: "2020" },
    venue: "Garden Live",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "26", year: "2020" },
    venue: "Garden Live",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAY", day: "28", year: "2020" },
    venue: "Garden Live",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ABR", day: "13", year: "2020" },
    venue: "Circular Sonora",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ABR", day: "06", year: "2020" },
    venue: "LoveCast",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "13", year: "2020" },
    venue: "Sky Club",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "08", year: "2020" },
    venue: "Hidden Empire & Jiggler",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00",
    isInternational: true
  },
  {
    date: { month: "MAR", day: "07", year: "2020" },
    venue: "Love Tree",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "29", year: "2020" },
    venue: "Love Tree",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "FEB", day: "13", year: "2020" },
    venue: "IguanaWana",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "30", year: "2020" },
    venue: "Gatsby",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "25", year: "2020" },
    venue: "La Fabrika Nonstop",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "18", year: "2020" },
    venue: "La Fabrika",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "ENE", day: "10", year: "2020" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "27", year: "2019" },
    venue: "Love Tree",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "20", year: "2019" },
    venue: "Love Tree",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "14", year: "2019" },
    venue: "Pool Party 1060",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "DIC", day: "06", year: "2019" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "NOV", day: "22", year: "2019" },
    venue: "Riddim",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "SEP", day: "04", year: "2019" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "19", year: "2019" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUL", day: "12", year: "2019" },
    venue: "La X Viva La Noche Live",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "22", year: "2019" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "JUN", day: "06", year: "2019" },
    venue: "Sonido Central",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  },
  {
    date: { month: "MAR", day: "16", year: "2019" },
    venue: "Garden Lounge",
    city: "Cali",
    country: "🇨🇴",
    time: "22:00"
  }
]

export default function ShowsList() {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isListView, setIsListView] = useState(false)
  const [showInternationalOnly, setShowInternationalOnly] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const internationalShows = shows.filter(show => show.isInternational)
  const displayedShows = showInternationalOnly ? internationalShows : shows

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 280 + 12 // card width + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = -(280 + 12) // card width + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      // Check initially
      checkScrollButtons()
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons)
      }
    }
  }, [])

  return (
    <div className="z-10 w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-titulos font-medium">Latest Shows</h2>
        <div className="flex gap-2">
          <div className="flex rounded-md overflow-hidden">
            <button
              onClick={() => setShowInternationalOnly(false)}
              className={`px-3 py-1 text-xs font-textos transition-colors ${
                !showInternationalOnly
                  ? "bg-gradient-to-r from-[#FF9D3C]/10 via-[#811DFF]/10 to-[#8098FF]/10 bg-[#2B2B2B]/80 backdrop-blur-md text-white"
                  : "bg-zinc-800/50 text-white/60 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setShowInternationalOnly(true)}
              className={`px-3 py-1 text-xs font-textos transition-colors ${
                showInternationalOnly
                  ? "bg-gradient-to-r from-[#FF9D3C]/10 via-[#811DFF]/10 to-[#8098FF]/10 bg-[#2B2B2B]/80 backdrop-blur-md text-white"
                  : "bg-zinc-800/50 text-white/60 hover:text-white"
              }`}
            >
              Intl
            </button>
          </div>
          {!isListView && (
            <>
              <button 
                onClick={scrollToPrevious}
                className={`text-white/60 hover:text-white transition-colors ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollToNext}
                className={`text-white/60 hover:text-white transition-colors ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={!canScrollRight}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {!isListView ? (
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth touch-pan-x"
        >
          <div className="flex gap-3 min-w-max">
            {displayedShows.map((show, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden backdrop-blur-sm w-[280px] ${
                  show.isInternational && !showInternationalOnly
                    ? "bg-gradient-to-r from-[#FF9D3C]/10 via-[#811DFF]/10 to-[#8098FF]/10 bg-[#2B2B2B]/80 backdrop-blur-md"
                    : "bg-zinc-800/50"
                }`}
              >
                <div className="p-4 flex items-start gap-4">
                  <div className={`rounded-lg p-3 text-center min-w-[72px] ${
                    show.date.day === "23" && show.date.month === "MAR" && show.date.year === "2025"
                      ? "bg-purple-900/50"
                      : "bg-zinc-900"
                  }`}>
                    <div className="text-sm text-white/60 uppercase font-textos">{show.date.month}</div>
                    <div className="text-3xl font-titulos font-bold mt-1">{show.date.day}</div>
                    <div className="text-sm text-white/60 font-textos">{show.date.year}</div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-titulos font-medium truncate">{show.venue}</h3>
                    </div>
                    <p className="text-sm text-white/60 mb-1 flex items-center gap-2 font-textos">
                      <span className="text-lg">{show.country}</span>
                      {show.city}
                    </p>
                    <p className="text-sm text-white/60 mb-2 font-textos">{show.time}</p>
                    {show.date.day === "23" && show.date.month === "MAR" && show.date.year === "2025" && (
                      <span className="px-2 py-0.5 text-xs font-textos font-medium bg-purple-500/20 text-purple-300 rounded-full self-start">
                        NEW!
                      </span>
                    )}
                    {show.isInternational && (
                      <span className="px-2 py-0.5 text-xs font-textos font-medium bg-blue-500/20 text-blue-300 rounded-full self-start">
                        International Guest
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-1 mb-4">
          {displayedShows.map((show, index) => (
            <div 
              key={index} 
              className={`rounded-md overflow-hidden backdrop-blur-sm ${
                show.isInternational
                  ? "bg-gradient-to-r from-[#FF9D3C]/10 via-[#811DFF]/10 to-[#8098FF]/10 bg-[#2B2B2B]/80 backdrop-blur-md"
                  : "bg-zinc-800/50"
              }`}
            >
              <div className="py-1 px-2 flex items-center gap-2">
                <div className={`rounded-md p-1 text-center min-w-[50px] ${
                  show.date.day === "23" && show.date.month === "MAR" && show.date.year === "2025"
                    ? "bg-purple-900/50"
                    : "bg-zinc-900"
                }`}>
                  <div className="text-[10px] text-white/60 uppercase leading-none font-textos">{show.date.month}</div>
                  <div className="text-xl font-titulos font-bold leading-none mt-0.5">{show.date.day}</div>
                  <div className="text-[10px] text-white/60 leading-none mt-0.5 font-textos">{show.date.year}</div>
                </div>
                <div className="flex flex-col min-w-0 flex-1 justify-center">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-titulos font-medium leading-none">{show.venue}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-xs text-white/60 flex items-center gap-1 font-textos">
                      <span className="text-sm">{show.country}</span>
                      {show.city}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] text-white/60 font-textos">{show.time}</p>
                      {show.date.day === "23" && show.date.month === "MAR" && show.date.year === "2025" && (
                        <span className="px-1 py-0.5 text-[10px] font-textos font-medium bg-purple-500/20 text-purple-300 rounded-sm">
                          NEW!
                        </span>
                      )}
                      {show.isInternational && (
                        <span className="px-1 py-0.5 text-[10px] font-textos font-medium bg-blue-500/20 text-blue-300 rounded-sm">
                          International Guest
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsListView(!isListView)}
        className="mx-auto flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md bg-zinc-800/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FF9D3C]/10 hover:via-[#811DFF]/10 hover:to-[#8098FF]/10 hover:bg-[#2B2B2B]/80 hover:backdrop-blur-md text-white/60 hover:text-white text-sm font-textos"
      >
        {isListView ? (
          <>
            <Grid className="w-3.5 h-3.5" />
            View as grid
          </>
        ) : (
          <>
            <List className="w-3.5 h-3.5" />
            View as list
          </>
        )}
      </button>


    </div>
  )
}