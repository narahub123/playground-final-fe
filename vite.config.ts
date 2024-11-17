import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // 경로 별칭 설정
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
});
