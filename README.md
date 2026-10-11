# 나두예술 (Nadoo Arts)

이탈리아·프랑스의 음악과 미술을 쉬운 한국어로. Next.js 15 App Router, 전 페이지 정적 생성(SSG).

- 음악관 `/music`, 미술관 `/art`, 연표 `/timeline`, 관계도 `/relations`, 퀴즈 `/quiz`, 영화 `/films`, 나라별 `/countries`, 더 보기 `/links`, 출처 `/sources`
- 그림 파일: `public/art/*.jpg` — Wikimedia Commons 퍼블릭 도메인/CC0만. 출처는 `data/image-credits.json`과 `/sources`.
- 방문자 카운터: abacus `nadoo-arts/visits` (프로덕션 호스트 외, 봇·headless는 읽기만).

## 나라 추가 (독일·스페인)
1. `data/types.ts`의 `CountryCode`에 `"de"`/`"es"` 추가
2. `data/countries.ts`의 `COUNTRIES`에 항목 추가
3. `data/music.ts`, `data/art.ts`에 `country: "de"` 인물 추가 (그림은 `public/art` + `image-credits.json`)

```bash
npm ci && npm run build
```
