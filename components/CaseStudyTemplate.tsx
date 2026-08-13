import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import CaseStudySidebar, { SidebarItem } from "./CaseStudySidebar";

export interface CaseStudySection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export interface CaseStudyMeta {
  category: string;
  industry: string;
  title: string;
  subtitle: string;
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
  githubDisabled?: boolean;
  reportDisabled?: boolean;
}

interface Props {
  meta: CaseStudyMeta;
  sections: CaseStudySection[];
}

export default function CaseStudyTemplate({ meta, sections }: Props) {
  const sidebarItems: SidebarItem[] = sections.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
  }));

  return (
    <div className="min-h-screen bg-paper">
      {/* ── Top bar ── */}
      <div className="border-b border-ink-100 bg-paper/95 backdrop-blur sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-xs font-medium text-ink-400 hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} /> Back to Case Studies
          </Link>
          <span className="tag-category">{meta.category}</span>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="max-w-7xl mx-auto px-8 py-16 border-b border-ink-100">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">{meta.industry}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-4">
            {meta.title}
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed mb-8">{meta.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {meta.tags.map((tag) => (
              <span key={tag} className="tag-tech">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {(meta.github || meta.githubDisabled) &&
              (meta.githubDisabled ? (
                <span className="btn-primary opacity-30 cursor-not-allowed select-none">
                  <Github size={14} /> GitHub
                </span>
              ) : (
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={14} /> GitHub
                </a>
              ))}
            {meta.demo && (
              <a
                href={meta.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {(meta.report || meta.reportDisabled) &&
              (meta.reportDisabled ? (
                <span className="btn-secondary opacity-30 cursor-not-allowed select-none">
                  <FileText size={14} /> Report
                </span>
              ) : (
                <a
                  href={meta.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FileText size={14} /> Report
                </a>
              ))}
          </div>
        </div>
      </header>

      {/* ── Body: Sidebar + Content ── */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex gap-16 xl:gap-24">
          <CaseStudySidebar items={sidebarItems} />

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-24 max-w-2xl">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <div className="cs-section-header">
                    <span className="cs-section-number">{section.number}</span>
                    <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                  </div>
                  <div className="text-[15px] text-ink-600 leading-loose">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-24 pt-10 border-t border-ink-100 flex flex-wrap gap-3">
              <Link href="/case-studies" className="btn-secondary">
                <ArrowLeft size={14} /> All Case Studies
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
