import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import pkg from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  rollupOptions: {
    external: [
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.devDependencies ?? {}),
      "../../api/js",
    ],
  },
})
