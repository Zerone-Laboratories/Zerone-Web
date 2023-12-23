"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Autoplay from "embla-carousel-autoplay";

import styles from "./Carousel.module.scss";

export default function Carousel({ slides }: { slides: JSX.Element[] }) {
  const autoplayOptions = {
    delay: 4000,
    stopOnFocusIn: true,
    stopOnMouseEnter: true,
    stopOnInteraction: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, slidesToScroll: 1 },
    [Autoplay(autoplayOptions)],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.Outer}>
      <div className={styles.Carousel} ref={emblaRef}>
        <div className={styles.Container}>
          {slides.map((slide, index) => (
            <div className={styles.Slide} key={index}>
              <div className={styles.Inner}>{slide}</div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.ControlButtonLeft} onClick={scrollPrev}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button className={styles.ControlButtonRight} onClick={scrollNext}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
