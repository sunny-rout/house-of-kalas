"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

/* ── Frame data ──────────────────────────────────────────────── */
const TOTAL_FRAMES = 6;

const FRAMES = Array.from({ length: TOTAL_FRAMES }, (_, i) => ({
  src: `/bundle-hok-journey/journey-page-${i + 1}.png`,
  threshold: i / TOTAL_FRAMES,
}));

// Journey steps overlaid at specific scroll progress points
const STEPS = [
  { progress: 0.0,  label: "01", title: "Aspire",   desc: "The spark of desire to move." },
  { progress: 0.2,  label: "02", title: "Learn",    desc: "Foundation, technique, trust." },
  { progress: 0.4,  label: "03", title: "Perform",  desc: "Own the stage with presence." },
  { progress: 0.65, label: "04", title: "Shine",    desc: "Your unique voice fully emerges." },
  { progress: 0.85, label: "05", title: "Rise",     desc: "Growth that extends beyond dance." },
];

/* ── Journey component ──────────────────────────────────────────────────── */
export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll tracking over the tall sticky section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index (each image covers 1/N of the scroll)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let idx = 0;
    for (let i = FRAMES.length - 1; i >= 0; i--) {
      if (latest >= FRAMES[i].threshold) {
        idx = i;
        break;
      }
    }
    setFrameIndex(idx);

    // Determine active step
    for (let i = STEPS.length - 1; i >= 0; i--) {
      if (latest >= STEPS[i].progress) {
        setActiveStep(i);
        break;
      }
    }
  });

  // Preload all frames on mount
  useEffect(() => {
    FRAMES.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Progress bar width driven by scroll
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      // 600vh = tall enough for smooth 151-frame scrub
      className="relative"
      style={{ height: "600vh", backgroundColor: "var(--color-hok-background)" }}
    >
      {/* ── Sticky viewport ─────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* ── Section label ───────────────────────────────────────────── */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <p
            className="font-body uppercase tracking-widest"
            style={{
              fontSize: "var(--text-label-lg)",
              letterSpacing: "0.18em",
              color: "rgba(255,238,217,0.70)",
            }}
          >
            The Journey
          </p>
        </div>

        {/* ── Full-frame image ─────────────────────────────────────────── */}
        <div className="relative flex-1 w-full">
          {/* Cross-fade between images */}
          {FRAMES.map((frame, i) => (
            <motion.div
              key={frame.src}
              className="absolute inset-0"
              animate={{ opacity: frameIndex === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={frame.src}
                alt={`Journey page ${i + 1}`}
                fill
                priority={i === 0}
                unoptimized
                sizes="100vw"
                className="object-cover object-center select-none"
                draggable={false}
              />
            </motion.div>
          ))}

          {/* Dark vignette so text reads cleanly */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(22,6,14,0.72) 0%, rgba(22,6,14,0.18) 40%, rgba(22,6,14,0.08) 70%, rgba(22,6,14,0.35) 100%)",
            }}
          />

          {/* ── Step overlay ─────────────────────────────────────────── */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-16">
            <div className="max-w-6xl mx-auto">
              {/* Step pills row */}
              <div className="flex items-end gap-6 md:gap-10 mb-6 overflow-x-auto pb-1"
                style={{ scrollbarWidth: "none" }}
              >
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    animate={{
                      opacity: activeStep === i ? 1 : 0.35,
                      scale: activeStep === i ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex-shrink-0 flex flex-col gap-1 cursor-default"
                  >
                    <span
                      className="font-body text-xs uppercase tracking-widest"
                      style={{
                        color: activeStep === i
                          ? "var(--color-hok-secondary-container)"
                          : "rgba(255,238,217,0.5)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {step.label}
                    </span>
                    <span
                      className="font-display font-semibold"
                      style={{
                        fontSize: activeStep === i
                          ? "clamp(1.8rem, 4vw, 2.8rem)"
                          : "clamp(1.2rem, 2.5vw, 1.8rem)",
                        color: activeStep === i
                          ? "#fff8f3"
                          : "rgba(255,238,217,0.4)",
                        lineHeight: 1.1,
                        transition: "font-size 0.4s ease",
                      }}
                    >
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Active step description */}
              <motion.p
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="font-body max-w-sm"
                style={{
                  fontSize: "var(--text-body-md)",
                  color: "rgba(255,238,217,0.75)",
                  lineHeight: 1.65,
                }}
              >
                {STEPS[activeStep].desc}
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Progress bar ─────────────────────────────────────────────── */}
        <div
          className="relative w-full flex-shrink-0"
          style={{ height: "3px", backgroundColor: "rgba(255,238,217,0.10)" }}
        >
          <motion.div
            style={{ width: progressWidth }}
            className="absolute left-0 top-0 h-full"
            aria-hidden="true"
            css-note="gradient bar"
          />
          <motion.div
            className="absolute left-0 top-0 h-full rounded-r-full"
            style={{
              width: progressWidth,
              background:
                "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
