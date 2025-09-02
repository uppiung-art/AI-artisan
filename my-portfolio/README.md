# 1p 개인 포트폴리오 웹사이트 개발 상세 명세 (Modern · Professional)

## 1) 개요

* **목표:** 신뢰감 있고 모던한 1페이지 포트폴리오로, 경력·프로젝트·역량을 즉시 파악 가능하게 전달.
* **핵심 가치:** 빠른 가독성, 높은 접근성, 모바일 최적화, 유지보수 간편성.
* **권장 스택(택1):**

  * **Next.js + TypeScript + Tailwind CSS** (SEO·동적 데이터·확장성 우수)
  * **Vite + Vanilla TS + Tailwind CSS** (초경량·단일 페이지·속도 우수)

---

## 2) 정보 구조(IA) & 섹션 구성

1. **Header / GNB**

   * 로고(이니셜), 섹션 앵커 링크(About, Skills, Experience, Projects, Contact)
   * Sticky, Scroll-spy, Skip-to-content 링크 제공
2. **Hero**

   * 한 줄 포지셔닝 문구(직무·핵심역량), 짧은 소개, 주요 CTA 2개(“프로젝트 보기”, “이력서 다운로드”)
   * 소셜 아이콘(GitHub/LinkedIn/Email)
3. **About**

   * 전문 분야, 사용 기술 스택 요약, 일하는 방식(가치·관심)
4. **Skills**

   * 주요 스킬 태그/바/레벨(자기평가 vs 실제 활용사례 링크)
5. **Experience (Timeline)**

   * 회사/역할/기간/주요 성과(숫자 중심) · 대표 작업 링크
6. **Projects**

   * 카드 그리드(썸네일·설명·역할·스택·성과지표·링크)
   * 필터(ALL/FE/BE/ML 등) & 태그 검색
7. **Testimonials (옵션)**

   * 짧은 레퍼런스 코멘트 + 인물/직함
8. **Contact**

   * 폼(이름/이메일/메시지) · 성공/실패 상태 메시지
   * 대체 수단(이메일 링크) · 약식 개인정보 고지
9. **Footer**

   * 저작권, 소셜, 경량 Analytics 링크

---

## 3) UI/UX 가이드

* **톤 & 무드:** 미니멀, 넉넉한 여백, 명확한 대비, 부드러운 마이크로 인터랙션
* **레이아웃:** 12-column grid, max-width 1200px, 섹션 상·하 여백 96\~128px
* **타이포그래피:** Sans-serif(가독성) · Base 16px, H1 40–56, H2 28–32, H3 22–24
* **컬러(예시):**

  * Primary: `#2563EB` / Secondary: `#0EA5E9` / Accent: `#22C55E`
  * Text: `#0F172A`(Dark), `#CBD5E1`(Light) / Surface: `#FFFFFF`(Light), `#0B1220`(Dark)
  * **대비 기준:** WCAG AA(본문 4.5:1 이상)
* **모션:** `prefers-reduced-motion` 존중, 150–250ms easing-out
* **다크모드:** `prefers-color-scheme` 자동 + 토글 제공

---

## 4) 반응형 & 브레이크포인트

| Range    | Breakpoint | 규칙                     |
| -------- | ---------- | ---------------------- |
| ≤ 480    | `sm`       | 1열 카드, 폰트/여백 축소, 네비 토글 |
| 481–768  | `md`       | 2열 카드, 타이틀 크기 보정       |
| 769–1024 | `lg`       | 2–3열 카드, 그리드 확장        |
| ≥ 1025   | `xl`       | 3–4열 카드, 전체 레이아웃 최대화   |

---

## 5) 컴포넌트 목록

* **NavBar(Sticky, Scroll-spy)**, **SectionHeader(제목+부제)**
* **Badge/Tag**, **SkillBar**(aria 값 제공), **TimelineItem**
* **ProjectCard**(이미지·설명·태그·버튼), **FilterBar**(탭/검색)
* **TestimonialCard**, **ContactForm**(필드/검증/상태), **Toast**
* **ThemeToggle**, **SocialIcon**, **Footer**

---

## 6) 데이터 모델 (정적 JSON/MD 또는 CMS 연동)

### `projects.json` 예시

