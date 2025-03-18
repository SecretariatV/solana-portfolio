import { useEffect, useState } from "react";

const useScrollPosition = (callback?: (pos: { y: number }) => void) => {
  const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);

  useEffect(() => {
    const updatePosition = () => {
      const y = window.scrollY;
      setScrollPosition(y);
      if (callback) callback({ y });
    };

    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [callback]);

  return scrollPosition;
};

export default useScrollPosition;
