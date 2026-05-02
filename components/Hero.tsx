export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-stone-200/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-stone-600 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          Notion Template Creator
        </div>

        {/* Main heading */}
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Beautiful Notion templates for your{" "}
          <span className="bg-gradient-to-r from-stone-600 to-stone-900 bg-clip-text text-transparent">
            life &amp; work
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
          Thoughtfully designed templates to help you organize, plan, and
          create&mdash;all inside Notion.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/free-templates" className="btn-primary px-8 py-3.5">
            Get Free Templates
          </a>
        </div>
      </div>
    </section>
  );
}
