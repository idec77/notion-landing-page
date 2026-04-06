"use client";

import { useState, FormEvent } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect your automation here
    // Example: fetch('/api/submit', { method: 'POST', body: JSON.stringify({ name, email }) })
    // Or use a form service like Formspree, Make.com webhook, Zapier, etc.
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
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-3xl">
                ✅
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                You&apos;re all set!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-400">
                Check your inbox for the template links. While you wait, you can
                access them directly below:
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://jasteanrimorin.notion.site/Finance-Tracker-329145b4622880aaaaadefe8431196e4?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-100"
                >
                  💰 Finance Tracker
                </a>
                <a
                  href="https://jasteanrimorin.notion.site/Project-Management-32b145b46228801f8efffa5d592715da?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-100"
                >
                  📋 Project Management
                </a>
                <a
                  href="https://jasteanrimorin.notion.site/Habit-Tracker-333145b4622880e39ab8d26b85c621e4?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-100"
                >
                  ✅ Habit Tracker
                </a>
              </div>
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
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
              🎁
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
                className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900
                           transition-all hover:bg-stone-100 active:scale-[0.98] sm:w-auto sm:px-12"
              >
                Send Me the Templates →
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500">
              🔒 Your info is safe. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
