import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "KIA Heritage 1944 | Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        기아자동차 창립 80주년을 맞아, 1944년 창립부터 현재 SDV(Software Defined Vehicle) 전환까지의
        헤리티지를 사용자에게 체험시키고, 노후 기아차 오너가 자신의 차량을 SDV로 전환했을 때의
        잔존가치와 TCO(총소유비용) 절감 효과를 분석해주는 B2B2C 플랫폼입니다.
      </p>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>헤리티지 타임라인</strong> — 기아 1944년~현재까지 주요 이정표 인터랙티브 타임라인</li>
        <li><strong>차량 정보 입력</strong> — 모델·연식·주행거리·연료타입·주행패턴 입력 폼</li>
        <li><strong>SDV 전환 분석</strong> — 감가상각 모델 기반 잔존가치 예측</li>
        <li><strong>TCO 분석</strong> — 5년간 유지비·보험·연료비 비교 (기존차 vs SDV 전환)</li>
        <li><strong>시뮬레이터</strong> — SDV 기능 시뮬레이션 및 편의 기능 체험</li>
        <li><strong>PDF 리포트</strong> — 분석 결과를 jsPDF로 다운로드</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>프론트엔드</strong> — Next.js 14, TypeScript, Tailwind CSS, Framer Motion</li>
        <li><strong>차트</strong> — Recharts (TCO·감가상각·시나리오 비교)</li>
        <li><strong>백엔드</strong> — Python FastAPI (감가상각·TCO 계산 엔진)</li>
        <li><strong>상태 관리</strong> — Zustand</li>
        <li><strong>PDF</strong> — jsPDF + html2canvas</li>
        <li><strong>컨테이너</strong> — Docker + Docker Compose</li>
      </ul>
    ),
  },
  {
    title: "주요 결과",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>차량 정보 입력 → SDV 전환 가치·TCO·감가상각 분석 결과 즉시 제공</li>
        <li>Framer Motion 기반 헤리티지 타임라인 인터랙션 구현</li>
        <li>FastAPI + Next.js API Route 연동으로 계산 엔진 분리</li>
        <li>Docker Compose로 프론트엔드·백엔드 동시 실행 환경 구성</li>
      </ul>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        전체 기획·설계·개발을 담당했습니다.
        FastAPI 감가상각/TCO 계산 서비스, Next.js 프론트엔드 컴포넌트 설계,
        Framer Motion 타임라인 인터랙션, Docker 환경 구성까지 모두 진행했습니다.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>자동차 도메인 지식(TCO, 감가상각, SDV)을 코드로 모델링하는 경험</li>
        <li>Next.js + FastAPI 분리 아키텍처에서 API 통신 설계</li>
        <li>Framer Motion을 활용한 스크롤 기반 인터랙션 구현</li>
        <li>Zustand로 다중 페이지 간 분석 상태 관리</li>
      </ul>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>감가상각 모델이 간소화된 규칙 기반 → 실제 중고차 시세 데이터 연동 예정</li>
        <li>기아 차종만 지원 → 타 브랜드 확장 예정</li>
        <li>SDV 기능 시뮬레이터가 UI 플레이스홀더 수준 → 실제 시뮬레이션 기능 강화 예정</li>
      </ul>
    ),
  },
];

export default function AutoPage() {
  return (
    <ProjectDetailTemplate
      category="Auto"
      title="KIA Heritage 1944"
      subtitle="기아 브랜드 헤리티지 × 노후 차량 SDV 전환 가치 분석 플랫폼"
      tags={["Next.js", "FastAPI", "Python", "Recharts", "Framer Motion", "Docker"]}
      github="https://github.com/tayam08"
      demo="https://frontend-mocha-mu-86.vercel.app"
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
