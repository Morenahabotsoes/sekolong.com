import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Download, MessageSquareText, PlayCircle, Sparkles } from 'lucide-react'

const lessons = [
  {
    id: 'fractions',
    title: 'Adding Fractions',
    course: 'Mathematics: Fractions',
    grade: 'Grade 7',
    duration: '25 minutes',
    objective: 'Learn to add fractions with like and unlike denominators using common multiples.',
    overview:
      'Students will practise identifying common denominators, simplifying results and recognising equivalent fractions in everyday contexts.',
    resources: ['Worksheet: Adding Fractions', 'Worked examples', 'Practice quiz'],
    questions: ['What is the common denominator of 1/3 and 1/6?', 'How do we simplify 4/8?'],
  },
  {
    id: 'reading-comprehension',
    title: 'Reading Comprehension',
    course: 'English Reading Comprehension',
    grade: 'Grade 8',
    duration: '30 minutes',
    objective: 'Identify the main idea, supporting details and inference in a passage.',
    overview:
      'Students will learn how to cite evidence, distinguish key ideas from minor details and answer questions using text clues.',
    resources: ['Reading passage', 'Annotation guide', 'Short answer practice'],
    questions: ['What is the central idea?', 'Which sentence supports the conclusion?'],
  },
]

export function Lesson() {
  const { lessonId } = useParams()
  const lesson = lessons.find((item) => item.id === lessonId) ?? lessons[0]

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link to="/courses" className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200">
          <ArrowLeft className="h-4 w-4" />
          Back to courses
        </Link>
      </div>

      <section className="card overflow-hidden p-0">
        <div className="bg-gradient-to-r from-[#0d2f8f] via-[#0f57d8] to-[#17bfe9] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">{lesson.grade}</p>
          <h1 className="mt-3 text-3xl font-bold">{lesson.title}</h1>
          <p className="mt-2 text-cyan-50">{lesson.course}</p>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Lesson goal</h2>
              <p className="mt-2 text-slate-600">{lesson.objective}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
              <p className="mt-2 text-slate-600">{lesson.overview}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <PlayCircle className="h-4 w-4 text-cyan-600" />
                Guided learning activity
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {lesson.questions.map((question) => (
                  <li key={question} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-500" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <BookOpen className="h-4 w-4 text-cyan-600" />
                Resources
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {lesson.resources.map((resource) => (
                  <li key={resource} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                    <span>{resource}</span>
                    <Download className="h-4 w-4 text-slate-400" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-800">
                <Sparkles className="h-4 w-4" />
                Need help?
              </div>
              <p className="mt-2 text-sm text-cyan-800">
                Ask Mosuoe to break the idea down step by step and give you a quick practice prompt.
              </p>
              <Link to="/mosuoe" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-cyan-700">
                <MessageSquareText className="h-4 w-4" />
                Ask Mosuoe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lesson
