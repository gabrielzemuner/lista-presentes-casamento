import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // 🔴 expõe na rede local
    port: 5173, // opcional, mas deixa fixo
  },
  base: "/lista-presentes-casamento/", // github pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
