import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata = {
  title: "Why Corporate Strategy Interests Me More Than Startups | Taebeen Am",
};

const sections = [
  {
    heading: "A question I kept circling back to",
    content: (
      <p>
        I spent two years preparing for the patent attorney exam, sitting at the
        intersection of IP law and technology commercialization. What stuck with me
        wasn&rsquo;t the legal doctrine — it was that the question I found myself asking
        about every technology wasn&rsquo;t &ldquo;how is this built,&rdquo; but &ldquo;how does this
        turn into defensible business value.&rdquo; That&rsquo;s a strategy question, not an
        engineering one, and it&rsquo;s the question that pulled me away from wanting to
        be the person who builds the technology.
      </p>
    ),
  },
  {
    heading: "The moment I actually enjoyed, across every project",
    content: (
      <p>
        Across an SDV strategy project for a legacy automaker, an insurance AX
        platform, a real estate platform, and an EdTech scoring tool — four
        completely different industries — the moment I got the most satisfaction
        was never shipping the artifact. It was structuring the problem: deciding
        that risk needed to be modular instead of monolithic, deciding that the real
        pain point was trust rather than computation, deciding that Acquire,
        Operate, and Retention weren&rsquo;t three separate problems but one growth
        system. Different industries, same recurring skill.
      </p>
    ),
  },
  {
    heading: "Startups reward one bet. Corporate strategy rewards structuring many.",
    content: (
      <p>
        A startup asks you to commit to conviction on a single bet and execute it
        relentlessly. What I actually enjoy is closer to what a Project Owner
        challenge from an AI startup asked of me once: given seven loosely defined
        bottlenecks — customer acquisition, AI operations, retention — the useful
        move wasn&rsquo;t picking one, it was noticing they were really one growth
        structure in disguise and re-defining the problem before proposing a
        solution. That kind of judgment — reframing an ambiguous problem across
        many possible bets — is scarcer and more transferable at the scale of a
        large organization&rsquo;s portfolio decisions than at the scale of a single
        startup&rsquo;s one bet.
      </p>
    ),
  },
  {
    heading: "Why this points at consulting",
    content: (
      <p>
        Companies rarely fail from a lack of solutions. They fail from solving the
        wrong problem well. Defining the problem correctly, before anyone commits
        resources to solving it, is the single highest-leverage skill I keep coming
        back to enjoying — and it&rsquo;s exactly what corporate strategy work asks for
        at a scale no single startup bet can offer.
      </p>
    ),
  },
];

export default function WhyCorporateStrategyArticle() {
  return (
    <ArticleTemplate
      meta={{
        category: "Career",
        title: "Why Corporate Strategy Interests Me More Than Startups",
        subtitle:
          "The skill I keep enjoying across every project — insurance, automotive, real estate, EdTech — is reframing an ambiguous problem, not committing to one bet and executing it.",
        readTime: "4 min",
        tags: ["Career", "Corporate Strategy", "Consulting"],
      }}
      sections={sections}
    />
  );
}
