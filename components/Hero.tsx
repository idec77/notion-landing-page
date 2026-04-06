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
          Free Notion Templates
        </div>

        {/* Main heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          3 free Notion templates to{" "}
          <span className="bg-gradient-to-r from-stone-600 to-stone-900 bg-clip-text text-transparent">
            organize your life
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
          Track your finances, manage projects, and build better habits&mdash;all
          inside Notion. Enter your email below and get instant access.
        </p>

        {/* CTA button */}
        <div className="mt-10">
          <a href="#get-templates" className="btn-primary px-10 py-4 text-base">
            Get Free Templates →
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-white bg-stone-200"
              />
            ))}
          </div>
          <p className="text-sm text-stone-500">
            Trusted by <span className="font-semibold text-stone-700">2,000+</span>{" "}
            Notion users
          </p>
        </div>
      </div>
    </section>
  );
}
