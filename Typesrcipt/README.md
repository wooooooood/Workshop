http://bit.ly/fastcampus-typescript-online

- JS superset
- Any browser / host / OS
- open source

```
npm install typescript -g
tsc hello.ts
```
- ts 컴파일러 설치
- ts 컴파일러 실행: hello.ts파일을 컴파일해서 hello.js 파일을 만들 수 있다
- 구형 브라우저도 지원하기 위해 es5기준으로 컴파일된다
- `target`옵션으로 타겟을 줄 수 있다

```
tsc hello.ts --target es6
```

- `Promise`등의 es6이후 기능을 es5로 컴파일하려면 에러난다. 이걸 되게 하려면 lib옵션을 준다
```
tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom
```

```
tsc hello.ts --lib es2015,dom
```

```
node hello.js
```

```
tsc hello.ts --lib es2015 dom --module commonjs
```

- `showconfig`: 어떤 옵션을 줬는지 볼 수 있다
```
tsc hello.ts --lib es2015 dom --module commonjs --showconfig
```

