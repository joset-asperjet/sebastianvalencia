import { createContext, useContext, useState, ReactNode } from 'react';

interface Track {
  url: string;
  name: string;
  cover?: string;
}

interface AudioPlayerContextType {
  currentTrack: Track | null;
  setCurrentTrack: (track: Track | null) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  return (
    <AudioPlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
} 