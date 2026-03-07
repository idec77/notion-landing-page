"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your email service (ConvertKit, Mailchimp, Beehiiv, etc.)
    // Example: fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-16 sm:px-16 sm:py-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-stone-800 opacity-50" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-stone-800 opacity-30" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get templates &amp; tips in your inbox
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Join the newsletter for free templates, Notion tips, and
              productivity insights delivered weekly. No spam, unsubscribe
              anytime.
            </p>

            {/* Subscribe form */}
            {submitted ? (
              <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
                <p className="text-lg font-semibold text-green-400">
                  You&apos;re in! Check your inbox to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input flex-1 rounded-full border border-stone-700 bg-stone-800
                             px-6 py-3.5 text-sm text-white placeholder-stone-500 outline-none
                             transition-colors focus:border-stone-500 sm:rounded-r-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900
                             transition-all hover:bg-stone-100 active:scale-[0.98] sm:rounded-l-none"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-stone-500">
              Join 500+ subscribers. Free templates with every issue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
