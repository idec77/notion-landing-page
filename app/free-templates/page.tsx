import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get 3 Free Notion Templates | IDEC",
  description:
    "Get 3 free Notion templates: Finance Tracker, Project Management, and Habit Tracker. Organize your life today.",
};

const templates = [
  {
    title: "Finance Tracker",
    description:
      "This is the version 2 of the free Finance Tracker template. Track your income and expenses, manage account balances, monitor active subscriptions, and generate budgeting reports — all in one place.",
    category: "Finance",
    image: "/finance-tracker.png",
  },
  {
    title: "Project Management",
    description:
      "This is the version 2 of the free Project Management template. Track project progression, manage weekly tasks, organize documents and resources, and monitor overdue tasks to keep everything on schedule.",
    category: "Productivity",
    image: "/project-management.png",
  },
  {
    title: "Habit Tracker",
    description:
      "This is the version 2 of the free Habit Tracker template. Build better routines with daily habit check-ins, weekly progress tracking, and visual streaks to keep you motivated and consistent.",
    category: "Personal",
    image: "/habit-tracker.png",
  },
];

export default function FreeTemplatesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-stone-200/40 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-stone-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Free Notion Templates
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              3 free Notion templates to{" "}
              <span className="bg-gradient-to-r from-stone-600 to-stone-900 bg-clip-text text-transparent">
                organize your life
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
              Track your finances, manage projects, and build better habits&mdash;all
              inside Notion. Enter your email below and get instant access.
            </p>

            <div className="mt-10">
              <a href="#get-templates" className="btn-primary px-10 py-4 text-base">
                Get Free Templates →
              </a>
            </div>
          </div>
        </section>

        {/* Template previews */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
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

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <div key={template.title} className="template-card group">
                  {/* Template image */}
                  <div className="overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

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

            <div className="mt-12 text-center">
              <a href="#get-templates" className="btn-primary px-10 py-4 text-base">
                Get All 3 Templates Free →
              </a>
            </div>
          </div>
        </section>

        {/* Lead capture form */}
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
