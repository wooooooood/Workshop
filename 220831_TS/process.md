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