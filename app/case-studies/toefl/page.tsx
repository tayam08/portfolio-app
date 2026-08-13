import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "AI Education SaaS Strategy | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          The TOEFL Academic Discussion section (introduced 2023) created a new market dynamic:
          a high-stakes writing task with no affordable, scalable feedback mechanism. Korean
          students represent one of the largest TOEFL test-taking populations globally, driving
          a ₩500B+ domestic preparation industry.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "Status Quo Cost",
              detail:
                "TOEFL writing feedback from qualified instructors cost ₩30,000–₩80,000 per essay with 24–72 hour turnaround. At optimal preparation intensity (1 essay/day), monthly cost reached ₩900,000–₩2,400,000.",
            },
            {
              trend: "AI Scoring Progress",
              detail:
                "ETS's own e-rater AI has been used in TOEFL scoring since 1999. Modern LLMs substantially exceed e-rater's capabilities — but no accessible tool leveraged this for TOEFL preparation at consumer price points.",
            },
            {
              trend: "Access Inequality",
              detail:
                "Premium feedback pricing effectively limited intensive preparation to high-income students — creating an access inequality in a high-stakes examination context where feedback quality directly impacts outcomes.",
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
            { label: "Human Grader Cost", value: "₩30K–₩80K" },
            { label: "Turnaround", value: "48–72 hours" },
            { label: "English Testing Market", value: "$4B+ global" },
          ].map((item) => (
            <div key={item.label} className="cs-impact-card">
              <p className="text-xl font-bold text-ink-400 mb-1 line-through">{item.value}</p>
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
          Three compounding problems make TOEFL Academic Discussion preparation structurally
          broken for the majority of serious test-takers:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Feedback Latency Breaks the Learning Loop",
              body: "48–72 hour human grader turnaround breaks the skill acquisition feedback loop. Effective learning requires immediate feedback — reviewing a cold essay the next day misses the window for reinforcing correct patterns and correcting errors before they solidify.",
            },
            {
              title: "Inter-Rater Inconsistency Creates False Signals",
              body: "Human graders exhibit significant inter-rater variability (±2–3 points on a 30-point scale). Students receive inconsistent signals about their actual performance level — making it impossible to track genuine improvement vs. grader variance.",
            },
            {
              title: "Cost Barrier Creates Access Inequality",
              body: "At ₩50K average per essay, intensive preparation (1 essay/day) costs ₩1.5M/month — effectively limiting high-quality preparation to premium test-takers. The students who most need feedback are often least able to afford it.",
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
          The insight that changed the design: TOEFL scoring is a multi-dimensional rubric
          assessment, not a holistic judgment. Each ETS rubric dimension (argument development,
          vocabulary range, task completion, grammatical accuracy) is an independent evaluation
          problem — and LLMs can be role-specialized to assess each independently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Ensemble > Single Generalist Model",
              insight:
                "A single LLM asked to 'score this TOEFL essay' performs worse than 10 specialized evaluators each focused on one dimension. Specialization reduces each evaluator's task complexity — and independent evaluators allow statistical aggregation that reduces variance.",
            },
            {
              principle: "Aggregation Quality = Ensemble Quality",
              insight:
                "The quality of the statistical aggregation method matters as much as individual evaluator quality. Voting weights, outlier detection, and systematic bias correction are the engineering challenges — not model selection.",
            },
            {
              principle: "SaaS Unit Economics at AI Cost",
              insight:
                "At $0.003/essay in API cost vs. ₩50,000 average human grader cost, the unit economics support a ₩9,900/month SaaS model for unlimited essays — 10× better value than the current market while maintaining strong margins.",
            },
            {
              principle: "Instant Feedback Changes Behavior",
              insight:
                "The learning value of immediate feedback is not just speed — it is context. A student who receives feedback within 30 seconds of writing remembers exactly what choices they made and why. 48-hour feedback arrives in a different cognitive state.",
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
            &ldquo;If 10 role-specialized LLM evaluators (each assessing a distinct ETS rubric
            dimension) score independently and results are aggregated statistically, the ensemble
            will produce more consistent and accurate scores than any single model — approaching
            human inter-rater reliability at negligible marginal cost, enabling a SaaS product
            priced at 1/100th of human alternatives.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "GTM: Beachhead",
              decision:
                "Korean TOEFL market via direct B2C + potential institutional channel partnerships (target academies modeled on YBM, 해커스-scale players — no formal partnership established). Target: students spending ₩100K+/month on TOEFL prep who switch to unlimited AI feedback.",
            },
            {
              layer: "GTM: Expansion",
              decision:
                "IELTS Writing Task 2, TOEIC Speaking, OPIc — the same ensemble infrastructure applied to adjacent English testing segments with different rubric specializations.",
            },
            {
              layer: "GTM: B2B",
              decision:
                "White-label API for Korean university English programs and corporate training — embedding AI scoring into institutional LMS systems at enterprise pricing.",
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
          Built a three-layer LLM ensemble system: specialized evaluators, statistical
          aggregation, and a feedback interface — delivering calibrated scores with dimension-level
          breakdowns.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Evaluator Ensemble",
              tech: "Gemini API · LLaMA-3.3 · 10 evaluators",
              role: "10 role-specialized LLM evaluators running in parallel. Each evaluator receives a role prompt defining its specific ETS rubric focus: argument development, vocabulary range, task completion, grammatical accuracy, coherence, etc.",
            },
            {
              layer: "Aggregation Engine",
              tech: "Python · Statistical weighting",
              role: "Weighted voting across evaluators with outlier detection. Error-pattern correction adjusts for systematic biases identified in evaluator calibration. Final score 0–30 with confidence interval — not a point estimate.",
            },
            {
              layer: "Feedback Interface",
              tech: "Streamlit",
              role: "Dimension-level score breakdown with specific improvement recommendations. Identifies the highest-leverage improvement area — not just an aggregate score. The output is a learning action, not a number.",
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
        <div className="bg-ink-50 border-l-2 border-navy p-4 mt-4">
          <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2">Market Validation</p>
          <p className="text-sm text-ink-500 leading-relaxed">
            프로토타입 완성 후 시장 수요를 직접 검증했다. 300건 이상의 콜드메일 발송 + 학원 원장 직접 방문 영업을 진행했고,
            성공률은 약 3%였다. 낮은 수치처럼 보이지만, 이 과정에서 결정적인 인사이트를 얻었다:
            학원 원장들이 원한 것은 기술적 정교함이 아니라 "수강생 이탈 방지"와 "채점 일관성"이었다.
            이 검증 결과가 GTM 전략을 B2C 직판 우선에서 B2B 기관 채널 우선으로 수정하는 근거가 됐다.
          </p>
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Stack: Python · Gemini API · LLaMA-3.3 · Streamlit · Statistical aggregation
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
            { before: "48–72 hours", after: "Instant", metric: "Feedback Speed" },
            { before: "₩30K–₩80K", after: "~₩300", metric: "Cost per Essay (API)" },
            { before: "Single aggregate score", after: "10 dimensions", metric: "Feedback Depth" },
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
              dimension: "SaaS Economics",
              impact:
                "₩9,900/month unlimited essays = 150+ essays before matching one human grader session. At $0.003/essay API cost vs. ₩50,000 human cost — strong unit economics with room for market-penetrating pricing.",
            },
            {
              dimension: "Learning Outcome",
              impact:
                "Immediate feedback enables daily essay practice at scale — transforming TOEFL prep from weekly instructor sessions to daily AI-coached iteration loops. Learning velocity compounds.",
            },
            {
              dimension: "Market Access",
              impact:
                "Unlimited feedback at ₩9,900/month democratizes intensive preparation across income levels — addressing the access inequality in the current market structure.",
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
            title: "Ensemble design is statistics, not just AI",
            body: "The quality of the aggregation method matters as much as the quality of individual evaluators. Voting weights, outlier handling, and bias correction are the engineering challenges — not model selection. A mediocre ensemble well-aggregated outperforms a good ensemble poorly aggregated.",
          },
          {
            title: "Specialized prompts outperform generalist prompts — consistently",
            body: "A single LLM asked to 'score this TOEFL essay' performs worse than 10 specialized evaluators each focused on one dimension. Prompt specialization is a leverage multiplier in ensemble design. This principle extends beyond TOEFL scoring to any complex, multi-dimensional evaluation task.",
          },
          {
            title: "Calibration against real data is the path from prototype to product",
            body: "Validating the system against actual ETS benchmark scores is the critical gap between prototype and product. Without calibration data, accuracy claims are theoretical, not empirical. The next phase of this project is an ETS benchmark study — accuracy claims must be evidence-based before any SaaS launch.",
          },
          {
            title: "The beachhead market is not the destination",
            body: "Korean TOEFL preparation is the right beachhead: large, accessible, well-understood. But the same ensemble architecture applies to IELTS, TOEIC, OPIc, and eventually any structured writing assessment with a rubric. The beachhead generates the data and unit economics to fund the expansion — not the other way around.",
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

export default function ToeflCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "EdTech · AI Strategy",
        industry: "Education · LLM Ensemble · SaaS",
        title: "AI Education SaaS Strategy",
        subtitle:
          "LLM ensemble-based automated TOEFL scoring — instant calibrated feedback at 1/100th the cost of human graders, with a B2C→B2B GTM roadmap",
        tags: [
          "EdTech",
          "LLM Ensemble",
          "SaaS Strategy",
          "Python",
          "Gemini API",
          "LLaMA-3.3",
          "Streamlit",
        ],
        githubDisabled: true,
        demo: "https://toefl-app-jade.vercel.app/",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
