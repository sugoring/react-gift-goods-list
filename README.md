# React Gift Goods List

## 개요

이 저장소는 FE 카카오 선물하기 3주차 과제 (2024-07-08 ~ 2024-07-12)를 위한 React 페이지 구현을 포함하고 있습니다. 학습 일지는 [여기](https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904)에서 확인할 수 있습니다.

---

## 상품 리스트 구현 - API

### 1단계 - API 적용하기

#### 요구사항

- **비동기 데이터 구현**
  - Axios만 사용한다.
  - React Query를 사용하지 않는다.
- **API 구현**
  - Axios 또는 React Query를 사용한다.
- **fetch state 관리**
  - Suspense를 사용하지 않는다.
  - Error Boundary를 사용하지 않는다.

#### Type 정의

- [x] oas.yaml 파일을 토대로 `Request Type`을 정의한다.
- [x] oas.yaml 파일을 토대로 `Response Type`을 정의한다.

#### API 구현

- **메인 페이지 (@/pages/Home)**
  - **Theme 카테고리 섹션(@/components/features/Home/ThemeCategorySection)**
    - [x] `/api/v1/themes` API를 사용하여 구현한다.
  - **실시간 급상승 선물 랭킹 섹션(@/components/features/Home/RankingSection)**
    - [x] `/api/v1/ranking/products` API를 사용하여 구현한다.
    - [x] 필터 조건을 선택하면 해당 조건에 맞게 API를 요청하여 데이터를 보여준다.

- **Theme 페이지 (@/pages/Theme)**
  - **히어로 섹션 (@/components/features/Theme/HeroSection)**
    - [x] URL의 pathParams를 사용하여 구현한다.
    - [x] `/api/v1/themes` API를 사용하여 구현한다.
    - [x] themeKey가 잘못된 경우 메인 페이지로 리다이렉트한다.
  - **상품 목록 섹션 (@/components/features/Theme/ProductSection)**
    - [x] `/api/v1/themes/{themeKey}/products` API를 사용하여 구현한다.
    - [x] API 요청 시 한 번에 20개의 상품 목록을 가져온다.

---

### 2단계 - Error, Loading Status 핸들링 하기

**🚀 Getting Started**

- 비동기 데이터 요청 시 발생할 수 있는 Loading, Error를 생각하고 적용합니다.
- 유저 관점에서 Loading과 Error를 어떻게 전달하면 좋을지 고민합니다.

**📝 Requirements**

- 본인만의 기준으로 일관된 코드를 작성합니다.
- 각 API에서 Loading 상태에 대한 UI 대응을 합니다.
- 데이터가 없는 경우에 대한 UI 대응을 합니다.
- Http Status에 따라 Error를 다르게 처리합니다.

---

### 3단계 - 테마 별 선물 추천 API에 페이지네이션 구현하기 & React Query 사용해보기

**🚀 Getting Started**

- 페이지네이션의 동작 원리를 이해하고 적용합니다.
- IntersectionObserver를 사용하여 무한 스크롤을 설계합니다.

**📝 Requirements**

- 본인만의 기준으로 일관된 코드를 작성합니다.
- 스크롤을 내리면 추가로 데이터를 요청하여 보여지게 합니다.
- 1단계에서 구현한 API를 react-query를 사용해서 구현합니다.

---

### 4단계 - 질문의 답변을 README에 작성

1. **CORS 에러는 무엇이고 언제 발생하는지 설명해주세요. 이를 해결할 수 있는 방법에 대해서도 설명해주세요.**

   CORS (Cross-Origin Resource Sharing) 에러는 브라우저에서 다른 출처의 리소스를 요청할 때 보안 정책에 의해 발생하는 에러입니다. 이는 보안상의 이유로 동일 출처 정책(Same-Origin Policy)에 의해 제약됩니다. 이를 해결하기 위해 서버에서 CORS 헤더를 설정하거나, 프록시 서버를 사용하여 동일 출처로 요청을 보내도록 할 수 있습니다.

2. **비동기 처리 방법인 callback, promise, async await에 대해 각각 장단점과 함께 설명해주세요.**

   - **Callback**
     - 장점: 간단하고 빠르게 구현 가능.
     - 단점: 콜백 지옥(Callback Hell)이라 불리는 가독성 문제 발생 가능.

   - **Promise**
     - 장점: 콜백에 비해 가독성이 좋고, 에러 처리가 용이함.
     - 단점: 여러 Promise를 중첩하여 사용할 경우 코드가 복잡해질 수 있음.

   - **Async/Await**
     - 장점: 비동기 코드를 동기 코드처럼 작성할 수 있어 가독성이 높음.
     - 단점: 예외 처리를 위해 try/catch 구문을 사용해야 함.

3. **React Query의 주요 특징에 대해 설명하고, queryKey는 어떤 역할을 하는지 설명해주세요.**

   - **React Query의 주요 특징**
     - 서버 상태를 관리하기 위한 라이브러리로, 데이터 패칭, 캐싱, 동기화, 업데이트를 손쉽게 처리.
     - 비동기 요청의 상태를 쉽게 관리할 수 있도록 도와줌.
     - 다양한 캐싱 전략과 자동 리패칭 기능 제공.

   - **queryKey의 역할**
     - 각 쿼리를 고유하게 식별하는 키로, 캐싱과 리패칭에 사용됨.
     - 동일한 queryKey를 가진 쿼리는 같은 데이터를 공유하며, 이를 통해 데이터 일관성을 유지할 수 있음.