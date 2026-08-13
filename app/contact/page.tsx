"use client";

import { Mail, Github, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "atb1135@gmail.com",
    href: "mailto:atb1135@gmail.com",
    desc: "Collaboration, recruiting inquiries, or feedback — I respond promptly.",
    disabled: false,
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/tayam08",
    href: "https://github.com/tayam08",
    desc: "Source code and commit history for select projects.",
    disabled: true,
  },
  {
    icon: <ExternalLink size={20} />,
    label: "Notion",
    value: "notion / say-yes",
    href: "https://www.notion.so/say-yes/3a5ba1e3332b82c3969201ddf38474e3?source=copy_link",
    desc: "Project reports and research notes.",
    disabled: true,
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "전송에 실패했습니다.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-20">
      <p className="eyebrow mb-4">Contact</p>
      <h1 className="text-4xl font-bold text-ink mb-3">Get in touch</h1>
      <p className="text-ink-500 text-[15px] mb-14 leading-relaxed">
        Open to collaboration, recruiting conversations, and feedback on my work.
      </p>

      {/* Contact cards */}
      <div className="space-y-3 mb-16">
        {contacts.map((c) =>
          c.disabled ? (
            <div
              key={c.label}
              className="flex items-start gap-5 p-6 border border-ink-100 bg-white opacity-40 cursor-not-allowed select-none"
            >
              <span className="text-ink-400 mt-0.5 flex-shrink-0">{c.icon}</span>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-400">
                  {c.label}
                </span>
                <span className="text-sm font-semibold text-ink">{c.value}</span>
                <span className="text-xs text-ink-500">{c.desc}</span>
              </div>
            </div>
          ) : (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-start gap-5 p-6 border border-ink-100 bg-white group hover:border-navy transition-colors"
            >
              <span className="text-ink-400 group-hover:text-navy transition-colors mt-0.5 flex-shrink-0">
                {c.icon}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-400">
                  {c.label}
                </span>
                <span className="text-sm font-semibold text-ink group-hover:text-navy transition-colors">
                  {c.value}
                </span>
                <span className="text-xs text-ink-500">{c.desc}</span>
              </div>
            </a>
          )
        )}
      </div>

      <div className="section-rule mb-12" />

      {/* Message form */}
      <div>
        <h2 className="text-xl font-bold text-ink mb-6">Send a message</h2>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <CheckCircle size={44} className="text-green-500" />
            <p className="text-xl font-bold text-ink">Message sent.</p>
            <p className="text-sm text-ink-500">I&rsquo;ll get back to you shortly.</p>
            <button onClick={() => setStatus("idle")} className="mt-4 btn-secondary">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink-600" htmlFor="name">
                  Name <span className="text-navy">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="px-4 py-3 border border-ink-200 bg-white text-sm focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink-600" htmlFor="email">
                  Email <span className="text-navy">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="px-4 py-3 border border-ink-200 bg-white text-sm focus:outline-none focus:border-navy transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-ink-600" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="px-4 py-3 border border-ink-200 bg-white text-sm focus:outline-none focus:border-navy transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-ink-600" htmlFor="message">
                Message <span className="text-navy">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="px-4 py-3 border border-ink-200 bg-white text-sm focus:outline-none focus:border-navy transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 border border-red-200">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : <><Send size={15} /> Send Message</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
