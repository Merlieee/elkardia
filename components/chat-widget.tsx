"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  time: string
}

const WELCOME: Message = {
  id: "0",
  role: "assistant",
  content: "Cześć! Jestem asystentem Elkardia. Mogę pomóc z informacjami o rejestracji, zakresie usług i przygotowaniem do badań. W czym mogę pomóc?",
  time: now(),
}

function now() {
  return new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })
}

const RESPONSES: [RegExp, string][] = [
  [/rejestr|zapis|umów|wizyt/i, "Rejestrację można przeprowadzić telefonicznie pod numerem (81) 565 70 75 lub 536 102 112, przez e-mail rejestracja@elkardia.pl albo online przez formularz 24h na stronie /rejestracja."],
  [/ablacj/i, "Ablacja serca to zabieg leczący zaburzenia rytmu serca. Wykonujemy ablację RF i nowoczesną ablację PFA (pulsed field). Szczegóły znajdziesz na stronie /ablacja-serca."],
  [/stomato|zęb|dentysta/i, "Posiadamy gabinet stomatologiczny specjalizujący się w opiece nad pacjentami kardiologicznymi. Szczegółowy zakres usług na stronie /stomatologia."],
  [/dietet|odżywianie|dieta/i, "Nasi dietetycy kliniczni specjalizują się w dietoterapii chorób sercowo-naczyniowych. Więcej informacji na stronie /dietetycy."],
  [/badan|echo|ekg|holter|usg/i, "Oferujemy pełną diagnostykę kardiologiczną: EKG, Holter, echo serca, USG Doppler, test wysiłkowy i wiele innych. Pełna lista na stronie /badania."],
  [/godzin|czas pracy|otwarty|czynny/i, "Przyjmujemy od poniedziałku do piątku w godzinach 8:00–20:00. Adres: ul. R. W. Pileckiego 23/20, 20-091 Lublin."],
  [/cen|koszt|ile|płatn|nfz|refundacj/i, "Szczegółowe informacje o cenach i możliwości refundacji udzielimy telefonicznie pod numerem (81) 565 70 75."],
  [/lekarz|kardiolog|specjalista/i, "Nasz zespół to doświadczeni kardiolodzy dziecięcy i dorosłych, elektrofizjolodzy oraz specjaliści chorób wewnętrznych. Poznaj nasz zespół na stronie /lekarze."],
]

function getReply(text: string): string {
  for (const [pattern, reply] of RESPONSES) {
    if (pattern.test(text)) return reply
  }
  return "Dziękuję za pytanie. W celu uzyskania szczegółowych informacji zapraszamy do kontaktu telefonicznego pod numer (81) 565 70 75 lub poprzez formularz rejestracyjny na stronie /rejestracja."
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  function send() {
    const text = input.trim()
    if (!text) return
    setInput("")

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text, time: now() }
    setMessages((m) => [...m, userMsg])
    setTyping(true)

    setTimeout(() => {
      const reply = getReply(text)
      setMessages((m) => [...m, { id: Date.now().toString(), role: "assistant", content: reply, time: now() }])
      setTyping(false)
    }, 900)
  }

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Otwórz czat z asystentem"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#EE3920] text-white shadow-lg transition-all hover:bg-[#d4321c] hover:scale-105 ${open ? "hidden" : "flex"}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[480px] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#EE3920] px-4 py-3 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-none">Asystent Elkardia</p>
              <p className="mt-0.5 text-xs text-white/70">Odpowiadamy na pytania</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-white/20 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${msg.role === "user" ? "bg-slate-400" : "bg-[#EE3920]"}`}>
                  {msg.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>
                <div className={`max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${msg.role === "user" ? "bg-[#EE3920] text-white rounded-tr-sm" : "bg-slate-100 text-slate-800 rounded-tl-sm"}`}>
                    {msg.content}
                  </div>
                  <span className="mt-1 text-[10px] text-slate-400">{msg.time}</span>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EE3920] text-white">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="rounded-xl rounded-tl-sm bg-slate-100 px-3 py-2">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-100 px-3 py-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-[#EE3920] transition-colors">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Napisz pytanie…"
                className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EE3920] text-white disabled:opacity-40 hover:bg-[#d4321c] transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-400">Pilne sprawy: (81) 565 70 75</p>
          </div>
        </div>
      )}
    </>
  )
}
