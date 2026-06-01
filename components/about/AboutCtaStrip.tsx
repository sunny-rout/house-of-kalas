"use client";

import { motion } from "framer-motion";

/* ── AboutCtaStrip ──────────────────────────────────────────────────────── */
export default function AboutCtaStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="about-cta"
      className="relative overflow-hidden py-12 md:py-14"
      style={{ backgroundColor: "var(--color-hok-inverse-surface)" }}
    >
      {/* Subtle glow behind */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, color-mix(in srgb, var(--color-hok-secondary-container) 20%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left: heading */}
        <h2
          className="font-display text-center md:text-left"
          style={{
            fontSize:
              "clamp(var(--text-headline-lg-mobile), 3.2vw, var(--text-headline-md))",
            lineHeight: 1.25,
            color: "var(--color-hok-inverse-on-surface)",
          }}
        >
          Ready to begin your journey with us?
        </h2>

        {/* Right: CTA button */}
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 rounded-full px-8 py-4 uppercase font-body font-semibold tracking-widest text-white text-sm cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, var(--color-hok-secondary-container) 0%, var(--color-hok-primary-fixed-dim) 50%, var(--color-hok-surface-tint) 100%)",
            boxShadow:
              "0 4px 20px 0 color-mix(in srgb, var(--color-hok-secondary-container) 40%, transparent)",
            letterSpacing: "0.12em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 40px 0 color-mix(in srgb, var(--color-hok-surface-tint) 60%, transparent), 0 0 24px 4px color-mix(in srgb, var(--color-hok-primary-fixed-dim) 50%, transparent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 20px 0 color-mix(in srgb, var(--color-hok-secondary-container) 40%, transparent)";
          }}
        >
          Book a trial class
        </motion.a>
      </div>
    </motion.section>
  );
}
