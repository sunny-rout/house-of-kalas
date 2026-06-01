"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ── Form state type ────────────────────────────────────────────────────── */
type FormData = {
  name: string;
  age: string;
  program: string;
  phone: string;
  message: string;
};

const INITIAL: FormData = {
  name: "",
  age: "",
  program: "",
  phone: "",
  message: "",
};

/* ── Styled input wrapper ───────────────────────────────────────────────── */
function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-body uppercase tracking-widest select-none"
        style={{
          fontSize: "var(--text-label-sm)",
          letterSpacing: "0.12em",
          color: "var(--color-hok-on-surface-variant)",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1.5px solid var(--color-hok-surface-variant)",
  outline: "none",
  padding: "10px 0",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body-md)",
  color: "var(--color-hok-on-surface)",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

/* ── CallToAction section ───────────────────────────────────────────────── */
export default function CallToAction() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
    setSubmitted(true);
  };

  const focusStyle = (e: React.FocusEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderBottom = "1.5px solid var(--color-hok-secondary-container)";
    el.style.boxShadow = "0 8px 20px rgba(255,159,137,0.25)";
  };

  const blurStyle = (e: React.FocusEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderBottom = "1.5px solid var(--color-hok-surface-variant)";
    el.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-hok-background)" }}
    >
      {/* ── Background flow band ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-[80%] h-[80%] rounded-[50%/40%]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-hok-secondary-fixed) 0%, var(--color-hok-primary-fixed-dim) 55%, var(--color-hok-surface-tint) 100%)",
            opacity: 0.13,
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <p
            className="font-body uppercase tracking-widest"
            style={{
              fontSize: "var(--text-label-lg)",
              letterSpacing: "0.18em",
              color: "var(--color-hok-on-surface-variant)",
            }}
          >
            Begin
          </p>

          <h2
            className="font-display"
            style={{
              fontSize:
                "clamp(var(--text-headline-lg-mobile), 3.8vw, var(--text-headline-lg))",
              lineHeight: 1.2,
              color: "var(--color-hok-on-surface)",
            }}
          >
            Ready to take your{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--color-hok-secondary-container) 0%, var(--color-hok-surface-tint) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              next step?
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
            Share a few details and we&apos;ll help you choose the right batch
            and program.
          </p>
        </div>

        {/* ── Form card ──────────────────────────────────────────────── */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="rounded-3xl p-6 md:p-10 flex flex-col gap-6"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-hok-surface-container) 90%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border:
              "1px solid color-mix(in srgb, var(--color-hok-surface-variant) 70%, transparent)",
            boxShadow: "0 24px 48px rgba(56,47,33,0.22)",
          }}
        >
          {submitted ? (
            /* ── Success state ─────────────────────────────────────── */
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-hok-secondary-container), var(--color-hok-surface-tint))",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "var(--text-headline-md)",
                  color: "var(--color-hok-on-surface)",
                }}
              >
                We&apos;ll be in touch!
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "var(--text-body-md)",
                  color: "var(--color-hok-on-surface-variant)",
                }}
              >
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <>
              {/* Fields */}
              <div className="flex flex-col gap-6">
                <Field label="Your name" id="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Priya Mehta"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={inputBase}
                  />
                </Field>

                <Field label="Age / Age group" id="age">
                  <input
                    id="age"
                    name="age"
                    type="text"
                    placeholder="e.g. 14 years"
                    value={form.age}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={inputBase}
                  />
                </Field>

                <Field label="Preferred program" id="program">
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...inputBase, cursor: "pointer" }}
                  >
                    <option value="" disabled>
                      Select a program…
                    </option>
                    <option value="kids">Kids (6–11 years)</option>
                    <option value="teens">Teens (12–17 years)</option>
                    <option value="adults">Adults</option>
                    <option value="intensive">Intensive / Competition</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </Field>

                <Field label="Phone / WhatsApp" id="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={inputBase}
                  />
                </Field>

                <Field label="Message (optional)" id="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Anything you'd like us to know…"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...inputBase, resize: "none" }}
                  />
                </Field>
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full px-10 py-4 uppercase font-body font-semibold tracking-widest text-white text-sm cursor-pointer w-full sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-hok-secondary-container) 0%, var(--color-hok-primary-fixed-dim) 50%, var(--color-hok-surface-tint) 100%)",
                    boxShadow:
                      "0 4px 20px 0 color-mix(in srgb, var(--color-hok-secondary-container) 40%, transparent)",
                    letterSpacing: "0.12em",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 40px 0 color-mix(in srgb, var(--color-hok-surface-tint) 60%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 20px 0 color-mix(in srgb, var(--color-hok-secondary-container) 40%, transparent)";
                  }}
                >
                  Book a trial class
                </motion.button>

                {/* WhatsApp alternative */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body flex items-center gap-2 transition-opacity hover:opacity-80"
                  style={{
                    fontSize: "var(--text-body-md)",
                    color: "var(--color-hok-on-surface-variant)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#25D366" }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Or message us directly on WhatsApp
                </a>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
