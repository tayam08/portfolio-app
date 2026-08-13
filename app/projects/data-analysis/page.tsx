import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "퀀트 트레이딩 데이터 파이프라인 | Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-700 leading-relaxed">
        퀀트 트레이딩 전략을 백테스팅하기 위해서는 신뢰할 수 있는 주가 데이터 수집 파이프라인이
        먼저 갖춰져야 합니다. yfinance를 활용해 국내 주요 종목의 일봉·시간봉 데이터를
        자동으로 수집·저장하는 재사용 가능한 프레임워크를 구축했습니다.
      </p>
    ),
  },
  {
    title: "주요 기능",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>유연한 데이터 수집</strong> — period 방식(5y, 1d 등)과 날짜 범위 방식 모두 지원</li>
        <li><strong>자동 CSV 저장</strong> — 종목코드·기간·인터벌을 파일명에 포함해 자동 저장</li>
        <li><strong>재사용 가능한 함수</strong> — get_price_data() 단일 인터페이스로 다양한 수집 시나리오 처리</li>
        <li><strong>4가지 수집 예시</strong> — 최근 5년 일봉, 최근 1일 시간봉, 최근 100일, 날짜 범위 지정</li>
      </ul>
    ),
  },
  {
    title: "수집 데이터",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>삼성전자(005930.KS)</strong> 최근 5년 일봉 — <code>005930_KS_5y_1d.csv</code></li>
        <li><strong>삼성전자</strong> 최근 1일 1시간봉 — <code>005930_KS_1d_1h.csv</code></li>
        <li><strong>삼성전자</strong> 최근 100일 일봉 — <code>005930_KS_100d_1d.csv</code></li>
        <li><strong>삼성전자</strong> 날짜 범위 지정 일봉 — <code>005930_KS_2026-01-01_2026-05-01_1d.csv</code></li>
        <li>SK하이닉스, NAVER, 카카오 등 종목 코드 변경으로 즉시 확장 가능</li>
      </ul>
    ),
  },
  {
    title: "기술 스택",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Python</strong> — yfinance, pandas</li>
        <li><strong>데이터 저장</strong> — CSV (data/raw/ 폴더 자동 생성)</li>
        <li><strong>모듈 구조</strong> — src/data_loader.py (get_price_data 함수), main.py (실행 진입점)</li>
      </ul>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-700 leading-relaxed">
        개인 프로젝트로, 전체 설계·개발을 담당했습니다.
        재사용 가능한 데이터 수집 함수 설계, 파일명 자동화 로직, 폴더 구조 설계까지 모두 진행했습니다.
        이후 퀀트 백테스팅 전략 구현의 기반 파이프라인으로 활용하기 위해 제작했습니다.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>yfinance API의 period/start/end/interval 파라미터 활용법</li>
        <li>재사용 가능한 데이터 수집 인터페이스 설계 방법</li>
        <li>국내 주식 종목 코드 체계(KS, KQ 접미사)와 해외 티커 차이 이해</li>
        <li>데이터 파이프라인에서 파일명 네이밍 규칙의 중요성</li>
      </ul>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>데이터 수집만 구현 → 기술적 지표(MA, RSI, MACD) 계산 모듈 추가 예정</li>
        <li>단순 CSV 저장 → 데이터베이스(SQLite/PostgreSQL) 연동으로 확장 예정</li>
        <li>삼성전자 위주 → 다중 종목 동시 수집 배치 기능 추가 예정</li>
        <li>백테스팅 엔진과의 통합을 통한 퀀트 전략 검증 환경 구축 예정</li>
      </ul>
    ),
  },
];

export default function DataAnalysisPage() {
  return (
    <ProjectDetailTemplate
      category="퀀트"
      title="퀀트 트레이딩 데이터 파이프라인"
      subtitle="yfinance 기반 국내 주식 데이터 자동 수집 프레임워크"
      tags={["Python", "yfinance", "pandas", "CSV", "데이터 파이프라인"]}
      github="https://github.com/tayam08"
      demo=""
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
