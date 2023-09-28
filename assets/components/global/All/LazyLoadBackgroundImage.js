/**
 *
 *  This is the Lazy Load Background Image
 *
 */

import { useRef, useEffect } from "react";

export const LazyLoadBackgroundImage = ({
  image_url,
  image_alt,
  style_className,
}) => {
  const CONTAINER_REF = useRef(null);

  useEffect(() => {
    const OPTIONS = {
      root: null, // Using the viewport as the root
      rootMargin: "0px", // Setting no margin
      threshold: 0.1, // 10% intersection ratio
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the image when it becomes visible
          entry.target.style.backgroundImage = `url(${image_url})`;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, OPTIONS);

    if (CONTAINER_REF.current) {
      observer.observe(CONTAINER_REF.current);
    }

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, [image_url]);

  return (
    <div
      aria-label={image_alt}
      ref={CONTAINER_REF}
      className={`lazy-loaded-background ${style_className}`}
    ></div>
  );
};
