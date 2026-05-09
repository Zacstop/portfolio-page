# /public/projects — 프로젝트 스크린샷

이 디렉터리에 아래 파일명으로 프로젝트 스크린샷을 넣으면 자동으로 카드 / 갤러리에 반영됩니다.

## 파일 명명 규칙

`{프로젝트id}-{순번}.webp` (zero-padded 2자리)

| 프로젝트 | 카드 커버 | 갤러리 추가 화면 |
|---|---|---|
| Envelopes | `envelopes-01.webp` | `envelopes-02.webp` ~ `envelopes-04.webp` |
| SULEGYM | `sulegym-01.webp` | `sulegym-02.webp` ~ `sulegym-04.webp` |
| KB생명보험 | `kb-01.webp` | `kb-02.webp` ~ `kb-04.webp` |
| 한미 의담 | `hanmi-01.webp` | `hanmi-02.webp` ~ `hanmi-04.webp` |

## 권장 사양

- **포맷**: WebP (JPEG/PNG도 작동하지만 확장자만 바꾸면 안 되고 `src/data/projects.ts`도 함께 수정)
- **해상도**:
  - 카드 커버 (`-01`): 1600 × 1000
  - 갤러리 추가 화면 (`-02` ~ `-04`): 1920 × 1200 권장
- **비율**: 16 : 10 권장 (object-fit: cover로 처리되므로 약간 다른 비율도 무난)
- **용량**: 장당 200KB 이하 권장

## 캡션 변경

각 화면 캡션은 `src/data/projects.ts`의 각 프로젝트 `images` 배열에서 수정합니다.

## 이미지가 아직 없을 때

`<img>`가 로드 실패하면 자동으로 숨겨지고, 아래에 깔린 그라디언트 배경(`.project-visual-bg`)이 fallback으로 보입니다. 이미지를 하나씩 추가해도 화면은 깨지지 않습니다.
