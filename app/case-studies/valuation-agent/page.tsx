import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "AI Valuation Agent — DCF & EV/EBITDA Automation | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          Valuation work at a deal-advisory desk is repeatable in structure but manual in
          execution: build a DCF, defend the WACC assumptions, pick comparable companies,
          check that every number in the report ties out. A junior analyst redoes most of
          this by hand for every new target — and the LLM-generated version of this work
          has an academic evaluation problem, not just a labor problem: how do you actually
          grade whether an AI-produced valuation is any good?
        </p>
        <div className="space-y-0">
          {[
            {
              label: "Manual & Repetitive",
              detail:
                "WACC construction, FCF projection, comp selection, and report footing follow the same steps every time, for every company — classic automation-shaped work.",
            },
            {
              label: "Trust Problem",
              detail:
                "An LLM can produce a confident-looking valuation with a silently wrong unit conversion or an indefensible WACC input — arithmetic errors that are invisible unless someone checks the math by hand.",
            },
            {
              label: "No Evaluation Standard",
              detail:
                "Most 'AI does finance' demos show one company, one run, no way to say whether the output is mechanically correct or whether the judgment calls inside it were reasonable.",
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
          Two problems, stacked: (1) can a tool-calling LLM agent produce a complete,
          defensible DCF and EV/EBITDA valuation end-to-end, from real multi-market
          financial data — not a cleaned-up sample dataset? (2) How do you keep its
          numeric output trustworthy when LLMs are unreliable at exact arithmetic and
          prone to silent unit errors, while still letting it make the judgment calls
          that actually require domain reasoning?
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Arithmetic Is Not the Agent's Job",
              body: "WACC, discounted cash flow, and EV/EBITDA math have exact right answers. Letting an LLM compute them in free text is how you get a valuation that looks plausible and is quietly wrong.",
            },
            {
              title: "Cross-Market Unit Errors Are the Real Failure Mode",
              body: "SEC EDGAR reports US filers in raw USD; DART reports Korean filers in raw KRW. Mixing up 'raw amount' vs. 'millions,' or comparing a USD comp set against a KRW target, breaks the valuation silently — not with an exception.",
            },
            {
              title: "Judgment Still Needs a Human-Legible Trail",
              body: "WACC components, growth assumptions, and comp selection are judgment calls a reviewer needs to be able to interrogate — 'why this beta, why these five comps' — not just a final number.",
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
          The same principle that made the insurance risk-scoring platform defensible to
          regulators applies here: separate calculation from judgment. WACC, DCF, and
          EV/EBITDA math run as deterministic Python functions the agent calls as tools;
          the agent only supplies inputs and a written rationale. That single design
          choice resolves both the arithmetic-reliability problem and the auditability
          problem at once — the math can't drift, and every judgment call is written down
          next to the number it produced.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Deterministic Tools, Judgment Inputs",
              insight:
                "calc_wacc / calc_dcf / calc_ev_ebitda_valuation are pure functions, unit-tested against hand calculations. The agent decides risk-free rate, beta, growth assumptions, and comp selection — never the arithmetic itself.",
            },
            {
              principle: "Currency Is the Real Bug Class",
              insight:
                "get_financials returns an explicit currency field per company, and the system prompt spells out — repeatedly — that every numeric field must stay in raw units, same currency as the target. Cross-market comp mixing is explicitly disallowed.",
            },
            {
              principle: "Tools Outlive the Agent Loop",
              insight:
                "The same five deterministic tools are also exposed over MCP (streamable-HTTP, bearer-token gated) — usable directly from Claude Desktop or Claude Code, not only from this project's own tool-calling loop.",
            },
            {
              principle: "Self-Grading Bias Is an Architecture Decision",
              insight:
                "The agent runs on Claude; the eval harness (designed, not yet built — see Reflection) is scoped to a different model for judging, specifically to avoid a model grading its own output favorably.",
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
        <p className="text-sm text-ink-500 bg-ink-50 p-4 border-l-2 border-ink-200">
          <strong className="text-ink">Strategic Analogy:</strong> A modular pipeline that
          keeps math deterministic and judgment auditable is the same architecture as the
          quant trading system&rsquo;s risk layer, and the insurance platform&rsquo;s
          interpretable scoring model — a recurring pattern across every AI system in this
          portfolio: AI explains and decides inputs, code computes.
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
            &ldquo;If deterministic financial math is fully separated from the LLM&rsquo;s
            assumption-setting role, a tool-calling agent can produce complete, auditable
            two-method valuations across both US and Korean markets without arithmetic
            errors — and the same deterministic tools can be reused headlessly through
            MCP, independent of any single agent implementation.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Tool Contract",
              decision:
                "Five tools: get_financials, get_peer_multiples, calc_wacc, calc_dcf, calc_ev_ebitda_valuation. Each has an explicit JSON schema shared between the Anthropic and OpenAI tool-calling formats.",
            },
            {
              layer: "Dual Data Backend",
              decision:
                "SEC EDGAR (US, XBRL companyfacts API) and DART (Korean KOSPI/KOSDAQ, XBRL filings) behind one interface — get_financials returns the same shape regardless of market, with an explicit currency field.",
            },
            {
              layer: "Provider Split",
              decision:
                "Agent runs on Claude by default (OpenAI supported too); the not-yet-built eval/judge role is deliberately reserved for a different model, to avoid self-grading bias.",
            },
            {
              layer: "Distribution",
              decision:
                "The same tool implementations back three surfaces: a CLI (main.py), a FastAPI web app with run history, and an MCP server — one set of deterministic primitives, three ways in.",
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
          Built the complete pipeline in Python: data ingestion, a tool-calling agent loop,
          an MCP server, and a FastAPI web app with Postgres-backed run history — deployed
          live on Vercel.
        </p>
        <div className="space-y-0">
          {[
            {
              component: "Data Layer",
              tech: "SEC EDGAR · DART · Yahoo Finance",
              role: "fetch_edgar.py and fetch_dart.py normalize US and Korean filings into one CompanyFinancials shape with an explicit currency field; fetch_price.py sources market cap inputs. Cross-market unit mismatches are the dominant real-world failure mode this layer exists to prevent.",
            },
            {
              component: "Tool Layer",
              tech: "Pure Python · pydantic · pytest",
              role: "calc_wacc, calc_dcf, calc_ev_ebitda_valuation as deterministic functions, unit-tested against hand-calculated values — not just smoke-tested.",
            },
            {
              component: "Agent Layer",
              tech: "Claude / OpenAI tool-calling",
              role: "Multi-turn tool-calling loop with a pydantic-validated output schema (WACC + DCF + EV/EBITDA + reasoning trace). Share-price arithmetic is deliberately computed in code after the loop, not trusted to the model.",
            },
            {
              component: "MCP Server",
              tech: "Streamable-HTTP · bearer auth",
              role: "Exposes only the deterministic tools (never the LLM loop itself, to avoid spending the server owner's API budget on arbitrary callers) — usable from any MCP client.",
            },
            {
              component: "Web App",
              tech: "FastAPI · SQLModel · Postgres",
              role: "Async run creation, DB-backed history, static frontend. Deployed to Vercel — required removing the original BackgroundTasks pattern (unreliable once a serverless instance can freeze right after responding) and moving Postgres onto the psycopg (v3) driver explicitly.",
            },
          ].map((item) => (
            <div key={item.component} className="cs-kv-row items-start">
              <div className="w-40 flex-shrink-0">
                <p className="text-xs font-bold text-ink uppercase tracking-wider">
                  {item.component}
                </p>
                <p className="text-[11px] text-navy mt-1">{item.tech}</p>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{item.role}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {[
            { label: "Deterministic Tools", value: "5" },
            { label: "Markets", value: "US + KR" },
            { label: "Valuation Runs", value: "35+" },
            { label: "Unit Tests", value: "10/10 passing" },
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
    id: "business-impact",
    number: "06",
    title: "Validated Performance",
    content: (
      <div className="space-y-6">
        <div className="bg-ink-50 border border-ink-200 p-3 text-xs text-ink-400">
          <strong className="text-ink">Scope note:</strong> This is a research/engineering
          MVP, not a production valuation product. What&rsquo;s validated: the deterministic
          math (unit-tested against hand calculations) and the full pipeline running
          end-to-end, live, across real US and Korean tickers. What&rsquo;s not yet
          validated: systematic grading of judgment quality — the GAUGE-lite eval harness
          (mechanical + LLM-judge facets) is architecturally designed but not yet built.
        </div>
        <p>
          Deployed live on Vercel with Postgres-backed run history — validated end-to-end
          against real companies, not a mocked demo:
        </p>
        <div className="space-y-0">
          {[
            {
              kpi: "Live Deployment",
              target:
                "FastAPI web app deployed and reachable at valuation-agent-mvp-nine.vercel.app — DCF + EV/EBITDA valuation for a real ticker (CHD) completed end-to-end in ~60s via the deployed endpoint, with the run persisted to Postgres.",
              type: "Measured",
            },
            {
              kpi: "Cross-Market Coverage",
              target:
                "35+ valuation runs across 19 distinct US and Korean tickers (e.g. NVDA, INTC, ORCL, KO, 005930/Samsung Electronics, 000660/SK hynix), both Anthropic and OpenAI providers exercised.",
              type: "Measured",
            },
            {
              kpi: "Deterministic Math Correctness",
              target:
                "WACC, DCF, and EV/EBITDA calculators verified against independently hand-calculated values — 10/10 unit tests passing, not just import-level smoke tests.",
              type: "Measured",
            },
            {
              kpi: "Reusable via MCP",
              target:
                "Deterministic tools exposed over streamable-HTTP MCP with bearer-token auth, deliberately excluding the LLM loop itself to keep API spend bounded to the server owner's own calls.",
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
            title: "Calculation vs. judgment is the load-bearing pattern in this portfolio",
            body: "The insurance platform needed an interpretable scoring model because regulators require it. The quant trading system needed a RiskManager that vetoes the signal. This project needed deterministic tools because arithmetic errors are invisible in free text. Same architectural principle, three different domains — it's becoming a default I reach for whenever an AI system's output has to be defended to someone else.",
          },
          {
            title: "Deployment platform choice is a real design constraint, not an afterthought",
            body: "Moving this from an AWS App Runner design to Vercel wasn't just a config change — it meant dropping FastAPI's BackgroundTasks pattern (unreliable once a serverless instance can freeze right after responding), fixing a hidden read-only-filesystem assumption in three data-fetching modules, and discovering that a single stray .vercelignore file silently disables .gitignore, which is what was actually bundling a 316MB cache directory into every build. None of this shows up until you deploy for real.",
          },
          {
            title: "Currency and units break financial AI more often than the finance itself does",
            body: "The DCF and EV/EBITDA formulas are the easy part — they're well-defined and unit-tested. The failure mode that actually matters in a cross-market system is a silent USD/KRW mix-up or a 'millions vs. raw amount' error, which produces a confident, wrong number with no error message. The system prompt spends more words on unit discipline than on valuation methodology for exactly this reason.",
          },
          {
            title: "Building the tool once and exposing it twice compounds",
            body: "Wrapping the same deterministic tools in an MCP server (bearer-token gated, no LLM loop server-side) means the valuation primitives are directly usable from Claude Code or Claude Desktop, not locked inside this one project's CLI or web app. That's a small design decision with an outsized payoff — infrastructure that outlives the specific agent implementation built on top of it.",
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

export default function ValuationAgentCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Financial Technology · Valuation",
        industry: "FinTech · LLM Agent · Valuation",
        title: "AI Valuation Agent — DCF & EV/EBITDA Automation",
        subtitle:
          "A tool-calling LLM agent that produces auditable DCF and EV/EBITDA valuations across US and Korean markets — deterministic math, LLM judgment, and an MCP server for reuse beyond this one project. Deployed live on Vercel with Postgres-backed run history.",
        tags: [
          "LLM Agent",
          "Valuation",
          "DCF",
          "MCP",
          "Financial AI",
          "Python",
        ],
        github: "https://github.com/tayam08/valuation-agent-mvp",
        demo: "https://valuation-agent-mvp-nine.vercel.app",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
