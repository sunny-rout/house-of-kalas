"use client";

import { motion } from "framer-motion";

/* ── Navigation links ───────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Journey", href: "#journey" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#stories" },
  { label: "The Space", href: "#space" },
  { label: "Contact", href: "#contact" },
];

/* ── Social links (text placeholders) ──────────────────────────────────── */
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* ── Footer ─────────────────────────────────────────────────────────────── */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="footer"
      style={{
        backgroundColor: "var(--color-hok-inverse-surface)",
        color: "var(--color-hok-inverse-on-surface)",
      }}
    >
      {/* ── Main grid ──────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* ── Column 1: Brand ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              className="font-display font-semibold leading-tight hover:opacity-80 transition-opacity"
              style={{
                fontSize: "var(--text-headline-md)",
                color: "var(--color-hok-inverse-on-surface)",
              }}
            >
              House of Kalas
            </a>
            <p
              className="font-body"
              style={{
                fontSize: "var(--text-body-md)",
                lineHeight: 1.6,
                color: "color-mix(in srgb, var(--color-hok-inverse-on-surface) 65%, transparent)",
              }}
            >
              From first steps to centre stage.
            </p>
            {/* Logo accent bar */}
            <div
              className="w-10 h-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container), var(--color-hok-primary-fixed-dim))",
              }}
            />
          </div>

          {/* ── Column 2: Explore links ──────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <p
              className="font-body uppercase tracking-widest"
              style={{
                fontSize: "var(--text-label-sm)",
                letterSpacing: "0.16em",
                color: "color-mix(in srgb, var(--color-hok-inverse-on-surface) 55%, transparent)",
              }}
            >
              Explore
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body transition-opacity hover:opacity-60"
                      style={{
                        fontSize: "var(--text-body-md)",
                        color: "var(--color-hok-inverse-on-surface)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Column 3: Contact & social ───────────────────────────── */}
          <div className="flex flex-col gap-5">
            <p
              className="font-body uppercase tracking-widest"
              style={{
                fontSize: "var(--text-label-sm)",
                letterSpacing: "0.16em",
                color: "color-mix(in srgb, var(--color-hok-inverse-on-surface) 55%, transparent)",
              }}
            >
              Contact
            </p>

            <div className="flex flex-col gap-3">
              {/* Location */}
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ opacity: 0.6 }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span
                  className="font-body"
                  style={{
                    fontSize: "var(--text-body-md)",
                    color: "var(--color-hok-inverse-on-surface)",
                  }}
                >
                  Mumbai, Maharashtra
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ opacity: 0.6 }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
                  />
                </svg>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="font-body hover:opacity-70 transition-opacity"
                  style={{
                    fontSize: "var(--text-body-md)",
                    color: "var(--color-hok-inverse-on-surface)",
                    textDecoration: "none",
                  }}
                >
                  +91-XXXXXXXXXX
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 flex-shrink-0"
                  style={{ opacity: 0.6 }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:hello@houseofkalas.com"
                  className="font-body hover:opacity-70 transition-opacity"
                  style={{
                    fontSize: "var(--text-body-md)",
                    color: "var(--color-hok-inverse-on-surface)",
                    textDecoration: "none",
                  }}
                >
                  hello@houseofkalas.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-hok-inverse-on-surface)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────── */}
      <div
        className="border-t"
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-hok-inverse-on-surface) 12%, transparent)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="font-body text-center sm:text-left"
            style={{
              fontSize: "var(--text-label-sm)",
              color: "color-mix(in srgb, var(--color-hok-inverse-on-surface) 45%, transparent)",
            }}
          >
            © {currentYear} House of Kalas. All rights reserved.
          </p>
          <p
            className="font-body text-center"
            style={{
              fontSize: "var(--text-label-sm)",
              color: "color-mix(in srgb, var(--color-hok-inverse-on-surface) 35%, transparent)",
            }}
          >
            Mumbai · Dance · Life
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
