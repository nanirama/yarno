import { useEffect, useState } from "react";

export const useScrolled = (offset) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (scrollPosition > offset && !hasScrolled) {
      setHasScrolled(true);
    }

    if (scrollPosition < offset && hasScrolled) {
      setHasScrolled(false);
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return {
    hasScrolled
  }
}
