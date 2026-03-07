import TemplateCard from "./TemplateCard";

const paidTemplates = [
  {
    title: "Ultimate Life Dashboard",
    description:
      "An all-in-one system for goals, habits, finances, health, and personal growth. Your second brain.",
    category: "Lifestyle",
    price: "$19",
    href: "#", // Replace with your Gumroad/Lemonsqueezy/etc. link
  },
  {
    title: "Content Creator Hub",
    description:
      "Plan, create, and schedule content across all platforms. Includes analytics tracking and idea bank.",
    category: "Creator",
    price: "$15",
    href: "#", // Replace with your product link
  },
  {
    title: "Freelancer OS",
    description:
      "Manage clients, projects, invoices, and time tracking all in one place. Built for freelancers.",
    category: "Business",
    price: "$24",
    href: "#", // Replace with your product link
  },
  {
    title: "Student Success System",
    description:
      "Course tracker, assignment planner, study scheduler, and GPA calculator for students.",
    category: "Education",
    price: "$12",
    href: "#", // Replace with your product link
  },
  {
    title: "Startup Toolkit",
    description:
      "Everything you need to launch: business plan, OKRs, roadmap, competitor analysis, and more.",
    category: "Business",
    price: "$29",
    href: "#", // Replace with your product link
  },
  {
    title: "Travel Planner Pro",
    description:
      "Plan trips with itineraries, budgets, packing lists, and a travel journal. Supports multi-city trips.",
    category: "Travel",
    price: "$14",
    href: "#", // Replace with your product link
  },
];

export default function PaidTemplates() {
  return (
    <section id="paid-templates" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-700">
            Premium
          </span>
          <h2 className="section-heading">Premium Templates</h2>
          <p className="section-subheading mx-auto">
            Level up with premium templates. Comprehensive systems designed to
            save you hours of setup time.
          </p>
        </div>

        {/* Template grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paidTemplates.map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}
