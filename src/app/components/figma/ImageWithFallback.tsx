import { useState } from "react";

export function ImageWithFallback({ src, alt, className, fallbackSrc = "https://via.placeholder.com/800x400?text=OJT+Background" }: any) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}