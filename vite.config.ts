import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [ // 경로 별칭 설정 
      { find: "@asset", replacement: "/src/assets" },
      { find: "@routers", replacement: "/src/routers" },
      { find: "@store", replacement: "/src/store" },
      { find: "@tests", replacement: "/src/tests" },
      { find: "@", replacement: "/src" },
    ],
  },
});
