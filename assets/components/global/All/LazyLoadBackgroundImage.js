/**
 *
 *  This is the Lazy Load Background Image
 *
 */
import { useRef, useEffect, useState } from "react";

export const LazyLoadBackgroundImage = ({
  image_url,
  image_alt,
  style_className,
}) => {
  const [DATA_URI, SET_DATA_URI] = useState("");
  const [IS_LOADING, SET_IS_LOADING] = useState(true);

  const CONTAINER_REF = useRef(null);

  useEffect(() => {
    const GET_IMAGE_DATA_URI = async () => {
      try {
        const response = await fetch(image_url);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = () => {
          const DATA_URI = reader.result;
          SET_DATA_URI(DATA_URI);
          SET_IS_LOADING(false); // Set loading to false once the image is loaded
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.log("Error converting to data URI: " + error);
        SET_IS_LOADING(false); // Set loading to false on error
      }
    };

    const URI_DELAY = 2000;
    const URI_DELAY_TIMER = setTimeout(() => {
      GET_IMAGE_DATA_URI();
    }, URI_DELAY);

    return () => clearTimeout(URI_DELAY_TIMER);
  }, [image_url]);

  useEffect(() => {
    const OPTIONS = {
      root: null, // Using the viewport as the root
      rootMargin: "0px", // Setting no margin
      threshold: 0, // Set the threshold to 0 for instant loading
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the image when it becomes visible
          entry.target.style.backgroundImage = `url(${DATA_URI})`;
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
  }, [DATA_URI]);

  return (
    <>
      {IS_LOADING && <div className="loading-img"></div>}
      <div
        aria-label={image_alt}
        ref={CONTAINER_REF}
        className={`lazy-loaded-background ${style_className}`}
        style={{
          /* You can add additional styling here if needed */
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
};
