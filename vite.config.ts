import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // 경로 별칭 설정
      { find: "@asset", replacement: "/src/assets" },
      { find: "@shared", replacement: "/src/shared" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@tests", replacement: "/src/tests" },
      { find: "@", replacement: "/src" },
    ],
  },
});
