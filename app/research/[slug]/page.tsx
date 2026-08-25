import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllResearchReports, getResearchReport } from "@/lib/research";

interface Props { params: { slug: string }; }

export function generateStaticParams() {
  return getAllResearchReports().map((report) => ({ slug: report.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const report = getResearchReport(params.slug);
  return report ? { title: `${report.company} 기업분석 | Taebeen Am`, description: report.summary } : {};
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${date}T00:00:00+09:00`));
}

export default function ResearchDetailPage({ params }: Props) {
  const report = getResearchReport(params.slug);
  if (!report) notFound();
  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-ink-100 bg-paper/95 backdrop-blur sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-8 py-3 flex items-center justify-between gap-4">
          <Link href="/research" className="flex items-center gap-2 text-xs font-medium text-ink-400 hover:text-ink"><ArrowLeft size={13} /> All Research</Link>
          <span className="tag-category">{report.tier}</span>
        </div>
      </div>
      <article className="max-w-5xl mx-auto px-8 py-16">
        <header className="max-w-4xl mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-ink-400"><span className="eyebrow">{report.company}</span><span>·</span><span>{report.industry}</span><span>·</span><time>{formatDate(report.date)}</time></div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-5">{report.title}</h1>
          <p className="text-lg text-ink-500 leading-relaxed mb-7">{report.summary}</p>
          <div className="flex flex-wrap gap-2">{report.tags.map((tag) => <span key={tag} className="tag-tech">{tag}</span>)}</div>
        </header>
        <section className="cs-hypothesis-box mb-14"><p className="text-[10px] font-bold tracking-[0.18em] uppercase text-navy mb-3">Core thesis</p><p className="text-lg font-semibold text-ink leading-relaxed">{report.thesis}</p></section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 mb-16">
          {report.metrics.map((metric) => <div key={metric.label} className="bg-white p-6"><p className="text-[10px] font-bold tracking-[0.12em] uppercase text-ink-400 mb-2">{metric.label}</p><p className="text-2xl font-bold text-ink mb-2">{metric.value}</p><p className="text-xs text-ink-400 leading-relaxed">{metric.context}</p></div>)}
        </section>
        <div className="max-w-3xl space-y-14">
          {report.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-ink mb-5 pb-4 border-b border-ink-100">{section.heading}</h2>
              <div className="space-y-4 text-[15px] text-ink-600 leading-loose">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul className="cs-bullet-list list-disc pl-5 pt-2">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </div>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-bold text-ink mb-5 pb-4 border-b border-ink-100">Interview Notes</h2>
            <div className="space-y-3">{report.interviewNotes.map((note, index) => <div key={note} className="flex gap-4 border border-ink-100 bg-white p-5"><span className="font-mono text-xs font-bold text-navy">{String(index + 1).padStart(2, "0")}</span><p className="text-sm text-ink-600 leading-relaxed">{note}</p></div>)}</div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-5 pb-4 border-b border-ink-100">Sources</h2>
            <div className="divide-y divide-ink-100 border-y border-ink-100">{report.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-6 py-4"><div><p className="text-sm font-semibold text-ink group-hover:text-navy">{source.title}</p><p className="text-xs text-ink-300 mt-1">{source.publisher} · {source.publishedAt}</p></div><ArrowUpRight size={15} className="flex-shrink-0 text-ink-300 group-hover:text-navy" /></a>)}</div>
          </section>
        </div>
        <div className="mt-16 pt-10 border-t border-ink-100"><Link href="/research" className="btn-secondary"><ArrowLeft size={14} /> All Research</Link></div>
      </article>
    </div>
  );
}

