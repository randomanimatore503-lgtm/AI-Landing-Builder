import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, Zap, BarChart3, CheckCircle2, MessageCircle, UserCheck, CalendarDays, TrendingUp, Mail, Facebook, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import DemoModal from "@/components/DemoModal";
import DemoSection from "@/components/DemoSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans flex flex-col">
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>• AI-POWERED · REAL ESTATE · WHATSAPP</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
              >
                Every lead. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Zero misses.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Serious buyers message at 11PM. They don't wait for business hours. NodeEngine LIVE engages, qualifies, and books them instantly—exactly like a trained sales executive.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" onClick={() => setDemoOpen(true)} className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 border-0">
                  Book Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto h-14 px-8 border-border bg-background/50 backdrop-blur hover:bg-muted font-semibold text-lg">
                  See How It Works
                </Button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background relative border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for real estate reality</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Not a generic chatbot. A specialized system trained on property sales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group rounded-2xl border border-border bg-card p-8 relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI that understands everything</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Not keyword triggers. Not templates. Real conversational AI that handles questions, possession dates, RERA queries, and floor preferences—exactly like a trained sales executive.
                </p>
                <div className="mt-auto">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-semibold">
                    CLAUDE + GPT-4 POWERED
                  </Badge>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Remembers every lead</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every conversation, preference, budget, and timeline stored. Next time they message, it picks up exactly where it left off.
                </p>
                <div className="mt-auto">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-semibold">
                    FULL CONTEXT MEMORY
                  </Badge>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group rounded-2xl border border-border bg-card p-8 relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Replies in seconds</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Instant responses 24/7. Serious buyers don't wait. NodeEngine LIVE responds before they can open a competitor's page.
                </p>
                <div className="mt-auto">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-semibold">
                    &lt; 3 SECOND RESPONSE
                  </Badge>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group rounded-2xl border border-border bg-card p-8 relative overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Morning reports, every day</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Wake up to a full qualified lead report. Who messaged, what they want, their budget, readiness score—all waiting in your inbox.
                </p>
                <div className="mt-auto">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-semibold">
                    AUTO DAILY REPORTS
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Astronaut Section */}
        <section className="py-8 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-x-8 top-0 bottom-1/2 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
              <img
                src="/astronaut.png"
                alt="AI automation — taking your leads to new deals"
                className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(0,212,255,0.15))" }}
              />
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-card/50 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How NodeEngine LIVE works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A seamless pipeline from initial inquiry to qualified appointment.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="h-24 w-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(0,212,255,0.3)]">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Instant Engagement</h3>
                <p className="text-muted-foreground">Lead messages your WhatsApp. NodeEngine replies in &lt;3s with personalized context.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="h-24 w-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(0,212,255,0.3)]">
                  <UserCheck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Smart Qualification</h3>
                <p className="text-muted-foreground">AI asks about budget, timeline, and preferences, adapting dynamically to responses.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="h-24 w-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(0,212,255,0.3)]">
                  <CalendarDays className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Ready to Close</h3>
                <p className="text-muted-foreground">Qualified leads are scored and passed to your CRM or inbox for the final close.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <DemoSection />

        {/* Impact Section */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Scale your operations without scaling headcount.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  NodeEngine LIVE handles the volume of 10 SDRs at a fraction of the cost, working 24/7/365 without sick days or sleep.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="h-3 w-3 text-primary" />
                    </div>
                    <span className="font-medium">Zero dropped conversations</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative"
              >
                <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-blue-500/20 blur-2xl rounded-full" />
                <div className="relative z-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                    <div className="bg-muted/50 rounded-2xl rounded-tl-none p-4 text-sm text-muted-foreground max-w-[80%]">
                      Hi, I'm looking for a 3BHK in downtown area. Budget is around $800k.
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
                      Hello! I can definitely help with that. We have a few premium 3BHK options in downtown starting at $750k. Are you looking to move in immediately, or is this an off-plan investment?
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                    <div className="bg-muted/50 rounded-2xl rounded-tl-none p-4 text-sm text-muted-foreground max-w-[80%]">
                      Looking to move in next month ideally. Need parking too.
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
                      Perfect. The Skyline Residences have immediate possession and include 2 covered parking spots within your budget. Would you like me to schedule a viewing with our senior agent tomorrow?
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-card/30 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary">Does it replace my sales team?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  No. It replaces the repetitive grunt work of qualifying leads, answering basic queries, and scheduling. Your sales team takes over when the lead is warm, qualified, and ready to talk specifics or close.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary">How long does setup take?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  Under a week. We handle the technical integration, train the AI on your specific property portfolio and FAQs, and test it rigorously before going live.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary">Does it sound like a robot?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  No. We use advanced LLMs (Claude & GPT-4) configured with specific persona prompts. It sounds like a polite, knowledgeable, and highly efficient real estate professional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary">Will it integrate with my CRM?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  Yes. NodeEngine LIVE can push qualified leads, chat transcripts, and extracted data points directly into Salesforce, HubSpot, Follow Up Boss, or any CRM via API/Webhooks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your plan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Two powerful products built for real estate professionals at every scale.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NodeEngine Mini */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-primary/30 bg-card p-8 shadow-lg shadow-primary/5 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/nodeengine-mini-logo.webp"
                      alt="NodeEngine Mini"
                      className="h-16 w-16 rounded-full object-cover border-2 border-primary/30 shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold">NodeEngine Mini</h3>
                      <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Available Now
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {[
                      "Replies to inquiries and handles them automatically.",
                      "Knows your business and remembers customer preferences.",
                      "Sends daily closed inquiries report via email.",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setDemoOpen(true)}
                    className="mt-8 w-full h-11 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-primary-foreground font-bold text-sm hover:from-primary/90 hover:to-blue-500/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Get Started →
                  </button>
                </div>
              </motion.div>

              {/* NodeEngine Pro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-8 flex flex-col opacity-80"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-bold bg-muted text-muted-foreground border border-border rounded-full px-3 py-1 tracking-wider uppercase">Under Development</span>
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/nodeengine-pro-logo.webp"
                      alt="NodeEngine Pro"
                      className="h-16 w-16 rounded-full object-cover border-2 border-border shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold">NodeEngine Pro</h3>
                      <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-0.5">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {[
                      "Finds leads from real estate sites (like MagicBricks) automatically.",
                      "Shows weekly insights on where your inquiries are coming from (Instagram, WhatsApp, etc.)",
                      "Web portal that organizes all your work into a clean, easy dashboard.",
                      "Handles inquiries and sends daily summary reports via email.",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 w-full h-11 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground font-bold text-sm cursor-not-allowed select-none">
                    Coming Soon
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border bg-background/50 backdrop-blur p-8 md:p-16 shadow-2xl shadow-primary/5"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop losing leads you never knew you had.</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Setup in under a week. No technical knowledge needed. Results from day one.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => setDemoOpen(true)} className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 border-0">
                  Book Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Setup in 7 days</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Seamless WhatsApp Integration</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 24/7 Support</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="LeadBridge Systems" className="h-7 w-7 object-contain opacity-80" />
                <span className="text-sm font-semibold text-foreground">LeadBridge Systems</span>
              </div>
              <p className="text-xs text-muted-foreground max-w-xs">AI-powered WhatsApp lead qualification for real estate professionals.</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Contact Us</p>
              <a
                href="mailto:leadbridgesystems@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                leadbridgesystems@gmail.com
              </a>
              <a
                href="https://www.facebook.com/share/18UCQznZi5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/leadbridge.ai?igsh=MjdyMmd3bDRhYmdz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @leadbridge.ai
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} LeadBridge Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

