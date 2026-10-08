import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { textos } from '../fonts';

interface AudioPlayerProps {
  audioUrl: string;
  trackName: string;
  cover?: string;
  onClose: () => void;
}

export default function AudioPlayer({ audioUrl, trackName, cover, onClose }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Efecto de entrada
    requestAnimationFrame(() => setIsVisible(true));
    
    if (audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      setIsVisible(false);
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Esperar a que termine la animación antes de cerrar
    setTimeout(onClose, 200);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-zinc-900/95 border-t border-zinc-800 shadow-2xl">
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {cover && (
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={cover}
                      alt={trackName}
                      width={48}
                      height={48}
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <span className={`text-sm ${textos.className} text-white/60 truncate`}>{trackName}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleClose}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                Cerrar
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs ${textos.className} text-white/60 w-12`}>
                {formatTime(currentTime)}
              </span>
              <div className="flex-1">
                <Slider
                  value={[currentTime]}
                  max={duration}
                  step={1}
                  onValueChange={(value) => seek(value[0])}
                  className="cursor-pointer"
                />
              </div>
              <span className={`text-xs ${textos.className} text-white/60 w-12`}>
                {formatTime(duration)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={skipBackward}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <FaBackward className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="text-white hover:text-white hover:bg-white/10"
              >
                {isPlaying ? (
                  <FaPause className="h-4 w-4" />
                ) : (
                  <FaPlay className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={skipForward}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <FaForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 