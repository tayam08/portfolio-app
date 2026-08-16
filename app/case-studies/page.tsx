"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "AI Systems", "Strategy", "Financial Technology", "Product & SaaS"] as const;
type Category = (typeof categories)[number];

const caseStudies = [
  {
    number: "01",
    category: "Financial Technology" as Category,
    tag: "Flagship",
    title: "AI Valuation Agent — DCF & EV/EBITDA Automation",
    description:
      "Tool-calling LLM agent producing auditable DCF and EV/EBITDA valuations across US and Korean markets — deterministic math, LLM judgment, and an MCP server for reuse beyond this one project. Deployed live on Vercel with Postgres-backed run history.",
    tags: ["LLM Agent", "Valuation", "MCP", "Financial AI"],
    href: "/case-studies/valuation-agent",
  },
  {
    number: "02",
    category: "Financial Technology" as Category,
    tag: null,
    title: "AI-driven Quant Trading System",
    description:
      "Modular systematic trading pipeline with KIS Open API integration. Signal generation, risk management, and live execution — validated with a real order executed against Korea Investment & Securities.",
    tags: ["Systematic Trading", "KIS API", "Risk Management"],
    href: "/case-studies/quant-trading",
  },
  {
    number: "03",
    category: "AI Systems" as Category,
    tag: null,
    title: "LLM Architecture Design for Financial AI",
    description:
      "Built a GPT-2 style transformer from scratch to derive a business decision framework — translating architecture parameters (context window, model depth, tokenization) into financial AI deployment trade-offs.",
    tags: ["LLM Architecture", "Financial AI", "PyTorch"],
    href: "/case-studies/minigpt",
  },
  {
    number: "04",
    category: "AI Systems" as Category,
    tag: null,
    title: "Insurance Digital Transformation Strategy",
    description:
      "AI-powered risk scoring platform enabling real-time underwriting intelligence. Industry-academia partnership (산학협력) validating AI augmentation in traditional insurance operations — 8+ risk dimensions, real-time analysis.",
    tags: ["AI Strategy", "InsurTech", "산학협력"],
    href: "/case-studies/insurance",
  },
  {
    number: "05",
    category: "Strategy" as Category,
    tag: "Featured",
    title: "AI Growth Operating System",
    description:
      "Comprehensive growth framework for 인톡 — designing Revenue Engine, Network Engine, and Global GTM to achieve 11× B2B and 20× B2C growth with an 11-person team using compounding AI leverage.",
    tags: ["Growth Strategy", "GTM", "AI SaaS"],
    href: "/case-studies/intalk",
  },
  {
    number: "06",
    category: "Strategy" as Category,
    tag: null,
    title: "PropTech Business Strategy",
    description:
      "AI-powered local intelligence platform solving information asymmetry in Korean real estate. Combining community-sourced insight with AI synthesis — giving first-time visitors the knowledge of a long-term resident.",
    tags: ["PropTech", "Platform Strategy", "AI"],
    href: "/case-studies/web-app",
  },
  {
    number: "07",
    category: "Strategy" as Category,
    tag: null,
    title: "Future Mobility Business Strategy",
    description:
      "KIA brand heritage × SDV transition value analysis — a B2B2C platform strategy for retaining 80-year legacy customers through the electrification imperative.",
    tags: ["B2B2C", "Automotive", "Brand Strategy"],
    href: "/case-studies/auto",
  },
  {
    number: "08",
    category: "Product & SaaS" as Category,
    tag: "In Progress",
    title: "AI Education SaaS Strategy",
    description:
      "LLM ensemble-based automated TOEFL scoring. Ten specialized evaluators running in parallel — instant calibrated feedback at 1/100th the cost of human graders, with a B2C→B2B GTM roadmap.",
    tags: ["EdTech", "LLM Ensemble", "SaaS Strategy"],
    href: "/case-studies/toefl",
  },
];

const frameworks = [
  "Porter's Five Forces",
  "Business Model Canvas",
  "Customer Journey",
  "JTBD",
  "Value Chain",
  "Market Sizing (TAM/SAM/SOM)",
  "Growth Loop",
  "GTM Flywheel",
  "KPI Tree",
  "North Star Metric",
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? caseStudies : caseStudies.filter((cs) => cs.category === active);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow mb-4">Work</p>
        <h1 className="text-5xl font-bold tracking-tight text-ink mb-5">Case Studies</h1>
        <p className="text-lg text-ink-500 leading-relaxed">
          Eight engagements across Financial Technology, AI Systems, and Strategy — each
          structured as a case with business context, quantitative analysis, and a deployed
          or deployable outcome. The pattern: understand the workflow, model the numbers,
          then ship the tool.
        </p>
      </div>

      <div className="section-rule mb-14" />

      {/* Frameworks used */}
      <div className="mb-14">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-400 mb-4">
          Frameworks Applied Across Engagements
        </p>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((fw) => (
            <span key={fw} className="framework-pill">
              {fw}
            </span>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase border transition-colors ${
              active === cat
                ? "bg-navy text-white border-navy"
                : "border-ink-200 text-ink-500 hover:border-navy hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="section-rule mb-0" />

      {/* Case study list */}
      <div className="divide-y divide-ink-100">
        {filtered.map((cs) => (
          <Link
            key={cs.number}
            href={cs.href}
            className="flex items-start gap-8 py-10 group hover:bg-white/60 px-3 -mx-3 transition-colors"
          >
            <span className="text-xs font-mono text-ink-300 mt-1 w-7 flex-shrink-0">
              {cs.number}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink-400">
                  {cs.category}
                </p>
                {cs.tag && <span className="tag-category">{cs.tag}</span>}
              </div>
              <h2 className="text-xl font-bold text-ink mb-2.5 group-hover:text-navy transition-colors">
                {cs.title}
              </h2>
              <p className="text-sm text-ink-500 leading-relaxed max-w-2xl">
                {cs.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {cs.tags.map((tag) => (
                  <span key={tag} className="tag-tech">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 self-center">
              <ArrowUpRight
                size={18}
                className="text-ink-300 group-hover:text-navy transition-colors"
              />
            </div>
          </Link>
        ))}
      </div>

      {active !== "All" && filtered.length === 0 && (
        <p className="text-sm text-ink-400 py-12 text-center">No case studies in this category yet.</p>
      )}
    </div>
  );
}
