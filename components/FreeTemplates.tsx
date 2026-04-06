import TemplateMockup from "./TemplateMockup";

const freeTemplates = [
  {
    title: "Finance Tracker",
    description:
      "Track income, expenses, and savings in one place. Visual breakdowns help you understand where your money goes.",
    category: "Finance",
    type: "finance" as const,
  },
  {
    title: "Project Management",
    description:
      "Kanban boards, progress tracking, and task management. Stay on top of every project from start to finish.",
    category: "Productivity",
    type: "project" as const,
  },
  {
    title: "Habit Tracker",
    description:
      "Build lasting habits with daily check-ins, streak tracking, and weekly overviews to stay motivated.",
    category: "Personal",
    type: "habit" as const,
  },
];

export default function FreeTemplates() {
  return (
    <section id="free-templates" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700">
            100% Free
          </span>
          <h2 className="section-heading">What you&apos;ll get</h2>
          <p className="section-subheading mx-auto">
            Three beautifully designed Notion templates to help you take control
            of your finances, projects, and daily habits.
          </p>
        </div>

        {/* Template grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {freeTemplates.map((template) => (
            <div key={template.title} className="template-card group">
              {/* Mockup preview */}
              <TemplateMockup type={template.type} />

              {/* Card content */}
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                    {template.category}
                  </span>
                  <span className="text-sm font-bold text-green-600">Free</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{template.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below cards */}
        <div className="mt-12 text-center">
          <a href="#get-templates" className="btn-primary px-10 py-4 text-base">
            Get All 3 Templates Free →
          </a>
        </div>
      </div>
    </section>
  );
}
