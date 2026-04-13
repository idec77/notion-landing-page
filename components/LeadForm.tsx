"use client";

import { useState, FormEvent } from "react";

// MailerLite integration via server-side API route (/api/subscribe)

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } catch (error) {
      console.error("Subscription error:", error);
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="get-templates" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-16 sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-stone-800 opacity-50" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-stone-800 opacity-30" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              {/* Success email icon */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                You will receive an email shortly!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-400">
                We&apos;ve sent the template links to your inbox. Check your email
                (and spam folder, just in case) for your free Notion templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="get-templates" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-16 sm:px-16 sm:py-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-stone-800 opacity-50" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-stone-800 opacity-30" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            {/* Email icon (no box corners) */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
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
              Get all 3 templates for free
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Enter your name and email below, and we&apos;ll send you instant
              access to all three Notion templates. No spam, ever.
            </p>

            {/* Lead capture form */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your first name"
                  className="newsletter-input flex-1 rounded-full border border-stone-700 bg-stone-800
                             px-6 py-3.5 text-sm text-white placeholder-stone-500 outline-none
                             transition-colors focus:border-stone-500"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="newsletter-input flex-1 rounded-full border border-stone-700 bg-stone-800
                             px-6 py-3.5 text-sm text-white placeholder-stone-500 outline-none
                             transition-colors focus:border-stone-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900
                           transition-all hover:bg-stone-100 active:scale-[0.98] disabled:opacity-70
                           disabled:cursor-not-allowed sm:w-auto sm:px-12"
              >
                {loading ? "Sending..." : "Send Me the Templates →"}
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500">
              Your info is safe. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
