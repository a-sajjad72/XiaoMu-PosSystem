import { defineConfig } from "vite";
import reactVitePlugin from "@vitejs/plugin-react";
import path from "node:path";
import url from "node:url";

const fileUrl = url.fileURLToPath(import.meta.url);


export default defineConfig({
    base: "/",
    plugins: [
        reactVitePlugin()
    ],
    server: {
        port: 9528,
        proxy: {
            "/api": {
                target: "http://localhost:9527",
                changeOrigin: true
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler"
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(path.dirname(fileUrl), "./src")
        }
    }
});