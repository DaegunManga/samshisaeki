import { useCallback, useEffect, useMemo } from 'react';

export default function useScrollLock() {
  const keys = useMemo(() => [37, 38, 39, 40], []);

  const preventDefaultForScrollKeys = useCallback(
    (e: KeyboardEvent) => {
      if (keys.find((k) => e.keyCode === k)) {
        e.preventDefault();
        return false;
      }
    },
    [keys]
  );

  const wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  useEffect(() => {
    window.addEventListener('DOMMouseScroll', (e) => e.preventDefault(), false); // older FF
    window.addEventListener(wheelEvent, (e) => e.preventDefault(), {
      passive: false,
    }); // modern desktop
    window.addEventListener('touchmove', (e) => e.preventDefault(), {
      passive: false,
    }); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }, [wheelEvent, preventDefaultForScrollKeys]);

  return () => {
    window.removeEventListener(
      'DOMMouseScroll',
      (e) => e.preventDefault(),
      false
    ); // older FF
    window.removeEventListener(wheelEvent, (e) => e.preventDefault()); // modern desktop
    window.removeEventListener('touchmove', (e) => e.preventDefault()); // mobile
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  };
}
