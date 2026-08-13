import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";
import { FileText } from "lucide-react";

export const metadata = {
  title: "AI Growth Operating System | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          인톡 (Intalk) is an AI Sales Operating System targeting Korea&rsquo;s insurance and
          high-trust B2B sales industries. By mid-2026: 11-person team, 80 B2B GA clients,
          1,200 B2C partners, 19 patents including ZKP certification, and a confirmed 신한금융
          Vietnam PoC. Strong product. A growth bottleneck.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Team Size", value: "11" },
            { label: "GA Clients (B2B)", value: "80" },
            { label: "Partners (B2C)", value: "1,200" },
            { label: "Patents / IP", value: "19" },
          ].map((item) => (
            <div key={item.label} className="cs-impact-card">
              <p className="text-2xl font-bold text-navy mb-1">{item.value}</p>
              <p className="text-[10px] text-ink-400 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0 mt-2">
          {[
            {
              label: "B2B Product",
              detail:
                "인톡 케어: 3-Tier SaaS (Scouter ₩50K / 영업지원 ₩250K / Enterprise ₩300K+). 5,000 concurrent AI inferences/hour. 32 insurers × 105 sales scenarios. Proven monetization in a sector that rarely generates revenue.",
            },
            {
              label: "B2C Network",
              detail:
                "인톡 파트너스: 3-Class structure (1st / Business / Economy). Active partner monthly revenue: ₩630K avg. Insurance certification pass rate: 92%. ZKP patent for income verification — an unreplicable moat.",
            },
            {
              label: "Global Signal",
              detail:
                "Selected among 3 Korean companies from 248 applicants for 신한금융그룹 Vietnam OpenInnovation PoC. Global pharmaceutical MR AI product experience. Vietnam life insurance market: $6.99B, CAGR 6.3%.",
            },
          ].map((item) => (
            <div key={item.label} className="cs-kv-row">
              <span className="cs-kv-label">{item.label}</span>
              <p className="text-sm text-ink-500">{item.detail}</p>
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
          인톡&rsquo;s constraint is not product quality — it is distribution architecture.
          With 11 people, scaling from 80 → 900 B2B clients (11×) and 1,200 → 24,000 B2C
          partners (20×) simultaneously requires a growth system that compounds, not a team
          that scales linearly.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Revenue Engine: B2B Scaling Constraint",
              body: "80 GA clients represent strong validation, but reaching the 1,500–2,000 GA TAM requires an outbound motion that an 11-person team cannot execute manually. The current sales process has no documented playbook for converting the next 820 clients.",
            },
            {
              title: "Network Engine: Partner Activation Gap",
              body: "1,200 partners accumulated — but activation rate and churn are the unknown variables. 'Active partner monthly revenue ₩630K' is promising, but LTV/CAC of 25–30× (vs. B2B SaaS benchmark of 3–5×) requires a structural model, not viral luck.",
            },
            {
              title: "Marketing Constraint: Identity Misread",
              body: "'보험 팔려는 거 아니냐?' — the single biggest GTM barrier. Trust-first positioning in a high-skepticism industry (insurance) requires content and community architecture, not traditional demand generation. OMTM: organic 180 new registrations/week.",
            },
            {
              title: "Global Expansion: No Local Team",
              body: "Vietnam PoC confirmed with 신한금융 — but with no local entity. 12-month ARR 10억+ target requires a partner-first expansion model where the PoC reference converts to replicable B2B revenue without headcount addition.",
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
          인톡&rsquo;s structural advantage is not its AI technology — it is its
          <em> network architecture</em>. The 3-Class partner structure, ZKP income verification
          patent, and 신한금융 reference create a compounding system that competitors cannot
          replicate by hiring or spending.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              insight: "3-Class is a Growth Loop",
              detail:
                "Economy Class (ZKP community) → converts to Business Class (revenue center) → selects 1st Class (brand ambassadors). Each tier recruits the next. Designed correctly, k-factor > 1.0 makes the network self-sustaining.",
            },
            {
              insight: "ZKP Patent = Unreplicable Moat",
              detail:
                "Zero-Knowledge Proof income verification is a regulatory-grade trust mechanism that insurance agents accept because it protects their privacy while still qualifying them. No competitor can replicate this without the same patent and sandbox approval.",
            },
            {
              insight: "신한금융 PoC = Conversion Flywheel",
              detail:
                "A single validated enterprise PoC in a trust-based industry functions as a reference that converts the next 10 enterprise clients. The 248-team competition result is not a credential — it is a sales asset.",
            },
            {
              insight: "AI on the Loop = Compounding Efficiency",
              detail:
                "Recursive AI integration across every workflow context means that operational cost per task decreases as the system matures. An 11-person team can outperform a 50-person team if each task is systematically AI-augmented.",
            },
          ].map((item) => (
            <div key={item.insight} className="bg-white border border-ink-100 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
                {item.insight}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-500 bg-ink-50 p-4 border-l-2 border-ink-200">
          <strong className="text-ink">Strategic Conclusion:</strong> 인톡&rsquo;s growth
          constraint is not technology or product — it is the absence of a documented,
          systematic growth operating system that compounds without proportional headcount.
          The assets exist; the flywheel architecture does not yet.
        </p>
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
            &ldquo;If 인톡&rsquo;s three growth engines — Revenue (B2B SaaS), Network (B2C
            Partner), and Global (Vietnam) — are designed as compounding flywheels with
            explicit KPI gates and AI-augmented execution, an 11-person team can achieve
            11× B2B growth and 20× B2C growth within 18 months without proportional
            headcount increase.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              engine: "Revenue Engine",
              approach:
                "Bottom-up ABM using 80 existing GA reference clients. Each satisfied client generates 3–5 warm referrals. Systematized case studies + ROI calculator reduce sales cycle from weeks to days.",
            },
            {
              engine: "Network Engine",
              approach:
                "3-Class viral architecture with explicit upgrade incentives: Economy → Business → 1st Class. k-factor > 1.0 design: each Business Class partner recruits 1.2 Economy Class on average.",
            },
            {
              engine: "Global GTM",
              approach:
                "신한금융 PoC → Reference → Scale. Target: 3 enterprise anchor clients in Vietnam within 12 months using PoC as conversion asset. Local partner (not local entity) model reduces operational complexity.",
            },
            {
              engine: "AI Operational OS",
              approach:
                "'AI on the Loop': decompose every workflow into smallest context units, introduce AI at each unit, measure time-to-decision reduction. PO daily learning routines compound operational knowledge.",
            },
          ].map((item) => (
            <div key={item.engine} className="cs-kv-row items-start">
              <span className="cs-kv-label">{item.engine}</span>
              <p className="text-sm text-ink-500">{item.approach}</p>
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
          Designed a comprehensive 7-mission growth framework for 인톡&rsquo;s 20X Founder
          Challenge — addressing each growth bottleneck with hypothesis-driven experiments
          and explicit success criteria.
        </p>
        <div className="space-y-0">
          {[
            {
              mission: "Mission 1 · Revenue Engine",
              design:
                "B2B GTM from 80 → 900 GA: ABM playbook using 80 reference clients as conversion assets. 3-Tier pricing optimization — ARPU increase path without churn. Sales automation for an 11-person team.",
            },
            {
              mission: "Mission 2 · Network Engine",
              design:
                "3-Class scaling (1,200 → 24,000 partners): Viral loop design with k-factor > 1.0 target. LTV/CAC 25–30× via ZKP community acquisition. Fandom-based 1st Class ambassador recruitment.",
            },
            {
              mission: "Mission 3 · Global Expansion",
              design:
                "Vietnam market entry without local entity: Partner-first model using 신한금융 reference. 12-month ARR 10억+ roadmap. Target: 3 enterprise anchors. Pharma MR domain expansion hypothesis.",
            },
            {
              mission: "Mission 4 · AI Operational OS",
              design:
                "'AI on the Loop' framework: decompose every workflow → AI at each context unit → recursive efficiency compounding. DS (Daily Standup) redesigned as hypothesis-setting and experiment-review sessions.",
            },
            {
              mission: "Mission 5 · Zero-Budget Marketing",
              design:
                "Organic 180 registrations/week OMTM: Trust-first content strategy addressing 'insurance company' perception gap. Channel portfolio: community, content, referral — no paid acquisition dependency.",
            },
          ].map((item) => (
            <div key={item.mission} className="border-l-2 border-ink-200 pl-5 py-3">
              <p className="text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                {item.mission}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.design}</p>
            </div>
          ))}
        </div>
        <div className="bg-ink-50 border border-ink-100 p-5 mt-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-3">
            30 / 90 / 180 / 365 Roadmap
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { horizon: "30 Days", milestone: "ABM playbook v1 + 10 warm referrals activated" },
              { horizon: "90 Days", milestone: "k-factor > 1.0 validated in Economy → Business Class" },
              { horizon: "180 Days", milestone: "Vietnam: 1st enterprise anchor signed" },
              { horizon: "365 Days", milestone: "ARR 10억+ (Vietnam) + 200 GA clients (domestic)" },
            ].map((item) => (
              <div key={item.horizon} className="bg-white border border-ink-100 p-3">
                <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-1">
                  {item.horizon}
                </p>
                <p className="text-xs text-ink-500 leading-relaxed">{item.milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "business-impact",
    number: "06",
    title: "Recommended Impact Model (Challenge Submission)",
    content: (
      <div className="space-y-6">
        <div className="bg-ink-50 border border-ink-200 p-3 text-xs text-ink-400">
          <strong className="text-ink">Context:</strong> The metrics below are the recommended
          targets submitted as part of 인톡&rsquo;s 20X Founder Challenge — a structured growth
          strategy exercise. They are forward projections derived from the framework, not
          implemented or tracked results.
        </div>
        <p>
          Framework designed to produce compounding rather than linear growth — each engine
          reinforces the others. KPI gates prevent resource allocation to stalled experiments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              metric: "LTV / CAC",
              current: "TBD (early stage)",
              target: "25–30× (vs. SaaS benchmark 3–5×)",
              driver: "ZKP community acquisition near-zero CAC; high LTV from B2B contract length",
            },
            {
              metric: "B2B Clients",
              current: "80 GA companies",
              target: "900 (TAM: 1,500–2,000 GAs)",
              driver: "ABM referral engine: each existing client converts 3–5 warm prospects",
            },
            {
              metric: "B2C Partners",
              current: "1,200 partners",
              target: "24,000+ (k-factor > 1.0)",
              driver: "3-Class viral structure + ZKP credential moat",
            },
            {
              metric: "Global ARR",
              current: "0 (PoC stage)",
              target: "10억+ in 12 months (Vietnam)",
              driver: "신한금융 reference → 3 enterprise anchors → partner-led scaling",
            },
          ].map((item) => (
            <div key={item.metric} className="cs-impact-card">
              <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2">
                {item.metric}
              </p>
              <p className="text-xs text-ink-400 line-through mb-0.5">{item.current}</p>
              <p className="text-base font-bold text-ink mb-2">{item.target}</p>
              <p className="text-[11px] text-ink-400 leading-relaxed">{item.driver}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0">
          {[
            {
              dimension: "Experiment Velocity",
              impact: "OMTM-driven DS meeting redesign: every daily standup produces one new validated hypothesis, replacing status updates with experiment reviews.",
            },
            {
              dimension: "Operational Leverage",
              impact: "AI on the Loop targets 80% reduction in human review for AI-generated outputs. 11-person team operating at effective 50-person output within 12 months.",
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
            title: "Distribution architecture is harder than product architecture",
            body: "인톡's product is genuinely good — 5,000 concurrent inferences, 32 insurers, 105 scenarios, ZKP patent. The constraint is not technology. In B2B SaaS, the distribution flywheel (how clients find you, trust you, and refer you) is harder to design and more valuable when working than the product itself.",
          },
          {
            title: "Trust-first GTM is not slower — it is asymmetrically faster",
            body: "In regulated industries (insurance, finance, pharma), paid acquisition generates suspicious leads. Community-driven trust acquisition (ZKP certification, content, referrals) generates high-intent prospects who self-qualify. The '180 organic registrations/week' OMTM reflects this: organic growth in trust-based markets compounds; paid growth does not.",
          },
          {
            title: "PO culture is an operational architecture, not a management philosophy",
            body: "'AI on the Loop' and the hypothesis-driven DS meeting redesign are not cultural aspirations — they are operational systems. Each produces a specific output: a compounding efficiency curve and an experiment velocity metric. Culture that doesn't produce measurable outputs is decoration.",
          },
          {
            title: "The 20X framework applies beyond 인톡",
            body: "Growth Loop × Customer Journey × ICP Tier × GTM Flywheel is a reusable framework for any AI SaaS company in a regulated industry with a network component. The specific insights (k-factor design, ZKP moat, PoC-to-reference conversion) are transferable to insurance, finance, healthcare, and enterprise B2B broadly.",
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
  {
    id: "documents",
    number: "08",
    title: "Supporting Documents",
    content: (
      <div className="space-y-5">
        <p>
          Follow-on work produced after the 20X Founder Challenge submission — a competitor
          analysis and insurance-specific feature expansion for the Digital Branch product, a
          landing page for the PoC concept, and the full KT K-PATH 2026 business plan.
        </p>
        <div className="space-y-0">
          {[
            {
              title: "AI Digital Branch — PoC Landing Page",
              detail:
                "Product concept site for a branch-manager dashboard that manages new insurance agents' onboarding and retention — reframing 인톡 from a 'roleplay training tool' to a 'branch operating system.'",
              href: "/docs/intalk/ai-digital-branch.html",
            },
            {
              title: "신한라이프 PoC — Competitor Analysis & Expansion Strategy",
              detail:
                "Analysis of 쏘카인드 and Tinktalk positioning, market structure, and a roadmap of insurance-specific features to extend AI Sales Operation from PoC to a defensible AI Digital Branch category.",
              href: "/docs/intalk/shinhanlife-poc-strategy.html",
            },
            {
              title: "KT K-PATH 2026 사업계획서 v7.0",
              detail:
                "Full business plan submitted for KT's K-PATH program: compliance-as-data positioning for insurance sales recruitment and retention, product architecture, and growth roadmap.",
              href: "/docs/intalk/kt-kpath-business-plan-v7.html",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-kv-row items-start block hover:bg-ink-50 transition-colors -mx-2 px-2"
            >
              <span className="cs-kv-label flex items-center gap-1.5">
                <FileText size={12} /> {item.title}
              </span>
              <p className="text-sm text-ink-500">{item.detail}</p>
            </a>
          ))}
        </div>
      </div>
    ),
  },
];

export default function IntalkCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Strategy · AI Growth OS",
        industry: "AI SaaS · InsurTech · B2B GTM · Growth Strategy",
        title: "AI Growth Operating System",
        subtitle:
          "Designing a compounding growth framework for 인톡 — an AI Sales OS targeting 11× B2B and 20× B2C growth with an 11-person team",
        tags: [
          "Growth Strategy",
          "GTM Design",
          "AI SaaS",
          "B2B Strategy",
          "InsurTech",
          "Network Effects",
        ],
        githubDisabled: true,
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
