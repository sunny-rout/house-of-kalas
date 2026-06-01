"use client";

import { motion } from "framer-motion";

/* ── BrandStory section ─────────────────────────────────────────────────── */
export default function BrandStory() {
  return (
    <section
      id="about-brand"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1fr] md:gap-16 gap-12 items-center">

          {/* ── Left: Text ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              About House of Kalas
            </p>

            {/* Heading */}
            <h1
              className="font-display"
              style={{
                fontSize:
                  "clamp(var(--text-headline-lg-mobile), 3.8vw, var(--text-headline-lg))",
                lineHeight: 1.18,
                color: "var(--color-hok-on-surface)",
              }}
            >
              A home for aspiration,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                learning, performance,
              </span>{" "}
              and shine.
            </h1>

            {/* Body paragraphs */}
            <div
              className="flex flex-col gap-4 font-body"
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--text-body-lg--line-height)",
                color: "var(--color-hok-on-surface-variant)",
              }}
            >
              <p>
                House of Kalas is built around a belief: that every person who
                walks through our doors carries the seed of a performer. Our
                curriculum follows a clear, soulful path —{" "}
                <strong style={{ color: "var(--color-hok-on-surface)" }}>
                  Aspire → Learn → Perform → Shine → Rise
                </strong>{" "}
                — designed so that no student ever feels lost or left behind.
              </p>
              <p>
                We believe that dance is more than movement. It is the space
                where confidence grows, expression finds its voice, and community
                becomes family. Our programs are shaped not just for the stage,
                but for the life you carry off it.
              </p>
              <p>
                From six‑year‑olds finding their rhythm for the first time to
                adults rediscovering joy in movement, every body and every story
                finds its place here.
              </p>
            </div>

            {/* Bold close line */}
            <p
              className="font-display font-semibold"
              style={{
                fontSize: "var(--text-headline-md)",
                lineHeight: 1.3,
                color: "var(--color-hok-primary)",
              }}
            >
              Wherever you begin, you belong here — and you move forward from
              here.
            </p>

            {/* Accent bar */}
            <div
              className="w-14 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
              }}
            />
          </motion.div>

          {/* ── Right: Journey visual ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Background flow band */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-8 rounded-[50%] z-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-hok-secondary-container) 30%, transparent) 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />

            {/* Journey steps visual */}
            <div
              className="relative z-10 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: "var(--color-hok-surface-container)",
                boxShadow: "0 24px 48px rgba(56,47,33,0.20)",
              }}
            >
              <div className="p-8 md:p-10 flex flex-col gap-1">
                {/* Decorative header */}
                <p
                  className="font-body uppercase tracking-widest mb-6 text-center"
                  style={{
                    fontSize: "var(--text-label-sm)",
                    letterSpacing: "0.18em",
                    color: "var(--color-hok-on-surface-variant)",
                  }}
                >
                  The Kalas Journey
                </p>

                {/* Steps */}
                {[
                  { step: "01", title: "Aspire", desc: "The spark of desire to move and discover." },
                  { step: "02", title: "Learn", desc: "Building foundation, technique, and trust." },
                  { step: "03", title: "Perform", desc: "Owning the stage with joy and presence." },
                  { step: "04", title: "Shine", desc: "Your unique style fully emerges." },
                  { step: "05", title: "Rise", desc: "Growth in dance reflects in all of life." },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-start gap-4 group">
                    {/* Line + node */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-1">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-body font-semibold text-xs"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
                          color: "white",
                        }}
                      >
                        {item.step}
                      </div>
                      {i < 4 && (
                        <div
                          className="w-px flex-1 mt-1 mb-1"
                          style={{
                            height: "28px",
                            background:
                              "linear-gradient(to bottom, var(--color-hok-secondary-container), transparent)",
                            opacity: 0.4,
                          }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pb-5">
                      <p
                        className="font-display font-semibold leading-tight"
                        style={{
                          fontSize: "var(--text-headline-md)",
                          color: "var(--color-hok-on-surface)",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="font-body mt-0.5"
                        style={{
                          fontSize: "var(--text-body-md)",
                          color: "var(--color-hok-on-surface-variant)",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
