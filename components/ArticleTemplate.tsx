import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface ArticleSection {
  heading?: string;
  content: React.ReactNode;
}

export interface ArticleMeta {
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  tags: string[];
}

interface Props {
  meta: ArticleMeta;
  sections: ArticleSection[];
}

export default function ArticleTemplate({ meta, sections }: Props) {
  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-ink-100 bg-paper/95 backdrop-blur sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-8 py-3 flex items-center justify-between">
          <Link
            href="/writing"
            className="flex items-center gap-2 text-xs font-medium text-ink-400 hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} /> Back to Writing
          </Link>
          <span className="tag-category">{meta.category}</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-8 py-16">
        <header className="mb-14">
          <p className="eyebrow mb-5">{meta.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-4">
            {meta.title}
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed mb-6">{meta.subtitle}</p>
          <div className="flex flex-wrap items-center gap-2">
            {meta.tags.map((tag) => (
              <span key={tag} className="tag-tech">
                {tag}
              </span>
            ))}
            <span className="text-xs text-ink-300 ml-1">{meta.readTime} read</span>
          </div>
        </header>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-ink mb-4">{section.heading}</h2>
              )}
              <div className="text-[15px] text-ink-600 leading-loose space-y-4">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-ink-100">
          <Link href="/writing" className="btn-secondary">
            <ArrowLeft size={14} /> All Writing
          </Link>
        </div>
      </article>
    </div>
  );
}
