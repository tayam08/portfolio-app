import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "toast. | Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        부동산 임장은 직접 가보지 않으면 현지 분위기, 소음, 학군, 상권을 파악하기 어렵습니다.
        네이버 지역 카페, 부동산 유튜브, 블라인드 등 여러 채널에 흩어진 현지인 정보를
        AI가 집약해 &quot;온라인 임장 리포트&quot;로 만들어주는 플랫폼을 기획했습니다.
        처음 가는 동네도 살아본 사람처럼 분석할 수 있는 서비스입니다.
      </p>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>커뮤니티 피드</strong> — 지역·카테고리별 게시글 필터링, 전문가 코멘트 배지 시스템</li>
        <li><strong>AI 온라인 임장 리포트</strong> — 투자/실거주/1인가구/신축vs구축 4가지 모드</li>
        <li><strong>실거래가 연동</strong> — 국토교통부 공공 API 기반 실거래가 동향</li>
        <li><strong>웹 검색 통합</strong> — Tavily API로 지역 최신 호재·악재·재개발 뉴스 실시간 수집</li>
        <li><strong>투자 수익성 분석</strong> — IRR·Cap Rate·Payback 자동 계산 + 5년 시나리오</li>
        <li><strong>신축 vs 구축 비교</strong> — 5개 항목 점수 비교 + AI 비교 리포트</li>
        <li><strong>Word 리포트 저장</strong> — AI 분석 결과를 .doc 파일로 다운로드</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>프론트엔드</strong> — Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4</li>
        <li><strong>차트</strong> — Recharts (5년 시나리오, 민감도 분석, 신축vs구축 비교)</li>
        <li><strong>AI</strong> — OpenRouter API (gemma-3-27b → llama-3.3-70b fallback 체인)</li>
        <li><strong>외부 API</strong> — Tavily Search (웹 검색), 국토교통부 실거래가 API</li>
        <li><strong>배포</strong> — Vercel</li>
      </ul>
    ),
  },
  {
    title: "AI 리포트 구조",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>임장 리포트 (7섹션)</strong> — 생활권·입지 / 현지인 체감 / 외지인 리스크 / 투자 관점 / 실거주 관점 / 전문가 상담 필요 항목 / 최종 판단</li>
        <li><strong>커뮤니티 리포트 (10섹션)</strong> — 질문 요약 / 지역 핵심 쟁점 / 의견 갈림 부분 / 계약 전 체크리스트 등</li>
        <li><strong>투자 분석 (5섹션)</strong> — 수익성 평가 / 현금흐름 / 레버리지 효과 / 리스크 / 투자 의견</li>
      </ul>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        기획·설계·개발 전 과정을 단독으로 진행했습니다.
        커뮤니티 피드 UI, AI 임장 리포트 생성 플로우, 투자 수익성 계산기(IRR 수치해석),
        Tavily/공공 API 연동, OpenRouter 멀티 모델 fallback 체인까지 모두 담당했습니다.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>부동산 도메인 지식(IRR, Cap Rate, TCO)을 Newton-Raphson 수치해석으로 구현</li>
        <li>OpenRouter 멀티 모델 fallback 체인으로 AI 안정성 확보</li>
        <li>실시간 웹 검색 결과를 AI 프롬프트 컨텍스트로 통합하는 RAG 패턴</li>
        <li>Next.js App Router + Server Actions 기반 API 설계</li>
      </ul>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>커뮤니티 게시글이 샘플 데이터 → 실제 사용자 게시글 작성·저장 기능 추가 예정</li>
        <li>5개 지역 프리셋만 지원 → 전국 지역 데이터로 확장 예정</li>
        <li>사용자 인증 없음 → 로그인·개인 임장 기록 저장 기능 추가 예정</li>
      </ul>
    ),
  },
];

export default function WebAppPage() {
  return (
    <ProjectDetailTemplate
      category="부동산"
      title="toast."
      subtitle="처음 가는 동네도, 살아본 사람처럼 — 지역 커뮤니티 × AI 임장 리포트 플랫폼"
      tags={["Next.js", "React 19", "TypeScript", "OpenRouter API", "Recharts", "Tailwind CSS"]}
      github="https://github.com/tayam08"
      demo="https://toast-app-omega.vercel.app"
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
