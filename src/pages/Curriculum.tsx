import { FileText, Sparkles, Upload, CheckCircle2, Clock3 } from 'lucide-react'

const syllabusItems = [
  {
    id: 'grade-7-maths',
    name: 'Grade 7 Mathematics Syllabus.pdf',
    status: 'Under review',
    date: 'Today',
    description: 'AI extracted topics, outcomes and assessment expectations from the uploaded PDF.',
  },
  {
    id: 'grade-8-english',
    name: 'Grade 8 English Language Syllabus.pdf',
    status: 'Approved',
    date: '2 days ago',
    description: 'Learning objectives and reading outcomes are ready for publishing.',
  },
  {
    id: 'grade-9-physics',
    name: 'Grade 9 Physical Sciences Syllabus.pdf',
    status: 'Draft',
    date: 'This week',
    description: 'Awaiting teacher validation and curriculum review before publication.',
  },
]

export function Curriculum() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">Admin workspace</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Curriculum & syllabus</h1>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-[#0b2f8f] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0d2371]">
          <Upload className="h-4 w-4" />
          Upload syllabus PDF
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={<FileText className="h-5 w-5 text-cyan-700" />} label="Syllabuses" value="12" hint="Total stored" />
        <StatCard icon={<Sparkles className="h-5 w-5 text-cyan-700" />} label="AI-generated" value="7" hint="Awaiting review" />
        <StatCard icon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />} label="Approved" value="5" hint="Published" />
      </div>

      <section className="card p-6">
        <h2 className="text-xl font-semibold text-slate-900">Syllabus review queue</h2>
        <div className="mt-6 space-y-4">
          {syllabusItems.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-slate-900">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === 'Approved'
                        ? 'bg-emerald-100 text-emerald-700'
                        : item.status === 'Under review'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.status === 'Approved' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>{item.date}</span>
                <button className="font-medium text-cyan-700 hover:text-cyan-800">Review details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode
  label: string
  value: string
  hint: string
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">{icon}</div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">{hint}</p>
    </div>
  )
}

export default Curriculum
