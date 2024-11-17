import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@app", replacement: "/src/app" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@features", replacement: "/src/features" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "#icons", replacement: "/src/shared/@common/ui/icons" },
      { find: "@", replacement: "/src" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@asset", replacement: "/src/assets" },
      { find: "@data", replacement: "/src/data" },
      { find: "@store", replacement: "/src/store" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@components", replacement: "/src/components" },
      { find: "@tests", replacement: "/src/tests" },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true, // 글로벌 변수를 사용할 수 있도록 설정
    setupFiles: ["/src/app/test-setup.ts"], // 테스트 실행하기 전에 특정 코드나 설정을 미리 적용 가능
  },
});
