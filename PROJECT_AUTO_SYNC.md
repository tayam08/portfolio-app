# 프로젝트 자동 동기화 시스템

바탕화면에 새 프로젝트 폴더를 만들면 자동으로 GitHub에 올라가고, Obsidian에 진행 로그가 쌓이고,
완성된 프로젝트는 포트폴리오 등재 대기열에 큐잉되는 자동화. (구축일: 2026-07-18)

## 사용법

1. `C:\Users\atb11\Desktop\projects\` 아래에 새 폴더를 만들고 작업한다.
2. 10분마다 작업 스케줄러가 자동으로 감지해서:
   - 새 폴더 → `git init` + 커밋 + GitHub **private** 저장소 생성(`gh repo create`) + 최초 푸시
   - 기존 폴더에 변경사항 있으면 → 자동 커밋 + 푸시
3. 프로젝트가 완성되면 폴더 안에 `DONE.md`를 만든다:

   ```markdown
   ---
   title: 프로젝트 제목
   category: Strategy | AI Systems | Financial Technology | Product & SaaS
   description: 한 줄 설명
   ---
   케이스 스터디 초안 (자유 서술)
   ```

   다음 스캔 때 Obsidian 노트 상태가 `포트폴리오 등재 대기`로 바뀌고 이 내용이 노트에 첨부된다.
   실제 포트폴리오(`/case-studies`) 반영은 자동화하지 않음 — 품질 검토 후 Claude와 함께 수동 작성.

## 구성 요소

| 항목 | 경로 |
|---|---|
| 감시 폴더 | `C:\Users\atb11\Desktop\projects\` |
| 동기화 스크립트 | `C:\Users\atb11\.project-sync\sync.ps1` |
| 작업 스케줄러 작업 | `ProjectAutoSync` (10분 간격, `Get-ScheduledTask -TaskName ProjectAutoSync`) |
| 실행 로그 | `C:\Users\atb11\.project-sync\sync.log` |
| Obsidian Vault | `C:\Users\atb11\Documents\Obsidian Vault\` |
| 프로젝트별 노트 | `Documents\Obsidian Vault\Projects\<폴더명>.md` |
| GitHub 계정 | tayam08 (private repo로 생성됨) |

## 전제조건

- GitHub CLI(`gh`) 설치 및 `gh auth login` 인증 완료 상태여야 저장소 자동 생성이 동작한다.
- 인증이 끊기면 로그에 `gh 인증 안 됨` 기록만 남고 로컬 git 커밋까지만 진행된다. `gh auth login`으로 재인증하면 다음 스캔부터 정상화된다.

## 알아둘 점

- `sync.ps1`을 직접 수정할 경우 **반드시 UTF-8 BOM 포함**으로 저장해야 한글 주석/문자열이 깨지지 않는다.
- 감시 대상은 `Desktop\projects` 하위 폴더로 한정되어 있다 (바탕화면 전체 아님).
- 이름이 `.`이나 `_`로 시작하는 폴더는 무시한다.
