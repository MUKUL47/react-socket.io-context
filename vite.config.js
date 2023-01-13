import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.js",
      name: "react-socket.io-context",
      fileName: "react-socket.io-context",
    },
  },
});
