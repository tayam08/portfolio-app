import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "PropTech Business Strategy | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          The Korean real estate market represents approximately ₩1,500T in residential assets —
          yet the apartment hunting process remains fundamentally offline and relationship-dependent.
          Naver Real Estate and Zigbang have digitized listings and pricing. But neighborhood-level
          qualitative intelligence stays entirely analog.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "Information Access",
              detail:
                "Listings, pricing history, and distance-from-school data are fully digitized. But noise levels, community vibe, hidden amenities, and safety perception remain exclusively in the heads of long-term residents.",
            },
            {
              trend: "Community Workarounds",
              detail:
                "Apartment hunters rely on Naver café groups, KakaoTalk chats, and personal networks for local intelligence — fragmented, unstructured, and inaccessible to newcomers without existing social ties.",
            },
            {
              trend: "Investment Complexity",
              detail:
                "Korea's unique Jeonse system, frequent policy changes, and tax implications make investment decisions complex. Buyers need both neighborhood intelligence and financial modeling — currently served by disconnected tools.",
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
            { label: "Korean Real Estate Market", value: "₩1,500T+" },
            { label: "Global PropTech Investment", value: "$32B (2022)" },
            { label: "Intel Gap", value: "Entirely Analog" },
          ].map((item) => (
            <div key={item.label} className="cs-impact-card">
              <p className="text-xl font-bold text-navy mb-1">{item.value}</p>
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
          Customer journey mapping of the Korean apartment hunting process reveals a critical
          information gap at the Consideration stage — the moment between digital search and
          physical visit.
        </p>
        <div className="bg-ink-50 p-5 border-l-2 border-ink-200">
          <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-3">Customer Journey Map</p>
          <div className="flex flex-wrap gap-0 items-center">
            {[
              "Search Online",
              "Filter by Price",
              "→ Local Knowledge Gap ←",
              "Physical Visit",
              "Decision",
            ].map((step) => (
              <span
                key={step}
                className={`text-xs px-3 py-1.5 ${
                  step.includes("Gap")
                    ? "bg-navy text-white font-bold"
                    : "text-ink-500"
                }`}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 mt-2">
          {[
            {
              title: "Local Knowledge Gap",
              body: "A first-time visitor to a neighborhood lacks the years of resident experience that determine whether a place is actually livable. This gap forces expensive, time-consuming physical visits that could be largely replaced with high-quality digital local intelligence.",
            },
            {
              title: "Information Asymmetry Favors Long-term Residents",
              body: "The people with the best neighborhood knowledge (residents) have no incentive or platform to share it with newcomers. The people who most need it (first-time visitors) have no structured access channel.",
            },
            {
              title: "Combined Intelligence Gap",
              body: "No platform combines neighborhood qualitative intelligence with investment financial modeling. These two data types — 'is this neighborhood good to live in?' and 'is this apartment good to buy?' — are answered by completely separate, disconnected tools.",
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
          The core insight: the Korean PropTech market has digitized the transactional layer
          (price, listings) but left the informational layer (neighborhood quality, liveability)
          entirely analog. The AI opportunity is in synthesizing unstructured community
          intelligence into structured, trustworthy local reports.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Trust is the Primary Metric in Real Estate",
              insight:
                "Real estate decisions involve life savings. Platform trust (content accuracy, community authenticity) matters more than feature sophistication. Every design decision must answer: 'does this increase trust?'",
            },
            {
              principle: "AI Synthesis Solves the Aggregation Problem",
              insight:
                "Community-sourced data is valuable but noisy. AI aggregation removes noise, identifies patterns, and generates composite assessments — transforming fragmented social posts into structured, actionable intelligence.",
            },
            {
              principle: "Community Separation from Transaction is Necessary",
              insight:
                "Combining a community platform with transaction flows creates incentive problems (sponsored content, biased reviews). Keeping toast. as pure intelligence — not a marketplace — is the trust model's structural requirement.",
            },
            {
              principle: "Cold-Start is the Primary Business Risk",
              insight:
                "AI synthesis is only as good as the underlying community data. The cold-start problem — building initial content before network effects activate — is the platform's primary business risk, not the technology or the AI.",
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
            &ldquo;If community-sourced neighborhood intelligence can be synthesized by AI into
            structured, trustworthy local reports — combined with investment financial modeling
            — buyers can make informed consideration decisions without an initial physical visit,
            reducing the average consideration stage from 3–5 visits to 1–2.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Platform Model",
              decision: "Pure intelligence platform (no transaction) → preserves trust model and avoids marketplace incentive conflicts. Revenue from premium reports and B2B API, not transaction commissions.",
            },
            {
              layer: "Community-First",
              decision: "Resident-contributed structured insights as the data foundation. AI synthesis adds signal; the community provides the raw data. Platform value grows with community size — network effect moat.",
            },
            {
              layer: "Dual Value Prop",
              decision: "Neighborhood intelligence + investment calculator in one platform. Addresses both the liveability question ('is this a good place to live?') and the investment question ('is this a good place to buy?') simultaneously.",
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
          Built <em>toast.</em> — a three-layer platform combining community intelligence,
          AI synthesis, and investment analytics into a single real estate decision tool.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Community Layer",
              tech: "Next.js · User Feed · Expert Badge",
              role: "Resident-contributed neighborhood insights across structured categories: noise levels, transport convenience, amenities, safety, community vibe. Structured data > unstructured social posts — enables reliable AI synthesis. Trust verification via an Expert Badge system: 공인중개사, 세무사, 감정평가사 등 자격 보유자에게 플랫폼 내 전문가 배지를 부여해 기여 콘텐츠의 신뢰도를 계층화. 일반 거주자 인사이트와 전문가 인사이트를 구분 표시함으로써 콘텐츠 품질 신호를 높였다.",
            },
            {
              layer: "AI Synthesis",
              tech: "OpenRouter API",
              role: "AI aggregates and synthesizes community inputs into a standardized local intelligence report — removing noise, identifying patterns, and generating a composite neighborhood assessment with confidence weighting.",
            },
            {
              layer: "Investment Engine",
              tech: "Recharts · TypeScript",
              role: "Jeonse/Wolse conversion calculator, price trend visualization, expected rental yield, and 5-year value projection — connecting neighborhood intelligence to investment financial modeling in one interface.",
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
          <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2">Field Validation</p>
          <p className="text-sm text-ink-500 leading-relaxed">
            커뮤니티 트러스트 가설을 검증하기 위해 서울 내 여러 동네의 부동산 중개사무소를 직접 방문하고
            거주자 인터뷰를 진행했다. 중개사들이 실제로 반복적으로 받는 질문 유형, 정보 격차가 가장 크게
            발생하는 시점(계약 직전 vs. 임장 단계), 그리고 전문가 의견과 거주자 체감 간의 괴리를 파악했다.
            이 현장 인사이트가 전문가 배지 시스템 설계와 Community Layer의 카테고리 구조를 결정했다.
          </p>
        </div>
        <p className="text-xs text-ink-400 mt-3">
          Stack: Next.js · TypeScript · OpenRouter API · Recharts
        </p>
      </div>
    ),
  },
  {
    id: "business-impact",
    number: "06",
    title: "Projected Impact",
    content: (
      <div className="space-y-5">
        <div className="bg-ink-50 border border-ink-200 p-3 text-xs text-ink-400">
          <strong className="text-ink">Note:</strong> The metrics below are hypothesis-driven estimates, not measured outcomes.
          They represent the strategic model underpinning the product — not live results.
          What was actually validated is described in the Execution &gt; Field Validation section above.
        </div>
        <p>
          toast. addresses a structural market gap — the ₩1,500T Korean real estate market has
          no dedicated local intelligence layer. Platform creates value at the Consideration stage
          of the buyer journey where all existing tools fail.
        </p>
        <div className="space-y-0">
          {[
            {
              dimension: "Visit Reduction",
              impact:
                "Estimated: reduce average physical visits at Consideration stage from 3–5 to 1–2. Each avoided visit represents an estimated ₩30,000–₩100,000 in time + transport cost and 4–8 hours saved per buyer. (Based on field interviews with real estate agents and residents — not platform-measured data.)",
            },
            {
              dimension: "Decision Quality",
              impact:
                "Hypothesis: structured AI synthesis of community intelligence surfaces insights (noise patterns, community dynamics, hidden amenities) that individual visits often miss. Field interviews confirmed these dimensions are consistently underserved by existing platforms.",
            },
            {
              dimension: "Premium Report Revenue",
              impact:
                "Estimated: AI-generated full neighborhood due diligence reports at ₩30,000–₩50,000 per report replaces 2–3 physical visits worth ₩100,000+ — a value proposition with hypothesized willingness to pay, to be validated through pricing experiments at launch.",
            },
            {
              dimension: "B2B API Opportunity",
              impact:
                "Projected: realtor and bank partnership API embeds local intelligence into existing CRM and mortgage advisory flows — B2B data product requiring no direct consumer acquisition. Confirmed as a viable channel through broker interviews.",
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
            title: "The cold-start problem is the real product challenge",
            body: "AI synthesis quality depends entirely on community data quality. Until the community reaches critical mass, the AI layer adds limited value — creating a bootstrapping problem where the product is weakest when it most needs to impress early users. Seeding the community with structured data (from public sources or initial partnerships) is the most important product decision before launch.",
          },
          {
            title: "Trust architecture is a design discipline, not a marketing decision",
            body: "In real estate, trust is not built by claiming trustworthiness — it is built by making the trust model legible: who contributed this data, when, how many contributors, how AI synthesized it. Every design element that makes the trust model visible increases user confidence more than any marketing message.",
          },
          {
            title: "Separation of intelligence from transaction is structurally necessary",
            body: "The moment a local intelligence platform participates in transactions, its incentives become suspect. Marketplace models (Zillow, Redfin) experience this degradation. Pure intelligence platforms (Yelp at its best, Wikipedia) sustain trust by having no stake in what users decide. This principle is the business model constraint and the product's competitive moat simultaneously.",
          },
          {
            title: "Network effects compound slower in real estate than in social platforms",
            body: "Real estate is a low-frequency, high-consideration transaction. Users don't return daily — they return every 3–7 years for their next move. Platform strategy must account for slow network effect accumulation: B2B distribution (Naver, Kakao partnership) is faster than consumer viral growth in this vertical.",
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

export default function WebAppCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "PropTech · Platform Strategy",
        industry: "Real Estate · Community Platform · AI Synthesis",
        title: "PropTech Business Strategy",
        subtitle:
          "AI-powered local intelligence platform solving information asymmetry in Korean real estate — community insight meets investment analytics",
        tags: ["PropTech", "Platform Strategy", "Next.js", "TypeScript", "OpenRouter API", "Recharts"],
        githubDisabled: true,
        demo: "https://toast-app-omega.vercel.app",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
