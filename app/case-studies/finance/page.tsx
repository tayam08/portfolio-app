import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Credit Risk Intelligence Platform | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          Korean household debt stands at approximately 110% of GDP — one of the highest ratios
          among OECD nations. Yet credit health literacy remains low among individuals: most
          people have no accessible, instant mechanism to understand their financial risk position
          outside of formal banking interactions.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "Credit Bureau Gap",
              detail:
                "Traditional credit bureaus (NICE, KCB) serve lenders, not borrowers. Individuals receive a score but no actionable interpretation — no explanation of which factors drive risk, no improvement pathway.",
            },
            {
              trend: "Access Barrier",
              detail:
                "Formal credit diagnostics require banking relationships, formal applications, or paid bureau subscriptions — creating a 3–5 day wait with no actionable output for the individual.",
            },
            {
              trend: "AI Democratization Opportunity",
              detail:
                "Large language models make it economically viable to provide personalized financial advisory at near-zero marginal cost per user — a structural shift in financial services delivery that incumbent credit bureaus have not exploited.",
            },
          ].map((item) => (
            <div key={item.trend} className="cs-kv-row">
              <span className="cs-kv-label">{item.trend}</span>
              <p className="text-sm text-ink-500">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {[
            { label: "Korea Household Debt / GDP", value: "110%" },
            { label: "Credit Insight Turnaround", value: "3–5 days" },
            { label: "Individual Actionability", value: "None" },
          ].map((item) => (
            <div key={item.label} className="cs-impact-card">
              <p className="text-xl font-bold text-ink-400 mb-1">{item.value}</p>
              <p className="text-[10px] text-ink-400 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    number: "02",
    title: "Problem",
    content: (
      <div className="space-y-5">
        <p>
          Applying Jobs-To-Be-Done: the core user job is &ldquo;I want to know my financial
          health right now — without visiting a bank or waiting days — and understand what to
          do about it.&rdquo; Three specific failures prevent this:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Access Barrier",
              body: "Formal credit diagnostics require banking relationships, formal applications, or paid bureau subscriptions — creating a 3–5 day wait with no actionable output. The people most in need of credit intelligence (high-debt households) are least likely to proactively seek a credit bureau report.",
            },
            {
              title: "Interpretation Gap",
              body: "Even when a credit score is provided, individuals receive a number without context: no explanation of which factors drive risk, no prioritized improvement pathway. A score of 623 means nothing without benchmarks and action steps.",
            },
            {
              title: "Scenario Blindness",
              body: "No consumer-facing tool allows individuals to model how specific financial decisions (taking on debt, reducing spending, missing a payment) would impact their risk profile — forcing decisions without forward-looking consequence modeling.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-navy pl-5 py-2">
              <p className="font-semibold text-ink mb-1.5">{item.title}</p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "insight",
    number: "03",
    title: "Insight",
    content: (
      <div className="space-y-6">
        <p>
          The architectural insight that changed the design: LLMs excel at explanation and
          pattern synthesis, but they should never compute financial scores. A hybrid architecture
          — deterministic rule-based scoring + LLM advisory layer — is both technically superior
          and regulatorily defensible.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Separate Calculation from Explanation",
              insight:
                "Allowing LLM to compute and explain creates hallucination exposure. Rule-based engine calculates (deterministic, auditable, reproducible); LLM explains (personalized, natural language, context-aware). This separation is architecturally sound and regulatorily defensible.",
            },
            {
              principle: "Domain Knowledge Enables Better AI",
              insight:
                "Understanding financial ratios (DTI, expense ratio, credit score mechanics) allowed precise prompt construction. Generic prompts produce generic advice; domain-specific prompts produce actionable, credible guidance that users trust.",
            },
            {
              principle: "Scenario Modeling Changes Behavior",
              insight:
                "Forward-looking scenario modeling ('if you take on ₩10M in debt, your risk score shifts from 73 to 61') changes financial behavior more effectively than historical analysis. The user's job is not to understand the past — it is to decide about the future.",
            },
            {
              principle: "Input Validation is a Financial Safety Requirement",
              insight:
                "Financial applications have zero tolerance for edge-case failures. Strict Pydantic input validation is not optional — a financial tool that accepts invalid inputs and produces nonsensical scores destroys user trust permanently.",
            },
          ].map((item) => (
            <div key={item.principle} className="bg-white border border-ink-100 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
                {item.principle}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.insight}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "strategy",
    number: "04",
    title: "Strategy",
    content: (
      <div className="space-y-5">
        <div className="cs-hypothesis-box">
          <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-3">
            Primary Hypothesis
          </p>
          <p className="text-base text-ink leading-relaxed">
            &ldquo;If a deterministic rule-based risk engine computes a quantitative score
            across four financial dimensions and an LLM provides personalized interpretation and
            improvement recommendations, individuals can access institutional-grade credit
            intelligence in under 3 seconds — shifting the paradigm from score provision to
            actionable financial coaching.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Architecture Choice",
              decision: "Rule-based scoring (deterministic, auditable) + LLM advisory (personalized, natural language). LLM never computes; it only interprets and recommends.",
            },
            {
              layer: "Four Risk Dimensions",
              decision: "Debt ratio (40pts) + expense ratio (30pts) + credit score risk (20pts) + delinquency history (10pts). Weighted to reflect actuarial importance of each dimension.",
            },
            {
              layer: "Scenario Engine",
              decision: "5 pre-built scenarios (income shock, asset decline, spending cut, debt payoff, combined crisis) — forward-looking decision support rather than historical analysis.",
            },
          ].map((item) => (
            <div key={item.layer} className="cs-kv-row items-start">
              <span className="cs-kv-label">{item.layer}</span>
              <p className="text-sm text-ink-500">{item.decision}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "execution",
    number: "05",
    title: "Execution",
    content: (
      <div className="space-y-5">
        <p>
          Built a four-layer credit intelligence system: input validation → risk scoring →
          AI advisory → scenario modeling. Each layer serves a distinct function; no layer
          substitutes for another.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Input Validation",
              tech: "Pydantic v2",
              role: "Strict schema enforcement: income > 0, age 13–99, credit score 300–700. Bad inputs return 422 before any computation — eliminating edge-case risk in financial modeling.",
            },
            {
              layer: "Risk Engine",
              tech: "Python · FastAPI",
              role: "Deterministic rule-based scoring across four dimensions: debt ratio (40pts), expense ratio (30pts), credit score risk (20pts), delinquency history (10pts). Auditable, reproducible, explainable — no LLM in the computation path.",
            },
            {
              layer: "Advisory Layer",
              tech: "LLM · OpenRouter",
              role: "LLM receives the computed score and contextual factors, generates prioritized improvement recommendations tailored to age cohort and risk profile. Rule-based fallback if LLM unavailable — system degrades gracefully.",
            },
            {
              layer: "Scenario Engine",
              tech: "Python",
              role: "5 pre-built scenarios show how the risk score shifts under specific financial decisions — enabling forward-looking decision support rather than backward-looking diagnostic.",
            },
          ].map((item) => (
            <div key={item.layer} className="cs-kv-row items-start">
              <div className="w-36 flex-shrink-0">
                <p className="text-xs font-bold text-ink uppercase tracking-wider">{item.layer}</p>
                <p className="text-[11px] text-navy mt-1">{item.tech}</p>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{item.role}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Stack: Python · FastAPI · Pydantic v2 · OpenRouter · Vercel
        </p>
      </div>
    ),
  },
  {
    id: "business-impact",
    number: "06",
    title: "Business Impact",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { before: "3–5 days", after: "< 3 seconds", metric: "Time to Credit Insight" },
            { before: "Score only", after: "Score + Action", metric: "Output Quality" },
            { before: "No modeling", after: "5 scenarios", metric: "Decision Support" },
          ].map((item) => (
            <div key={item.metric} className="cs-impact-card">
              <p className="text-[10px] text-ink-400 uppercase tracking-wider mb-3">
                {item.metric}
              </p>
              <p className="text-xs text-ink-400 mb-1 line-through">{item.before}</p>
              <p className="text-xl font-bold text-navy">{item.after}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0">
          {[
            {
              dimension: "Validation Quality",
              impact:
                "Pydantic v2 eliminated all invalid input errors. Pytest suite (5 unit tests) confirmed correct score responses to debt increase, expense increase, credit score decrease, and delinquency — validating model reliability before deployment.",
            },
            {
              dimension: "Live Deployment",
              impact:
                "Platform deployed and accessible at finance-risk-app.vercel.app — a live demonstration of the complete rule-based + LLM advisory architecture in production.",
            },
            {
              dimension: "B2B Pathway",
              impact:
                "White-label API for Korean fintech apps and credit unions — embedding credit intelligence into existing financial product flows at enterprise pricing, requiring no direct consumer acquisition.",
            },
          ].map((item) => (
            <div key={item.dimension} className="cs-kv-row">
              <span className="cs-kv-label">{item.dimension}</span>
              <p className="text-sm text-ink-500">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "reflection",
    number: "07",
    title: "Reflection",
    content: (
      <div className="space-y-0">
        {[
          {
            title: "Separate calculation from explanation — always",
            body: "The rule is transferable beyond this project: in any domain where accuracy is safety-critical (finance, medicine, legal), LLMs should explain and recommend, not compute. Deterministic engines compute; LLMs synthesize and communicate. This boundary makes systems both safer and more auditable.",
          },
          {
            title: "Domain knowledge changes AI output quality",
            body: "Understanding financial ratios (DTI, expense ratio, credit score mechanics at an actuarial level) enabled precise, domain-specific prompt construction. Generic prompts produce generic advice; domain knowledge produces advice that users actually trust and act on.",
          },
          {
            title: "Edge cases are business-critical in financial applications",
            body: "Financial applications have zero tolerance for edge-case failures. A tool that occasionally produces nonsensical outputs in unusual scenarios destroys user trust across all scenarios — not just the edge cases. Pydantic validation and systematic testing are non-negotiable, not gold-plating.",
          },
          {
            title: "Real data is the next frontier",
            body: "The current system uses synthetic age-cohort benchmarks. Replacing these with real FSS/NICE statistical data would dramatically increase diagnostic validity. The architecture is sound; the constraint is data access — a business development problem, not a technical one.",
          },
        ].map((item) => (
          <div key={item.title} className="py-5 border-b border-ink-100 last:border-0">
            <p className="font-semibold text-ink mb-2">{item.title}</p>
            <p className="text-sm text-ink-500 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FinanceCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Finance · Credit Intelligence",
        industry: "FinTech · AI Agent · Personal Finance",
        title: "Credit Risk Intelligence Platform",
        subtitle:
          "Real-time personal credit risk diagnosis with AI advisory — democratizing institutional-grade financial analysis in under 3 seconds",
        tags: ["FinTech", "AI Agent", "Python", "FastAPI", "Pydantic", "LLM", "Vercel"],
        githubDisabled: true,
        demo: "https://finance-risk-app.vercel.app",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
