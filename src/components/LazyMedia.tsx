import { useState, useRef } from "react";

export default function LazyMedia({ src, type, poster, autoPlayOnHover, className = "" }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  const handleMouseEnter = () => {
    if (autoPlayOnHover && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (autoPlayOnHover && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (type === "video") {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}              // <-- thumbnail visible
        preload="none"               // <-- required for real lazy loading
        muted
        playsInline
        onCanPlay={() => setLoaded(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`object-cover w-full h-full ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      loading="lazy"
      alt=""
      className={`object-cover w-full h-full ${className}`}
    />
  );
}
