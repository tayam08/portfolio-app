import CaseStudyTemplate, { CaseStudySection } from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "LLM Architecture Design for Financial AI | Taebeen Am",
};

const sections: CaseStudySection[] = [
  {
    id: "before",
    number: "01",
    title: "Before",
    content: (
      <div className="space-y-5">
        <p>
          LLMs had become commoditized API calls for most business strategists. Teams
          recommended &ldquo;add GPT&rdquo; to products without understanding what the
          architecture actually does — or doesn&rsquo;t do.
        </p>
        <div className="space-y-0">
          {[
            {
              label: "Business Symptom",
              detail:
                "Strategy decks recommended deploying LLMs with no specification of context window, model size, or inference cost — leading to blown budgets and failed POCs in financial services.",
            },
            {
              label: "Missing Framework",
              detail:
                "No standard framework existed for translating architecture parameters (layers, heads, context length, tokenizer) into business trade-offs (cost, latency, accuracy, compliance).",
            },
            {
              label: "Decision Gap",
              detail:
                "Buy vs. build vs. fine-tune decisions were made on marketing collateral rather than architectural understanding — a systematic failure mode in enterprise AI adoption.",
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
          The core problem: business strategists advising on LLM adoption in financial services
          lacked a conceptual model for how transformers actually work — making it impossible to
          reason about deployment cost, latency SLAs, or compliance risk with precision.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Architecture → Cost Blindness",
              body: "Context window size drives inference cost quadratically. A strategist recommending 128K-token context for financial document analysis without understanding this has implicitly chosen a cost structure they cannot defend.",
            },
            {
              title: "Latency Misalignment",
              body: "Model depth (layers and attention heads) determines inference latency. Real-time trading signals need sub-100ms inference; compliance report generation can tolerate 30 seconds. Without architecture knowledge, these requirements cannot be translated into model specifications.",
            },
            {
              title: "Fine-tuning Economics",
              body: "Full fine-tuning vs. LoRA vs. RAG vs. prompt engineering have dramatically different cost and performance profiles. Making the right choice requires understanding what each layer of the model actually learns.",
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
          Every architectural parameter in a transformer decoder maps directly to a business
          constraint. Building one from scratch reveals this mapping concretely — turning the
          &ldquo;black box&rdquo; into a legible set of trade-offs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              param: "Context Window",
              business: "Inference cost scales ~quadratically. 4K tokens = cheap, fast. 128K tokens = expensive, slow. Financial document length determines the right window — not default settings.",
            },
            {
              param: "Attention Heads",
              business: "More heads = richer multi-faceted understanding, higher latency. For financial text, 4–8 heads often sufficient. 32+ heads rarely justified by marginal quality gain.",
            },
            {
              param: "Model Depth (Layers)",
              business: "Each layer adds inference latency. Deep models understand complex reasoning; shallow models serve well for structured extraction. Compliance use cases tolerate depth; trading signals do not.",
            },
            {
              param: "Tokenization Method",
              business: "BPE tokenization compresses financial terminology efficiently. Character-level requires 3–5x more tokens for same text — directly multiplying inference cost.",
            },
            {
              param: "Parameter Count",
              business: "7B params: on-premise viable, private data safe. 70B+: cloud-only, high latency, data leaves network. Regulatory requirements often force on-premise — which constrains model size.",
            },
            {
              param: "Temperature Sampling",
              business: "Low temperature (0.2–0.4): consistent, deterministic — suitable for regulatory reports. High temperature (0.8+): creative, varied — suitable for client communication drafts.",
            },
          ].map((item) => (
            <div key={item.param} className="bg-white border border-ink-100 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2">
                {item.param}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">{item.business}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-500 bg-ink-50 p-4 border-l-2 border-ink-200">
          <strong className="text-ink">Strategic Conclusion:</strong> A strategist who
          understands transformer architecture can specify deployment requirements with the
          same precision as an engineer — translating business constraints (budget, latency,
          compliance) directly into model selection criteria.
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
            &ldquo;Building a GPT-style language model from scratch — implementing every
            component rather than calling an API — will produce a concrete, intuition-backed
            framework for translating LLM architecture parameters into financial AI deployment
            decisions: cost, latency, accuracy, and compliance.&rdquo;
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-ink">Design Decisions</p>
          {[
            "Character-level tokenization: forces understanding of vocabulary size and its impact on sequence length, cost, and memory",
            "Minimal configuration (4 layers, 128-dim, 128-token context): isolates each parameter's effect on output quality",
            "Full implementation: embeddings → multi-head attention → FFN → LM head → training loop — no abstractions hiding the mechanics",
            "PyTorch over Hugging Face: working at tensor level makes attention masks, positional encodings, and gradient flow visible",
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
          Implemented a complete GPT-2 style transformer decoder in PyTorch, building every
          component from primitive tensor operations to trained text generation.
        </p>
        <div className="space-y-0">
          {[
            {
              layer: "Tokenizer",
              tech: "Character-level · 45-token vocab",
              role: "Custom character tokenizer on 4,283-char corpus. Deliberate choice: forces understanding of vocabulary size, OOV handling, and sequence length inflation compared to BPE.",
            },
            {
              layer: "Embeddings",
              tech: "Token + Positional · 128-dim",
              role: "Token embedding table (45 × 128) + learned positional encodings (128 × 128). Positional encoding critical for autoregressive generation — without it, the model has no sense of order.",
            },
            {
              layer: "Multi-Head Attention",
              tech: "4 heads · Causal mask",
              role: "Causal (lower-triangular) attention mask prevents positions from attending to future tokens. This is the architectural feature that enables autoregressive generation — and the primary inference cost driver.",
            },
            {
              layer: "Transformer Blocks",
              tech: "4 layers · GELU · Residuals",
              role: "4 decoder blocks, each with multi-head attention + feed-forward network + layer norm + residual connections. Residuals enable deep training; layer norm stabilizes gradient flow.",
            },
            {
              layer: "Training Loop",
              tech: "Cross-entropy · Checkpoints",
              role: "Next-token prediction with cross-entropy loss. Temperature-controlled sampling (default 0.8) at inference. Checkpoint saving and loss logging for training curve analysis.",
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {[
            { label: "Parameters", value: "~821K" },
            { label: "Layers", value: "4" },
            { label: "Context Window", value: "128 tokens" },
            { label: "Attention Heads", value: "4" },
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
    title: "Business Impact",
    content: (
      <div className="space-y-6">
        <p>
          The primary output is not a deployed product — it is a decision framework for
          evaluating LLM architecture choices in financial AI contexts.
        </p>
        <div className="bg-ink-50 border border-ink-200 p-4 text-sm text-ink-500 leading-relaxed">
          <strong className="text-ink">How a ~822K-parameter toy model informs 70B+ deployment decisions:</strong>{" "}
          This framework was derived in two steps. First, building the small model from scratch produced
          concrete architectural intuitions — how context window length drives attention computation cost,
          how layer depth compounds inference latency, how temperature sampling shifts output distribution.
          These are not theoretical claims; they are behaviors I observed while tuning the model.
          Second, those intuitions were mapped against publicly available inference benchmarks
          (per-token latency and cost data by parameter scale) to translate qualitative effects into
          quantitative deployment specs. The 822K model is intentionally minimal to isolate each
          parameter's effect — scale equivalence to production is not the point. Architectural
          intuition is.
        </div>
        <div className="space-y-0">
          {[
            {
              useCase: "Real-time Trading Signal",
              requirements: "Context: 4K–8K tokens / Model: ≤7B params / Latency: <100ms / Deployment: on-premise",
              rationale: "Strict latency SLA eliminates large models. On-premise required for proprietary signal data.",
            },
            {
              useCase: "Insurance Risk Scoring",
              requirements: "Context: 8K–32K tokens / Model: 7B–13B / Latency: <3s / Deployment: private cloud",
              rationale: "Moderate latency tolerance allows larger model. Regulatory compliance drives private deployment.",
            },
            {
              useCase: "Regulatory Report Drafting",
              requirements: "Context: 32K–128K tokens / Model: 70B+ / Latency: <60s / Fine-tuning: LoRA",
              rationale: "Long documents require large context. Quality over speed. LoRA fine-tuning on domain corpus improves accuracy at fraction of full fine-tune cost.",
            },
            {
              useCase: "Client Communication",
              requirements: "Context: 4K–16K tokens / Model: 7B–13B / Temperature: 0.6–0.8 / Deployment: SaaS API",
              rationale: "Moderate temperature for natural variation. SaaS acceptable — no proprietary data in this workflow.",
            },
          ].map((item) => (
            <div key={item.useCase} className="bg-white border border-ink-100 p-5">
              <p className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                {item.useCase}
              </p>
              <p className="text-sm font-mono text-ink-600 mb-2 bg-ink-50 px-3 py-2">
                {item.requirements}
              </p>
              <p className="text-xs text-ink-400 leading-relaxed">{item.rationale}</p>
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
            title: "Building it changes how you evaluate it",
            body: "Reading about attention mechanisms is different from implementing causal masks in PyTorch. Once you've manually constructed the attention matrix and watched how it changes with context length, vendor claims about 'advanced attention' become legible — not opaque marketing.",
          },
          {
            title: "Inference cost is the hidden risk in AI strategy",
            body: "Most LLM business cases focus on accuracy and speed. The underappreciated variable is inference cost at scale. A context window decision made in a POC can create a 10x cost difference in production — an architectural choice dressed as a product feature.",
          },
          {
            title: "The strategist's advantage: translating both directions",
            body: "The value of architectural understanding for a business strategist is bidirectional: translating business requirements into model specifications, and translating engineering constraints into strategic trade-offs. Both directions are required for credible AI strategy in financial services.",
          },
          {
            title: "Character-level vs. BPE is a microcosm of build vs. buy",
            body: "Character-level tokenization is simpler to implement but worse in practice — BPE compresses text far more efficiently for natural language. This mirrors the broader build vs. buy question: sometimes the simpler architecture is right for learning, and the optimized solution is right for production.",
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

export default function MinigptCaseStudy() {
  return (
    <CaseStudyTemplate
      meta={{
        category: "AI Systems · LLM Architecture",
        industry: "AI Infrastructure · Financial AI · LLM Design",
        title: "LLM Architecture Design for Financial AI Applications",
        subtitle:
          "Building a GPT-2 style transformer from scratch to derive a business decision framework for LLM deployment in financial services",
        tags: [
          "LLM Architecture",
          "Transformer Design",
          "Financial AI",
          "PyTorch",
          "AI Strategy",
          "Deployment Economics",
        ],
        github: "https://github.com/tayam08/minigpt",
        reportDisabled: true,
      }}
      sections={sections}
    />
  );
}
