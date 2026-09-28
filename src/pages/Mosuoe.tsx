import { useState } from 'react'
import { SendHorizonal, Sparkles, UserRound } from 'lucide-react'

const initialMessages = [
  {
    sender: 'Mosuoe',
    text: 'I can see you are working on adding fractions. Let’s start by looking at the denominators. What do you notice about 1/3 and 1/6?',
  },
  {
    sender: 'Student',
    text: 'The denominators are different. One is 3 and one is 6.',
  },
  {
    sender: 'Mosuoe',
    text: 'Exactly. We need a common denominator. Which number is a multiple of both 3 and 6?',
  },
]

export function Mosuoe() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const nextMessage = { sender: 'Student', text: input.trim() }
    const response = {
      sender: 'Mosuoe',
      text: 'Good thinking. Let’s work it out together: find a common denominator, rewrite each fraction, then add the numerators and simplify the answer if needed.',
    }

    setMessages((current) => [...current, nextMessage, response])
    setInput('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">Your digital teacher</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Mosuoe</h1>
        </div>

        <div className="rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-medium text-cyan-800">
          Context aware
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Mosuoe</p>
              <p className="text-sm text-slate-500">Grade 7 • Mathematics • Fractions</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-white p-5">
          {messages.map((message, index) => (
            <div
              key={`${message.sender}-${index}`}
              className={`flex ${message.sender === 'Student' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.sender === 'Student'
                    ? 'bg-[#0b2f8f] text-white'
                    : 'border border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] opacity-80">
                  {message.sender === 'Student' ? <UserRound className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                  {message.sender}
                </div>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-4">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleSend()
              }}
              placeholder="Ask Mosuoe a question..."
              className="input flex-1 border-slate-200 bg-white"
            />
            <button
              onClick={handleSend}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-cyan-700"
            >
              <SendHorizonal className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mosuoe
