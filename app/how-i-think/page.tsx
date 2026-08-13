import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "How I Think | Taebeen Am",
};

const steps = [
  {
    number: "01",
    label: "Problem",
    description:
      "Define the business problem precisely before generating solutions. A vague problem produces vague answers. I spend disproportionate time on problem definition — reframing, narrowing scope, identifying the real question behind the stated question.",
    example: "Not: 'How do we grow revenue?' But: 'Why are our highest-LTV customers churning in months 6–9, and what specifically triggers it?'",
  },
  {
    number: "02",
    label: "Hypothesis",
    description:
      "Form a directional answer before looking at data. Hypothesis-driven analysis is faster and less susceptible to confirmation bias than exploratory data dredging. Every hypothesis should be falsifiable — if the data can't prove it wrong, it isn't a hypothesis.",
    example: "'We believe customers churn in month 6–9 because onboarding friction prevents them from reaching the core value event within 30 days.'",
  },
  {
    number: "03",
    label: "Experiment",
    description:
      "Design the minimum viable test that validates or invalidates the hypothesis. Resist the temptation to build the full solution before validating the underlying assumption. Speed of learning matters more than perfection of execution at this stage.",
    example: "A/B test onboarding flow with streamlined path to core value event. Measure 30-day retention, not just conversion rate.",
  },
  {
    number: "04",
    label: "Data",
    description:
      "Collect and analyze only the data that speaks to the hypothesis. Avoid the trap of describing data; focus on what the data tells you about your hypothesis. Data without a question is noise. The question makes the data meaningful.",
    example: "30-day activation rate: 23% (control) vs. 41% (experiment). Month 6–9 retention: 34% vs. 61%. Hypothesis partially confirmed.",
  },
  {
    number: "05",
    label: "Insight",
    description:
      "Synthesize data into a non-obvious conclusion — something a smart person wouldn't have predicted without the analysis. An insight is not a finding. 'Sales declined 15%' is a finding. 'Sales declined 15% because our highest-margin segment churned, not our volume segment' is an insight.",
    example: "'Onboarding friction explains ~60% of the month 6–9 churn. The remaining 40% is product-market fit mismatch in the enterprise segment — a separate problem requiring a separate intervention.'",
  },
  {
    number: "06",
    label: "Business Impact",
    description:
      "Translate the insight into a specific business decision and quantified expected impact. Every analysis should end with: 'Therefore, we recommend X, which we expect to produce Y outcome by Z timeframe.' If you can't specify the impact, the analysis isn't complete.",
    example: "'Implement streamlined onboarding across all segments (2-week sprint). Expected: 8–12pp improvement in 6-month retention, translating to $2.4M additional ARR at current growth trajectory.'",
  },
];

export default function HowIThinkPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      {/* ── Header ── */}
      <div className="mb-16">
        <p className="eyebrow mb-4">Methodology</p>
        <h1 className="text-5xl font-bold tracking-tight text-ink mb-5">How I Think</h1>
        <p className="text-lg text-ink-500 leading-relaxed max-w-2xl">
          A structured problem-solving framework I apply to every engagement — from defining the
          hypothesis to measuring business impact. Technology is always the enabler, never the
          starting point.
        </p>
      </div>

      {/* ── Visual flow ── */}
      <div className="mb-16 p-8 border border-ink-100 bg-white">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-400 mb-6">
          The Framework
        </p>
        <div className="flex flex-wrap items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-mono text-ink-400 mb-1">{step.number}</span>
                <div className="px-4 py-2.5 border border-navy text-navy text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                  {step.label}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="w-6 h-px bg-navy-100 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section-rule mb-14" />

      {/* ── Steps detail ── */}
      <div className="space-y-16">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-8">
            <div className="flex-shrink-0 w-16">
              <p className="font-mono text-xs text-navy font-bold tracking-wider">{step.number}</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-ink mb-4">{step.label}</h2>
              <p className="text-[15px] text-ink-600 leading-loose mb-5">
                {step.description}
              </p>
              <div className="bg-ink-50 border-l-2 border-ink-200 px-5 py-4">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-400 mb-2">
                  Example
                </p>
                <p className="text-sm text-ink-600 leading-relaxed italic">{step.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-rule my-16" />

      {/* ── Principles ── */}
      <div className="mb-16">
        <p className="eyebrow mb-4">Principles</p>
        <h2 className="text-2xl font-bold text-ink mb-8">What I Believe About Problem-Solving</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-100">
          {[
            {
              principle: "Business first, technology second",
              body: "Technology is a means to a business end, not a goal in itself. I start with what outcome the business needs, then choose the appropriate tool.",
            },
            {
              principle: "Problem definition is half the solution",
              body: "Most failed projects fail because they solve the wrong problem. I invest disproportionately in understanding what question is actually being asked.",
            },
            {
              principle: "Insights, not data dumps",
              body: "Data without interpretation is noise. The job is to translate data into a non-obvious conclusion that changes what someone decides or does.",
            },
            {
              principle: "Speed of learning over perfection",
              body: "A fast, slightly wrong answer that gets corrected is better than a slow, perfect answer that arrives after the decision window closes.",
            },
          ].map((item) => (
            <div key={item.principle} className="bg-paper p-7">
              <p className="font-bold text-ink mb-2">{item.principle}</p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/case-studies" className="btn-primary">
          See the framework in action <ArrowRight size={15} />
        </Link>
        <Link href="/about" className="btn-secondary">
          About me
        </Link>
      </div>
    </div>
  );
}
