import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      // "e532-2001-8a0-6a5a-6000-7ddc-42e5-1488-5e4a.ngrok-free.app",
    ],
  },
});
