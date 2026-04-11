import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Wifi, Battery, Signal } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

interface LeadInfo {
  name: string | null;
  place: string | null;
  budget: string | null;
  timeline: string | null;
  contact: string | null;
}

const EMPTY_LEAD: LeadInfo = { name: null, place: null, budget: null, timeline: null, contact: null };

function getScore(info: LeadInfo): number {
  let score = 0;
  if (info.name) score += 1;
  if (info.budget) score += 4;
  if (info.contact) score += 3;
  if (info.timeline) score += 2;
  return score;
}

function getLabel(score: number): { label: string; color: string; bg: string; bar: string } {
  if (score <= 3) return { label: "Cold", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/30", bar: "bg-blue-400" };
  if (score <= 6) return { label: "Warm", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30", bar: "bg-yellow-400" };
  return { label: "Hot 🔥", color: "text-red-400", bg: "bg-red-400/10 border-red-400/30", bar: "bg-red-400" };
}

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function DemoSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm here to help you find your perfect property. What kind of place are you looking for?",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>(EMPTY_LEAD);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text, time: now() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply, time: now() }]);
      if (data.leadInfo) setLeadInfo(data.leadInfo);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again.", time: now() },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const score = getScore(leadInfo);
  const { label, color, bg, bar } = getLabel(score);
  const maxScore = 10;
  const hasAnyInfo = Object.values(leadInfo).some(Boolean);

  return (
    <section id="demo" className="py-24 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            See it in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Chat with NodeEngine LIVE — exactly like a real buyer would on WhatsApp.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
          {/* WhatsApp Phone Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[340px] flex-shrink-0"
          >
            <div className="rounded-[2rem] border-[3px] border-border bg-[#111b21] overflow-hidden shadow-2xl shadow-black/40">
              {/* Phone status bar */}
              <div className="bg-[#111b21] px-5 pt-3 pb-1 flex items-center justify-between">
                <span className="text-[10px] text-white/60 font-medium">9:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal className="h-3 w-3 text-white/60" />
                  <Wifi className="h-3 w-3 text-white/60" />
                  <Battery className="h-3 w-3 text-white/60" />
                </div>
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#1f2c33] px-4 py-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  NE
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold leading-tight">NodeEngine LIVE</p>
                  <p className="text-green-400 text-[11px]">online</p>
                </div>
              </div>

              {/* Chat background */}
              <div
                className="h-[380px] overflow-y-auto px-3 py-3 flex flex-col gap-2"
                style={{
                  background: "linear-gradient(180deg, #0a1014 0%, #111b21 100%)",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-[#005c4b] text-white rounded-tr-sm"
                          : "bg-[#1f2c33] text-white rounded-tl-sm"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                      <p className={`text-[10px] mt-1 text-right ${msg.role === "user" ? "text-green-300/70" : "text-white/40"}`}>
                        {msg.time} {msg.role === "user" && "✓✓"}
                      </p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-[#1f2c33] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div className="bg-[#1f2c33] px-3 py-2 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Message"
                  className="flex-1 bg-[#2a3942] text-white text-sm rounded-full px-4 py-2 outline-none placeholder:text-white/30"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="h-9 w-9 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Lead Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full lg:flex-1"
          >
            <div className="rounded-2xl border border-border bg-card p-6 h-full">
              <h3 className="text-base font-bold mb-5 text-foreground tracking-wide uppercase text-xs text-muted-foreground">
                Lead Info
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {(
                  [
                    { key: "name", label: "Name", points: "+1" },
                    { key: "place", label: "Location", points: null },
                    { key: "budget", label: "Budget", points: "+4" },
                    { key: "timeline", label: "Timeline", points: "+2" },
                    { key: "contact", label: "Contact", points: "+3" },
                  ] as { key: keyof LeadInfo; label: string; points: string | null }[]
                ).map(({ key, label, points }) => (
                  <div key={key} className="rounded-xl border border-border bg-background/50 px-4 py-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
                      {points && (
                        <span className="text-[10px] font-bold text-primary/60">{points}</span>
                      )}
                    </div>
                    <p className={`text-sm font-medium truncate ${leadInfo[key] ? "text-foreground" : "text-muted-foreground/30"}`}>
                      {leadInfo[key] ?? "—"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Score Meter */}
              <div className={`rounded-xl border p-4 ${hasAnyInfo ? bg : "border-border bg-background/30"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lead Score</span>
                  <span className={`text-sm font-bold ${hasAnyInfo ? color : "text-muted-foreground/40"}`}>
                    {hasAnyInfo ? label : "—"}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full transition-all duration-700 ${hasAnyInfo ? bar : "bg-muted-foreground/20"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / maxScore) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-muted-foreground/50">Cold</span>
                  <span className="text-[10px] text-muted-foreground/50">{score}/{maxScore} pts</span>
                  <span className="text-[10px] text-muted-foreground/50">Hot</span>
                </div>

                <div className="mt-4 flex gap-2 text-[11px]">
                  {[
                    { t: "Cold", s: "≤ 3 pts", c: "text-blue-400" },
                    { t: "Warm", s: "4–6 pts", c: "text-yellow-400" },
                    { t: "Hot 🔥", s: "7+ pts", c: "text-red-400" },
                  ].map((tier) => (
                    <div key={tier.t} className="flex-1 rounded-lg bg-muted/30 px-2 py-1.5 text-center">
                      <p className={`font-bold ${tier.c}`}>{tier.t}</p>
                      <p className="text-muted-foreground/50">{tier.s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
