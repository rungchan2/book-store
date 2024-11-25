## 프로젝트 개요
- React와 TypeScript를 사용한 온라인 서점 웹 애플리케이션
- CRA(Create React App)를 기반으로 구축

## 주요 기술 스택
- **프론트엔드 프레임워크**: React 18
- **언어**: TypeScript
- **스타일링**: Styled Components
- **상태 관리**: 
  - React Query (데이터 페칭)
  - Zustand (토스트 메시지)
- **라우팅**: React Router DOM
- **개발 도구**: 
  - MSW (API 모킹)
  - Craco (CRA 설정 커스터마이징)

## 주요 기능
1. **도서 관련**
   - 도서 목록 조회
   - 도서 상세 정보
   - 베스트셀러
   - 신간 도서

2. **사용자 기능**
   - 장바구니
   - 주문/결제
   - 리뷰 작성/조회

3. **UI/UX**
   - 반응형 디자인 (모바일/데스크톱)
   - 다크/라이트 테마
   - 토스트 메시지
   - 무한 스크롤

## 프로젝트 구조
```
src/
├── api/          # API 통신 관련
├── components/   # 재사용 가능한 컴포넌트
├── context/      # Context API
├── hooks/        # 커스텀 훅
├── mock/         # MSW 모킹 데이터
├── pages/        # 페이지 컴포넌트
├── store/        # 상태 관리
├── styles/       # 전역 스타일 및 테마
└── types/        # TypeScript 타입 정의
```

## 특이사항
- MSW를 활용한 API 모킹으로 백엔드 의존성 없이 개발 가능
- Craco와 절대 경로 설정으로 깔끔한 import 구조
- 재사용 가능한 컴포넌트 설계 (Button, Title 등)
- 반응형 웹 디자인 구현
- TypeScript를 활용한 타입 안정성 확보