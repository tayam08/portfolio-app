import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "TOEFL Essay Analyzer | 엄태빈 Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        TOEFL Academic Discussion은 학생들이 자신의 에세이 수준을 객관적으로 파악하기 어려운 과제 유형입니다.
        기존 교재·학원 피드백은 단순 교정 위주여서 ETS 채점 기준에 맞는 다차원 분석이 부족했습니다.
        단일 LLM에 채점을 맡기면 주관적 편향이 생기고 재현성이 낮다는 한계가 있어,
        역할 특화 채점자 10개를 병렬로 실행하는 앙상블 구조로 일관성 있는 자동 채점 모델을 구현했습니다.
        현재 v0 프로토타입 단계이며, 추후 실제 TOEFL 에세이 샘플로 성능 검증을 진행할 예정입니다.
      </p>
    ),
  },
  {
    title: "시스템 아키텍처",
    content: (
      <div className="text-gray-700 space-y-4">
        <p className="leading-relaxed">
          입력된 에세이는 4단계 파이프라인을 거쳐 최종 점수로 변환됩니다.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-[14px]">
          <li>
            <strong>Common Analyzer</strong> — 에세이 구조 분석·주장 추출·오류 패턴 후보 탐지 (결과는 캐시 저장)
          </li>
          <li>
            <strong>LLM Raters × 10 (병렬)</strong> — 역할 특화 채점자 10개가 동시에 0–30점 채점
            <ul className="list-disc list-inside ml-5 mt-1 space-y-0.5 text-gray-500">
              <li>strict_ets / generous_ets / task_relevance / contribution_quality</li>
              <li>development / organization / language_use / lexical_academic</li>
              <li>korean_learner / holistic_final</li>
              <li>quick(3개) / standard(5개) / full(10개) 모드로 API 비용 조절</li>
            </ul>
          </li>
          <li>
            <strong>Aggregator</strong> — 최고·최저 각 1개 제거 후 trimmed mean + median → rater_agreement 산출
          </li>
          <li>
            <strong>Pattern Adjuster</strong> — taxonomy v2 오류 패턴 48개 기반 감점 적용 (light 최대 −1pt / full 최대 −3pt)
          </li>
        </ol>
        <p className="text-sm text-gray-500 mt-2">
          출력: score_30 / score_6 (TOEFL 환산 1.0–6.0) / band / confidence / bottlenecks
        </p>
      </div>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Streamlit 웹앱 데모</strong> — 프롬프트 선택 → 에세이 입력 → Run Analysis 1버튼으로 채점 완료</li>
        <li><strong>7개 루브릭 바 시각화</strong> — Task Relevance · Contribution Quality · Development · Organization · Syntactic Variety · Lexical Precision · Grammar Control</li>
        <li><strong>오류 패턴 카드</strong> — 감지된 패턴별 심각도(LOW/MEDIUM/HIGH)·증거 문장·개선 방향 표시</li>
        <li><strong>Next Learning Actions / Follow-up Practice Plan</strong> — 에세이 분석 결과 기반 맞춤 학습 액션 제안</li>
        <li><strong>에세이 저장</strong> — 분석 결과를 CSV에 자동 누적·저장하여 데이터셋 확장</li>
        <li><strong>채점 모드 선택</strong> — quick(3 raters) / standard(5 raters) / full(10 raters)로 API 비용 최적화</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>채점 엔진 (v0)</strong> — Python, Gemini 2.0 Flash Lite API, 병렬 rater 실행, 캐시 처리</li>
        <li><strong>웹앱 데모 (MVP)</strong> — Python, Streamlit, Groq API / LLaMA-3.3-70B</li>
        <li><strong>데이터 처리</strong> — pandas, CSV (에세이·라벨·프롬프트·오류 패턴 taxonomy)</li>
        <li><strong>합성 데이터 생성</strong> — Claude Sonnet 4.6 (88개 에세이 합성)</li>
      </ul>
    ),
  },
  {
    title: "데이터셋",
    content: (
      <div className="text-gray-700 space-y-3">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>합성 에세이 88개</strong> — 22개 프롬프트 × 4개 점수대 (18 / 22 / 25 / 28점)
            <br />
            <span className="text-sm text-gray-500 ml-5">생성 모델: Claude Sonnet 4.6 · 라벨러: SYN_AUTO_v1</span>
          </li>
          <li>
            <strong>사용자 에세이 11개</strong> — 실제 작성 에세이, LLM 추정 라벨 (사람 검증 전)
          </li>
          <li>
            <strong>프롬프트 22개</strong> — prompt_dataset_v1.csv 수록 (P001–P022)
          </li>
          <li>
            <strong>오류 패턴 taxonomy v2</strong> — 48개 패턴 분류표 (한국인 학습자 특화 포함)
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        기획·설계·개발 전 과정을 단독으로 진행했습니다.
        채점 파이프라인 아키텍처 설계, 10개 역할 특화 rater 프롬프트 작성, 병렬 실행 엔진 구현,
        Aggregator·Pattern Adjuster 로직 개발, 오류 패턴 taxonomy v2 구축,
        합성 데이터셋 설계 및 생성, Streamlit 웹앱 UI 개발까지 전담했습니다.
      </p>
    ),
  },
  {
    title: "현재 상태 및 한계",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>v0 프로토타입</strong> — API 할당량 소진으로 전체 88개 에세이 평가(evaluate.py) 미완료, 공식 정확도 지표 미측정</li>
        <li><strong>합성 데이터만 사용</strong> — 실제 TOEFL 응시자 에세이로 검증되지 않음</li>
        <li><strong>4개 점수대만 존재</strong> — 18/22/25/28점 기준, 경계값(19–20점 등) 정확도 불확실</li>
        <li><strong>한국인 특화</strong> — korean_learner_rater 포함, 다른 L1 배경 성능 미검증</li>
        <li><strong>ETS 공식 비교 없음</strong> — 실제 ETS 채점 결과와 직접 대조 미실시</li>
      </ul>
    ),
  },
  {
    title: "다음 단계 (v1 목표)",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>evaluate.py 실행 후 실측 MAE / ±2pt 정확도 / band 정확도 기록</li>
        <li>실제 TOEFL 에세이 샘플로 외부 검증</li>
        <li>점수대 경계값(19–20점, 23–24점) 구간 보정</li>
        <li>Pattern Adjuster 감점 캘리브레이션 (Common Analyzer 정확도 측정 후)</li>
        <li>웹앱 배포 및 실사용자 피드백 수집</li>
      </ul>
    ),
  },
];

export default function ToeflPage() {
  return (
    <ProjectDetailTemplate
      category="AI / LLM"
      title="TOEFL Essay Analyzer"
      subtitle="LLM 앙상블 기반 Academic Discussion 자동 채점 모델"
      tags={["Python", "Gemini API", "LLaMA-3.3", "Streamlit", "Groq"]}
      github=""
      demo="https://schemamapmvp-95frjvlprdaxqwbbmjxecq.streamlit.app/"
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
