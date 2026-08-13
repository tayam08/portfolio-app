import Link from "next/link";
import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata = {
  title: "The Case for AI Augmentation in Credit Analysis | Taebeen Am",
};

const sections = [
  {
    heading: "Credit analysis is a narrative problem, not just a scoring problem",
    content: (
      <p>
        At a fin:AI hackathon with JB Financial Group, I designed an AI CFO
        dashboard for small business owners. The instinct going in was to build a
        better loan-recommendation engine. User research said otherwise: a small
        business owner rarely lacks access to financial products. What they lack is
        the ability to read their own cash flow well enough to know what to ask
        for in the first place.
      </p>
    ),
  },
  {
    heading: "Diagnosis before recommendation",
    content: (
      <p>
        That reframing changed the whole product structure — from a
        recommendation engine into a diagnose &rarr; compare options &rarr; connect to
        advisory pipeline. The diagnosis step used local operating data (even
        regional festival calendars, as a proxy for foot-traffic revenue swings)
        to surface a cash-flow narrative the owner could actually act on, before
        any product was recommended. LLMs are well-suited to exactly this kind of
        work: synthesizing messy, unstructured signals into a coherent narrative
        a non-specialist can trust, which is a different task than producing a
        single numeric score.
      </p>
    ),
  },
  {
    heading: "Architecture still matters more than model sophistication",
    content: (
      <p>
        The same principle I learned building an insurance risk model applies
        here: a single black-box model is brittle when the person reading the
        output has to defend a financial decision to someone else. A rule-based
        layer combined with LLM-generated advisory narrative — rather than a
        single end-to-end model — keeps the diagnosis explainable while still
        getting the benefit of LLM synthesis. I built and deployed exactly this
        combination in a{" "}
        <Link href="/case-studies/finance" className="text-navy underline underline-offset-2">
          personal credit risk diagnosis platform
        </Link>
        , live at finance-risk-app.vercel.app.
      </p>
    ),
  },
  {
    heading: "Why I'm studying credit analysis alongside this",
    content: (
      <p>
        Prompt engineering can make an LLM sound confident about a financial
        narrative it doesn&rsquo;t actually understand. I&rsquo;m working through the credit
        analyst (신용분석사) certification in parallel, specifically so the
        underlying accounting and financial logic behind an AI-generated diagnosis
        is something I can verify myself — not just something I trust the model to
        get right.
      </p>
    ),
  },
];

export default function AICreditAnalysisArticle() {
  return (
    <ArticleTemplate
      meta={{
        category: "AI & Finance",
        title: "The Case for AI Augmentation in Credit Analysis",
        subtitle:
          "Small business owners rarely lack access to credit products — they lack the ability to read their own cash flow. That reframing changes what the AI should actually build.",
        readTime: "6 min",
        tags: ["AI & Finance", "Credit Analysis", "LLM"],
      }}
      sections={sections}
    />
  );
}
