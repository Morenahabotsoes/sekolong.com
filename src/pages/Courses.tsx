import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Sparkles,
} from 'lucide-react'

const courses = [
  {
    id: 'mathematics-fractions',
    title: 'Mathematics: Fractions',
    subject: 'Mathematics',
    grade: 'Grade 7',
    duration: '4 lessons',
    progress: 72,
    level: 'Foundation',
    description: 'Learn to compare, simplify, add and subtract fractions with visual examples.',
  },
  {
    id: 'english-reading',
    title: 'English Reading Comprehension',
    subject: 'English Language',
    grade: 'Grade 8',
    duration: '5 lessons',
    progress: 41,
    level: 'Core',
    description: 'Build confidence with argument analysis, summaries and text-based reasoning.',
  },
  {
    id: 'physical-science-motion',
    title: 'Physical Sciences: Motion',
    subject: 'Physical Sciences',
    grade: 'Grade 9',
    duration: '3 lessons',
    progress: 58,
    level: 'Applied',
    description: 'Understand speed, distance, acceleration and practical examples from daily life.',
  },
  {
    id: 'sesotho-literacy',
    title: 'Sesotho Literacy',
    subject: 'Sesotho',
    grade: 'Grade 6',
    duration: '4 lessons',
    progress: 63,
    level: 'Foundation',
    description: 'Strengthen vocabulary, reading fluency and language structure in Sesotho.',
  },
]

export function Courses() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Learning catalogue
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Explore courses</h1>
        </div>

        <div className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-800">
          4 active courses
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="card overflow-hidden p-0">
            <div className="bg-gradient-to-r from-[#0d2f8f] via-[#0b4bc4] to-[#08a8e8] p-5 text-white">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <span>{course.grade}</span>
                <span>{course.level}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight">{course.title}</h2>
            </div>

            <div className="space-y-5 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <BookOpen className="h-4 w-4 text-cyan-600" />
                <span>{course.subject}</span>
              </div>

              <p className="text-sm leading-6 text-slate-600">{course.description}</p>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {course.duration}
                </span>
                <span className="font-medium text-slate-700">{course.progress}% complete</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0b2f8f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d2371]"
                >
                  Open course
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  In progress
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="card p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">AI-generated curriculum</h3>
            <p className="text-sm text-slate-600">Syllabus PDFs can be turned into structured lessons and quizzes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
