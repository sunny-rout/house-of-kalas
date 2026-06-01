"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FounderCard from "@/components/about/FounderCard";

/* ── Stories data ───────────────────────────────────────────────────────── */
const STORIES = [
  {
    name: "Aarav",
    label: "Joined at age 9",
    quote:
      "I used to be shy. Performing with House of Kalas helped me find my voice on stage — and off it.",
    summary: "From quiet observer to confident performer.",
    initials: "A",
    accent: "var(--color-hok-secondary-container)",
  },
  {
    name: "Priya",
    label: "Joined at age 14",
    quote:
      "The stage used to scare me. Now it feels like home. Every class made me stronger, inside and out.",
    summary: "From stage fright to spotlight seeker.",
    initials: "P",
    accent: "var(--color-hok-surface-tint)",
  },
  {
    name: "Meera",
    label: "Joined at age 22",
    quote:
      "Classes here made me more confident — not just in dance, but in how I walk into any room in life.",
    summary: "From self-doubt to self-expression.",
    initials: "M",
    accent: "var(--color-hok-on-primary-container)",
  },
  {
    name: "Rohan",
    label: "Joined at age 11",
    quote:
      "I never thought I'd be on stage. Now I look forward to every showcase — I actually love performing.",
    summary: "From first steps to standing ovations.",
    initials: "R",
    accent: "var(--color-hok-secondary-container)",
  },
] as const;

/* ── Variants ────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ── Quote mark SVG ─────────────────────────────────────────────────────── */
function QuoteMark() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M0 20V12.5C0 5.596 4.03 1.402 12.09 0l1.05 1.75C9.1 2.8 7 5.25 6.65 9H12V20H0Zm16 0V12.5C16 5.596 20.03 1.402 28.09 0l1.05 1.75C25.1 2.8 23 5.25 22.65 9H28V20H16Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

