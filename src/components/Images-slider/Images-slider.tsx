import React, { useEffect, useRef } from 'react';
import './Images-slider.scss'; // Assurez-vous d'importer votre fichier CSS

interface Image {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let leftPosition = 0;

  function scrollImages() {
    leftPosition -= 1;
    if (containerRef.current)
      containerRef.current.style.transform = `translateX(${leftPosition}px)`;

    const firstImage = containerRef.current?.querySelector('img');
    if (
      firstImage &&
      containerRef.current &&
      leftPosition <= -firstImage.clientWidth
    ) {
      leftPosition += firstImage.clientWidth;
      containerRef.current.appendChild(firstImage.cloneNode(true) as Node);
      containerRef.current.removeChild(firstImage);
    }
  }

  useEffect(() => {
    const interval = setInterval(scrollImages, 30); // Ajustez la vitesse de défilement si nécessaire
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="messagedefilant">
      <div className="images-container" ref={containerRef}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
