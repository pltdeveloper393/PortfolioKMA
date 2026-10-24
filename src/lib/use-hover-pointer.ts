import { useEffect, useState } from 'react';

/**
 * Признак «настоящего» курсора: устройство поддерживает hover
 * и точный указатель (мышь/трекпад). На touch-устройствах false —
 * курсорные эффекты (tilt, магнитность, параллакс) отключаются.
 */
export function useHoverPointer(): boolean {
  const [isHoverPointer, setIsHoverPointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onChange = (event: MediaQueryListEvent) => setIsHoverPointer(event.matches);

    setIsHoverPointer(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return isHoverPointer;
}
