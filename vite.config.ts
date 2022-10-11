import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// Also need to install @types/node, @types/react and @types/react-dom to make path work

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@scss": path.resolve(__dirname, "./src/scss"),
            "@pages": path.resolve(__dirname, "./src/pages"),
        },
    },
    plugins: [react()],
});