/* ── Avatar placeholder ──────────────────────────────────────────────────── */
function Avatar({
  initials,
  accent,
}: {
  initials: string;
  accent: string;
}) {
  return (
    <div
      className="w-full rounded-xl flex items-center justify-center"
      style={{
        aspectRatio: "16/9",
        background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 30%, var(--color-hok-surface-container-high)) 0%, color-mix(in srgb, ${accent} 15%, var(--color-hok-surface-container)) 100%)`,
      }}
    >
      <span
        className="font-display font-bold select-none"
        style={{
          fontSize: "clamp(3rem, 6vw, 5rem)",
          color: accent,
          opacity: 0.5,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

/* ── Single story card ───────────────────────────────────────────────────── */
function StoryCard({
  story,
  index,
}: {
  story: (typeof STORIES)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="flex-shrink-0 snap-center flex flex-col gap-5 rounded-2xl p-5 md:p-6 cursor-default"
      style={{
        width: "clamp(280px, 72vw, 340px)",
        backgroundColor:
          "color-mix(in srgb, var(--color-hok-surface-container-low) 80%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid color-mix(in srgb, var(--color-hok-surface-variant) 70%, transparent)",
        boxShadow: "0 20px 40px rgba(56,47,33,0.18), 0 4px 10px rgba(43,0,24,0.06)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 28px 56px rgba(56,47,33,0.25), 0 4px 16px rgba(142,71,103,0.14)";
        el.style.borderColor = "var(--color-hok-surface-tint)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 20px 40px rgba(56,47,33,0.18), 0 4px 10px rgba(43,0,24,0.06)";
        el.style.borderColor = "color-mix(in srgb, var(--color-hok-surface-variant) 70%, transparent)";
      }}
    >
      {/* Photo area */}
      <div className="overflow-hidden rounded-xl">
        <Avatar initials={story.initials} accent={story.accent} />
      </div>

      {/* Name + label */}
      <div className="flex flex-col gap-0.5">
        <h3
          className="font-display font-semibold leading-tight"
          style={{
            fontSize: "var(--text-headline-md)",
            color: "var(--color-hok-primary)",
          }}
        >
          {story.name}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: "var(--text-label-lg)",
            color: "var(--color-hok-on-surface-variant)",
            letterSpacing: "0.06em",
          }}
        >
          {story.label}
        </p>
      </div>

      {/* Quote */}
      <div
        className="flex gap-2 flex-1"
        style={{ color: "var(--color-hok-surface-tint)" }}
      >
        <QuoteMark />
        <p
          className="font-body italic"
          style={{
            fontSize: "var(--text-body-md)",
            lineHeight: "1.65",
            color: "var(--color-hok-on-surface)",
          }}
        >
          {story.quote}
        </p>
      </div>

      {/* Journey summary label */}
      <p
        className="font-body uppercase tracking-widest"
        style={{
          fontSize: "var(--text-label-sm)",
          letterSpacing: "0.12em",
          color: "var(--color-hok-on-surface-variant)",
        }}
      >
        {story.summary}
      </p>
    </motion.article>
  );
}

/* ── Stories section ─────────────────────────────────────────────────────── */
export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bandY = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const bandX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      {/* ── Background flow band ─────────────────────────────────────── */}
      <motion.div
        style={{ y: bandY, x: bandX }}
        className="pointer-events-none absolute left-0 bottom-0 w-[70%] h-[80%]"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-[50%/40%]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-hok-secondary-fixed) 0%, var(--color-hok-primary-fixed-dim) 50%, var(--color-hok-surface-tint) 100%)",
            opacity: 0.11,
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-14 gap-5">
          <p
            className="font-body uppercase tracking-widest"
            style={{
              fontSize: "var(--text-label-lg)",
              letterSpacing: "0.18em",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Stories
          </p>

          <h2
            className="font-display max-w-xl"
            style={{
              fontSize:
                "clamp(var(--text-headline-lg-mobile), 3.8vw, var(--text-headline-lg))",
              lineHeight: 1.2,
              color: "var(--color-hok-on-surface)",
            }}
          >
            How our students{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              rise.
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
            Every journey is different. Here are a few from the House of Kalas
            family.
          </p>

          <div
            className="w-12 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
            }}
          />
        </div>

        {/* ── Carousel ───────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-8 md:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {STORIES.map((story, i) => (
            <StoryCard key={story.name} story={story} index={i} />
          ))}
        </motion.div>

        {/* ── Founders sub-section ────────────────────────────────── */}
        <div className="mt-20 flex flex-col gap-10">
          {/* Divider label */}
          <div className="flex flex-col items-center text-center gap-4">
            <div
              className="w-12 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-hok-surface-variant), transparent)",
              }}
            />
            <p
              className="font-body uppercase tracking-widest"
              style={{
                fontSize: "var(--text-label-lg)",
                letterSpacing: "0.18em",
                color: "var(--color-hok-on-surface-variant)",
              }}
            >
              The people behind the stories
            </p>
          </div>

          {/* Founder cards */}
          {[
            {
              roleLabel: "Co-Founder",
              nameFirst: "Ssonia",
              nameLast: "Deshmukh",
              bio: "With over a decade of performance and teaching experience, Ssonia built House of Kalas on a simple conviction: that every person deserves a space where they are guided, seen, and celebrated.",
              traits: ["10+ Years Teaching", "Choreographer", "Community Builder"],
              imageSrc: "/founders/ssonia-deshmukh.jpeg",
            },
            {
              roleLabel: "Founder",
              nameFirst: "Paramveer",
              nameLast: "Singh",
              bio: "Paramveer brings together a rare blend of business acumen and deep artistic sensibility, building the operational and creative backbone of House of Kalas.",
              traits: ["Producer & Director", "Business & Arts", "Multi-style Trained"],
              imageSrc: "/founders/paramveer-singh.jpeg",
            },
          ].map((founder, i) => (
            <motion.div
              key={founder.roleLabel}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <FounderCard
                roleLabel={founder.roleLabel}
                nameFirst={founder.nameFirst}
                nameLast={founder.nameLast}
                bio={founder.bio}
                traits={founder.traits}
                imageSrc={founder.imageSrc}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-5 mt-14">
          <p
            className="font-body"
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Want to write your own story with us?
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-4 uppercase font-body font-semibold tracking-widest text-white text-sm cursor-pointer"
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
      </div>
    </section>
  );
}
