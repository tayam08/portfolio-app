import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Quant Trading Data Pipeline | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          Korean equity market (KOSPI + KOSDAQ) represents approximately KRW 2,000T in market
          capitalization. Python democratization has made quantitative strategy development
          accessible to individual researchers — but the data infrastructure gap between
          institutional and retail systematic traders remains structurally wide.
        </p>
        <div className="space-y-0">
          {[
            {
              trend: "Institutional Baseline",
              detail:
                "Institutional quant desks have automated, reliable data pipelines as baseline infrastructure. Research analysts spend time on alpha generation, not data collection.",
            },
            {
              trend: "Retail Data Cost",
              detail:
                "Professional-grade Korean equity data costs ₩500,000–₩2,000,000+ per month through providers like FnGuide or Koscom — effectively excluding retail systematic traders from institutional-quality historical data.",
            },
            {
              trend: "Manual Overhead Status Quo",
              detail:
                "Without an automated pipeline, every backtesting session begins with a manual data collection step. Each session introduces inconsistency risk and consumes analyst time that should be spent on strategy research.",
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
            { label: "KOSPI+KOSDAQ Market Cap", value: "₩2,000T" },
            { label: "Professional Data Cost/Mo", value: "₩500K–₩2M" },
            { label: "Retail Pipeline Gap", value: "Total" },
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
          The retail quant&rsquo;s data problem has two compounding dimensions that undermine
          any systematic trading strategy before it is even tested:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Collection Overhead",
              body: "Manual data downloads are time-consuming, error-prone, and non-reproducible. Every backtesting session begins with a data preparation step that consumes analyst time rather than generating alpha. The opportunity cost compounds over every research session.",
            },
            {
              title: "Consistency Risk",
              body: "Inconsistent data collection creates survivorship bias and look-ahead bias in backtests. A strategy that appears profitable on manually collected data may be exploiting data collection artifacts rather than genuine market inefficiency. Bad data generates false confidence — which becomes real losses.",
            },
            {
              title: "Korean Market Specifics",
              body: "Korean market microstructure (circuit breakers, T+2 settlement, price limits ±30%) requires domain-specific handling that generic quant frameworks don't account for. Without proper handling, standard data processing produces corrupted signals.",
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
          The core insight: <strong className="text-ink">Infrastructure before alpha.</strong>
          {" "}No strategy research is valid on unreliable data. Building the collection and
          standardization pipeline is not preliminary work — it is the precondition for all
          subsequent quantitative research to be meaningful.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              principle: "Bad Data = False Signals",
              insight:
                "A backtest result is only as reliable as the data it runs on. Look-ahead bias and survivorship bias from manual collection create systematically optimistic backtests — leading to live deployment of strategies that were never valid.",
            },
            {
              principle: "yfinance Closes the Access Gap",
              insight:
                "Yahoo Finance's API now provides reasonably comprehensive Korean equity data at zero cost. The access gap is not closed by paid providers — it is closed by systematic collection infrastructure built on top of available free data.",
            },
            {
              principle: "Automation Compounds Research Velocity",
              insight:
                "One week of pipeline engineering eliminates recurring data preparation overhead indefinitely. The opportunity cost of not building infrastructure compounds over time — every manual collection session is a tax on future research velocity.",
            },
            {
              principle: "Validation Must Be Automated",
              insight:
                "Automated collection without automated validation creates a false sense of data reliability. Schema checks, range validation, and continuity verification must be built into the pipeline — not checked manually after the fact.",
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
            &ldquo;If daily and hourly OHLCV data for major Korean equities is collected,
            standardized, and stored automatically — with zero manual intervention — quantitative
            strategy research can begin from a reliable data foundation rather than spending
            analyst time on data preparation before every research session.&rdquo;
          </p>
        </div>
        <div className="space-y-0 mt-3">
          {[
            {
              layer: "Data Source",
              decision:
                "yfinance as the primary source — zero cost, adequate coverage for Korean equities (삼성전자, SK하이닉스, KOSPI components). Acceptable quality for strategy research; institutional quality available as upgrade path.",
            },
            {
              layer: "Collection Scope",
              decision:
                "Daily + hourly OHLCV. Daily for strategy backtesting; hourly for intraday pattern research. Configurable ticker list enables targeted expansion as research scope grows.",
            },
            {
              layer: "Storage Format",
              decision:
                "CSV for direct pandas ingestion in backtesting workflows. No database overhead at this scale — simple, portable, directly compatible with existing quant toolchains.",
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
          Built a three-component automated data pipeline: collection engine, processing and
          standardization, and scheduled automation — eliminating all manual data preparation overhead.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Collection Engine",
              tech: "Python · yfinance",
              role: "Automated daily and hourly OHLCV data collection for Korean equity universe. Configurable ticker list enables targeted collection as research scope expands. Error handling for market holidays and API failures.",
            },
            {
              layer: "Data Processing",
              tech: "pandas · NumPy",
              role: "Standardization, missing data handling, corporate action adjustment (splits, dividends). Korean market-specific handling: circuit breaker filtering, price limit detection. Clean data stored in consistent CSV format for direct backtest ingestion.",
            },
            {
              layer: "Pipeline Automation",
              tech: "Python scheduler",
              role: "Scheduled daily collection with structured error logging. Pipeline runs without manual intervention — freeing analyst time for strategy research rather than data maintenance.",
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
          Stack: Python · yfinance · pandas · NumPy · Python scheduler
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { before: "Manual per session", after: "Automated daily", metric: "Data Collection" },
            { before: "Variable quality", after: "Consistent schema", metric: "Data Reliability" },
            { before: "₩500K–₩2M/mo", after: "Zero marginal cost", metric: "Data Access Cost" },
          ].map((item) => (
            <div key={item.metric} className="cs-impact-card">
              <p className="text-[10px] text-ink-400 uppercase tracking-wider mb-3">
                {item.metric}
              </p>
              <p className="text-xs text-ink-400 mb-1 line-through">{item.before}</p>
              <p className="text-lg font-bold text-navy">{item.after}</p>
            </div>
          ))}
        </div>
        <div className="space-y-0 mt-2">
          {[
            {
              dimension: "Research Velocity",
              impact:
                "Analyst time previously spent on data collection now redirected to strategy research. Infrastructure investment pays compound returns — every research session benefits from the one-time pipeline build.",
            },
            {
              dimension: "Backtest Validity",
              impact:
                "Consistent, automated collection eliminates survivorship bias and look-ahead bias introduced by manual collection artifacts. Backtest results reflect strategy performance — not data preparation decisions.",
            },
            {
              dimension: "Extensibility",
              impact:
                "Configurable ticker list enables scope expansion to KOSDAQ, derivatives, or sector-specific universes without pipeline redesign. Alternative data integration (DART filings, options flow) is the natural next layer.",
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
            title: "Infrastructure investment pays compound returns",
            body: "One week of pipeline engineering eliminates recurring data preparation overhead indefinitely. Every research session that uses clean, reliable data is a return on that infrastructure investment. The analogy to business systems is exact: operational automation that eliminates recurring manual work compounds faster than any optimization of the manual process itself.",
          },
          {
            title: "Automated collection without automated validation creates false confidence",
            body: "An automated pipeline that collects bad data and stores it cleanly is more dangerous than manual collection — because it looks reliable. Schema checks, range validation, and continuity verification must be first-class citizens in the pipeline design, not afterthoughts. The validation layer is what makes the infrastructure trustworthy.",
          },
          {
            title: "Korean market microstructure requires local knowledge",
            body: "Generic quant frameworks assume market structures that don't apply in Korea: different circuit breaker mechanics, ±30% daily price limits, Jeonse-driven real estate-equity correlations, chaebol ownership structure effects. Local market knowledge is a genuine, persistent data advantage — understanding the microstructure is part of the alpha.",
          },
          {
            title: "Data pipeline is the foundation for the quant-trading system",
            body: "The automated data collection pipeline built here became the data layer for the KIS Open API trading system — providing the historical price data for moving average strategy backtesting. Infrastructure work is never isolated; it compounds into every subsequent system that depends on it.",
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

export default function DataAnalysisCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "Quantitative Finance · Data Infrastructure",
        industry: "FinTech · Quant Research · Data Engineering",
        title: "Quant Trading Data Pipeline",
        subtitle:
          "Automated Korean equity market data infrastructure — institutional-grade collection at zero marginal cost for systematic strategy research",
        tags: ["Quantitative Finance", "Python", "yfinance", "pandas", "Data Pipeline"],
        githubDisabled: true,
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
