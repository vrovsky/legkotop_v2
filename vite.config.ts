import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "60f5-2001-8a0-70d1-9b00-bdca-60f5-1e9b-b6d6.ngrok-free.app",
    ],
  },
});
