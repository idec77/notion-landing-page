export default function FreeTemplates() {
  return (
    <section id="free-templates" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700">
            100% Free
          </span>
          <h2 className="section-heading">Free Templates</h2>
          <p className="section-subheading mx-auto">
            Get started with our free Notion template bundle. Includes a Finance
            Tracker, Project Management, and Habit Tracker&mdash;everything you
            need to organize your life.
          </p>
        </div>

        {/* Single bundle product card */}
        <div className="mx-auto mt-14 max-w-2xl">
          <a
            href="/free-templates"
            className="template-card group block"
          >
            {/* Bundle image */}
            <div className="overflow-hidden">
              <img
                src="/Email Header.png"
                alt="Free Template Bundle — Finance Tracker, Project Management, and Habit Tracker"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card content */}
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Bundle
                </span>
                <span className="text-sm font-bold text-green-600">Free</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">
                Free Template Bundle
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                3 essential Notion templates in one bundle: Finance Tracker to
                manage your money, Project Management to stay on top of tasks,
                and Habit Tracker to build better routines. Your best habits
                start here.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-stone-900">
                Get Free Bundle
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
