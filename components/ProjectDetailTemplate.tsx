import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface ProjectDetailProps {
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
  githubDisabled?: boolean;
  reportDisabled?: boolean;
  sections: Section[];
}

const sectionNumbers = ["01", "02", "03", "04", "05", "06", "07", "08"];

export default function ProjectDetailTemplate({
  category,
  title,
  subtitle,
  tags,
  github,
  demo,
  report,
  githubDisabled = false,
  reportDisabled = false,
  sections,
}: ProjectDetailProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-10"
      >
        <ArrowLeft size={15} />
        Projects로 돌아가기
      </Link>

      {/* Header */}
      <header className="mb-12">
        <span className="tag-accent mb-4 inline-block">{category}</span>
        <h1 className="text-4xl font-bold tracking-tight mb-3 leading-tight">{title}</h1>
        <p className="text-lg text-gray-500 font-medium mb-6">{subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Link buttons */}
        {(github || githubDisabled || demo || report || reportDisabled) && (
          <div className="flex flex-wrap items-center gap-3">
            {(github || githubDisabled) && (
              githubDisabled ? (
                <span className="btn-primary opacity-35 cursor-not-allowed select-none">
                  <Github size={15} />
                  GitHub
                </span>
              ) : (
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Github size={15} />
                  GitHub
                </a>
              )
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <ExternalLink size={15} />
                Demo
              </a>
            )}
            {(report || reportDisabled) && (
              reportDisabled ? (
                <span className="btn-outline opacity-35 cursor-not-allowed select-none">
                  <FileText size={15} />
                  Notion
                </span>
              ) : (
                <a href={report} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FileText size={15} />
                  Notion
                </a>
              )
            )}
          </div>
        )}
      </header>

      <div className="w-12 h-0.5 bg-black mb-12" />

      {/* Sections */}
      <div className="space-y-14">
        {sections.map((section, index) => (
          <section key={index}>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-yonsei tracking-widest">
                {sectionNumbers[index]}
              </span>
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <div className="pl-9 text-gray-700 text-[15px] leading-relaxed">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom links */}
      {(github || githubDisabled || demo || report || reportDisabled) && (
        <>
          <div className="section-divider" />
          <div className="flex flex-wrap items-center gap-3">
            {(github || githubDisabled) && (
              githubDisabled ? (
                <span className="btn-primary opacity-35 cursor-not-allowed select-none">
                  <Github size={15} />
                  GitHub
                </span>
              ) : (
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Github size={15} />
                  GitHub
                </a>
              )
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <ExternalLink size={15} />
                Demo
              </a>
            )}
            {(report || reportDisabled) && (
              reportDisabled ? (
                <span className="btn-outline opacity-35 cursor-not-allowed select-none">
                  <FileText size={15} />
                  Notion
                </span>
              ) : (
                <a href={report} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FileText size={15} />
                  Notion
                </a>
              )
            )}
          </div>
        </>
      )}
    </article>
  );
}
