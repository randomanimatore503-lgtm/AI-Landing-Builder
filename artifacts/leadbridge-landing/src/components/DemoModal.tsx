import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, ExternalLink } from "lucide-react";

const PRIVACY_POLICY_URL = "https://node-engine-mini-privacy-policies-b9v23tgyb.vercel.app/";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const LEADS_OPTIONS = [
  { value: "1-5", label: "1–5 leads/day" },
  { value: "6-15", label: "6–15 leads/day" },
  { value: "16-30", label: "16–30 leads/day" },
  { value: "30+", label: "30+ leads/day" },
];

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    contact: "",
    leadsPerDay: "",
  });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.businessName || !form.contact || !form.leadsPerDay) {
      setError("Please fill in all fields.");
      return;
    }
    if (!agreedToPolicy) {
      setError("Please agree to the privacy policy to continue.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await fetch("https://n8n.leadbridge.online/webhook/d980994d-d99f-4d83-8036-ee67f2989c0e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.fullName,
          business_name: form.businessName,
          contact: form.contact,
          leads_per_day: form.leadsPerDay,
          submitted_at: new Date().toISOString(),
        }),
      });

      setSuccess(true);
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setError("");
      setAgreedToPolicy(false);
      setForm({ fullName: "", businessName: "", contact: "", leadsPerDay: "" });
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-[#0d1117] border border-border text-foreground max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">You're booked in!</h2>
            <p className="text-muted-foreground">
              Thanks! We'll reach out to you shortly to confirm your demo slot.
            </p>
            <Button onClick={handleClose} className="mt-2 bg-gradient-to-r from-primary to-blue-500 border-0 text-primary-foreground font-semibold">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Book a Free Demo</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us a bit about your business and we'll set up your NodeEngine LIVE demo.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Rajesh Sharma"
                  className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Business Name</label>
                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Sharma Properties"
                  className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Contact</label>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="Email, Instagram, WhatsApp or Phone — any works"
                  className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">How many leads do you get per day?</label>
                <div className="grid grid-cols-2 gap-2">
                  {LEADS_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 cursor-pointer text-sm font-medium transition-all ${
                        form.leadsPerDay === opt.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="leadsPerDay"
                        value={opt.value}
                        checked={form.leadsPerDay === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`h-4 w-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                          form.leadsPerDay === opt.value ? "border-primary" : "border-muted-foreground/50"
                        }`}
                      >
                        {form.leadsPerDay === opt.value && (
                          <span className="h-2 w-2 rounded-full bg-primary block" />
                        )}
                      </span>
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Privacy Policy Consent */}
              <div className="flex flex-col gap-2 rounded-lg border border-border bg-card/50 p-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={agreedToPolicy}
                      onChange={(e) => {
                        setAgreedToPolicy(e.target.checked);
                        setError("");
                      }}
                      className="sr-only"
                    />
                    <div
                      className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
                        agreedToPolicy
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/50 bg-card group-hover:border-primary/50"
                      }`}
                    >
                      {agreedToPolicy && (
                        <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground leading-snug">
                    By booking, you are agreeing to our privacy policies.
                  </span>
                </label>
                <p className="text-xs text-muted-foreground/70 pl-8">
                  You can read the privacy policies by clicking{" "}
                  <a
                    href={PRIVACY_POLICY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    here <ExternalLink className="h-3 w-3" />
                  </a>
                  .
                </p>
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="h-11 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground font-bold border-0 shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting...</>
                ) : (
                  "Book My Free Demo →"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
