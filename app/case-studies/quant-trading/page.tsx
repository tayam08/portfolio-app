import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "AI-driven Quant Trading System | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          Retail equity trading in Korea is structurally dominated by institutional players with
          systematic infrastructure. Individual investors without systematic frameworks make
          decisions driven by market noise, recency bias, and loss aversion — producing outcomes
          that consistently underperform simple index strategies.
        </p>
        <div className="space-y-0">
          {[
            {
              label: "Information Gap",
              detail:
                "Institutional quant desks run automated signal generation, risk management, and execution pipelines. Retail traders have access to the same markets but none of the systematic infrastructure.",
            },
            {
              label: "Behavioral Drag",
              detail:
                "Research consistently shows retail investors buy high (FOMO) and sell low (panic) — a behavioral pattern that systematic trading eliminates by removing discretion from execution.",
            },
            {
              label: "Missing Risk Framework",
              detail:
                "Without explicit position sizing rules, cash floor limits, and drawdown controls, a profitable signal strategy can still produce catastrophic portfolio outcomes.",
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
          The goal was to build a complete systematic trading system that: (1) generates signals
          transparently and rule-based, (2) enforces risk controls independently of signal logic,
          and (3) validates behavior in simulation before live deployment with the KIS Open API.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Signal Without Risk Management is Dangerous",
              body: "A strategy with a 55% win rate and no drawdown protection can still wipe out a portfolio on a losing streak. The problem was not finding alpha — it was building the infrastructure to preserve it.",
            },
            {
              title: "Live API Testing Requires Simulation Parity",
              body: "Testing directly against the KIS live API risks real capital on buggy code. The system needed a simulation layer (PaperBroker) with identical interface as the live broker (KISBroker) — enabling full validation before any real order execution.",
            },
            {
              title: "Audit Trail for Post-hoc Analysis",
              body: "Systematic trading requires a complete, structured log of every decision: signal generated, risk check result, order placed, order filled. Without this, debugging poor performance is impossible.",
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
          The architectural insight was that systematic trading is a pipeline problem — not a
          signal problem. The signal (moving average crossover) is the easiest component to
          specify and replace. The hard work is in the infrastructure around it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Risk Management > Signal Quality",
              insight:
                "A mediocre signal with good risk management (position limits, drawdown stops, cash floor) consistently outperforms a good signal with no risk controls. Risk infrastructure is the highest-leverage component.",
            },
            {
              principle: "Interface Abstraction Enables Safety",
              insight:
                "PaperBroker and KISBroker sharing an identical interface means the entire trading pipeline can run in simulation before a single real order is placed. This architectural choice makes live deployment safe.",
            },
            {
              principle: "Moving Average is Transparent Alpha",
              insight:
                "MA crossover is simple, explainable, and has documented performance characteristics. In financial contexts, explainability is a feature — black-box signals cannot be defended to risk committees.",
            },
            {
              principle: "Logging is Infrastructure, Not an Afterthought",
              insight:
                "Dual-format logging (CSV for analysis, JSONL for programmatic access) creates the data foundation for strategy iteration. Without a complete audit trail, improving the system is guesswork.",
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
          <strong className="text-ink">Strategic Analogy:</strong> The PaperBroker → KISBroker
          transition mirrors the staged deployment model in enterprise software: dev → staging →
          production. The same discipline that prevents bugs in production software prevents
          real capital loss in live trading.
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
            &ldquo;A modular pipeline architecture — where signal generation, risk management,
            and order execution are fully decoupled components with interchangeable implementations
            — enables systematic trading that is safe to develop, validate in simulation, and
            deploy against a live brokerage API with real capital.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Signal Layer",
              decision: "Moving average crossover — intentionally transparent and rule-based. Replaced without touching risk or execution layers.",
            },
            {
              layer: "Risk Layer",
              decision: "Hard constraints: cash floor, max position size, no short selling. Independent of signal logic — the system enforces risk even if signal is overriding.",
            },
            {
              layer: "Broker Layer",
              decision: "Abstract interface with two implementations: PaperBroker (in-memory simulation) and KISBroker (real API). Switching requires only changing one environment variable.",
            },
            {
              layer: "Log Layer",
              decision: "Every decision logged in CSV (for spreadsheet analysis) and JSONL (for programmatic processing). No decisions made without a trace.",
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
          Built the complete trading pipeline in Python, from market data ingestion through live
          order execution with the Korea Investment &amp; Securities (KIS) Open API.
        </p>
        <div className="space-y-0">
          {[
            {
              component: "MovingAverageStrategy",
              tech: "Python · pandas",
              role: "Computes short and long window moving averages from CSV price history. Generates BUY signal on golden cross (short crosses above long). Configurable window parameters.",
            },
            {
              component: "RiskManager",
              tech: "Position sizing · Cash floor",
              role: "Enforces three hard constraints: minimum cash reserve (prevents full portfolio deployment), maximum position size per ticker, no short selling. Risk checks veto signal output — risk manager always wins.",
            },
            {
              component: "PaperBroker",
              tech: "In-memory simulation",
              role: "Simulates order execution in memory with structured order result objects. Exact same interface as KISBroker — the entire pipeline runs identically in simulation and live modes.",
            },
            {
              component: "KISBroker",
              tech: "KIS Open API · OAuth",
              role: "Full integration with KIS Open API. OAuth token caching with one-minute rate limiting per KIS constraints. Supports market orders and limit orders. Intentionally excluded from automated Trader loop to prevent accidental real orders.",
            },
            {
              component: "TradeLogger",
              tech: "CSV · JSONL dual-format",
              role: "Logs every trade decision in two formats simultaneously. CSV for spreadsheet-based P&L analysis; JSONL for programmatic backtesting and strategy iteration.",
            },
          ].map((item) => (
            <div key={item.component} className="cs-kv-row items-start">
              <div className="w-44 flex-shrink-0">
                <p className="text-xs font-bold text-ink uppercase tracking-wider">
                  {item.component}
                </p>
                <p className="text-[11px] text-navy mt-1">{item.tech}</p>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{item.role}</p>
            </div>
          ))}
        </div>
        <div className="bg-ink-50 border border-ink-100 p-5 mt-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
            Live Validation
          </p>
          <p className="text-sm text-ink-500 mb-3">
            KISBroker validated end-to-end via a minimum test position: 1주 of 475300 @ ₩27,760
            (order no. 0010839900) — a single share purchased solely to confirm API authentication,
            order routing, and error handling under real market conditions. This was infrastructure
            validation, not capital deployment. Live authentication and balance queries confirmed
            functional; order rejection correctly handled with KIS error code APBK0952.
          </p>
          <p className="text-[11px] text-ink-400">
            Paper trading log: 005930 (삼성전자) · 11 simulated trades (7 BUY / 4 SELL) · ₩1M
            virtual starting capital · mode=PAPER via PaperBroker
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "business-impact",
    number: "06",
    title: "Validated Performance Targets",
    content: (
      <div className="space-y-6">
        <div className="bg-ink-50 border border-ink-200 p-3 text-xs text-ink-400">
          <strong className="text-ink">Scope note:</strong> There is no long-term live track
          record. The system has been validated at the infrastructure level — pipeline correctness,
          risk controls, and API integration. The metrics below are design targets for production
          deployment, not measured outcomes from sustained live trading.
        </div>
        <p>
          The system validated systematic trading infrastructure — a foundation for measurable
          performance evaluation. Key performance metrics for production deployment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              kpi: "Sharpe Ratio",
              target: "Target > 1.5",
              desc: "Return per unit of risk. Benchmark: KOSPI buy-and-hold ~0.6",
            },
            {
              kpi: "Max Drawdown",
              target: "Guardrail < 10%",
              desc: "Peak-to-trough loss ceiling enforced by RiskManager cash floor",
            },
            {
              kpi: "Hit Ratio",
              target: "Baseline ~52%",
              desc: "MA crossover win rate; sufficient with asymmetric risk/reward sizing",
            },
          ].map((item) => (
            <div key={item.kpi} className="cs-impact-card">
              <p className="text-sm font-bold text-navy mb-1">{item.kpi}</p>
              <p className="text-xs font-semibold text-ink mb-1.5">{item.target}</p>
              <p className="text-[11px] text-ink-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0">
          {[
            {
              dimension: "Execution Latency",
              impact: "KIS API round-trip validated at acceptable latency. Rate limiting (1-min token cache) handled without dropped orders — a critical production requirement.",
            },
            {
              dimension: "Risk Control Validation",
              impact: "RiskManager constraints tested against edge cases: maximum position size, cash floor enforcement, and order rejection handling. All constraints held in simulation and live modes.",
            },
            {
              dimension: "Extensibility",
              impact: "Modular architecture enables signal replacement without touching risk or broker layers. The next strategy — momentum, mean-reversion, or ML-based — inherits the full risk and execution infrastructure.",
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
            title: "Risk management is the product; signal is the input",
            body: "The instinct is to optimize the signal — find better alpha. The lesson from building this system is that risk infrastructure determines whether alpha is captured or destroyed. A robust RiskManager with a mediocre signal outperforms a sophisticated signal with no drawdown protection.",
          },
          {
            title: "Interface abstraction is a risk management principle",
            body: "The PaperBroker / KISBroker abstraction is not just good software engineering — it is a risk management principle. You do not deploy untested code to production; you do not execute untested strategies with real capital. The architectural pattern enforces the discipline.",
          },
          {
            title: "Explainability is a feature in regulated contexts",
            body: "Moving average crossover is not the most sophisticated signal. But it is transparent, testable, and explainable — critical properties in financial contexts where risk committees require an intelligible account of every position taken. Black-box strategies fail regulatory review.",
          },
          {
            title: "The pipeline architecture applies beyond trading",
            body: "Market Data → Signal → Risk → Execution → Logging maps directly to any AI-driven decision system: Input → Model → Constraints → Action → Audit Trail. The trading system is a general template for responsible AI deployment in financial services.",
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

export default function QuantTradingCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Financial Technology · Quant Trading",
        industry: "FinTech · Systematic Trading · KIS Open API",
        title: "AI-driven Quant Trading System",
        subtitle:
          "Modular systematic trading pipeline with KIS Open API integration — signal generation, risk management, and live execution with full simulation validation",
        tags: [
          "Systematic Trading",
          "Financial Technology",
          "Risk Management",
          "KIS Open API",
          "Python",
          "FinTech",
        ],
        github: "https://github.com/tayam08/kis-trading",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
