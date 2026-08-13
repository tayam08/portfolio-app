import ProjectCard, { ProjectMeta } from "@/components/ProjectCard";

const projects: ProjectMeta[] = [
  {
    slug: "finance",
    category: "Finance",
    title: "개인 신용 리스크 분석기",
    subtitle: "나이·재무 데이터 기반 맞춤형 신용 진단 웹앱",
    description: "재무 데이터를 입력하면 AI가 신용 리스크를 분석하고 맞춤 개선 조언·시나리오를 제공합니다.",
    tags: ["Python", "FastAPI", "Claude AI", "HTML/JS"],
    highlight: "AI 챗봇 탑재",
  },
  {
    slug: "insurance",
    category: "Insurance",
    title: "Beyond Risk, Toward Trust",
    subtitle: "AI 챗봇 기반 보험 리스크 스코어링 플랫폼",
    description: "피보험자 CSV 데이터를 다차원 분석하고, Claude AI 챗봇으로 실시간 대시보드를 제어하는 산학협력 프로젝트.",
    tags: ["React", "Vite", "Claude AI", "Recharts"],
    highlight: "산학협력",
  },
  {
    slug: "auto",
    category: "Auto",
    title: "KIA Heritage 1944",
    subtitle: "기아 헤리티지 × 노후 차량 SDV 전환 가치 분석",
    description: "기아 1944년 창립 타임라인을 통해 브랜드 감성을 전달하고, 노후 기아차 오너의 SDV 전환 가치를 분석하는 플랫폼.",
    tags: ["Next.js", "FastAPI", "Python", "Recharts"],
    highlight: "B2B2C 플랫폼",
  },
  {
    slug: "web-app",
    category: "부동산",
    title: "toast.",
    subtitle: "처음 가는 동네도, 살아본 사람처럼",
    description: "현지인 인사이트와 AI를 결합한 부동산 온라인 임장 리포트 플랫폼. 커뮤니티 피드 + AI 임장 분석 + 투자 수익성 계산기.",
    tags: ["Next.js", "TypeScript", "OpenRouter API", "Recharts"],
    highlight: "AI 임장 리포트",
  },
  {
    slug: "data-analysis",
    category: "퀀트",
    title: "퀀트 트레이딩 데이터 파이프라인",
    subtitle: "yfinance 기반 국내 주식 데이터 자동 수집",
    description: "삼성전자 등 국내 주요 종목의 일봉·시간봉 데이터를 자동 수집·저장하는 퀀트 데이터 수집 프레임워크.",
    tags: ["Python", "yfinance", "pandas", "CSV"],
    highlight: "데이터 파이프라인",
  },
  {
    slug: "toefl",
    category: "AI / LLM",
    title: "TOEFL Essay Analyzer",
    subtitle: "LLM 앙상블 기반 Academic Discussion 자동 채점 모델",
    description: "역할 특화 LLM 채점자 10개가 병렬로 에세이를 평가하고, 앙상블 집계·오류 패턴 보정을 거쳐 TOEFL 점수(0–30)를 자동 산출하는 채점 시스템.",
    tags: ["Python", "Gemini API", "LLaMA-3.3", "Streamlit"],
    highlight: "진행 중",
  },
];

const categories = ["All", "Finance", "Insurance", "Auto", "부동산", "퀀트", "AI / LLM"];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="section-label">Work</p>
      <h1 className="text-4xl font-bold mb-3">Projects</h1>
      <p className="text-gray-500 text-[15px] mb-12">
        금융·보험·실물자산 도메인의 데이터 분석 및{" "}
        <span className="text-yonsei font-medium">AI Agent / 웹서비스</span> 프로젝트
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              cat === "All"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
