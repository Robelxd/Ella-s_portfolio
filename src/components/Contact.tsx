"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

/** --- Contact data --- **/
const contactInfo = [
  { icon: Mail, label: "Email", value: "Ellaeshetu21@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251 936706856" },
  { icon: MapPin, label: "Location", value: "Jemo, Addis Ababa, Ethiopia" },
];

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/Ellaeshetu21", color: "hover:bg-pink-500/20" },
  { name: "Telegram", url: "https://t.me/Ela212", color: "hover:bg-blue-400/20" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ela-eshetu-b8b47a332", color: "hover:bg-blue-500/20" },
  { name: "TikTok", url: "https://www.tiktok.com/@Ellapicture0", color: "hover:bg-gray-500/20" },
];

/** --- small helpers --- **/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Toast = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [toast, setToast] = useState<Toast>(null);
  const [loading, setLoading] = useState(false);

  // Controlled fields for validation & floating labels
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // hidden spam field

  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  // Validate form in real-time
  useEffect(() => {
    const newErrors: { [k: string]: string } = {};
    if (name.trim().length < 2) newErrors.name = "Please enter your name.";
    if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address.";
    if (message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
  }, [name, email, message]);

  // Button disabled if errors exist or required empty
  const isFormValid = Object.keys(errors).length === 0 && name && email && message;

  // Send via EmailJS (keeps your service/template/publicKey — replace if needed)
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // honeypot check: if filled, treat as spam
    if (honeypot.trim()) {
      // silently drop or show a subtle message
      setToast({ type: "error", message: "Spam detected — message not sent." });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    if (!isFormValid) {
      setToast({ type: "error", message: "Please fix the form errors before sending." });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_l3un4xr", // your EmailJS service ID
        "template_vwoc55q", // your EmailJS template ID
        formRef.current,
        "LsY5pQMBXooTi9Bo2" // your EmailJS public key
      )
      .then(
        () => {
          setToast({ type: "success", message: "Message sent successfully! 🎉" });
          setLoading(false);
          // clear fields
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setTimeout(() => setToast(null), 4000);
        },
        (error) => {
          console.error("Email failed:", error);
          setToast({ type: "error", message: "Failed to send message. Please try again later." });
          setLoading(false);
          setTimeout(() => setToast(null), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative bokeh / glow behind the form (parallax subtle) */}
      <div className="pointer-events-none absolute -left-10 -top-24 w-80 h-80 bg-accent/20 blur-3xl rounded-full mix-blend-screen" />
      <div className="pointer-events-none absolute right-[-4rem] top-24 w-96 h-96 bg-foreground/10 blur-3xl rounded-full mix-blend-screen" />

      {/* Floating toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12, x: 40 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -8, x: 20 }}
            transition={{ duration: 0.36 }}
            className={`fixed top-6 right-6 px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 z-50 backdrop-blur-sm border ${
              toast.type === "success"
                ? "bg-green-600/90 border-green-400/30 text-white"
                : "bg-red-600/90 border-red-400/30 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-white" />
            ) : (
              <XCircle className="w-5 h-5 text-white" />
            )}
            <p className="font-medium text-sm">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Tell me about it — I'll get back to you with a plan and a quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form + glow */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative bg-background/60 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                {/* Honeypot (hidden) */}
                <input aria-hidden="true" tabIndex={-1} name="company" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />

                {/* Floating label input - Name */}
                <div className="relative">
                  <input
                    name="user_name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`peer w-full py-3 px-4 rounded-lg bg-background/40 border ${errors.name ? "border-red-400" : "border-border"} focus:outline-none focus:ring-2 focus:ring-accent/30 transition`}
                    placeholder=" "
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    required
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
                    Your Name
                  </label>
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    name="user_email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`peer w-full py-3 px-4 rounded-lg bg-background/40 border ${errors.email ? "border-red-400" : "border-border"} focus:outline-none focus:ring-2 focus:ring-accent/30 transition`}
                    placeholder=" "
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    required
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
                    Your Email
                  </label>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="peer w-full py-3 px-4 rounded-lg bg-background/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
                    Subject (optional)
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`peer w-full py-3 px-4 rounded-lg bg-background/40 border ${errors.message ? "border-red-400" : "border-border"} focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none`}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="message" className="absolute left-4 top-2 text-sm text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all">
                    Your Message
                  </label>
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div>
                  <Button
                    type="submit"
                    disabled={!isFormReady(name, email, message, errors) || loading}
                    className="w-full flex items-center justify-center gap-3 py-4 text-lg bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {loading ? (
                      <>
                        <Spinner />
                        Sending...
                      </>
                    ) : (
                      "Send Message ✉️"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right column: contact items + social + map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            {/* Contact cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-base text-foreground font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
              <h4 className="font-medium mb-3">Follow My Journey</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a key={s.name} whileHover={{ scale: 1.03 }} transition={{ duration: 0.12 }} href={s.url} target="_blank" rel="noopener noreferrer" className={`px-3 py-2 rounded-md border border-accent/30 text-sm ${s.color}`}>
                    {s.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="rounded-lg overflow-hidden border border-border">
              <iframe
                title="studio-location"
                src={`https://www.google.com/maps?q=Jemo,+Addis+Ababa,+Ethiopia&output=embed`}
                className="w-full h-48 sm:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** --- helper components & functions --- **/

function Spinner() {
  return (
    <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  );
}

/** small utility to decide if form is ready for submit */
function isFormReady(name: string, email: string, message: string, errors: { [k: string]: string }) {
  return name.trim().length >= 2 && emailRegex.test(email) && message.trim().length >= 10 && Object.keys(errors).length === 0;
}
