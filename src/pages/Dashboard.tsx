import { useAuth } from '@/contexts/AuthContext'
import { BookOpen, GraduationCap, MessageSquareText, Trophy, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const { profile, user } = useAuth()

  const name = profile?.full_name || user?.email || 'Learner'
  const role = profile?.role || 'student'

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-[#0c2d8f] via-[#0d3cbe] to-[#19b8e7] p-6 text-white shadow-lg shadow-cyan-500/10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Sekolong learning dashboard</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Welcome back, {name.split(' ')[0]}</h1>
        <p className="mt-2 max-w-2xl text-cyan-50">
          {role === 'student' && 'Continue your learning journey. You are not learning alone.'}
          {role === 'teacher' && 'Manage your classes, resources and AI-assisted lesson planning.'}
          {role === 'parent' && 'Keep track of your child’s progress and learning milestones.'}
          {role === 'admin' && 'Manage the Sekolong ecosystem, curriculum and learning operations.'}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<BookOpen className="h-5 w-5 text-cyan-700" />} label="Courses" value="4" hint="Active" />
        <StatCard icon={<GraduationCap className="h-5 w-5 text-cyan-700" />} label="Lessons" value="18" hint="Completed" />
        <StatCard icon={<Trophy className="h-5 w-5 text-cyan-700" />} label="Average score" value="81%" hint="This term" />
        <StatCard icon={<TrendingUp className="h-5 w-5 text-cyan-700" />} label="Streak" value="12 days" hint="Learning" />
      </div>

      {role === 'student' && (
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <section className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">Continue learning</h2>
              <Link to="/courses" className="text-sm font-semibold text-cyan-700 hover:text-cyan-800">
                Browse all
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              <LearningItem
                title="Mathematics — Fractions"
                subtitle="Lesson 3 of 4"
                progress={72}
                to="/courses/mathematics-fractions"
              />
              <LearningItem
                title="English — Reading Comprehension"
                subtitle="Lesson 2 of 5"
                progress={41}
                to="/courses/english-reading"
              />
            </div>
          </section>

          <aside className="space-y-6">
            <section className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900">Ask Mosuoe</h3>
              <p className="mt-2 text-sm text-slate-600">Need help with a concept or practice question? Your digital teacher is ready.</p>
              <Link to="/mosuoe" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-cyan-700">
                <MessageSquareText className="h-4 w-4" />
                Open Mosuoe
              </Link>
            </section>

            <section className="card p-5">
              <h3 className="text-lg font-semibold text-slate-900">Upcoming class</h3>
              <p className="mt-3 text-sm text-slate-600">Mathematics • Tomorrow, 16:00</p>
              <p className="mt-1 text-xs text-slate-500">Teacher: Ms. Mofokeng</p>
            </section>
          </aside>
        </div>
      )}

      {role === 'teacher' && (
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Teacher tools</h2>
          <p className="mt-2 text-sm text-slate-600">
            Create courses, manage classes, and use AI assistance to prepare worksheets, quizzes and revision activities.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/courses" className="btn-primary">View course library</Link>
            <Link to="/curriculum" className="btn-secondary">Curriculum review</Link>
          </div>
        </section>
      )}

      {role === 'admin' && (
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Administration</h2>
          <p className="mt-2 text-sm text-slate-600">
            Curriculum management, review workflows and AI-generated content approvals are ready for action.
          </p>
          <Link to="/curriculum" className="btn-primary mt-4 inline-flex">
            Curriculum management
          </Link>
        </section>
      )}
    </div>
  )
}

function LearningItem({
  title,
  subtitle,
  progress,
  to,
}: {
  title: string
  subtitle: string
  progress: number
  to: string
}) {
  return (
    <Link to={to} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-200 hover:bg-cyan-50">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        <span className="text-sm font-semibold text-cyan-700">{progress}%</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" style={{ width: `${progress}%` }} />
      </div>
    </Link>
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
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">{hint}</p>
    </div>
  )
}

export default Dashboard
