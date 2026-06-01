"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../../utils/gsap";

// Brand tokens (single source of truth for inline styles)
const T = {
  teal:       "#5AACB5",
  tealLight:  "#7BBFB8",
  tealDeep:   "#3D9AA3",
  charcoal:   "#0D2020",
  bg:         "#F5F8F7",
};

export function Header78() {
  const sectionRef  = useRef(null);
  const imageRef    = useRef(null);
  const cursorRef   = useRef(null);
  const formCardRef = useRef(null);
  const bodyRef     = useRef(null);

  // Smooth cursor follow via gsap.ticker — no React state, no re-renders
  useEffect(() => {
    const section  = sectionRef.current;
    const cursorEl = cursorRef.current;
    const imageEl  = imageRef.current;
    const formCard = formCardRef.current;
    const bodyEl   = bodyRef.current;
    if (!section || !cursorEl || !imageEl) return;

    const RADIUS = 180;
    let targetX = 0, targetY = 0, smoothX = 0, smoothY = 0, active = false;

    const isOverForm = () => !!(formCard && formCard.matches(":hover"));

    // Returns true if the cursor circle overlaps the body text element
    const circleOverlapsBody = () => {
      if (!bodyEl) return false;
      const sRect = section.getBoundingClientRect();
      const bRect = bodyEl.getBoundingClientRect();
      const left   = bRect.left - sRect.left;
      const top    = bRect.top  - sRect.top;
      const right  = left + bRect.width;
      const bottom = top  + bRect.height;
      const nearX  = Math.max(left, Math.min(smoothX, right));
      const nearY  = Math.max(top,  Math.min(smoothY, bottom));
      return Math.hypot(smoothX - nearX, smoothY - nearY) < RADIUS;
    };

    const resetBodyColor = () => {
      if (!bodyEl) return;
      bodyEl.style.color = `${T.charcoal}a0`;
      bodyEl.style.textShadow = "";
    };

    const onMove = (e) => {
      if (isOverForm()) {
        if (active) {
          active = false;
          cursorEl.style.opacity = "0";
          imageEl.style.clipPath = "circle(0px at 50% 50%)";
          resetBodyColor();
        }
        return;
      }
      const rect = section.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!active) {
        active = true;
        smoothX = targetX;
        smoothY = targetY;
        cursorEl.style.opacity = "1";
      }
    };

    const onLeave = () => {
      active = false;
      cursorEl.style.opacity = "0";
      imageEl.style.clipPath = "circle(0px at 50% 50%)";
      resetBodyColor();
    };

    const tick = () => {
      if (!active) return;
      smoothX += (targetX - smoothX) * 0.22;
      smoothY += (targetY - smoothY) * 0.22;
      cursorEl.style.transform = `translate3d(${smoothX}px, ${smoothY}px, 0) translate(-50%, -50%)`;
      imageEl.style.clipPath = `circle(${RADIUS}px at ${smoothX}px ${smoothY}px)`;

      // Adapt body text color when cursor circle overlaps it
      if (bodyEl) {
        if (circleOverlapsBody()) {
          bodyEl.style.color = "rgba(255,255,255,0.88)";
          bodyEl.style.textShadow = "0 1px 6px rgba(0,0,0,0.55)";
        } else {
          bodyEl.style.color = `${T.charcoal}a0`;
          bodyEl.style.textShadow = "";
        }
      }
    };

    cursorEl.style.opacity = "0";
    imageEl.style.clipPath = "circle(0px at 50% 50%)";

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    gsap.ticker.add(tick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      gsap.ticker.remove(tick);
      active = false;
      cursorEl.style.opacity = "0";
      imageEl.style.clipPath = "circle(0px at 50% 50%)";
    };
  }, []);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return;

    const introAlreadyDone = window.__kmIntroDone === true;
    let tl = null;
    const sel = ".hero-bg-img, .hero-eyebrow-line, .hero-eyebrow-inner, .hero-headline-inner, .hero-body, .hero-cta";

    const startAnimations = (delay, s) => {
      gsap.killTweensOf(scope.querySelectorAll(sel));
      tl = gsap.timeline({ delay, defaults: { ease: "power3.out" } });
      tl.fromTo(scope.querySelector(".hero-bg-img"),
        { scale: 1.08 }, { scale: 1, duration: 3.5 * s, ease: "power1.out" }, 0);
      tl.fromTo(scope.querySelector(".hero-eyebrow-line"),
        { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 0.85 * s }, 0.35 * s);
      tl.fromTo(scope.querySelector(".hero-eyebrow-inner"),
        { y: "120%" }, { y: "0%", duration: 0.65 * s }, 0.7 * s);
      tl.fromTo(scope.querySelectorAll(".hero-headline-inner"),
        { y: "110%" }, { y: "0%", stagger: 0.13 * s, duration: 1.15 * s }, 0.95 * s);
      tl.fromTo(scope.querySelector(".hero-body"),
        { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 * s }, 1.5 * s);
      tl.fromTo(scope.querySelectorAll(".hero-cta"),
        { y: 22, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.11 * s, duration: 0.7 * s }, 1.85 * s);
    };

    const ctx = gsap.context(() => {
      gsap.to(".hero-bg-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
      });
    }, scope);

    let onIntroComplete = null;

    if (introAlreadyDone) {
      startAnimations(0.05, 0.75);
    } else {
      gsap.set(scope.querySelector(".hero-eyebrow-line"),          { scaleX: 0 });
      gsap.set(scope.querySelector(".hero-eyebrow-inner"),         { y: "120%" });
      gsap.set(scope.querySelectorAll(".hero-headline-inner"),     { y: "110%" });
      gsap.set(scope.querySelector(".hero-body"),                  { y: 28, opacity: 0 });
      gsap.set(scope.querySelectorAll(".hero-cta"),                { y: 22, opacity: 0 });
      onIntroComplete = () => startAnimations(0.3, 1);
      window.addEventListener("km-intro-complete", onIntroComplete, { once: true });
    }

    return () => {
      if (tl) tl.kill();
      ctx.revert();
      if (onIntroComplete) window.removeEventListener("km-intro-complete", onIntroComplete);
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 4.5rem)", cursor: "none", backgroundColor: T.bg }}
    >
      {/* Background image */}
      <img
        src="/images/Hero%20section%20Vorher.png"
        alt="Gebäude im Rohbau"
        className="hero-bg-img absolute inset-0 h-full w-full object-cover object-center"
        style={{ willChange: "transform", filter: "saturate(0.85) brightness(1.05)" }}
      />

      {/* Light overlay — dicht links, transparent rechts */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${T.bg}f7 0%, ${T.bg}e8 35%, ${T.bg}80 60%, ${T.bg}18 100%)`,
        }}
      />

      {/* Hover-Reveal: Nachher-Bild */}
      <img
        ref={imageRef}
        src="/images/hero-nachher.png"
        alt="Fertiggestelltes Gebäude"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ clipPath: "circle(0px at 50% 50%)", willChange: "clip-path" }}
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute left-0 top-0 z-20 flex items-center justify-center"
        style={{ width: 48, height: 48, opacity: 0, transition: "opacity 0.25s ease", willChange: "transform" }}
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-full border" style={{ borderColor: `${T.teal}b0` }} />
        <span className="block h-1.5 w-1.5 rounded-full" style={{ background: T.teal }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col lg:flex-row items-center justify-between px-[6%] pt-16 pb-12 gap-8 lg:gap-12">

        {/* Left: copy */}
        <div className="w-full self-stretch flex flex-col justify-center gap-16 lg:max-w-[46%]">

          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span
              className="hero-eyebrow-line h-px w-10 flex-shrink-0"
              style={{ background: T.teal }}
            />
            <div style={{ overflow: "hidden" }}>
              <p
                className="hero-eyebrow-inner font-body text-xs font-semibold uppercase tracking-[0.28em]"
                style={{ color: T.teal }}
              >
                Marklkofen · Montage & Renovierungen
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-extrabold"
            style={{ fontSize: "clamp(2rem, 4vw, 5rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: T.charcoal }}
          >
            <span className="block" style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hero-headline-inner block">
                Leistung{" "}
                <span style={{ color: T.teal }}>& Vertrauen.</span>
              </span>
            </span>
            <span className="block" style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hero-headline-inner block">Ihr Montagebetrieb.</span>
            </span>
          </h1>

          {/* Body */}
          <p
            ref={bodyRef}
            className="hero-body max-w-[400px] font-body text-base leading-relaxed md:text-lg"
            style={{ color: `${T.charcoal}a0`, transition: "color 0.2s ease, text-shadow 0.2s ease" }}
          >
            Fensterbau, Türenbau, Metalltore & Bodenleger — kompetent und zuverlässig.
            Adrian Pieczka ist Ihr persönlicher Ansprechpartner für Montage- und
            Renovierungsarbeiten im südöstlichen Bayern.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/galerie"
              className="hero-cta group inline-flex items-center gap-3 px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 active:scale-[0.98]"
              style={{
                border: `1.5px solid ${T.teal}`,
                color: T.teal,
                background: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.teal; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.teal; }}
            >
              Galerie ansehen
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/kontakt"
              className="hero-cta group inline-flex items-center gap-3 px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 active:scale-[0.98]"
              style={{
                background: T.charcoal,
                color: "#fff",
                border: `1.5px solid ${T.charcoal}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              Angebot anfragen
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right: contact form card */}
        <div
          ref={formCardRef}
          className="hero-cta hidden lg:flex flex-col ml-auto"
          style={{ cursor: "default", width: 460, flexShrink: 0, marginRight: "4rem" }}
        >
          <div style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(24px)",
            border: `1px solid ${T.teal}30`,
            boxShadow: `0 24px 64px rgba(13,32,32,0.10), inset 0 1px 0 ${T.teal}20`,
            padding: "2rem 2.5rem",
          }}>

            {/* Card header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 28, height: 1.5, background: `linear-gradient(to right, ${T.teal}, transparent)` }} />
                <p className="font-body text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: T.teal }}>
                  Kostenloses Angebot
                </p>
              </div>
              <h3 className="font-heading text-3xl font-bold leading-tight" style={{ color: T.charcoal }}>
                Projekt anfragen
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed" style={{ color: `${T.charcoal}60` }}>
                Antwort innerhalb eines Werktages
              </p>
            </div>

            {/* Separator */}
            <div style={{ height: 1, background: `linear-gradient(to right, ${T.teal}30, transparent)`, marginBottom: "1.5rem" }} />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const d = Object.fromEntries(new FormData(e.target));
                window.location.href = `mailto:info@montage-pieczka.de?subject=Anfrage von ${d.vorname} ${d.nachname}&body=Name: ${d.vorname} ${d.nachname}%0ATelefon: ${d.telefon}%0AE-Mail: ${d.email}%0AProjektart: ${d.projektart || "-"}%0ANachricht: ${d.nachricht}`;
              }}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                {[["vorname", "Vorname", true], ["nachname", "Nachname", true]].map(([name, label, req]) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `${T.charcoal}50` }}>{label}</label>
                    <input
                      name={name} required={req}
                      className="w-full bg-transparent pb-3 pt-1 font-body text-base outline-none transition-all duration-200"
                      style={{ borderBottom: `1px solid ${T.charcoal}18`, color: T.charcoal }}
                      onFocus={e => e.target.style.borderBottomColor = T.teal}
                      onBlur={e => e.target.style.borderBottomColor = `${T.charcoal}18`}
                    />
                  </div>
                ))}
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-2 gap-4">
                {[["telefon", "Telefon *", true, "tel"], ["email", "E-Mail", false, "email"]].map(([name, label, req, type]) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `${T.charcoal}50` }}>{label}</label>
                    <input
                      name={name} required={req} type={type}
                      className="w-full bg-transparent pb-3 pt-1 font-body text-base outline-none transition-all duration-200"
                      style={{ borderBottom: `1px solid ${T.charcoal}18`, color: T.charcoal }}
                      onFocus={e => e.target.style.borderBottomColor = T.teal}
                      onBlur={e => e.target.style.borderBottomColor = `${T.charcoal}18`}
                    />
                  </div>
                ))}
              </div>

              {/* Project type pills */}
              <div>
                <label className="block mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `${T.charcoal}50` }}>
                  Projektart
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Fenster", "Türen", "Tore", "Boden", "Renovierung"].map((opt) => (
                    <label key={opt} className="cursor-pointer">
                      <input type="radio" name="projektart" value={opt} className="sr-only peer" />
                      <span
                        className="inline-block px-4 py-2 font-body text-sm uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer"
                        style={{ border: `1px solid ${T.charcoal}18`, color: `${T.charcoal}55` }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = T.teal; e.currentTarget.style.color = T.teal; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = `${T.charcoal}18`; e.currentTarget.style.color = `${T.charcoal}55`; }}
                      >
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: `${T.charcoal}50` }}>
                  Kurze Beschreibung
                </label>
                <textarea
                  name="nachricht" rows={3}
                  placeholder="z. B. Fenstermontage 3 Fenster, Marklkofen"
                  className="w-full resize-none bg-transparent pb-3 pt-1 font-body text-base outline-none transition-all duration-200"
                  style={{
                    borderBottom: `1px solid ${T.charcoal}18`,
                    color: T.charcoal,
                  }}
                  onFocus={e => e.target.style.borderBottomColor = T.teal}
                  onBlur={e => e.target.style.borderBottomColor = `${T.charcoal}18`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-1 w-full py-4 font-body text-base font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 active:scale-[0.98]"
                style={{ background: `linear-gradient(90deg, ${T.tealDeep} 0%, ${T.teal} 50%, ${T.tealDeep} 100%)`, backgroundSize: "200% 100%" }}
                onMouseEnter={e => e.currentTarget.style.backgroundPosition = "100% 0"}
                onMouseLeave={e => e.currentTarget.style.backgroundPosition = "0% 0"}
              >
                <span className="flex items-center justify-center gap-2">
                  Anfrage senden
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
            </form>

            {/* Card footer */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div style={{ height: 1, width: 20, background: `${T.teal}30` }} />
              <a
                href="tel:+491716561613"
                className="font-body text-sm tracking-[0.08em] transition-colors duration-200"
                style={{ color: `${T.charcoal}45` }}
                onMouseEnter={e => e.currentTarget.style.color = T.teal}
                onMouseLeave={e => e.currentTarget.style.color = `${T.charcoal}45`}
              >
                +49 171 6561613
              </a>
              <div style={{ height: 1, width: 20, background: `${T.teal}30` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-[6%] z-10 hidden lg:flex items-center gap-3"
        style={{ animation: "heroScrollFadeIn 1s ease 0.8s both" }}
      >
        <span className="h-px w-8" style={{ background: `${T.teal}55` }} />
        <span className="font-body text-xs uppercase tracking-[0.22em]" style={{ color: `${T.teal}90` }}>Scroll</span>
      </div>

      <style>{`
        @keyframes heroScrollFadeIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
