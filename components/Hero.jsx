"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    subheading: "Hello!",
    heading: (
      <>
        I&apos;m <span>Babatunde Atijosan Christian</span>
      </>
    ),
    subHeading: "Senior Frontend Engineer & Fintech Specialist",
    bg: "/images/icon-2.png",
  },
  {
    subheading: "Hello!",
    heading: (
      <>
        Architecting <span>Financial Infrastructure</span> for the Web
      </>
    ),
    subHeading: null,
    bg: "/images/icon-2.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="home-slider">
        {SLIDES.map((slide, i) => (
          <div className={`slider-item${i === active ? " active" : ""}`} key={i}>
            <div className="overlay"></div>
            <div className="container h-100">
              <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end h-100">
                <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: `url(${slide.bg})` }}>
                  <div className="overlay"></div>
                </div>
                <div className="one-forth d-flex align-items-center ftco-animate">
                  <div className="text">
                    <span className="subheading">{slide.subheading}</span>
                    <h1 className="mb-4 mt-3">{slide.heading}</h1>
                    {slide.subHeading && <h2 className="mb-4">{slide.subHeading}</h2>}
                    <p>
                      <a href="mailto:atijosanbabatunde@gmail.com" className="btn btn-primary py-3 px-4">
                        Hire me
                      </a>{" "}
                      <a
                        href="#projects"
                        className="btn btn-white btn-outline-white py-3 px-4"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        My works
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} className={i === active ? "active" : ""} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
