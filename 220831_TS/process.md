토큰 발급 https://github.com/settings/tokens

터미널에 `npm login --scope=@wooooooood --registry=https://npm.pkg.github.com`  
비번은 토큰임  
package.json update  
```json
"name": "@wooooooood/220831_ts",
  "version": "0.0.2",
  "description": "",
  "main": "./src/index.js",
  "types":"./src/index.d.ts",
```
터미널에 `npm publish` 하면 깃헙 packages에 뜬다

`npm i -D typescript  `
`tsc --init ` 
에서  
outDir 주석 해제 후 dist로 설정  
include: ["src"]  
declaration 주석 해제  

package json에서 main, types 경로 dist 설정  
`npx tsc --build`하면 dist에 생김
  
이후 패키지 사용하는 곳에서는
`npm i typescript  `
`npx tsc index.ts` => index.js 생성됨  
`node index.js ` 