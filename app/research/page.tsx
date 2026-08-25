import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { getAllResearchReports } from "@/lib/research";

export const metadata: Metadata = {
  title: "Daily Research | Taebeen Am",
  description: "기업과 산업을 분석하고 지원 직무의 관점으로 연결한 데일리 리서치 노트",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${date}T00:00:00+09:00`));
}

export default function ResearchPage() {
  const reports = getAllResearchReports();
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow mb-4">Daily Research</p>
        <h1 className="text-5xl font-bold tracking-tight text-ink mb-5">Company &amp; Industry</h1>
        <p className="text-lg text-ink-500 leading-relaxed mb-7">기업의 숫자와 산업의 변화를 읽고, 지원 직무에서 해결해야 할 문제로 다시 정리합니다. 투자 의견이 아닌 사업기획·컨설팅 관점의 리서치입니다.</p>
        <div className="inline-flex items-center gap-2 border border-ink-100 bg-white px-4 py-2.5 text-xs text-ink-500"><Clock3 size={14} className="text-navy" /> 매일 오전 8시 KST 업데이트</div>
      </div>
      <div className="section-rule mb-12" />
      <div className="grid grid-cols-1 gap-px bg-ink-100 border-y border-ink-100">
        {reports.map((report, index) => (
          <Link key={report.slug} href={`/research/${report.slug}`} className="group bg-paper hover:bg-white px-4 md:px-7 py-9 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-[70px_1fr_auto] gap-5 md:gap-8 items-start">
              <span className="font-mono text-xs text-ink-300">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3"><span className="tag-category">{report.tier}</span><span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-400">{report.industry}</span></div>
                <h2 className="text-2xl font-bold text-ink mb-2 group-hover:text-navy transition-colors">{report.company} — {report.title}</h2>
                <p className="text-sm text-ink-500 leading-relaxed max-w-3xl mb-4">{report.summary}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-300"><span>{formatDate(report.date)}</span><span>{report.targetRole}</span></div>
              </div>
              <ArrowUpRight size={18} className="hidden md:block text-ink-300 group-hover:text-navy mt-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

