import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    category: "Financial Technology · Valuation",
    title: "AI Valuation Agent — DCF & EV/EBITDA Automation",
    description:
      "Tool-calling LLM agent producing auditable DCF and EV/EBITDA valuations across US and Korean markets — deterministic math, LLM judgment, MCP server for reuse. Deployed live on Vercel.",
    tags: ["LLM Agent", "Valuation", "MCP"],
    href: "/case-studies/valuation-agent",
  },
  {
    number: "02",
    category: "Financial Technology · Quant",
    title: "AI-driven Quant Trading System",
    description:
      "Modular systematic trading pipeline with KIS Open API integration — signal generation, risk management, and live execution validated with a real brokerage order.",
    tags: ["Systematic Trading", "FinTech"],
    href: "/case-studies/quant-trading",
  },
  {
    number: "03",
    category: "AI Systems · LLM Architecture",
    title: "LLM Architecture Design for Financial AI",
    description:
      "Built a GPT-2 transformer from scratch to derive a framework for translating LLM architecture decisions into financial AI deployment trade-offs: cost, latency, compliance.",
    tags: ["LLM Architecture", "Financial AI"],
    href: "/case-studies/minigpt",
  },
  {
    number: "04",
    category: "AI Systems · Digital Transformation",
    title: "Insurance Digital Transformation Strategy",
    description:
      "AI-powered risk scoring platform enabling real-time underwriting intelligence for non-technical business users. Industry-academia partnership validating AI augmentation in traditional insurance operations.",
    tags: ["AI Strategy", "산학협력"],
    href: "/case-studies/insurance",
  },
  {
    number: "05",
    category: "Strategy · AI Growth OS",
    title: "AI Growth Operating System",
    description:
      "Comprehensive growth framework for an AI SaaS startup — Revenue Engine, Network Engine, and Global GTM design for 11× B2B and 20× B2C growth with a small team.",
    tags: ["Growth Strategy", "GTM"],
    href: "/case-studies/intalk",
  },
  {
    number: "06",
    category: "Strategy · PropTech",
    title: "PropTech Business Strategy",
    description:
      "AI-powered local intelligence platform solving information asymmetry in Korean real estate. Community insight + AI synthesis — giving first-time visitors the knowledge of a long-term resident.",
    tags: ["PropTech", "Platform"],
    href: "/case-studies/web-app",
  },
  {
    number: "07",
    category: "Strategy · Automotive",
    title: "Future Mobility Business Strategy",
    description:
      "KIA brand heritage × SDV transition value analysis — a B2B2C platform strategy for retaining legacy customers through the electrification imperative.",
    tags: ["B2B2C Strategy", "Automotive"],
    href: "/case-studies/auto",
  },
  {
    number: "08",
    category: "Product & SaaS · EdTech",
    title: "AI Education SaaS Strategy",
    description:
      "LLM ensemble-based automated TOEFL scoring. Ten specialized evaluators delivering instant calibrated feedback at 1/100th the cost of human graders — with a productization roadmap.",
    tags: ["EdTech", "LLM"],
    href: "/case-studies/toefl",
  },
];

const capabilities = [
  {
    label: "AI Agent & LLM Systems",
    desc: "LLM agent workflows, RAG, prompt engineering — Claude API, OpenAI API, LangChain, LlamaIndex",
  },
  {
    label: "Financial & Risk Analysis",
    desc: "Financial modeling, valuation, credit and insurance risk scoring on real domain data",
  },
  {
    label: "End-to-End Product Development",
    desc: "Problem definition, user interviews, MVP design, build, deploy, iterate on feedback",
  },
  {
    label: "Full-Stack Deployment",
    desc: "Python/FastAPI backends, Next.js/Streamlit frontends, shipped and operated on Vercel",
  },
];

const thinkingSteps = [
  "Problem",
  "Hypothesis",
  "Experiment",
  "Data",
  "Insight",
  "Impact",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-8 pt-28 pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-8">LLM Agent · RAG · Financial AI</p>
          <h1 className="display-xl mb-10">
            Understanding financial<br />
            workflows.<br />
            Building AI agents that<br />
            automate them, end to end.
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed max-w-2xl mb-12">
            Economics + Mathematics student at Yonsei University, building LLM agent
            and RAG-based AI applications for finance, insurance, and risk domains —
            problem definition, MVP, deployment, and iteration, end to end.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/case-studies" className="btn-primary">
              View Case Studies <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn-ghost">
              About me <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 section-rule" />

      {/* ── Stats strip ── */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Degree", value: "Economics · Mathematics" },
            { label: "Focus", value: "LLM Agents · RAG · Financial AI" },
            { label: "Case Studies", value: "8 Engagements" },
            { label: "University", value: "Yonsei (신촌)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-400 mb-1.5">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 section-rule" />

      {/* ── Case Studies list ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-3">Work</p>
            <h2 className="text-3xl font-bold text-ink">Case Studies</h2>
          </div>
          <Link href="/case-studies" className="btn-ghost text-sm">
            All engagements <ArrowRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-ink-100">
          {caseStudies.map((cs) => (
            <Link
              key={cs.number}
              href={cs.href}
              className="flex items-start gap-8 py-8 group hover:bg-white/60 px-3 -mx-3 transition-colors"
            >
              <span className="text-xs font-mono text-ink-300 mt-1 w-7 flex-shrink-0">
                {cs.number}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-400 mb-2">
                  {cs.category}
                </p>
                <h3 className="text-lg font-bold text-ink mb-1.5 group-hover:text-navy transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{cs.description}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 self-center">
                {cs.tags.map((tag) => (
                  <span key={tag} className="tag-category hidden sm:inline-block">
                    {tag}
                  </span>
                ))}
                <ArrowUpRight
                  size={16}
                  className="text-ink-300 group-hover:text-navy transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 section-rule" />

      {/* ── Capabilities ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <p className="eyebrow mb-3">Capabilities</p>
        <h2 className="text-3xl font-bold text-ink mb-12">What I bring to the table</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100">
          {capabilities.map((cap) => (
            <div key={cap.label} className="bg-paper p-8">
              <h3 className="text-sm font-bold text-ink mb-3">{cap.label}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 section-rule" />

      {/* ── How I Think teaser ── */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-md">
            <p className="eyebrow mb-3">Methodology</p>
            <h2 className="text-3xl font-bold text-ink mb-4">How I Think</h2>
            <p className="text-ink-500 leading-relaxed mb-6">
              Every engagement follows a structured problem-solving framework — from
              defining the hypothesis to measuring business impact. Technology is always
              the enabler, never the starting point.
            </p>
            <Link href="/how-i-think" className="btn-ghost">
              See my framework <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-0">
            {thinkingSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-2.5 border border-navy text-navy text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                  {step}
                </div>
                {i < thinkingSteps.length - 1 && (
                  <div className="w-5 h-px bg-navy flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
