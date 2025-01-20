import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repo-name' with your actual repository name
export default defineConfig({
  base: "/React-Projects/Food_Recipe_App/", // For GitHub Pages deployment
  plugins: [react()],
  server: {
    port: 3000, // Optional: Change the local dev server port
  },
});