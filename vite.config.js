import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      port: 442 // Run the websocket server on the SSL port
    }
  } 
});
