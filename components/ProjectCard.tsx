import Link from "next/link";
import { ArrowRight, Github, ExternalLink, FileText } from "lucide-react";

export interface ProjectMeta {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
  highlight?: string;
}

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <div className="card group flex flex-col gap-4">
      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span className="tag-accent">{project.category}</span>
        {project.highlight && (
          <span className="text-xs text-yonsei font-medium">{project.highlight}</span>
        )}
      </div>

      {/* Title */}
      <div>
        <h3 className="text-lg font-bold leading-snug mb-1 group-hover:text-yonsei transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Report"
            >
              <FileText size={16} />
            </a>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-black transition-colors"
        >
          상세보기 <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
