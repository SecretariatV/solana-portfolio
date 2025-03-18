import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: { "process.env": env },
    server: {
      port: 3500,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@components": "/src/components",
        "@hooks": "/src/hooks",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@stores": "/src/stores",
        "@styles": "/src/styles",
        "@ui": "/src/ui",
        "@utils": "/src/utils",
      },
    },
  };
});
