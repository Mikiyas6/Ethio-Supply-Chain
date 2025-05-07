import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Ethio-Supply-Chain/",
  plugins: [react(), eslint()],
  build: {
    outDir: "dist",
  },
});
