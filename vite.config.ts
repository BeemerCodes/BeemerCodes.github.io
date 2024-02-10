import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Defina o caminho correto aqui
  plugins: [react()],
});
