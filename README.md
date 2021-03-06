# Grip Movie app

영화를 검색하고 및 즐겨찾기를 등록할 수 있는 무비 앱 입니다.

<br />

## 🎉 **배포 주소**

- [https://yu-jae-min.github.io/POB_Grip/](https://yu-jae-min.github.io/POB_Grip/)

<br />

## 👬 **팀원**

- 개인 프로젝트

<br>

## 📅 **개발 기간**

- 2022년 05월 11일 ~ 2022년 05월 15일

<br />

## 🔧 **기술스택**

- Typescript, React, Sass, recoil

<br />

## 💻 **설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone https://github.com/Yu-jae-min/POB_Grip
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 📒 **구현 목록**

|검색|즐겨찾기|상세모달|
|:-:|:-:|:-:|
|![메인](https://user-images.githubusercontent.com/85284246/172516407-d10cc471-eb0d-454a-b24c-ffe3e36ba4bc.png)|![즐겨찾기](https://user-images.githubusercontent.com/85284246/172516432-a2f4772a-df34-41f9-b45c-1a336519935d.png)|![상세페이지](https://user-images.githubusercontent.com/85284246/172758956-d95dbd81-4db8-453d-b003-479cebc5064e.png)|

<br />

### # 검색

- [x] 검색 바

  - [x] 상단 검색바에 검색어 입력 시 검색어에 맞는 리스트 목록 노출

  - [x] 검색 결과 로딩 중 목록을 로딩 중 입니다 노출

  - [x] 검색 결과 없는 경우 검색 결과 없습니다 노출

- [x] 무한 스크롤

  - [x] useInView hook을 활용한 스크롤 감지

  - [x] 스크롤 최하단 위치 시 api 재호출하여 다음 페이지 노출

<br>

### # 즐겨찾기

- [x] 즐겨찾기 리스트

  - [x] 썸네일 아이콘 혹은 상세 페이지 아이콘을 활용하여 추가 된 즐겨찾기 리스트 노출

  - [x] 로컬스토리지를 활용하여 새로고침 및 재접속 시 즐겨찾기 리스트 조회 가능

- [ ] 드래그 앤 드롭 기능 구현 중

<br>

### # 공통

- [x] 상단 타이틀 및 하단 탭 메뉴

  - [x] 스크롤 시 상단 검색바 및 타이틀과 하단 탭 메뉴 고정

  - [x] 탭 메뉴 클릭 시 해당 페이지로 이동

  - [x] 탭 메뉴 클릭 시 classnames 라이브러리를 활용한 활성화 기능

- [x] 아이템 리스트

  - [x] 썸네일 우측 상단 아이콘을 활용하여 즐겨찾기 추가 및 삭제

  - [x] 즐겨찾기 목록에 추가되어 있는 경우 썸네일 우측 상단 아이콘 색상 활성화

  - [x] 아이템 리스트 클릭 시 상세 모달 노출

- [x] 상세 모달

  - [x] 즐겨찾기 버튼 클릭 시 즐겨찾기 목록에 추가

  - [x] 해당 아이템이 즐겨찾기 목록에 추가되어 있는 경우 즐겨찾기 버튼이 즐겨찾기 해제 버튼으로 변경

  - [x] 취소 버튼 클릭 시 모달 창 닫힘

- [x] API Key 환경 변수로 관리

- [x] svg icon을 유동적인 스타일로 활용하기 위해 컴포넌트로 변환하여 사용

<br>