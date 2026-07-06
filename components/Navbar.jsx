"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    document.body.classList.remove("menu-show");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("menu-show", next);
      return next;
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target${
        scrolled ? " scrolled awake" : ""
      }`}
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}>
          BAC
        </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          onClick={toggleMenu}
          aria-controls="ftco-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${active === link.href ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
