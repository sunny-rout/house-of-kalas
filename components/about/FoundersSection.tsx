"use client";

import { motion } from "framer-motion";
import FounderCard from "@/components/about/FounderCard";

/* ── Founder data ───────────────────────────────────────────────────────── */
const FOUNDERS = [
  {
    roleLabel: "Meet our Co-Founder",
    nameFirst: "Founder",
    nameLast: "Name",
    bio: "With over a decade of performance and teaching experience, our co-founder built House of Kalas on a simple conviction: that every person deserves a space where they are guided, seen, and celebrated. Her background spans classical and contemporary forms, national-level competitions, and community arts leadership across Mumbai.",
    traits: [
      "10+ Years Teaching",
      "Choreographer",
      "Community Builder",
      "Performance Arts",
    ],
    imageSrc: "/founders/ssonia-deshmukh.jpeg",
  },
  {
    roleLabel: "Meet our Founder",
    nameFirst: "Founder",
    nameLast: "Name",
    bio: "Our founder brings together a rare blend of business acumen and deep artistic sensibility. Having trained in multiple dance styles and led productions across India, they built the operational and creative backbone of House of Kalas — ensuring that every student's journey from aspiration to rise is supported at every step.",
    traits: [
      "Producer & Director",
      "Business & Arts",
      "Multi-style Trained",
      "Stage Productions",
    ],
    imageSrc: "/founders/paramveer-singh.jpeg",
  },
] as const;

/* ── FoundersSection ────────────────────────────────────────────────────── */
export default function FoundersSection() {
  return (
    <section
      id="about-founders"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      {/* Subtle background band */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-[70%] h-[60%] rounded-[50%]"
          style={{
            background:
              "radial-gradient(ellipse, color-mix(in srgb, var(--color-hok-primary-fixed) 40%, transparent) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.25,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col gap-16">

        {/* ── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 max-w-2xl"
        >
          <p
            className="font-body uppercase tracking-widest"
            style={{
              fontSize: "var(--text-label-lg)",
              letterSpacing: "0.18em",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Founders
          </p>

          <h2
            className="font-display"
            style={{
              fontSize:
                "clamp(var(--text-headline-lg-mobile), 3.6vw, var(--text-headline-lg))",
              lineHeight: 1.2,
              color: "var(--color-hok-on-surface)",
            }}
          >
            The people behind{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              House of Kalas.
            </span>
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--text-body-lg--line-height)",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            House of Kalas was founded by leaders who blend performance, business,
            and community building — united by the belief that great arts education
            changes lives far beyond the studio.
          </p>

          <div
            className="w-12 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
            }}
          />
        </motion.div>

        {/* ── Founder cards ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-10">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.roleLabel}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <FounderCard
                roleLabel={founder.roleLabel}
                nameFirst={founder.nameFirst}
                nameLast={founder.nameLast}
                bio={founder.bio}
                traits={[...founder.traits]}
                imageSrc={founder.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
