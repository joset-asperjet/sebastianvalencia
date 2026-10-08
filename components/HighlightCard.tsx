import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { VideoModal } from './VideoModal';
import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  lastUpdate: string;
  englishLink?: string;
  showEnglishButton?: boolean;
  isHype?: boolean;
}

export function HighlightCard({ title, description, videoUrl, thumbnailUrl, lastUpdate, englishLink, showEnglishButton, isHype }: HighlightCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Card 
        className="w-[300px] h-[420px] flex-shrink-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-zinc-900"
        onClick={() => setIsVideoOpen(true)}
      >
        <CardContent className="p-0 h-full relative">
          <div className="relative w-full h-[240px] group">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
            />
            {isHype && (
              <div className="absolute top-0 right-0 z-10">
                <Image
                  src="/images/hypetag.png"
                  alt="Hype"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
              <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all" />
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div>
              <h3 className="font-titulos font-bold text-xl text-white mb-1">{title}</h3>
              <p className="text-xs font-textos text-zinc-400 mb-2">Última actualización: {formatDate(lastUpdate)}</p>
            </div>
            <p className="text-sm font-textos leading-relaxed text-zinc-300 line-clamp-3">{description}</p>
            {showEnglishButton && englishLink && (
              <a 
                href={englishLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
              >
                Ver en inglés
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
        title={title}
      />
    </>
  );
}