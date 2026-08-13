import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export const metadata = {
  title: "AI Agent 프로젝트 | 엄태빈 Portfolio",
};

const sections = [
  {
    title: "문제 정의",
    content: (
      <p className="text-gray-500 italic">
        어떤 문제를 해결하려 했는지, 왜 이 문제가 중요한지 작성하세요.
      </p>
    ),
  },
  {
    title: "사용 데이터",
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-500 italic">
        <li>데이터 출처 및 규모를 작성하세요.</li>
        <li>주요 변수 / 피처를 작성하세요.</li>
      </ul>
    ),
  },
  {
    title: "분석 / 모델링 방법",
    content: (
      <p className="text-gray-500 italic">
        Agent 아키텍처, LLM 활용 방법, Tool 구성, 파이프라인 등을 작성하세요.
      </p>
    ),
  },
  {
    title: "주요 결과",
    content: (
      <p className="text-gray-500 italic">
        핵심 지표, 성능 수치, 인사이트 등을 작성하세요.
      </p>
    ),
  },
  {
    title: "내가 한 역할",
    content: (
      <p className="text-gray-500 italic">
        팀 프로젝트라면 본인 기여 범위를, 개인 프로젝트라면 전체 역할을 작성하세요.
      </p>
    ),
  },
  {
    title: "배운 점",
    content: (
      <p className="text-gray-500 italic">
        기술적·도메인적으로 새롭게 얻은 인사이트를 작성하세요.
      </p>
    ),
  },
  {
    title: "한계와 개선 방향",
    content: (
      <p className="text-gray-500 italic">
        현재 프로젝트의 한계점과 향후 개선하고 싶은 방향을 작성하세요.
      </p>
    ),
  },
  {
    title: "GitHub / Demo / Report 링크",
    content: (
      <p className="text-gray-500 italic">
        링크는 상단 버튼에서 연결하거나 여기에 텍스트로 추가할 수 있습니다.
      </p>
    ),
  },
];

export default function AiAgentPage() {
  return (
    <ProjectDetailTemplate
      category="AI Agent"
      title="AI 에이전트 프로젝트"
      subtitle="프로젝트 부제목을 입력하세요"
      tags={["LangChain", "OpenAI API", "Claude API", "FastAPI", "LlamaIndex"]}
      github=""
      demo=""
      report=""
      githubDisabled
      reportDisabled
      sections={sections}
    />
  );
}
