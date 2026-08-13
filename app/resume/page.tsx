import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Experience | Taebeen Am",
};

const experiences = [
  {
    period: "2026.07 —",
    role: "AI Engineer",
    org: "주식회사 인톡 (Intalk Inc.)",
    outcomes: [
      "Automated AI-driven workflows to streamline core product operations and scale team output",
      "Led PoC planning for a new business initiative with Shinhan (신한), translating institutional requirements into a productizable AI solution",
      "Drove early-stage market entry strategy for Vietnam and U.S. expansion",
    ],
  },
  {
    period: "2026 —",
    role: "Member",
    org: "CREAI-IT AI 창업학회",
    outcomes: [
      "Building AI-powered business applications at the intersection of strategy and technology",
      "Studying AI startup ecosystem, go-to-market strategies, and business model design",
    ],
  },
  {
    period: "2022 — 2023",
    role: "CRM Marketer",
    org: "안양 KGC 인삼공사 농구단",
    outcomes: [
      "Designed fan engagement campaigns targeting high-LTV segments — improving repeat attendance through data-driven segmentation",
      "Analyzed audience behavioral data to identify churn signals and implement proactive retention outreach",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Math Instructor",
    org: "열린문 수학학원",
    outcomes: [
      "Developed structured problem-solving frameworks that reduced student error rates in complex multi-step problems",
      "Adapted teaching approach by continuously diagnosing individual student mental models — a practice that informs how I now approach business problem diagnosis",
    ],
  },
];

const education = [
  {
    period: "2020 — 2026",
    degree: "Economics · Mathematics (Double Major)",
    school: "Yonsei University (연세대학교, 신촌)",
    highlights: [
      "Quantitative coursework: Statistics, Econometrics, Mathematical Analysis, Financial Economics",
      "Domain foundation for financial modeling, risk analysis, and data-driven decision frameworks",
    ],
  },
];

const languages = [
  { name: "OPIc (영어)", grade: "IH", note: "AL target in progress" },
];

type SkillLevel = "Basic" | "Proficient" | "Advanced";
const levelOrder: SkillLevel[] = ["Basic", "Proficient", "Advanced"];

const skills: { label: string; level: SkillLevel; context: string }[] = [
  { label: "Python", level: "Advanced", context: "FastAPI · pandas · numpy · scikit-learn" },
  { label: "Data Analysis", level: "Advanced", context: "EDA · risk modeling · statistical testing" },
  { label: "Next.js / React", level: "Proficient", context: "Full-stack web application development" },
  { label: "LLM / AI Agents", level: "Proficient", context: "Claude API · OpenAI · prompt engineering · LangChain" },
  { label: "Financial Modeling", level: "Proficient", context: "DCF · credit risk · scenario analysis" },
  { label: "SQL", level: "Basic", context: "Data extraction · analysis queries" },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-20">
      <div className="mb-14">
        <p className="eyebrow mb-4">Experience</p>
        <h1 className="text-4xl font-bold text-ink mb-2">Taebeen Am</h1>
        <p className="text-ink-500">Economics · Mathematics · Business Strategy & AI</p>
      </div>

      <div className="flex gap-4 mb-14">
        <a href="mailto:atb1135@gmail.com" className="btn-primary">
          atb1135@gmail.com
        </a>
        <Link href="/case-studies" className="btn-secondary">
          Case Studies <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="section-rule mb-14" />

      {/* ── Experience ── */}
      <section className="mb-14">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="text-xl font-bold text-ink mb-8">Work & Activities</h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-2 border-ink-100 pl-6 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="font-bold text-ink">{exp.role}</h3>
                <span className="text-xs text-ink-400 mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-sm font-semibold text-navy mb-3">{exp.org}</p>
              <ul className="space-y-1.5">
                {exp.outcomes.map((outcome, j) => (
                  <li key={j} className="text-sm text-ink-500 flex gap-2">
                    <span className="text-ink-300 flex-shrink-0">·</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Education ── */}
      <section className="mb-14">
        <p className="eyebrow mb-3">Education</p>
        <h2 className="text-xl font-bold text-ink mb-8">Academic Background</h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="border-l-2 border-ink-100 pl-6 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="font-bold text-ink">{edu.degree}</h3>
                <span className="text-xs text-ink-400 mt-1 sm:mt-0">{edu.period}</span>
              </div>
              <p className="text-sm font-semibold text-navy mb-3">{edu.school}</p>
              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-ink-500 flex gap-2">
                    <span className="text-ink-300 flex-shrink-0">·</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Skills ── */}
      <section className="mb-14">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="text-xl font-bold text-ink mb-8">Technical Proficiency</h2>
        <div className="space-y-5">
          {skills.map((skill) => {
            const filled = levelOrder.indexOf(skill.level) + 1;
            return (
              <div key={skill.label}>
                <div className="flex items-center gap-4 mb-1.5">
                  <span className="text-sm font-semibold text-ink w-44 flex-shrink-0">
                    {skill.label}
                  </span>
                  <div className="flex gap-1.5">
                    {levelOrder.map((_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-1.5 rounded-none transition-colors ${
                          i < filled ? "bg-navy" : "bg-ink-100"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-ink-400">{skill.level}</span>
                </div>
                <p className="text-xs text-ink-400" style={{ paddingLeft: "11.25rem" }}>
                  {skill.context}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-rule mb-14" />

      {/* ── Language ── */}
      <section className="mb-14">
        <p className="eyebrow mb-3">Language</p>
        <h2 className="text-xl font-bold text-ink mb-6">English Proficiency</h2>
        <div className="space-y-0">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4 border-b border-ink-100 last:border-0"
            >
              <div>
                <p className="text-sm font-semibold text-ink">{lang.name}</p>
                <p className="text-xs text-ink-400 mt-0.5">{lang.note}</p>
              </div>
              <span className="text-sm font-bold text-navy">{lang.grade}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
