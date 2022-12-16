# 대건세끼

<p align="center">
  <img src="img/logo.svg" width="185px" style="border-radius: 15px; margin-bottom: 1rem;" />
  <p align="center">대건고등학교 급식 식단 뷰어 및 순서 웹 푸시 서비스</p>
</p>

## Server

웹 서버 (책임자: [@권영준](https://github.com/LAPLACE4A))

Published At: https://samshisaekibe.dgmanga.kr

### Stack

- [X] Web Crawling - Python Beautiful soup 
- [X] Node.js - Express.js framework
- [X] API Development - RESTful API
- [X] User Authentication (Restricted User registration & User login) - with Mongo DB
- [X] Crawling Data (meun) caching - Mongo DB
- [X] Automate scheduled DB delete & update - by cron
- [X] JSON Web Token (JWT) Authentication - secured request & response
- [X] web push alert

### Feature

- Express.js를 활용해 Server API를 RESTful API 규격에 맞추어 작성
- Client로 API를 사용해 요청에 대한 급식메뉴, 급식 순서, 회원가입, 로그인, 웹푸시를
  Token(JSON Web Token)을 이용한 인증을 거쳐 응답함으로써 안전한 요청과 응답
- web-push로 시간에 맞추어 Client에게 알람(급식 순서) 보내는 요청 보내기

### Folder Structure

- backend : app.js(서버 구동), scrap.py(웹크롤러 스크립트)
-  - #legacy : Express서버와 DB를 MySQL을 사용하던 개발 초창기 코드들 (Deprecated)
-  - controllers : router에서 사용하는 각종 모듈들 모음
-  - database : Mongo DB에 액세스하기위한 초기 설정 코드
-  - 


## Client

웹 클라이언트 (책임자: [@금정빈](https://github.com/lukekeum/))

Published At: https://samshisaeki.dgmanga.kr

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
