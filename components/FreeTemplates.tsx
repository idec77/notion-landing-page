import TemplateCard from "./TemplateCard";

const freeTemplates = [
  {
    title: "Weekly Planner",
    description:
      "Plan your week with clarity. Includes daily schedules, priorities, and a habit tracker.",
    category: "Productivity",
    href: "#",
  },
  {
    title: "Reading List",
    description:
      "Track books you want to read, are reading, and have finished with notes and ratings.",
    category: "Personal",
    href: "#",
  },
  {
    title: "Simple Budget Tracker",
    description:
      "Monitor income and expenses at a glance. Automatic calculations and category breakdowns.",
    category: "Finance",
    href: "#",
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
          <h2 className="section-heading">Free Templates</h2>
          <p className="section-subheading mx-auto">
            Get started with these free Notion templates. No sign-up required&mdash;just
            duplicate and start using.
          </p>
        </div>

        {/* Template grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {freeTemplates.map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}
