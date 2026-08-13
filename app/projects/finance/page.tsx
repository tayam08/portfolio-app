import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "개인 신용 리스크 분석기 | Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        개인 재무 상태(소득·지출·부채·자산)를 입력하면 신용 리스크를 즉시 진단하고,
        나이대 백분위 비교와 AI 맞춤 개선 조언까지 제공하는 서비스의 필요성을 느껴 제작했습니다.
        기존 신용 리스크 진단 도구는 복잡한 가입 절차 없이 빠르게 본인의 재무 건전성을 파악하기 어려웠습니다.
        단순 LLM 챗봇이 아니라, 재무지표 기반 규칙형 리스크 스코어 모델을 먼저 계산한 뒤
        LLM은 그 결과를 사용자 친화적으로 설명하는 역할로 설계했습니다.
      </p>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Pydantic 스키마 검증</strong> — income &gt; 0, age 13~99, credit_score 300~700, delinquency Literal 타입으로 잘못된 입력 자동 차단</li>
        <li><strong>신용 리스크 스코어</strong> — 부채·지출·신용점수·연체이력을 가중합해 0~100점으로 산출, SVG 게이지 시각화</li>
        <li><strong>나이대 백분위 비교</strong> — 동일 나이대 100명 중 상위 몇 %인지 위치 표시</li>
        <li><strong>핵심 지표</strong> — 부채/수입 비율, 지출/수입 비율, 부채 상환까지 예상 기간</li>
        <li><strong>AI 맞춤 조언</strong> — LLM 기반 리스크 요인 분석 및 우선순위별 개선 권고 (LLM 장애 시 규칙 기반 폴백)</li>
        <li><strong>시나리오 분석</strong> — 소득 충격·자산 하락·지출 절감·부채 상환·복합 위기 등 5개 시나리오별 리스크 변화</li>
        <li><strong>AI 재무 상담 챗봇</strong> — 분석 결과를 컨텍스트로 자유로운 재무 상담</li>
        <li><strong>분석 이력 관리</strong> — localStorage 기반 최근 20건 이력 저장·조회</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>백엔드</strong> — Python FastAPI, Pydantic v2 (입력 검증), OpenRouter API (LLM), python-dotenv</li>
        <li><strong>프론트엔드</strong> — Vanilla HTML · CSS · JS (templates/static 파일 분리 구조)</li>
        <li><strong>테스트</strong> — pytest (리스크 모델 단위 테스트 5개)</li>
        <li><strong>배포</strong> — Vercel Serverless (api/index.py → app.main:app)</li>
      </ul>
    ),
  },
  {
    title: "리스크 모델 산식",
    content: (
      <div className="text-gray-700 space-y-2">
        <p className="text-sm text-gray-500 mb-3">
          Risk Score = 부채점수 + 지출점수 + 신용점수리스크 + 연체점수 (0~100점)
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm font-mono">
          <li>부채점수: min(debt / income / 5.0, 1.0) × 40</li>
          <li>지출점수: min(expense / income / 1.5, 1.0) × 30</li>
          <li>신용점수리스크: (700 − credit_score) / 400 × 20</li>
          <li>연체점수: 없음 0점 · 1회 5점 · 다수 10점</li>
        </ul>
        <p className="text-xs text-gray-400 mt-3">
          ※ 실제 금융기관 신용평가 모형이 아닌 규칙 기반 재무 리스크 스코어입니다.
          나이대 백분위는 합성 통계 기반이며, 실제 CB 데이터와 다를 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    title: "주요 결과",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>재무 정보 입력 후 3초 내 리스크 분석 결과 + AI 조언 제공</li>
        <li>Pydantic 스키마 도입으로 음수 소득, 범위 초과 신용점수 등 잘못된 입력을 422로 자동 차단</li>
        <li>pytest 단위 테스트 5개 작성·전체 통과 — 부채↑·지출↑·신용점수↓·연체 시 리스크↑ 검증</li>
        <li>HTML·CSS·JS 파일 분리로 코드 구조 개선 (templates/ · static/ 디렉토리)</li>
        <li>5개 시나리오의 리스크 변화 및 나이대 내 위치 변화 시각화</li>
      </ul>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        기획·설계·개발 전 과정을 단독으로 진행했습니다.
        FastAPI 백엔드 설계, Pydantic 스키마 입력 검증, 리스크 계산 알고리즘 구현,
        LLM 연동 및 규칙 기반 폴백 처리, HTML·CSS·JS 파일 분리 구조화,
        pytest 단위 테스트 작성, Vercel 배포까지 모두 담당했습니다.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Pydantic Field 검증(gt/ge/Literal)으로 FastAPI다운 입력 처리를 구현하는 방법</li>
        <li>pytest로 금융 도메인 규칙 기반 모델의 핵심 로직을 단위 테스트로 검증하는 경험</li>
        <li>금융 도메인 지식(부채비율, 자금 유지기간, 나이대 백분위)을 코드로 구현하는 경험</li>
        <li>LLM을 "설명 레이어"로만 활용하고 핵심 계산은 Python 모델로 분리하는 설계 패턴</li>
        <li>사용자 맥락(나이·재무상태)을 LLM 프롬프트에 효과적으로 주입하는 방법</li>
      </ul>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>실제 신용평가 모델(머신러닝) 대신 규칙 기반 리스크 계산 — 향후 ML 모델 도입 예정</li>
        <li>나이대 통계 데이터가 합성값 — 실제 통계청·금감원 데이터로 교체 예정</li>
        <li>사용자 인증 없이 localStorage만 사용 — 클라우드 저장 기능 추가 예정</li>
      </ul>
    ),
  },
];

export default function FinancePage() {
  return (
    <ProjectDetailTemplate
      category="Finance"
      title="개인 신용 리스크 분석기"
      subtitle="나이·재무 데이터 기반 맞춤형 신용 진단 및 AI 조언 웹앱"
      tags={["Python", "FastAPI", "Pydantic", "pytest", "LLM", "Vercel"]}
      github="https://github.com/tayam08"
      demo="https://finance-risk-app.vercel.app"
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
