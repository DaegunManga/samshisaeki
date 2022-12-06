# 대건세끼

<center>
  <img src="img/logo.svg" width="185px" style="border-radius: 15px; margin-bottom: 1rem;" />
  <p>대건고등학교 급식 식단 뷰어 및 순서 웹 푸시 서비스</p>
</center>

## Server

## Client

웹 클라이언트 (책임자: [@금정빈](https://github.com/lukekeum/))

### Stack

- [X] React (boilerplate by CRA)
- [X] Recoil.js - State mangagement library
- [X] Styled Components - CSS in JS
- [X] Reat Router Dom - Router management
- [X] React Helmet - Modify html metadta
- [X] React Datepicker - For Datepicker
- [ ] ServiceWorkers (client) - For web push alert

### Feature

- Styled-components로 React에서 css 작성
- Server에서 급식메뉴, 급식 순서 받아오면서 가공
- ServiceWorkers를 사용하여 사용자에게 알람(급식 순서) 보내기


### Folder Structure

- public
- src
-  - atom : Recoil 상태 관리 관련 모음
-  - components : 리액트 컴포넌트 모음
-  - hooks : 리액트 훅 모음 (인가인증 처리 로직, 바깥부분 클릭 확인 로직(모달창에 사용))
-  - lib : 각종 유틸들 모음
-  - icon : 이미지 아이콘들 모음
-  - pages : 라우팅 된 컴포넌트 모음

## Repository

- [ ] Automated publish with github actions
