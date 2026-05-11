import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const slides = [
  {
    image: "/assets/collection.png",
    title: "Field Payment Collection",
    desc: "Our field collection executives visit customers directly and handle payment recovery with professionalism, clarity, and respect.",
  },
  {
    image: "/assets/connection.png",
    title: "Tele Collection Support",
    desc: "Our trained telecallers connect with customers from the office, providing timely reminders, support, and payment follow-ups.",
  },
  {
    image: "/assets/colage.png",
    title: "Trusted Recovery Partnerships",
    desc: "We build reliable recovery partnerships through clear communication, responsible handling, and successful deal closures.",
  },
  {
    image: "/assets/caller.png",
    title: "Complete Collection Workflow",
    desc: "From customer calls to field visits and final settlement, we manage the complete recovery process with trust and efficiency.",
  },
];

export default function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const previewSlides = [1, 2, 3].map((step) => {
    const index = (currentIndex + step) % slides.length;

    return {
      ...slides[index],
      index,
      isNext: step === 1,
    };
  });

  return (
    <section className="hero-carousel">
      <div className="hero-carousel-list">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />

            <div className="hero-carousel-content">
              <div className="hero-carousel-company">
                Elshaddai Enterprises
              </div>

              <div className="hero-carousel-topic">
                Your trusted collection supporter
              </div>

              <h1 className="hero-carousel-title">{slide.title}</h1>

              <p className="hero-carousel-desc">{slide.desc}</p>

              <button type="button" className="hero-carousel-btn">
                  <Link to="/home">GET STARTED</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-preview-wrapper">
        {previewSlides.map((slide) => (
          <button
            key={slide.index}
            type="button"
            className={`hero-preview-card ${
              slide.isNext ? "next-preview" : ""
            }`}
            onClick={() => goToSlide(slide.index)}
            aria-label={`Go to ${slide.title}`}
          >
            <img src={slide.image} alt={slide.title} />
            <span className="hero-preview-title">{slide.title}</span>
          </button>
        ))}
      </div>

      <div className="hero-control-panel">
        <div className="hero-arrows">
          <button type="button" onClick={prevSlide} aria-label="Previous slide">
            ‹
          </button>

          <button type="button" onClick={nextSlide} aria-label="Next slide">
            ›
          </button>
        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}