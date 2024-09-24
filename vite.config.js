/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gideonAIApp",
  plugins: [react()],
  publicDir: "./assets",
});
