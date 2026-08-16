import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProfileImage from "@/components/ProfileImage";

const capabilityGroups = [
  {
    category: "Finance & Risk",
    items: [
      "Financial Analysis",
      "Risk Modeling",
      "Strategy & Market Analysis",
      "Business Model Design",
      "GTM Strategy",
      "Product Strategy",
    ],
  },
  {
    category: "AI & LLM",
    items: [
      "LLM Agent Workflow Design",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agent Architecture",
      "Prompt Engineering",
      "AI Workflow Integration",
    ],
  },
  {
    category: "Data",
    items: ["Python", "pandas · NumPy", "SQL", "scikit-learn", "Data Pipeline"],
  },
  {
    category: "Technology",
    items: ["Next.js", "React", "FastAPI", "Streamlit", "Vercel"],
  },
];

const frameworks = [
  "Porter's Five Forces",
  "Business Model Canvas",
  "Customer Journey Map",
  "Jobs-To-Be-Done",
  "Value Chain Analysis",
  "Market Sizing (TAM/SAM/SOM)",
  "KPI Tree",
  "North Star Metric",
  "SWOT",
  "Ansoff Matrix",
];

const learning = [
  { item: "Knowledge Graph", status: "In Progress" },
  { item: "Graph RAG", status: "In Progress" },
  { item: "MCP Server / Client", status: "In Progress" },
  { item: "Agent Memory", status: "In Progress" },
  { item: "RAG Evaluation", status: "In Progress" },
];

const experiences = [
  {
    org: "EY 한영 (EY Hanyoung), Deal3 SAT M&A",
    role: "AI Product / Strategy Intern",
    period: "2026.07 —",
    desc: "Building internal AI Agents that automate recurring financial-advisory work — a DCF Model Agent, an EV/EBITDA Multiple Agent, a Report Footing Agent, and a DM Deck Agent — identified through direct workflow observation and teammate interviews.",
  },
  {
    org: "주식회사 인톡 (Intalk Inc.)",
    role: "AI Product / Strategy Intern",
    period: "2026.07",
    desc: "Automating AI-driven workflows, leading PoC planning for a new business initiative with Shinhan (신한), and driving early-stage market entry strategy for Vietnam and U.S. expansion.",
  },
  {
    org: "CREAI-IT AI 창업학회",
    role: "Member",
    period: "2026 —",
    desc: "Building AI-powered business applications and studying startup strategy in the AI ecosystem.",
  },
  {
    org: "안양 KGC 인삼공사 농구단",
    role: "CRM Marketer",
    period: "2022 — 2023",
    desc: "Designed fan engagement campaigns and analyzed audience data to improve retention and event attendance.",
  },
  {
    org: "열린문 수학학원",
    role: "Math Instructor",
    period: "2021 — 2022",
    desc: "Taught mathematics to elementary and high school students, developing structured problem-solving frameworks.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      {/* ── Header ── */}
      <div className="mb-16">
        <p className="eyebrow mb-4">About</p>
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-ink-100 flex-shrink-0 bg-ink-50">
            <ProfileImage size={96} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-ink mb-2">Taebeen Am</h1>
            <p className="text-ink-500 mb-1">엄태빈 · Yonsei University (신촌)</p>
            <p className="text-sm text-ink-400">Economics · Mathematics · 2020–2026</p>
          </div>
        </div>
      </div>

      {/* ── Bio ── */}
      <section className="mb-16">
        <p className="text-lg text-ink leading-relaxed mb-4">
          I use Economics and Mathematics to structure problems in the finance and risk domain —
          accounting, corporate finance, financial and insurance risk, real assets — and then
          design and ship AI applications that solve them, end to end: problem definition,
          user interviews, requirements, MVP, build, deploy, and iterate on feedback.
        </p>
        <p className="text-ink-500 leading-relaxed">
          My background in Economics and Mathematics gives me the analytical foundation to
          structure financial and risk problems rigorously. My work building LLM agent and
          RAG-based systems gives me the ability to actually ship the tool, not just recommend
          it. The case studies in this portfolio reflect that combination — domain problem
          first, AI as the thing I build and deploy.
        </p>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Skills by Capability ── */}
      <section id="skills" className="mb-16">
        <p className="eyebrow mb-3">Capabilities</p>
        <h2 className="text-2xl font-bold text-ink mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilityGroups.map((group) => (
            <div key={group.category}>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-400 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag-tech">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Consulting Toolkit ── */}
      <section className="mb-16">
        <p className="eyebrow mb-3">Toolkit</p>
        <h2 className="text-2xl font-bold text-ink mb-4">Frameworks I Use</h2>
        <p className="text-sm text-ink-500 mb-6">
          Business frameworks applied across case studies — used as thinking tools, not
          as templates.
        </p>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((fw) => (
            <span key={fw} className="framework-pill">
              {fw}
            </span>
          ))}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Experience ── */}
      <section className="mb-16">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="text-2xl font-bold text-ink mb-8">Background</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.org} className="flex flex-col sm:flex-row sm:items-start justify-between border-l-2 border-ink-100 pl-5 py-1 gap-2">
              <div>
                <p className="font-semibold text-ink">{exp.org}</p>
                <p className="text-sm text-navy font-medium mb-1">{exp.role}</p>
                {exp.desc && <p className="text-sm text-ink-500">{exp.desc}</p>}
              </div>
              <span className="text-xs text-ink-400 flex-shrink-0">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Education ── */}
      <section className="mb-16">
        <p className="eyebrow mb-3">Education</p>
        <h2 className="text-2xl font-bold text-ink mb-6">Academic Background</h2>
        <div className="border-l-2 border-ink-100 pl-5 py-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <p className="font-semibold text-ink">연세대학교 (신촌)</p>
              <p className="text-sm text-navy font-medium">경제학과 · 수학과 복수전공</p>
            </div>
            <span className="text-xs text-ink-400">2020 — 2026</span>
          </div>
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── What I'm Learning ── */}
      <section className="mb-16">
        <p className="eyebrow mb-3">Currently</p>
        <h2 className="text-2xl font-bold text-ink mb-6">What I&rsquo;m Learning</h2>
        <div className="space-y-0">
          {learning.map((item) => (
            <div key={item.item} className="flex items-center justify-between py-3.5 border-b border-ink-100 last:border-0">
              <p className="text-sm font-medium text-ink">{item.item}</p>
              <span
                className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 ${
                  item.status === "In Progress"
                    ? "bg-navy-50 text-navy border border-navy-100"
                    : "bg-ink-50 text-ink-500 border border-ink-200"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link href="/case-studies" className="btn-primary">
          View Case Studies <ArrowRight size={15} />
        </Link>
        <Link href="/how-i-think" className="btn-secondary">
          How I Think
        </Link>
        <Link href="/contact" className="btn-ghost">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
