import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "Beyond Risk, Toward Trust | Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        보험사의 언더라이팅(심사) 과정에서 피보험자 리스크를 다차원으로 분석하고,
        자연어로 대시보드를 제어할 수 있다면 심사 효율이 크게 향상될 수 있다는 아이디어에서 출발했습니다.
        산학협력 프로젝트로, 실제 구조의 보험 CSV 데이터를 기반으로 리스크 스코어링 플랫폼을 구축했습니다.
      </p>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>피보험자 검색</strong> — UUID 일부 입력으로 자동완성, 6개 CSV 데이터 즉시 로드</li>
        <li><strong>Dynamic Module Loader</strong> — addModule()으로 리스크 카드 동적 추가/제거</li>
        <li><strong>AI 챗봇 제어</strong> — "behavior 추가해줘", "claim 가중치 올려줘" 등 자연어 대시보드 제어</li>
        <li><strong>레이더 차트</strong> — 6개 모듈(인구통계·계약·청구·진단·입원·행동) 종합 리스크 시각화</li>
        <li><strong>실시간 보험료 계산</strong> — 활성 모듈 가중 평균 기반 월 보험료 즉시 갱신</li>
        <li><strong>행동 패턴 시계열</strong> — 월별 스트레스·수면·이동성 5개 지표 LineChart</li>
      </ul>
    ),
  },
  {
    title: "사용 데이터",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code>core_policyholder.csv</code> — 피보험자 기본 정보 (나이, 성별, 지역, 소득, BMI, 흡연)</li>
        <li><code>core_policy.csv</code> — 보험 계약 정보 (상품 유형, 납입액, 계약 기간)</li>
        <li><code>medical_claim_event.csv</code> — 의료비 청구 이력</li>
        <li><code>medical_diagnosis_event.csv</code> — 질병 진단 이력 (만성질환, 중증도)</li>
        <li><code>medical_hospitalization_event.csv</code> — 입원 이력 (재원일수, 수술, ICU)</li>
        <li><code>behavior_monthly_observation.csv</code> — 월별 행동 패턴 (웨어러블 데이터)</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>프론트엔드</strong> — React 18, Vite 6</li>
        <li><strong>스타일</strong> — Tailwind CSS 3</li>
        <li><strong>차트</strong> — Recharts 2 (레이더 차트, 시계열 LineChart)</li>
        <li><strong>AI</strong> — OpenRouter API (Claude 3 Haiku)</li>
        <li><strong>서버리스</strong> — Vercel Functions (api/chat.js, API 키 서버 측 보안)</li>
        <li><strong>배포</strong> — Vercel (https://riskmodel.vercel.app)</li>
      </ul>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        산학협력 프로젝트로, 전체 설계·개발을 담당했습니다.
        CSV 데이터 파싱 모듈, 모듈 시스템(addModule/가중치 계산), AI 챗봇 의도 파싱 엔진,
        React 컴포넌트 설계, Vercel 배포 및 API 키 보안 처리까지 전 과정을 담당했습니다.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>보험 언더라이팅 도메인 지식을 코드로 모델링하는 경험</li>
        <li>AI 자연어 → 구조화된 액션(JSON)으로 변환하는 프롬프트 엔지니어링</li>
        <li>Vercel Serverless Functions를 통한 API 키 보안 처리 패턴</li>
        <li>동적 모듈 시스템 설계 및 실시간 가중 평균 계산 구현</li>
      </ul>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>규칙 기반 스코어링 → 실제 보험사 데이터 기반 ML 모델 도입 예정</li>
        <li>단일 피보험자 조회 → 다수 비교 분석 기능 추가 예정</li>
        <li>AI 폴백이 정규식 기반 → 더 정교한 의도 파싱 모델로 교체 예정</li>
      </ul>
    ),
  },
];

export default function InsurancePage() {
  return (
    <ProjectDetailTemplate
      category="Insurance"
      title="Beyond Risk, Toward Trust"
      subtitle="AI 챗봇 기반 보험 리스크 스코어링 플랫폼 — 산학협력 프로젝트"
      tags={["React", "Vite", "Claude AI", "Recharts", "Tailwind CSS", "Vercel"]}
      github="https://github.com/tayam08/riskmodel"
      demo="https://riskmodel.vercel.app"
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
