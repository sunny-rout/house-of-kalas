"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Feature bullet data ────────────────────────────────────────────────── */
const FEATURES = [
  "Central, well-connected location in Mumbai",
  "Spacious studio with proper flooring and ventilation",
  "Small batch sizes for individual attention",
  "Performance-ready lighting and sound",
];

/* ── Space section ──────────────────────────────────────────────────────── */
export default function Space() {
  return (
    <section
      id="space"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left: Image ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-64 md:h-[30rem] rounded-3xl overflow-hidden"
            style={{
              backgroundColor: "var(--color-hok-surface-container)",
              boxShadow:
                "0 24px 56px rgba(56,47,33,0.20), 0 4px 16px rgba(43,0,24,0.08)",
            }}
          >
            <Image
              src="/assets/hok-studio-page.png"
              alt="House of Kalas dance studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="object-cover object-center"
            />
            {/* Brand gradient overlay at bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(43,0,24,0.55) 0%, rgba(142,71,103,0.15) 50%, transparent 100%)",
              }}
            />
            {/* Subtle corner accent */}
            <div
              className="absolute bottom-4 left-4 text-xs font-body uppercase tracking-widest"
              style={{ color: "rgba(255,232,217,0.70)", letterSpacing: "0.16em" }}
            >
              House of Kalas Studio
            </div>
          </motion.div>

          {/* ── Right: Copy ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-7"
          >
            {/* Label */}
            <p
              className="font-body uppercase tracking-widest"
              style={{
                fontSize: "var(--text-label-lg)",
                letterSpacing: "0.18em",
                color: "var(--color-hok-on-surface-variant)",
              }}
            >
              The space
            </p>

            {/* Heading */}
            <h2
              className="font-display"
              style={{
                fontSize:
                  "clamp(var(--text-headline-lg-mobile), 3.6vw, var(--text-headline-lg))",
                lineHeight: 1.2,
                color: "var(--color-hok-on-surface)",
              }}
            >
              A studio designed to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                support your growth.
              </span>
            </h2>

            {/* Paragraph */}
            <p
              className="font-body"
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--text-body-lg--line-height)",
                color: "var(--color-hok-on-surface-variant)",
              }}
            >
              From sprung floors and mirrors to warm lighting and carefully
              curated music, our space is crafted to help you feel safe,
              inspired, and ready to move.
            </p>

            {/* Feature bullets */}
            <ul className="flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  {/* Dot */}
                  <span
                    className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-body"
                    style={{
                      fontSize: "var(--text-body-md)",
                      lineHeight: 1.6,
                      color: "var(--color-hok-on-surface)",
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Accent bar */}
            <div
              className="w-12 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
