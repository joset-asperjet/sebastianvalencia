import { HighlightCard } from './HighlightCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface Highlight {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  lastUpdate: string;
  englishLink?: string;
  showEnglishButton?: boolean;
  isHype?: boolean;
}

interface HighlightsListProps {
  highlights: Highlight[];
}

export function HighlightsList({ highlights }: HighlightsListProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300 + 24; // card width + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = -(300 + 24); // card width + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      // Check initially
      checkScrollButtons();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center mb-7 z-10 relative">
          <div className="flex-1" />
          <h2 className="text-xl font-titulos font-medium text-white">
            Highlights
          </h2>
          <div className="flex gap-2 flex-1 justify-end">
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
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide scroll-smooth touch-pan-x justify-center"
          >
            <div className="flex gap-6">
              {highlights.map((highlight) => (
                <div 
                  key={highlight.id} 
                  className="flex-shrink-0"
                >
                  <HighlightCard
                    title={highlight.title}
                    description={highlight.description}
                    videoUrl={highlight.videoUrl}
                    thumbnailUrl={highlight.thumbnailUrl}
                    lastUpdate={highlight.lastUpdate}
                    englishLink={highlight.englishLink}
                    showEnglishButton={highlight.showEnglishButton}
                    isHype={highlight.isHype}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}