```json
[
  {
    "id": "p-001",
    "title": "Smart Portfolio",
    "role": "Full-stack",
    "period": "2024.03–2024.06",
    "summary": "Next.js 기반 포트폴리오, LCP 1.8s 달성",
    "highlights": ["SSR 최적화", "이미지 CDN", "GA4 이벤트"],
    "stack": ["Next.js", "TS", "Tailwind", "Vercel"],
    "links": { "demo": "https://...", "repo": "https://..." },
    "thumb": "/images/projects/p001.webp",
    "tags": ["web", "frontend", "performance"],
    "metrics": { "lcp": 1.8, "cls": 0.01 }
  }
]
```

### `experience.json` 예시

```json
[
  {
    "company": "ACME",
    "role": "Senior Web Engineer",
    "period": "2021.01–2025.08",
    "bullets": [
      "핵심 페이지 LCP 45% 개선(3.4s→1.9s)",
      "CI/CD 파이프라인 구축로 배포 시간 70% 절감"
    ],
    "links": [{ "label": "주요 작업", "href": "https://..." }]
  }
]
```

---

## 7) 기능 명세(핵심)

* **전역**

  * 라우팅: 해시 앵커 스크롤(오프셋 고려), Scroll-spy 활성화
  * 다크모드: 시스템 기본 + 토글(로컬스토리지 유지)
  * 접근성: Landmark(nav/main/footer), 키보드 포커스, aria-label/roles, 스킵 링크
* **NavBar**

  * 스크롤 시 축소(Shadow), 현재 섹션 하이라이트
* **Hero**

  * 타이핑/페이드 인트로(환자 모션 모드 비활성)
  * CTA: `#projects`로 스크롤, 이력서(PDF) 다운로드
* **Skills**

  * 진행도 바(스크린리더용 `aria-valuenow`) · 태그 필터 연동
* **Projects**

  * 필터 탭 및 태그 검색(AND/OR 단순 옵션 중 택1—기본 AND)
  * Lazy-load 이미지, Lightbox(옵션), 외부 링크 `rel="noopener"`
* **Experience**

  * 타임라인 아코디언(모바일), 키보드 접근 가능
* **Contact**

  * 클라이언트 검증(필수/형식) + 서버리스 POST(`/api/contact`)
  * **스팸 방지:** Honeypot + 타임스탬프 체크(≥3s) + 서버 측 rate-limit
  * 성공/실패 토스트, 재시도 버튼, 장애 시 mailto 대체 링크
* **SEO/OG**

  * Title/Meta/OG/Twitter Card · Canonical · Favicon 세트
  * `schema.org` **Person + WebSite + Project** JSON-LD 주입
* **Analytics**

  * GA4 또는 Plausible(쿠키리스) 이벤트: CTA/필터/폼 전송 트래킹
* **오류 처리**

  * 전역 에러 토스트, 폼 밸리데이션 메시지(필드별), 404 앵커 방어

---

## 8) 비기능 요구사항

* **성능 목표(Lighthouse):**

  * LCP ≤ **2.5s**, CLS ≤ **0.1**, TBT ≤ **200ms**, Perf ≥ **95**
  * 번들 예산: **JS ≤ 180KB**, **CSS ≤ 80KB**(압축 후)
  * WebP/AVIF, `loading="lazy"`, 폰트 `display=swap`, preconnect CDN
* **접근성:** WCAG 2.2 AA, 키보드 100% 네비게이션, 대비 충족, 폼 레이블/오류 텍스트
* **보안:**

  * **CSP**(script/style-src ‘self’ + vercel/analytics 도메인 화이트리스트),
  * XSS 방지(서버 검증·HTML 이스케이프), CSRF 토큰(폼), HTTPS 강제
* **SEO:** sitemap.xml, robots.txt, Canonical, 깨끗한 앵커 구조, 의미론적 마크업

---

## 9) API & 통합

* **Contact API (`POST /api/contact`)**

  * 요청: `{ name, email, message, ts, hp }` (`hp`=honeypot 필드)
  * 검증: 빈값/형식/타이밍(≥3s)/속도 제한(아이피별 분당 3회)
  * 처리: 메일 발송(SendGrid/SES) 또는 Notion/Sheet 로깅
  * 응답: `{ ok: true }` / `{ ok: false, error: "..." }`
* **이력서 다운로드**

  * `/assets/resume.pdf` 최신 파일 서빙, `Cache-Control` 7d
* **프로젝트 데이터**

  * 정적 JSON 빌드 타임 로드(Next: `generateStaticParams` / SSG)

---

## 10) 코드 구조(Next.js 예시)

