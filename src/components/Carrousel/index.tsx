import React, { useState, useEffect } from "react";
import Image from "next/image";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export interface CarouselItem {
  image: string; // URL of the image
  title: string; // Title for the slide
  caption?: string;
  subtitle?: string; // Subtitle for the slide (optional)
  button?: {
    label: string; // Label for the button
    url: string; // URL for the button link
  };
}

interface CarouselProps {
  slides: CarouselItem[]; // Array of carousel slides
  autoPlay?: boolean; // Whether the carousel should autoplay
  interval?: number; // Interval for autoplay (in milliseconds)
}

/**
 * Carousel Component
 * Displays a carousel of images with optional titles, subtitles, and buttons.
 * The component is accessible with ARIA roles and attributes.
 */
const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // Handle autoplay functionality
  useEffect(() => {
    if (autoPlay && totalSlides > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, totalSlides]);

  // Navigate to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Navigate to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      role="banner"
      aria-label="Carousel"
    >
      {/* Slides */}
      <div
        className="flex shadow-md transition-transform duration-500 md:aspect-[16/9] aspect-[12/16]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full relative"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${totalSlides}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full img-carrousel"
              role="img"
              fill
              sizes="(max-width: 1200px) 100vw"
              style={{ objectFit: "cover" }}
              quality={95}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center p-4 text-white space-y-8">
              <div>
                <h1 className="text-xl sm:text-4xl font-bold leading-relaxed tracking-wide">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-sm sm:text-lg mt-2">{slide.subtitle}</p>
                )}
              </div>
              {slide.button && (
                <Link
                  href={slide.button.url}
                  className="rounded-full capitalize px-6 py-2 text-center font-medium transition duration-300 sm:min-w-52 min-w-full bg-dark-main text-white hover:bg-dark-light"
                  role="button"
                  aria-label={slide.button.label}
                >
                  {slide.button.label}
                </Link>
              )}
              {slide?.caption && (
                <div className="absolute bottom-2 text-end z-[1] w-full px-4">
                  <div className="relative group">
                    <p className="text-xs cursor-pointer text-white">
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </p>
                    <div className="absolute w-auto bottom-0 right-8 bg-[#9b9b9b54] text-gray-50 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs">{slide?.caption}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="navigation"
          aria-label="Carousel Navigation"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;
