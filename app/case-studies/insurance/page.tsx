import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Insurance Digital Transformation Strategy | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          The global insurance industry represents a $6.3T market (2023), with Korean insurance
          penetration at 11.2% of GDP — among the highest globally. Yet despite market scale, a
          structural efficiency gap persists: 60–80% of underwriting processes remain manual, with
          average cycle times of 3–5 business days.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "Status Quo",
              detail:
                "Incumbent insurers relied on 2–3 static actuarial dimensions (age, claim history, policy type) processed by human analysts. Risk data lived in siloed CSV exports — no real-time intelligence, no self-service access for business users.",
            },
            {
              trend: "InsurTech Disruption",
              detail:
                "Over $14B invested in InsurTech globally in 2022. AI-native platforms were capturing market share by offering real-time underwriting that incumbents could not match with legacy infrastructure. The technology gap was widening year-over-year.",
            },
            {
              trend: "Regulatory Pressure",
              detail:
                "Korean FSC mandating enhanced digital risk disclosure standards — creating urgency for data infrastructure modernization across all tier-1 and tier-2 insurers.",
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
            { label: "Underwriting Cycle", value: "3–5 days" },
            { label: "Manual Process Rate", value: "60–80%" },
            { label: "Risk Dimensions Used", value: "2–3 static" },
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
          The partnering insurance firm (산학협력) faced three compounding inefficiencies that AI
          could directly address — all stemming from a legacy architecture designed for static
          actuarial tables, not real-time behavioral data.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Data Fragmentation",
              body: "Policyholder risk data existed only in siloed CSV exports. Manual analyst processing was required before any insight could be extracted — consuming approximately 80% of analyst bandwidth on data preparation rather than analysis.",
            },
            {
              title: "Binary Risk Categorization",
              body: "Existing segmentation used only 2–3 static actuarial dimensions (age, claim history, policy type), failing to capture multi-dimensional risk. This created adverse selection exposure in edge cases and left pricing precision on the table.",
            },
            {
              title: "Business User Exclusion",
              body: "Risk dashboards were analyst-only tools requiring SQL or Excel expertise. Business stakeholders could not access underwriting intelligence independently — creating decision bottlenecks and information asymmetry within the organization.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-navy pl-5 py-2">
              <p className="font-semibold text-ink mb-1.5">{item.title}</p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-400 italic mt-2">
          Root cause: Legacy batch-processing architecture designed for an era of static actuarial
          tables — not real-time behavioral data or AI-augmented analysis.
        </p>
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
          Applying Porter&rsquo;s Five Forces to the Korean InsurTech landscape revealed that the
          competitive moat was shifting from actuarial expertise to real-time data processing
          capability — and incumbents with legacy data infrastructure faced structural disadvantage
          in the 3–5 year window ahead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              force: "New Entrants",
              insight:
                "InsurTechs leveraging open banking APIs and real-time data flows threatened incumbent pricing power through superior risk segmentation. The entry barrier was capital, not technology.",
            },
            {
              force: "Buyer Power",
              insight:
                "Comparison platforms increasing price transparency. Product differentiation was diminishing; data intelligence quality was becoming the primary competitive axis.",
            },
            {
              force: "Supplier Power",
              insight:
                "Cloud AI providers (Anthropic, Google) reducing AI deployment barriers. What once required $10M ML teams now costs thousands per month in API fees — flattening the technology playing field.",
            },
            {
              force: "Substitutes",
              insight:
                "Embedded insurance via fintech apps creating distribution alternatives that bypass traditional broker channels — threatening incumbents' structural distribution moat.",
            },
          ].map((item) => (
            <div key={item.force} className="bg-white border border-ink-100 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
                {item.force}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.insight}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-500 bg-ink-50 p-4 border-l-2 border-ink-200">
          <strong className="text-ink">Strategic Conclusion:</strong> The window for incumbents
          to establish AI-augmented underwriting capability before InsurTechs capture pricing
          precision is 3–5 years. Waiting for the market to force adoption means competing from
          a position of structural disadvantage.
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
            &ldquo;If policyholder risk data can be processed in real-time across 8+ dimensions
            and interpreted through an AI natural language interface, non-technical business users
            can self-serve underwriting intelligence — reducing analyst dependency and improving
            decision velocity from days to real-time.&rdquo;
          </p>
        </div>
        <div className="space-y-2 mt-2">
          <p className="text-sm font-semibold text-ink">Design Assumptions</p>
          {[
            "CSV export data contains sufficient signal for meaningful multi-dimensional risk scoring without requiring system-level data access",
            "Claude AI can accurately interpret actuarial data within insurance business context with appropriate system prompting",
            "Business users will adopt a natural language interface over traditional dashboard tools if the UX is designed for their workflow",
            "Real-time analysis is operationally superior to batch-processed actuarial tables for the majority of underwriting decisions",
          ].map((point, i) => (
            <div key={i} className="flex gap-3 py-1">
              <span className="text-navy flex-shrink-0 font-bold">→</span>
              <p className="text-sm text-ink-500">{point}</p>
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
          Built a three-layer platform where AI serves as the intelligence layer between raw
          policyholder data and business decisions. Technology was designed to serve the business
          outcome — not the other way around.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Data Layer",
              tech: "CSV ingestion · pandas parsing",
              role: "Processed 60,000+ policyholder records (6만 건 CSV export) across 8+ actuarial dimensions — policy history, claim patterns, demographics, and behavioral indicators — transforming static batch exports into structured risk signals ready for scoring.",
            },
            {
              layer: "Scoring Layer",
              tech: "Regression Tree · Rule-based Scoring",
              role: "Quantifies multi-dimensional risk into comparable scores with visual dashboard representation via Recharts. Enables portfolio-level risk distribution analysis across underwriter cohorts.",
            },
            {
              layer: "Intelligence Layer",
              tech: "Claude AI API · NL interface",
              role: "Enables business users to query the dashboard, explain risk factors, and surface actionable underwriting insights conversationally — no SQL or Excel expertise required. Also used to accelerate regulatory research: 4건의 금융감독원 보험 법령을 AI 보조 분석으로 처리, cutting research time by 70%.",
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
          <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2">Model Architecture Decision</p>
          <p className="text-sm text-ink-500 leading-relaxed">
            팀장은 ML 인코더(임베딩 기반) 방식을 제안했지만, 나는 모듈형 의사결정 트리 + 회귀분석 모델을 선택했다.
            근거는 두 가지였다: 첫째, 입력 데이터가 정형 CSV로 한정된 상황에서 인코더의 비정형 처리 용량은 불필요한 복잡성이다.
            둘째, 보험 규제 환경에서 모델의 해석 가능성(interpretability)은 기능적 요구사항이 아니라 규제 요구사항이다 — 심사자가 스코어의 근거를 설명할 수 없으면 상품 승인이 나지 않는다.
            회귀 모델은 6만 건 데이터셋에서 충분한 정확도를 보이면서 감사 가능한(auditable) 의사결정 경로를 유지했다.
          </p>
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Stack: React · Vite · Recharts · Claude AI API · Python · pandas
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { before: "2–3 dimensions", after: "8+", metric: "Risk Dimensions Analyzed" },
            { before: "3–5 business days", after: "Real-time", metric: "Underwriting Cycle Time" },
            { before: "Manual baseline", after: "70%↓", metric: "Regulatory Research Time" },
            { before: "0", after: "6만 건", metric: "Policyholder Records Processed" },
          ].map((item) => (
            <div key={item.metric} className="cs-impact-card">
              <p className="text-[10px] text-ink-400 uppercase tracking-wider mb-3">
                {item.metric}
              </p>
              <p className="text-xs text-ink-400 mb-1 line-through">{item.before}</p>
              <p className="text-2xl font-bold text-navy">{item.after}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0 mt-2">
          {[
            {
              kpi: "Data Scale",
              target: "60,000+ policyholder records (6만 건) processed and validated through the multi-dimensional scoring algorithm — full dataset, not a sample",
              type: "Measured",
            },
            {
              kpi: "Regulatory Research Efficiency",
              target: "70% reduction in research time — 4건의 금융감독원 보험 법령 analyzed via AI-assisted document review vs. manual reading",
              type: "Measured",
            },
            {
              kpi: "Risk Dimension Coverage",
              target: "8+ dimensions vs. 2–3 baseline — adverse selection exposure reduced through multi-variable scoring",
              type: "Design",
            },
            {
              kpi: "Decision Velocity",
              target: "Real-time AI query response vs. 3–5 day manual underwriting baseline",
              type: "Design",
            },
          ].map((item) => (
            <div
              key={item.kpi}
              className="flex items-start gap-4 py-3.5 border-b border-ink-50 last:border-0"
            >
              <span className="tag-category flex-shrink-0 mt-0.5">{item.type}</span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.kpi}</p>
                <p className="text-xs text-ink-400 mt-0.5">{item.target}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-500 leading-relaxed">
          The platform validated the industry-academia partnership model for AI deployment in
          traditional insurance operations. The AI chatbot interface eliminated the analyst
          bottleneck for routine risk queries, enabling business stakeholders to independently
          access and interpret underwriting data.
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
            title: "Data quality determines the AI ceiling",
            body: "The most binding constraint was not model capability but data structure. Clean, well-labeled CSV data was prerequisite to any intelligence layer. AI amplifies data quality — both its strengths and its gaps. The first engineering effort should always be data, not model selection.",
          },
          {
            title: "Business framing unlocks stakeholder buy-in",
            body: "Presenting the platform in terms of 'underwriting cycle time reduced from days to real-time' drove adoption. Technical descriptions of the model architecture did not. The correct translation is always: 'Here is what changes for your day-to-day decision making' — not 'Here is how the system works.'",
          },
          {
            title: "Non-technical UX is the hardest design problem",
            body: "Building the AI model was significantly easier than designing an interface a non-technical insurance manager would actually adopt. Domain-specific UX requires deep empathy with the user's existing workflow, not just technical elegance — and the existing workflow often contains surprises.",
          },
          {
            title: "AI as explanation layer, not decision maker",
            body: "The correct architecture uses AI to explain and communicate risk — not to make underwriting decisions. This framing is also more commercially viable: regulators accept AI-augmented human decisions; they do not yet accept fully automated underwriting. The most durable AI deployments position AI as an intelligence amplifier.",
          },
          {
            title: "IoT and telematics represent the next frontier",
            body: "Behavioral, telematics, and real-time data sources are multiplying risk signals from dozens to thousands of variables. The platform architecture built here — CSV today — is the foundation for real-time streaming data ingestion when the data infrastructure matures. The business design precedes the data infrastructure.",
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

export default function InsuranceCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Insurance · Digital Transformation",
        industry: "InsurTech · AI Strategy · 산학협력",
        title: "Insurance Digital Transformation Strategy",
        subtitle:
          "AI-powered risk scoring platform enabling real-time underwriting intelligence for non-technical business users — industry-academia partnership",
        tags: [
          "AI Strategy",
          "InsurTech",
          "Digital Transformation",
          "LLM",
          "React",
          "Claude AI",
          "산학협력",
        ],
        githubDisabled: true,
        demo: "https://riskmodel.vercel.app",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
