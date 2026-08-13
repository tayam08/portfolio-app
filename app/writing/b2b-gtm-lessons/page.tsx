import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata = {
  title: "GTM Lessons from Pivoting Two AI Products in Korea | Taebeen Am",
};

const sections = [
  {
    heading: "Two products, two pivots",
    content: (
      <>
        <p>
          toast., a real estate site-visit platform, started as an ROI calculator.
          User research showed the actual pain point wasn&rsquo;t the math — listings
          already show plenty of numbers — it was that nobody trusted the
          qualitative information around a property: is this neighborhood actually
          quiet at night, is this agent&rsquo;s read on the area credible. The product
          pivoted from a calculator into a verified-resident insight platform.
        </p>
        <p>
          A TOEFL essay-scoring tool went through a sharper pivot: from B2C to B2B.
          The consumer version depended on students showing up and paying
          voluntarily, and that engagement never converted into sustainable revenue.
        </p>
      </>
    ),
  },
  {
    heading: "The GTM lesson: talk to the gatekeeper, not just the user",
    content: (
      <p>
        To validate the B2B pivot, I visited academy directors in person and sent
        hundreds of cold emails. The response rate was about 3%. That number looks
        like a failure if you&rsquo;re measuring conversion — but it&rsquo;s exactly the
        channel that surfaced what B2B buyers actually wanted: not a better scoring
        model, but cost reduction and consistent, defensible grading they could
        stand behind to parents. Low-conversion outreach, done directly with the
        people who control distribution, taught me more about the real GTM strategy
        than any amount of iterating on the consumer product would have.
      </p>
    ),
  },
  {
    heading: "Why this matters more in Korea",
    content: (
      <p>
        Korean B2B distribution — whether it&rsquo;s academy directors, licensed real
        estate agents, or GA insurance networks — still runs on relationship and
        reputation before it runs on software features. A cold product with a
        better feature set loses to a trusted incumbent relationship almost every
        time. That&rsquo;s why the highest-leverage GTM work in this market is often not
        building more product, but earning the standing to have the gatekeeper
        conversation at all.
      </p>
    ),
  },
  {
    heading: "Takeaway",
    content: (
      <p>
        GTM strategy isn&rsquo;t something you decide in a slide before building the
        product. It&rsquo;s something you discover by testing distribution — awkwardly,
        with a low hit rate — before you build any more of the product itself.
      </p>
    ),
  },
];

export default function B2BGTMLessonsArticle() {
  return (
    <ArticleTemplate
      meta={{
        category: "Strategy",
        title: "GTM Lessons from Pivoting Two AI Products in Korea",
        subtitle:
          "A 3% cold-email response rate taught me more about GTM strategy than any amount of iterating on the product itself — because it forced a conversation with the actual gatekeeper.",
        readTime: "6 min",
        tags: ["GTM Strategy", "B2B", "Korea Market"],
      }}
      sections={sections}
    />
  );
}
