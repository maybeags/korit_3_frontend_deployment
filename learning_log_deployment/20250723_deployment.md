# 예제 프론트엔드 파일
https://github.com/maybeags/carlist_front.git
에서 .zip 파일을 받습니다.

frontend에 폴더에 집어넣고
local에서 실행시키기 위하여
npm install
npm run dev

window + docker
db를 먼저 켜고
백엔드를 켭니다.

그러면 이제 backend와 frontend가 연결이 되어있는데, 여태까지와의 차이점이 뭐냐면
전에는 backend / frontend가 다 local이었는데
이제는 backend는 docker에서
frontend는 local에서 돌아가고 있다는 점입니다.

이제 다음 단계는 frontend의 배포가 됩니다.
frontend 배포를 github pages를 활용할 때는
repository에 올라간 코드를 기준으로 합니다.

그래서 저희는 현재 예제 프론트엔드 파일을 깃허브에 올릴겁니다.

자 방금까지 github repository에 push 과정 거쳤습니다.
그럼 현재 리포지토리에 올라간 것을 깃허브 페이지가 확인하여 그것을 기준으로 배포가 이루어지게 됩니다.

npm install gh-pages

전체 패키지 목록 출력하는 명령어
npm list

특정 패키지 목록을 가져오는 명령어
npm list gh-pages

사전 설정을 제가 해둔 상태기 때문에 파일들을 좀 참조하겠습니다.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/carlist_front/',    // 여기가 중요한 부분입니다.
  plugins: [react()],
});
```

```json
//package.json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "predeploy": "npm run build", // 배포 전에 알아서 build하라고 미리 설정해둔 명령어
    "deploy": "gh-pages -d dist"
  }
```