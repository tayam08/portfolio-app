import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Writing | Taebeen Am",
};

const articles = [
  {
    number: "01",
    category: "InsurTech",
    title: "What I Learned from Building an Insurance AI Platform",
    excerpt:
      "The hardest problem wasn't the model — it was convincing non-technical stakeholders that an AI-generated risk score is trustworthy enough to act on. Lessons from an industry-academia (산학협력) project.",
    readTime: "5 min",
    href: "/writing/insurance-ai-platform",
  },
  {
    number: "02",
    category: "Digital Transformation",
    title: "Why AI Changes the Economics of Financial Services",
    excerpt:
      "When the marginal cost of AI-generated financial analysis approaches zero, the constraint that decides who wins shifts from data access to trustworthy interface design.",
    readTime: "6 min",
    href: "/writing/ai-financial-economics",
  },
  {
    number: "03",
    category: "Strategy",
    title: "GTM Lessons from Pivoting Two AI Products in Korea",
    excerpt:
      "A 3% cold-email response rate taught me more about GTM strategy than any amount of iterating on the product itself — because it forced a conversation with the actual gatekeeper.",
    readTime: "6 min",
    href: "/writing/b2b-gtm-lessons",
  },
  {
    number: "04",
    category: "Insurance",
    title: "How Digital Transformation Reshapes the Insurance Value Chain",
    excerpt:
      "The white space isn't the whole value chain at once — it's the one node rigid enough to be a bottleneck and modular enough to fix in isolation.",
    readTime: "6 min",
    href: "/writing/insurance-value-chain",
  },
  {
    number: "05",
    category: "Career",
    title: "Why Corporate Strategy Interests Me More Than Startups",
    excerpt:
      "The skill I keep enjoying across every project — insurance, automotive, real estate, EdTech — is reframing an ambiguous problem, not committing to one bet and executing it.",
    readTime: "4 min",
    href: "/writing/why-corporate-strategy",
  },
  {
    number: "06",
    category: "AI & Finance",
    title: "The Case for AI Augmentation in Credit Analysis",
    excerpt:
      "Small business owners rarely lack access to credit products — they lack the ability to read their own cash flow. That reframing changes what the AI should actually build.",
    readTime: "6 min",
    href: "/writing/ai-credit-analysis",
  },
];

const topics = ["InsurTech", "Digital Transformation", "Strategy", "AI & Finance", "GTM", "Consulting"];

export default function WritingPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow mb-4">Writing</p>
        <h1 className="text-5xl font-bold tracking-tight text-ink mb-5">Insights</h1>
        <p className="text-lg text-ink-500 leading-relaxed">
          Short articles on strategy, digital transformation, AI, and the industries I study.
          Writing helps me think more clearly — and leaves a trail of how my thinking evolves.
        </p>
      </div>

      <div className="section-rule mb-12" />

      {/* Topic filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {topics.map((topic) => (
          <span key={topic} className="framework-pill">
            {topic}
          </span>
        ))}
      </div>

      {/* Article list */}
      <div className="divide-y divide-ink-100">
        {articles.map((article) => (
          <Link
            key={article.number}
            href={article.href}
            className="flex items-start gap-8 py-10 group hover:bg-white/60 px-3 -mx-3 transition-colors"
          >
            <span className="text-xs font-mono text-ink-300 mt-1 w-7 flex-shrink-0">
              {article.number}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink-400">
                  {article.category}
                </p>
              </div>
              <h2 className="text-xl font-bold text-ink mb-3 group-hover:text-navy transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-ink-500 leading-relaxed max-w-2xl">
                {article.excerpt}
              </p>
              <p className="text-xs text-ink-300 mt-3">{article.readTime} read</p>
            </div>

            <div className="flex-shrink-0 self-center">
              <ArrowUpRight
                size={18}
                className="text-ink-300 group-hover:text-navy transition-colors"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
