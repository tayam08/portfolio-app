import Link from "next/link";
import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata = {
  title: "How Digital Transformation Reshapes the Insurance Value Chain | Taebeen Am",
};

const sections = [
  {
    heading: "Not every node breaks at once",
    content: (
      <p>
        The traditional insurance value chain runs distribution &rarr; underwriting
        &rarr; claims &rarr; servicing. It&rsquo;s tempting to assume digital transformation
        disrupts all four simultaneously, but in practice the white space shows up
        node by node, and the first one worth attacking is the one where the
        existing structure is both the most rigid and the most independently
        improvable.
      </p>
    ),
  },
  {
    heading: "Why underwriting was the right entry point",
    content: (
      <p>
        The insurance AX project I worked on targeted risk scoring specifically,
        because the existing model was monolithic — a single structure that
        couldn&rsquo;t update or re-weight one risk type (say, behavioral health signals)
        without touching the whole model. Splitting it into independent modules,
        each scored separately and combined through regression, meant the
        underwriting node could now evolve on its own schedule instead of waiting
        for a full model retrain. That&rsquo;s the general shape of value-chain digital
        transformation: decompose a bundled process into independently improvable
        modules, then transform the highest-friction module first.
      </p>
    ),
  },
  {
    heading: "Regulation defines the shape of the white space",
    content: (
      <p>
        Four regulations — including the Financial Company Governance Act, the
        Credit Information Act, and IFRS17 — determined which data and which
        inference paths were usable before any modeling started. That&rsquo;s not a
        constraint layered on top of the transformation; it&rsquo;s what actually draws
        the boundary of where the white space is. In a regulated value chain,
        mapping compliance first is the same exercise as mapping opportunity.
      </p>
    ),
  },
  {
    heading: "The broader pattern",
    content: (
      <p>
        Insurers don&rsquo;t need to digitize distribution, underwriting, claims, and
        servicing all at once, and most can&rsquo;t. The more realistic path is
        identifying which single node is rigid enough to be a real bottleneck and
        modular enough to be improved in isolation — then proving the model there
        before expanding outward. More detail on how this played out is in the{" "}
        <Link href="/case-studies/insurance" className="text-navy underline underline-offset-2">
          Insurance Digital Transformation case study
        </Link>
        .
      </p>
    ),
  },
];

export default function InsuranceValueChainArticle() {
  return (
    <ArticleTemplate
      meta={{
        category: "Insurance",
        title: "How Digital Transformation Reshapes the Insurance Value Chain",
        subtitle:
          "The white space isn't the whole value chain at once — it's the one node rigid enough to be a bottleneck and modular enough to fix in isolation.",
        readTime: "6 min",
        tags: ["Insurance", "Value Chain", "Digital Transformation"],
      }}
      sections={sections}
    />
  );
}