```
/app
  /api/contact/route.ts
  /components
    Navbar.tsx, SectionHeader.tsx, ProjectCard.tsx, SkillBar.tsx, ...
  /data
    projects.json, experience.json, skills.json
  /styles/globals.css
  page.tsx
/public
  /images/projects/*.webp
  /assets/resume.pdf
```

---

## 11) 품질 기준 & 테스트

* **단위 테스트:** 필터 로직, 폼 검증, 유틸(날짜/정렬)
* **E2E(Cypress/Playwright):**

  * 앵커 이동·Scroll-spy 동작, 키보드 포커스 흐름, 폼 제출 성공/실패
* **접근성 테스트:** axe DevTools/Storybook a11y · 스크린리더 기본 시나리오
* **성능 측정:** Lighthouse CI(모바일·3G), WebPageTest(첫 바이트·LCP)
* **링크 검사:** 404/외부 링크 noopener 적용, 이미지 대체텍스트 존재

---

## 12) 배포 & 운영

* **배포:** Vercel/Netlify(프리뷰 URL), PR 머지 시 프로덕션 롤아웃
* **모니터링:** GA4/Plausible 대시보드, Uptime 로봇(5분 주기)
* **버전 관리:** SemVer, Release 노트(CHANGELOG.md)
* **백업:** `/data/*.json`과 `/assets/resume.pdf` 버전 고정

---

## 13) SEO/메타 샘플

```html
<title>홍길동 — Web Engineer Portfolio</title>
<meta name="description" content="프론트엔드 중심 풀스택 웹엔지니어의 대표 프로젝트와 성과. LCP 2s 이하 성능 최적화 경험.">
<link rel="canonical" href="https://example.com/">
<meta property="og:title" content="홍길동 — Portfolio">
<meta property="og:type" content="website">
<meta property="og:image" content="https://example.com/og.jpg">
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Person",
  "name":"Hong Gil-dong",
  "url":"https://example.com",
  "jobTitle":"Web Engineer",
  "sameAs":["https://github.com/...", "https://www.linkedin.com/in/..."]
}
</script>
```

---

## 14) 개발자용 기능 명세서 (핵심 요약)

* [ ] **헤더**: Sticky + Scroll-spy, Skip 링크, 현재 섹션 하이라이트
* [ ] **히어로**: 포지셔닝 카피, 2 CTA(프로젝트, 이력서), 소셜 아이콘
* [ ] **소개/스킬**: 태그/바 형태, aria 값, 태그 클릭 시 프로젝트 필터 연동(옵션)
* [ ] **경력**: 타임라인·아코디언, 링크·성과지표(숫자) 노출
* [ ] **프로젝트**: 카드 그리드, **필터·검색**, Lazy 이미지, 외부 링크 보안 속성
* [ ] **추천사**(옵션): 슬라이더 또는 그리드, 인용·저자 메타
* [ ] **연락처 폼**: 클라이언트·서버 검증, Honeypot·타임체크·Rate-limit, 성공/실패 토스트
* [ ] **다크모드**: 시스템 기본 + 토글, 로컬스토리지 영속
* [ ] **접근성**: WCAG 2.2 AA, 대비·키보드·레이블, `prefers-reduced-motion`
* [ ] **성능**: LCP ≤ 2.5s, CLS ≤ 0.1, 번들 예산 준수, 이미지 최적화
* [ ] **SEO**: Title/Desc/OG/Twitter, JSON-LD(Person/Website/Project), sitemap/robots
* [ ] **보안**: CSP, HTTPS, XSS/CSRF 방지, 외부 링크 noopener
* [ ] **분석**: GA4/Plausible 이벤트(CTA·필터·폼), UTM 유지
* [ ] **배포**: SSG/ISR, 프리뷰→프로덕션 자동화, 에러 로깅(옵션)

---

## 15) 작업 우선순위(권장)

1. IA·카피 확정 → 2) 컴포넌트 스펙 → 3) 데이터 스키마 → 4) Projects/Skills 구현
   → 5) Contact API → 6) SEO/메타 → 7) 접근성 보완 → 8) 성능 튜닝 → 9) 배포/모니터링

---

필요하면 위 스펙을 **Next.js 템플릿**으로 바로 코딩해 드릴게요. 원하는 스택(Next/Vite)과 선호 스타일(다크 기본/라이트 기본), 그리고 초기 프로젝트 3–5개 데이터만 주시면 즉시 맞춰 넣겠습니다.
