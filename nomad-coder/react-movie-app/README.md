https://nomadcoders.co/react-fundamentals  

필요한것들: nodejs+npm, npx, code editor(vscode), git  

react를 배운다고 fw에 종속되는게 아님.  
react가 사라지더라도 좋은 js개발자가 되어있을 것.  
page가 react로 개발되었는지 알려주는 chrome extension이 있음  
- https://stateofjs.com/  

원래 Webpack, Babel등을 함께 설치해야했으나 CRA를 사용하면 모든게 다 한번에 설치됨  

`npm start` 하면,
- Local: http://localhost:3000  (runs on your computer)
- On Your Network: http://000.000.000.000:3000  (runs in wifi.. friends or phone in this wifi)  

### PropTypes
npm i prop-types

### Add CSS
add css from https://github.com/nomadcoders/movie_app_2019

### Deploy 
1. npm i gh-pages
2. npm run build -> get build dir
3. Edit package-json -> add `homepage`, script `deploy`, `predeploy` 
4. npm run deploy (calls predeploy automatically, pre'deploy' has to be same)

### React hooks
- state를 관리하기 위해 class component를 사용할 필요가 없음

### Interactive
- npm i react-router-dom
- exact={true} Router path 가 정확하게 이거일때만 렌더링한다
- `Link`를 사용하면 Router안에 넣어야한다