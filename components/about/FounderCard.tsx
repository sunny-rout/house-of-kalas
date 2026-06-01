"use client";

import Image from "next/image";

/* ── FounderCard props ──────────────────────────────────────────────────── */
export interface FounderCardProps {
  roleLabel: string;
  nameFirst: string;
  nameLast: string;
  bio: string;
  traits: string[];
  imageSrc?: string; // optional — shows gradient placeholder if absent
}

/* ── Trait icons map ─────────────────────────────────────────────────────── */
const TRAIT_ICONS: Record<string, string> = {
  default: "◆",
};
function traitIcon(trait: string) {
  return TRAIT_ICONS[trait] ?? TRAIT_ICONS.default;
}

/* ── FounderCard ────────────────────────────────────────────────────────── */
export default function FounderCard({
  roleLabel,
  nameFirst,
  nameLast,
  bio,
  traits,
  imageSrc,
}: FounderCardProps) {
  return (
    <article
      className="rounded-3xl flex flex-col md:flex-row gap-8 md:gap-10 px-6 py-8 md:px-10 md:py-10"
      style={{
        backgroundColor: "var(--color-hok-surface-container-low)",
        border:
          "1px solid color-mix(in srgb, var(--color-hok-surface-variant) 80%, transparent)",
        boxShadow: "0 24px 48px rgba(56,47,33,0.18), 0 4px 12px rgba(43,0,24,0.06)",
      }}
    >
      {/* ── Portrait column ────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-4 flex-shrink-0">
        {/* Outer gradient ring */}
        <div
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-hok-surface-dim) 0%, var(--color-hok-surface-container) 50%, var(--color-hok-surface-container-highest) 100%)",
            boxShadow:
              "0 8px 32px color-mix(in srgb, var(--color-hok-primary) 15%, transparent), 0 2px 8px color-mix(in srgb, var(--color-hok-surface-tint) 20%, transparent)",
          }}
        >
          {/* Inner border ring */}
          <div
            className="absolute inset-3 rounded-full"
            style={{
              border: "1.5px solid var(--color-hok-secondary-container)",
              opacity: 0.6,
            }}
          />

          {/* Portrait image or placeholder */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${nameFirst} ${nameLast}`}
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            ) : (
              /* Gradient monogram placeholder */
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-hok-surface-container-high) 0%, var(--color-hok-surface-container-highest) 100%)",
                }}
              >
                <span
                  className="font-display font-bold select-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--color-hok-on-primary-container)",
                    opacity: 0.5,
                  }}
                >
                  {nameFirst[0]}
                  {nameLast[0]}
                </span>
              </div>
            )}
          </div>

          {/* Logo badge at bottom of circle */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden shadow-sm"
            aria-hidden="true"
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/hok-logo.svg"
                alt="HoK"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Text column ────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        {/* Role label */}
        <p
          className="font-body uppercase tracking-widest"
          style={{
            fontSize: "var(--text-label-lg)",
            letterSpacing: "0.2em",
            color: "var(--color-hok-secondary)",
          }}
        >
          {roleLabel}
        </p>

        {/* Name */}
        <div>
          <h3
            className="font-display leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-hok-primary)" }}
          >
            {nameFirst}
          </h3>
          <h3
            className="font-display leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              color: "var(--color-hok-secondary-container)",
            }}
          >
            {nameLast}
          </h3>
        </div>

        {/* Bio */}
        <p
          className="font-body"
          style={{
            fontSize: "var(--text-body-md)",
            lineHeight: "var(--text-body-md--line-height)",
            color: "var(--color-hok-on-surface-variant)",
          }}
        >
          {bio}
        </p>

        {/* Traits */}
        {traits.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {traits.map((trait) => (
              <span
                key={trait}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body font-medium uppercase"
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  backgroundColor: "var(--color-hok-primary-fixed)",
                  color: "var(--color-hok-on-primary-fixed)",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: "0.6rem" }}>
                  {traitIcon(trait)}
                </span>
                {trait}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
