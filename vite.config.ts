import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    base: isProduction ? "/sleek-style-mosaic/" : "/", // Use "/" during development
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      isProduction ? null : componentTagger(), // Enable only in development
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "build", // Set the output directory to "build"
    },
  };
});
