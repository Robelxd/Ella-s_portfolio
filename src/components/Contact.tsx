"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: "Ellaeshetu21@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251 936706856" },
  { icon: MapPin, label: "Location", value: "Jemo, AA" },
];

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/Ellaeshetu21", color: "hover:bg-pink-500/20" },
  { name: "Telegram", url: "https://t.me/Ela212", color: "hover:bg-blue-400/20" },
  { name: "LinkedIn", url: "https://linkedin.com", color: "hover:bg-blue-500/20" },
  { name: "TikTok", url: "https://www.tiktok.com/@Ellapicture0", color: "hover:bg-gray-500/20" },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_l3un4xr", // <-- replace with your EmailJS service ID
        "template_vwoc55q", // <-- replace with your EmailJS template ID
        form.current,
        "LsY5pQMBXooTi9Bo2" // <-- replace with your EmailJS public key
      )
      .then(
        () => {
          setToast({ type: "success", message: "Message sent successfully! 🎉" });
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setToast(null), 4000);
        },
        (error) => {
          setToast({ type: "error", message: "Failed to send message. Please try again." });
          setLoading(false);
          console.error("Email failed:", error.text);
          setTimeout(() => setToast(null), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-card to-background relative">
      {/* ✅ Floating Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 60, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 60, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 right-6 px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 z-50 backdrop-blur-sm border ${
              toast.type === "success"
                ? "bg-green-600/90 border-green-400/40 text-white"
                : "bg-red-600/90 border-red-400/40 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-white" />
            ) : (
              <XCircle className="w-5 h-5 text-white" />
            )}
            <p className="font-medium">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's bring your
            vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-background/50 border-border focus:border-accent transition-colors"
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-background/50 border-border focus:border-accent transition-colors"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-background/50 border-border focus:border-accent transition-colors"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="bg-background/50 border-border focus:border-accent transition-colors resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg shadow-lg"
              >
                {loading ? "Sending..." : "Send Message ✉️"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info + Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-lg text-foreground font-medium">{info.value}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Follow My Journey</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 border border-accent/30 rounded-md text-sm text-foreground transition-all duration-300 ${social.color}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
