import { resolve } from "path";
import { defineConfig } from "vite";

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

const root = resolve(__dirname, "src");

export default defineConfig({
  root,
  publicDir: "../static/",
  base: "/portfolio/",
  server: {
    host: true,
    open: !isCodeSandbox,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "/index.html"),
        skills: resolve(root, "/skills.html"),
        aboutme: resolve(root, "/aboutme.html"),
        projects: resolve(root, "/projects.html"),
        contacts: resolve(root, "/contact.html"),
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});