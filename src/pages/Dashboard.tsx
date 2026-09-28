import { useAuth } from '@/contexts/AuthContext'
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const { profile, user } = useAuth()
  const role = profile?.role ?? 'student'
  const firstName = profile?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Learner'

  if (role === 'teacher') {
    return (
      <div className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-600">Teacher dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome back, {firstName}</h1>
          <p className="mt-2 text-slate-600">Manage classes, build lessons, and support your learners.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Classes" value="6" detail="2 live this week" icon={<GraduationCap className="h-5 w-5 text-primary-600" />} />
          <StatCard label="Learners" value="84" detail="+12 this month" icon={<BookOpen className="h-5 w-5 text-primary-600" />} />
          <StatCard label="Resources" value="18" detail="5 pending review" icon={<Sparkles className="h-5 w-5 text-primary-600" />} />
          <StatCard label="AI tasks" value="9" detail="ready to review" icon={<Target className="h-5 w-5 text-primary-600" />} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Upcoming live classes</h2>
              <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">This week</span>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Mathematics', time: 'Tomorrow · 16:00', learners: 21, status: 'Scheduled' },
                { name: 'Physical Sciences', time: 'Thu · 15:30', learners: 18, status: 'Ready' },
                { name: 'English Language', time: 'Fri · 14:00', learners: 16, status: 'Draft' },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{item.learners} learners</p>
                    <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">Teacher AI assistant</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3"><Sparkles className="mt-0.5 h-4 w-4 text-primary-600" />Generate a worksheet on fractions.</li>
              <li className="flex gap-3"><MessageSquare className="mt-0.5 h-4 w-4 text-primary-600" />Draft revision questions for grade 8 science.</li>
              <li className="flex gap-3"><Target className="mt-0.5 h-4 w-4 text-primary-600" />Review AI lesson drafts before publishing.</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }

  if (role === 'admin') {
    return (
      <div className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-600">Admin dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Platform overview</h1>
          <p className="mt-2 text-slate-600">Monitor learners, teachers, curriculum quality and platform usage.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Students" value="1,240" detail="+86 this term" icon={<GraduationCap className="h-5 w-5 text-primary-600" />} />
          <StatCard label="Teachers" value="94" detail="12 pending approval" icon={<Users className="h-5 w-5 text-primary-600" />} />
          <StatCard label="Courses" value="118" detail="18 under review" icon={<BookOpen className="h-5 w-5 text-primary-600" />} />
          <StatCard label="AI reviews" value="24" detail="7 require action" icon={<Trophy className="h-5 w-5 text-primary-600" />} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
            <div className="mt-4 space-y-3">
              <Link to="/curriculum" className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <span>Curriculum management</span>
                <span>→</span>
              </Link>
              <Link to="/courses" className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <span>Review AI-generated courses</span>
                <span>→</span>
              </Link>
              <Link to="/schools" className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <span>School administration</span>
                <span>→</span>
              </Link>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">Approval backlog</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-xl bg-slate-50 p-3">Grade 7 mathematics course review</li>
              <li className="rounded-xl bg-slate-50 p-3">Science revision worksheet approval</li>
              <li className="rounded-xl bg-slate-50 p-3">New teacher onboarding</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-600">Student dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Good morning, {firstName} 👋</h1>
        <p className="mt-2 text-slate-600">You are not learning alone. Mosuoe is here to help.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Lessons done" value="12" detail="+3 this week" icon={<TrendingUp className="h-5 w-5 text-primary-600" />} />
        <StatCard label="Average score" value="82%" detail="Up 9%" icon={<Trophy className="h-5 w-5 text-primary-600" />} />
        <StatCard label="Active courses" value="4" detail="2 due this week" icon={<BookOpen className="h-5 w-5 text-primary-600" />} />
        <StatCard label="Mosuoe streak" value="7 days" detail="Keep it up" icon={<Sparkles className="h-5 w-5 text-primary-600" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Continue learning</p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">Mathematics · Fractions</h2>
            </div>
            <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">60% complete</span>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[60%] rounded-full bg-primary-600" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <LessonTile title="Adding Fractions" subtitle="Lesson · 15 min" />
            <LessonTile title="Practice Quiz" subtitle="Revision · 8 questions" />
            <LessonTile title="Study Notes" subtitle="Worksheet · Download" />
            <LessonTile title="Ask Mosuoe" subtitle="Get help with tricky steps" />
          </div>
        </section>

        <aside className="card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Mosuoe</p>
              <h2 className="font-semibold text-slate-900">Your digital teacher</h2>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-primary-50 p-4 text-sm text-primary-900">
            I see you’re working on adding fractions. Which part feels hardest right now?
          </div>

          <button type="button" className="btn-primary mt-5 w-full">Ask Mosuoe</button>
        </aside>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Upcoming class</h2>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 p-4">
            <div>
              <p className="font-semibold text-slate-900">Mathematics</p>
              <p className="mt-1 text-sm text-slate-500">Tomorrow · 16:00</p>
            </div>
            <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">Confirmed</div>
          </div>
        </section>

        <section className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Your resources</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between rounded-lg bg-slate-50 p-3"><span>Fractions worksheet</span><span>PDF</span></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 p-3"><span>Revision notes</span><span>Saved</span></li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 p-3"><span>Practice exercise</span><span>Ready</span></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

function LessonTile({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    </div>
  )
}

function StatCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string
  value: string
  detail: string
  icon: React.ReactNode
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{label}</span>
        <div className="rounded-lg bg-slate-100 p-2">{icon}</div>
      </div>
      <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </div>
  )
}
