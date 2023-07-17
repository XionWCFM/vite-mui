# Vite - mui

vite을 기반으로 구성된 리액트 보일러플레이트입니다.

빠르게 모든 구성이 갖추어진 mui 프로젝트를 시작하고자 할 때 적합합니다.

주요 구성은 다음과 같습니다.

1. TypeScript

2. Prettier , eslint , husky , lint-staged

3. npm

4. react query

5. jotai

6. @/~~ path 편의성

7. svgr

8. zod , react-hook-form

9. msw

10. mui / emotion

11. jest , react-testing-lib

필요 없다고 생각하는 구성은 자유롭게 지우고 사용하면 되겠습니다

```
npm uninstall 패키지이름
```

```
yarn remove 패키지이름
```

형태로 지울 수 있습니다.

# Get Started

클론을 받아도 좋지만 degit을 이용하는 것을 추천합니다.

https://github.com/Rich-Harris/degit

degit은 git 저장소의 복사본을 만드는 최고의 솔루션입니다.

사용법은 간단합니다.

```
npm i -g degit

npx degit XionWCFM/vite-mui

npm i

git init

npm run prepare

npm run dev

```

