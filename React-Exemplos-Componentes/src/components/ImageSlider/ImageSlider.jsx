import React, { useState } from "react";
import "./ImageSlider.css";
import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";
import car4 from "../../assets/car-4.jpg";
import car5 from "../../assets/car-5.jpg";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((prevIndex) => {
      if (prevIndex === IMAGES.length - 1) return 0;
      return prevIndex + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) return IMAGES.length - 1;
      return prevIndex - 1;
    });
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <section
        aria-label="Image Slider"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {IMAGES.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        {/* <img
            src={IMAGES[imageIndex]}
            alt="imagem-de-um-carro"
            className="img-slider-img"
          /> */}
        <button
          className="img-slider-btn"
          style={{ left: 0 }}
          onClick={showPrevImage}
          aria-label="View Previuous Image"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          className="img-slider-btn"
          style={{ right: 0 }}
          onClick={showNextImage}
          aria-label="View Next Image"
        >
          <ArrowBigRight aria-hidden />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {IMAGES.map((_, index) => (
            // Botões(dots) de passar imagens
            <button
              key={index}
              className="img-slider-dot-btn"
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
