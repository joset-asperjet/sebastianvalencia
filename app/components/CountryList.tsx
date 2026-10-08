"use client"

const cities = [
  { name: "Cali", flag: "🇨🇴", count: 12 },
  { name: "Medellín", flag: "🇨🇴", count: 1 },
  { name: "Montpellier", flag: "🇫🇷", count: 1 },
  { name: "London", flag: "🇬🇧", count: 1 }
]

export default function CountryList() {
  return (
    <div className="w-full max-w-sm">
      <div className="sticky top-0 z-10 backdrop-blur-sm py-1 mb-3">
        <h2 className="text-xl font-bold text-center tracking-tight">
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cities.map((city, index) => (
          <div
            key={city.name}
            className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2 text-center hover:bg-zinc-800/70 transition-colors"
          >
            <div className="text-xl mb-0.5">{city.flag}</div>
            <div className="text-[10px] font-medium">{city.name}</div>
            <div className="text-[8px] text-white/60 mt-0.5">{city.count} {city.count === 1 ? 'show' : 'shows'}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center bg-zinc-800/50 backdrop-blur-sm rounded-lg p-3">
        <div className="flex items-center justify-center gap-2 text-[12px] font-medium">
          <span className="text-red-400">Available dates for Europe this summer!</span>
          <a 
            href="https://wa.me/573148850393"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
} 