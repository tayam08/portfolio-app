import fs from "fs";
import path from "path";

export interface ResearchMetric {
  label: string;
  value: string;
  context: string;
}

export interface ResearchSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ResearchSource {
  title: string;
  publisher: string;
  publishedAt: string;
  url: string;
}

export interface ResearchReport {
  slug: string;
  date: string;
  company: string;
  industry: string;
  tier: string;
  targetRole: string;
  title: string;
  summary: string;
  thesis: string;
  tags: string[];
  metrics: ResearchMetric[];
  sections: ResearchSection[];
  interviewNotes: string[];
  sources: ResearchSource[];
}

const researchDirectory = path.join(process.cwd(), "content", "research");

function isResearchReport(value: unknown): value is ResearchReport {
  if (!value || typeof value !== "object") return false;
  const report = value as Partial<ResearchReport>;
  return Boolean(
    report.slug &&
      report.date &&
      report.company &&
      report.title &&
      Array.isArray(report.sections) &&
      Array.isArray(report.sources),
  );
}

export function getAllResearchReports(): ResearchReport[] {
  if (!fs.existsSync(researchDirectory)) return [];

  return fs
    .readdirSync(researchDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(researchDirectory, fileName);
      const parsed: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));

      if (!isResearchReport(parsed)) {
        throw new Error(`Invalid research report: ${fileName}`);
      }

      return parsed;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getResearchReport(slug: string): ResearchReport | undefined {
  return getAllResearchReports().find((report) => report.slug === slug);
}

