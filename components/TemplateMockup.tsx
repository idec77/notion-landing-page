interface MockupRow {
  label: string;
  value: string;
  color?: string;
}

interface TemplateMockupProps {
  type: "finance" | "project" | "habit";
}

function FinanceMockup() {
  const rows: MockupRow[] = [
    { label: "Salary", value: "+$4,500.00", color: "text-green-600" },
    { label: "Rent", value: "-$1,200.00", color: "text-red-500" },
    { label: "Groceries", value: "-$340.00", color: "text-red-500" },
    { label: "Freelance", value: "+$800.00", color: "text-green-600" },
    { label: "Subscriptions", value: "-$45.99", color: "text-red-500" },
  ];

  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-green-100 text-xs">
          💰
        </div>
        <span className="text-xs font-semibold text-stone-800">Finance Tracker</span>
      </div>

      {/* Summary bar */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        <div className="rounded-md bg-green-50 px-2 py-1.5 text-center">
          <p className="text-[9px] text-stone-500">Income</p>
          <p className="text-[11px] font-bold text-green-600">$5,300</p>
        </div>
        <div className="rounded-md bg-red-50 px-2 py-1.5 text-center">
          <p className="text-[9px] text-stone-500">Expenses</p>
          <p className="text-[11px] font-bold text-red-500">$1,586</p>
        </div>
        <div className="rounded-md bg-blue-50 px-2 py-1.5 text-center">
          <p className="text-[9px] text-stone-500">Savings</p>
          <p className="text-[11px] font-bold text-blue-600">$3,714</p>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 space-y-0">
        <div className="grid grid-cols-[1fr_auto] border-b border-stone-100 px-1 py-1.5">
          <span className="text-[9px] font-medium uppercase tracking-wider text-stone-400">Transaction</span>
          <span className="text-[9px] font-medium uppercase tracking-wider text-stone-400">Amount</span>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[1fr_auto] border-b border-stone-50 px-1 py-1.5">
            <span className="text-[10px] text-stone-700">{row.label}</span>
            <span className={`text-[10px] font-medium ${row.color}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectMockup() {
  const columns = [
    {
      title: "To Do",
      color: "bg-stone-100",
      dotColor: "bg-stone-400",
      tasks: ["Research competitors", "Write PRD document"],
    },
    {
      title: "In Progress",
      color: "bg-blue-50",
      dotColor: "bg-blue-400",
      tasks: ["Design mockups", "Set up database"],
    },
    {
      title: "Done",
      color: "bg-green-50",
      dotColor: "bg-green-400",
      tasks: ["Project kickoff", "Define scope"],
    },
  ];

  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100 text-xs">
          📋
        </div>
        <span className="text-xs font-semibold text-stone-800">Project Management</span>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[9px] text-stone-500">Overall Progress</span>
          <span className="text-[9px] font-semibold text-stone-700">33%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-stone-100">
          <div className="h-1.5 w-1/3 rounded-full bg-blue-500" />
        </div>
      </div>

      {/* Kanban board */}
      <div className="grid flex-1 grid-cols-3 gap-2">
        {columns.map((col) => (
          <div key={col.title} className={`rounded-md ${col.color} p-1.5`}>
            <div className="mb-1.5 flex items-center gap-1">
              <div className={`h-1.5 w-1.5 rounded-full ${col.dotColor}`} />
              <span className="text-[8px] font-semibold text-stone-600">{col.title}</span>
            </div>
            <div className="space-y-1">
              {col.tasks.map((task) => (
                <div key={task} className="rounded bg-white px-1.5 py-1 shadow-sm">
                  <span className="text-[8px] leading-tight text-stone-600">{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HabitMockup() {
  const habits = [
    { name: "Morning workout", emoji: "🏋️", days: [true, true, false, true, true, false, true] },
    { name: "Read 30 mins", emoji: "📖", days: [true, true, true, true, false, true, true] },
    { name: "Drink 2L water", emoji: "💧", days: [true, false, true, true, true, true, false] },
    { name: "Meditate", emoji: "🧘", days: [false, true, true, false, true, true, true] },
    { name: "No social media", emoji: "📵", days: [true, true, false, false, true, true, true] },
  ];
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-purple-100 text-xs">
          ✅
        </div>
        <span className="text-xs font-semibold text-stone-800">Habit Tracker</span>
      </div>

      {/* Streak */}
      <div className="mb-3 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 px-2 py-1.5 text-center">
        <p className="text-[9px] text-stone-500">Current Streak</p>
        <p className="text-sm font-bold text-purple-600">🔥 12 Days</p>
      </div>

      {/* Habit grid */}
      <div className="flex-1">
        {/* Day headers */}
        <div className="mb-1 grid grid-cols-[1fr_repeat(7,16px)] gap-0.5 px-1">
          <span />
          {dayLabels.map((d, i) => (
            <span key={i} className="text-center text-[8px] font-medium text-stone-400">{d}</span>
          ))}
        </div>

        {/* Habit rows */}
        <div className="space-y-1">
          {habits.map((habit) => (
            <div key={habit.name} className="grid grid-cols-[1fr_repeat(7,16px)] items-center gap-0.5 px-1">
              <span className="truncate text-[9px] text-stone-600">
                {habit.emoji} {habit.name}
              </span>
              {habit.days.map((done, i) => (
                <div
                  key={i}
                  className={`mx-auto h-3 w-3 rounded-sm ${
                    done ? "bg-purple-400" : "bg-stone-100"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TemplateMockup({ type }: TemplateMockupProps) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-stone-50 to-stone-100 p-3">
      {type === "finance" && <FinanceMockup />}
      {type === "project" && <ProjectMockup />}
      {type === "habit" && <HabitMockup />}
    </div>
  );
}
