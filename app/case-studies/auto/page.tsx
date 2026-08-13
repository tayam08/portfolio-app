import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Future Mobility Business Strategy | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <div className="bg-ink-50 border border-ink-200 p-3 text-xs text-ink-400">
          <strong className="text-ink">Project Context:</strong> This is a hypothetical strategic case developed as an internal project within an AI entrepreneurship club (AI 창업학회). There is no commercial or consulting relationship with KIA. All strategy, platform design, and analysis are independent academic work.
        </div>
        <p>
          KIA&rsquo;s 80-year heritage — founded in 1944 — is one of the most emotionally
          resonant brand stories in Korean manufacturing. But the automotive industry faces its
          most disruptive structural shift in 130 years: global EV penetration projected at 40%+
          by 2030, and SDV software revenue emerging as a higher-margin business than vehicle
          hardware.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "SDV Revenue Opportunity",
              detail:
                "McKinsey estimates automotive software and services market will reach $650B by 2030. OEMs with strong SDV platforms earn 3–5× higher margin per vehicle than hardware-only competitors.",
            },
            {
              trend: "Legacy Customer Risk",
              detail:
                "KIA's highest-value customers are often legacy vehicle owners with 7+ year brand loyalty — most at risk of switching brands during EV transition if not specifically managed.",
            },
            {
              trend: "Channel Incentive Misalignment",
              detail:
                "Traditional KIA dealer networks are optimized for ICE vehicle sales and service revenue. SDV transition reduces service revenue — creating incentive misalignment that undermines transition messaging at the point of sale.",
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
            { label: "Brand History", value: "80 Years (1944)" },
            { label: "EV Market CAGR", value: "26%" },
            { label: "SDV Market by 2030", value: "$650B" },
          ].map((item) => (
            <div key={item.label} className="cs-impact-card">
              <p className="text-2xl font-bold text-navy mb-1">{item.value}</p>
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
          The core strategic question: How does KIA retain its most loyal ICE customers during
          the most disruptive technological transition in automotive history — without undermining
          the heritage brand equity that drives their loyalty in the first place?
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Transition Anxiety",
              body: "Legacy KIA owners associate the brand with reliability, heritage, and familiarity. EV transition creates category anxiety — a perceived discontinuity between the brand they trust and the technology they're being asked to adopt. Emotional resistance precedes rational evaluation.",
            },
            {
              title: "Value Communication Gap",
              body: "OEMs are communicating SDV transition in engineering terms (battery range, software OTA, connectivity) rather than customer value terms (total cost of ownership reduction, service elimination, resale value trajectory). The right message exists; it is being delivered in the wrong language.",
            },
            {
              title: "Brand Identity Paradox",
              body: "Heritage automotive brands face a structural paradox: their brand equity is built on ICE identity. Communicating EV transition too aggressively risks undermining the very brand associations that drive customer loyalty — but not communicating it leaves customers vulnerable to competitor acquisition.",
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
          High-consideration purchases (vehicles, financial products) require emotional resonance
          before rational evaluation. Brand strategy must precede product strategy — and heritage
          storytelling is the trust activation mechanism, not nostalgia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Emotion Unlocks Rational Evaluation",
              insight:
                "Legacy KIA customers won't evaluate SDV value propositions until they feel emotionally secure that the brand they trust is still the same brand. Heritage storytelling is the prerequisite, not the alternative, to TCO analysis.",
            },
            {
              principle: "TCO Framing Wins on Rational Merits",
              insight:
                "When EVs are framed as 'expensive upfront,' customers resist. When framed as '5-year TCO 25% lower than ICE equivalent,' the value proposition is immediately compelling. Frame selection determines deal outcome — not product quality.",
            },
            {
              principle: "Channel Incentives Must Align with Strategy",
              insight:
                "A B2C strategy that ignores B2B channel economics fails at execution. KIA's dealer network needs a compelling business case for SDV — not just a product mandate from HQ. The B2B2C model aligns dealer incentives with brand strategy.",
            },
            {
              principle: "1944 Heritage as Trust Activation",
              insight:
                "The founding timeline is not a marketing asset — it is a trust mechanism. 80 years of manufacturing excellence is the evidence base for 'we will still be reliable in the SDV era.' Heritage extends to the future; it does not anchor to the past.",
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
            &ldquo;If legacy KIA customers first experience brand pride through heritage
            storytelling, they will be emotionally primed to rationally evaluate SDV transition
            value — increasing upgrade consideration rate among the highest-LTV customer cohort
            without undermining the heritage brand associations that drive their loyalty.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Platform Model",
              decision: "B2B2C: brand-to-dealer (B2B2) then dealer-to-customer (2C). Eliminates the channel incentive conflict by giving dealers a value-based sales framework — not just product information.",
            },
            {
              layer: "Sequencing",
              decision: "Heritage Layer → Value Calculator. Emotional engagement precedes rational value proposition. Order is not arbitrary — it reflects the psychological sequence of high-consideration purchase decision-making.",
            },
            {
              layer: "Success Metric",
              decision: "Legacy customer upgrade consideration rate (not conversion rate). Consideration unlocks the conversion funnel; measuring too far downstream misses the insight about what the platform actually changes.",
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
          Built a three-layer B2B2C platform that bridges 80 years of brand heritage with the
          electrification imperative — designed to convert emotional engagement into rational
          SDV upgrade consideration.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Heritage Layer",
              tech: "Next.js · Interactive Timeline",
              role: "Interactive 1944→2024 brand timeline. Creates emotional engagement with KIA's founding story, milestones, and manufacturing evolution — establishing brand trust before any SDV messaging. The sequence is deliberate: trust before persuasion.",
            },
            {
              layer: "Value Calculator",
              tech: "Python · FastAPI · Recharts",
              role: "Vehicle-specific SDV upgrade value model. Inputs: current vehicle age, mileage, fuel cost. Output: 5-year TCO comparison, maintenance elimination savings, resale value trajectory. Translates engineering advantages into customer financial outcomes.",
            },
            {
              layer: "B2B Dealer Layer",
              tech: "Dealer Integration Interface",
              role: "Dealer-facing interface translates customer value calculator outputs into structured sales conversation frameworks — aligning dealer incentives with SDV transition rather than against it. Dealers receive customer TCO data before the in-showroom conversation.",
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
          Stack: Next.js · Python · FastAPI · Recharts
        </p>
      </div>
    ),
  },
  {
    id: "business-impact",
    number: "06",
    title: "Business Impact",
    content: (
      <div className="space-y-5">
        <p>
          The platform creates a measurable bridge between emotional brand attachment and rational
          SDV upgrade consideration — addressing the specific psychological barrier that causes
          legacy customer churn during technology transitions.
        </p>
        <div className="space-y-0">
          {[
            {
              dimension: "Customer Retention",
              impact:
                "Heritage storytelling reduces transition anxiety among the 7+ year loyalty cohort — KIA's highest-LTV segment. Emotional anchoring maintains brand consideration during the EV category shift.",
            },
            {
              dimension: "TCO Communication",
              impact:
                "5-year TCO calculator translates engineering advantage (no fuel cost, no service, OTA updates) into customer financial outcomes. Behavioral economics research on high-consideration purchases consistently shows cost-of-ownership framing reduces resistance more than feature/range messaging — the magnitude varies by market and segment, but the directional effect is robust.",
            },
            {
              dimension: "Channel Alignment",
              impact:
                "B2B2C model gives dealers a value-based sales framework — resolving the structural incentive conflict created by SDV transition reducing service revenue. Dealers become advocates rather than obstacles.",
            },
            {
              dimension: "Strategic Positioning",
              impact:
                "Positions KIA not as abandoning heritage for technology, but as extending 80 years of manufacturing excellence into the software era. The narrative is continuity, not disruption — critical for legacy customer retention.",
            },
          ].map((item) => (
            <div key={item.dimension} className="cs-kv-row">
              <span className="cs-kv-label">{item.dimension}</span>
              <p className="text-sm text-ink-500">{item.impact}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-500 leading-relaxed mt-4">
          Next milestone: Integration of real government EV incentive data (환경부 보조금) into
          the TCO calculator — making the net cost comparison reflect actual current subsidy
          structures rather than theoretical purchase prices.
        </p>
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
            title: "Emotional narrative is a prerequisite, not an alternative, to rational analysis",
            body: "In high-consideration purchases, emotional resonance is a gate that must be passed before rational evaluation begins. A technically compelling SDV value proposition fails if the customer is not emotionally primed to hear it. Brand strategy is not 'soft' — it is the precondition for commercial strategy to work.",
          },
          {
            title: "Channel incentives determine whether strategy reaches customers",
            body: "The most elegant B2C strategy fails if the B2B channel (dealers) has opposing incentives. SDV transition reduces dealer service revenue — which means dealers resist SDV messaging without a compelling business case for it. Strategy must be designed end-to-end, not just at the brand-to-consumer layer.",
          },
          {
            title: "Heritage extends forward, not backward",
            body: "The risk of heritage marketing is nostalgia that anchors the brand to the past rather than extending trust to the future. '80 years of manufacturing excellence now in software' is the correct framing — it uses heritage as evidence for future capability, not as resistance to change.",
          },
          {
            title: "The same framework applies to any incumbent-vs-disruptor transition",
            body: "Insurance incumbents vs. InsurTech, automotive OEMs vs. Tesla, banking vs. neobanks — the strategic pattern is identical: existing brands have trust and distribution; disruptors have technology and speed. The competitive question is always: can the incumbent move fast enough to defend the trust moat before the disruptor builds one of its own?",
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

export default function AutoCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Mobility · Business Strategy",
        industry: "Automotive · SDV · Brand Strategy · B2B2C",
        title: "Future Mobility Business Strategy",
        subtitle:
          "KIA brand heritage × SDV transition value analysis — a B2B2C platform strategy for retaining legacy customers through the electrification imperative",
        tags: ["B2B2C Strategy", "Automotive", "SDV", "Brand Strategy", "Next.js", "FastAPI"],
        githubDisabled: true,
        demo: "https://frontend-mocha-mu-86.vercel.app",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
