"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Program data ───────────────────────────────────────────────────────── */
const PROGRAMS = [
  {
    title: "Kids",
    age: "6–11 years",
    description:
      "Playful foundations in rhythm, movement, and confidence.",
    tag: "Beginner friendly",
  },
  {
    title: "Teens",
    age: "12–17 years",
    description:
      "Technique, choreography, and stage exposure for growing artists.",
    tag: "Performance focus",
  },
  {
    title: "Adults",
    age: "All ages",
    description:
      "Expressive sessions that blend fitness, creativity, and stress release.",
    tag: "All levels",
  },
  {
    title: "Intensive / Competition",
    age: "Team",
    description:
      "Focused training and rehearsals for serious performers and showcases.",
    tag: "Audition based",
  },
] as const;

/* ── Animation variants ──────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Programs component ──────────────────────────────────────────────────── */
export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Decorative band drifts gently upward
  const bandY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bandX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      {/* ── Decorative flow band ─────────────────────────────────────── */}
      <motion.div
        style={{ y: bandY, x: bandX }}
        className="pointer-events-none absolute right-0 top-1/4 w-[65%] h-[80%]"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-[40%/50%]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-hok-secondary-fixed) 0%, var(--color-hok-primary-fixed-dim) 55%, var(--color-hok-surface-tint) 100%)",
            opacity: 0.12,
            filter: "blur(90px)",
          }}
        />
      </motion.div>

      {/* ── Content container ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 gap-5">
          <p
            className="font-body uppercase tracking-widest"
            style={{
              fontSize: "var(--text-label-lg)",
              letterSpacing: "0.18em",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Programs
          </p>

          <h2
            className="font-display max-w-2xl"
            style={{
              fontSize:
                "clamp(var(--text-headline-lg-mobile), 3.8vw, var(--text-headline-lg))",
              lineHeight: 1.2,
              color: "var(--color-hok-on-surface)",
            }}
          >
            Find the program that matches{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your rhythm.
            </span>
          </h2>

          <p
            className="font-body max-w-md"
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--text-body-lg--line-height)",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Structured batches and custom sessions for different ages, styles,
            and goals.
          </p>

          {/* Accent bar */}
          <div
            className="w-12 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
            }}
          />
        </div>

        {/* ── Program cards grid ──────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Individual program card ─────────────────────────────────────────────── */
function ProgramCard({
  program,
}: {
  program: (typeof PROGRAMS)[number];
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group rounded-2xl p-7 flex flex-col gap-5 cursor-default"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-hok-surface-container-low) 80%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid var(--color-hok-surface-variant)",
        boxShadow:
          "0 20px 40px rgba(56, 47, 33, 0.15), 0 4px 12px rgba(43,0,24,0.06)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow =
          "0 28px 56px rgba(56, 47, 33, 0.22), 0 4px 16px rgba(142,71,103,0.12)";
        el.style.borderColor = "var(--color-hok-surface-tint)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow =
          "0 20px 40px rgba(56, 47, 33, 0.15), 0 4px 12px rgba(43,0,24,0.06)";
        el.style.borderColor = "var(--color-hok-surface-variant)";
      }}
    >
      {/* Top row: title + age */}
      <div className="flex flex-col gap-1">
        <h3
          className="font-display font-semibold"
          style={{
            fontSize: "var(--text-headline-md)",
            lineHeight: 1.2,
            color: "var(--color-hok-primary)",
          }}
        >
          {program.title}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: "var(--text-label-lg)",
            color: "var(--color-hok-on-surface-variant)",
            letterSpacing: "0.05em",
          }}
        >
          {program.age}
        </p>
      </div>

      {/* Description */}
      <p
        className="font-body flex-1"
        style={{
          fontSize: "var(--text-body-md)",
          lineHeight: "var(--text-body-md--line-height)",
          color: "var(--color-hok-on-surface)",
        }}
      >
        {program.description}
      </p>

      {/* Tag pill */}
      <div>
        <span
          className="inline-flex items-center rounded-full px-3 py-1 font-body font-medium uppercase"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            backgroundColor: "var(--color-hok-primary-fixed)",
            color: "var(--color-hok-on-primary-fixed)",
          }}
        >
          {program.tag}
        </span>
      </div>
    </motion.div>
  );
}
