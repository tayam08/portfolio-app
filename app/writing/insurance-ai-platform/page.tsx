import Link from "next/link";
import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata = {
  title: "What I Learned from Building an Insurance AI Platform | Taebeen Am",
};

const sections = [
  {
    heading: "The bottleneck wasn't the model",
    content: (
      <>
        <p>
          On the insurance AX industry-academia project, my team lead proposed the
          conventional path: encode 60,000 consumer records — demographics, medical
          history, behavioral variables like sleep irregularity and medication
          patterns — into a compressed representation, then train a machine learning
          model on top. It&rsquo;s the technically sound choice, and on paper it should
          outperform anything simpler.
        </p>
        <p>
          I pushed back with a modular alternative instead: split risk into
          independent modules, score each with a tree structure, and combine them
          through regression. Three reasons drove it — API cost at scale, compute
          efficiency, and how well it would integrate with the web interface our
          non-technical end users would actually touch. None of those are modeling
          questions. They&rsquo;re deployment questions, and they mattered more than the
          model itself.
        </p>
      </>
    ),
  },
  {
    heading: "Explainability beat sophistication",
    content: (
      <p>
        The decisive argument wasn&rsquo;t accuracy — it was that a financial risk score
        has to answer &ldquo;why did this number come out this way,&rdquo; and an encoder
        collapses that answer into a black box. I brought a side-by-side comparison
        of cost, compute, and explainability to the partner company, and the
        regression-based design was adopted. The lesson generalizes past insurance:
        when the audience for a model is a non-technical stakeholder who has to
        defend a decision, a slightly less powerful but fully explainable model beats
        a more powerful opaque one almost every time.
      </p>
    ),
  },
  {
    heading: "Compliance has to run in parallel, not after",
    content: (
      <p>
        Before writing a line of the scoring logic, I read through four pieces of
        regulation — including the Financial Company Governance Act, the Credit
        Information Act, and IFRS17 — to understand which variables and inference
        paths were even usable. Treating compliance as a design input rather than a
        post-hoc review is what kept the architecture from having to be rebuilt
        later. In a regulated industry, the legal review isn&rsquo;t overhead on top of
        the technical work — it&rsquo;s part of the technical spec.
      </p>
    ),
  },
  {
    heading: "The real lesson",
    content: (
      <p>
        Building the model was the easy part. The hard part was convincing people
        who don&rsquo;t read model architecture diagrams that the score in front of them
        was trustworthy enough to act on. Every design decision I made after
        realizing that — modular over monolithic, regression over encoder,
        compliance-first over compliance-after — was really the same decision made
        three times: optimize for trust, not for the model&rsquo;s theoretical ceiling.
        The full build-out of this project is documented in the{" "}
        <Link href="/case-studies/insurance" className="text-navy underline underline-offset-2">
          Insurance Digital Transformation case study
        </Link>
        .
      </p>
    ),
  },
];

export default function InsuranceAIPlatformArticle() {
  return (
    <ArticleTemplate
      meta={{
        category: "InsurTech",
        title: "What I Learned from Building an Insurance AI Platform",
        subtitle:
          "The hardest problem wasn't the model — it was convincing non-technical stakeholders that an AI-generated risk score is trustworthy enough to act on.",
        readTime: "5 min",
        tags: ["InsurTech", "Risk Scoring", "Explainability", "Compliance"],
      }}
      sections={sections}
    />
  );
}
