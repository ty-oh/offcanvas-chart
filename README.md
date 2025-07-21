# 🎨 Canvas Chart Engine (TypeScript)

고성능 Canvas 기반 차트 렌더링 엔진입니다.  
웹 성능 최적화를 위해 DOM 대신 Canvas + Web Worker 구조를 활용하였으며, 다양한 차트 타입을 지원합니다.

## 📦 기술 스택

- TypeScript
- D3.js
- HTML5 Canvas
- Web Worker
- Vite

## 📁 디렉토리 구조

- `src/core`: 렌더링 로직
- `src/charts`: 차트 종류별 구현
- `src/api`: 외부 호출용 API (init, update, render 등)
- `demo/`: 테스트 및 데모

## 🚀 실행 방법

```bash
pnpm install
pnpm dev
