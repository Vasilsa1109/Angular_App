import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [angular()],
  base: 'https://github.com/Vasilsa1109/Angular_App'
  // tsconfigPaths()],
});