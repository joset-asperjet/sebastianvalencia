interface GlassmorphicEffectProps {
  position?: 'left' | 'right' | 'center';
  size?: 'sm' | 'md' | 'lg';
  intensity?: 'low' | 'medium' | 'high';
}

export function GlassmorphicEffect({ 
  position = 'center',
  size = 'md',
  intensity = 'medium'
}: GlassmorphicEffectProps) {
  const sizeMap = {
    sm: 'w-[300px] h-[300px]',
    md: 'w-[400px] h-[400px]',
    lg: 'w-[500px] h-[500px]'
  };

  const positionMap = {
    left: '-left-[10%]',
    center: 'left-1/2 -translate-x-1/2',
    right: '-right-[10%]'
  };

  const intensityMap = {
    low: 'opacity-40 blur-[60px]',
    medium: 'opacity-60 blur-[80px]',
    high: 'opacity-80 blur-[100px]'
  };

  return (
    <div 
      className={`
        absolute top-1/2 -translate-y-1/2 ${positionMap[position]} 
        ${sizeMap[size]} rounded-full 
        bg-gradient-to-r from-[#FF9D3C]/30 via-[#811DFF]/30 to-[#8098FF]/30 
        ${intensityMap[intensity]} pointer-events-none overflow-hidden
      `}
    />
  );
} 