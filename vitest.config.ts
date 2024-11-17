import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // 글로벌 변수를 사용할 수 있도록 설정
    setupFiles: ["/src/app/test-setup.ts"], // 테스트 실행하기 전에 특정 코드나 설정을 미리 적용 가능
  },
});
