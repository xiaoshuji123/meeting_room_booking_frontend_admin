import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { generateScopedNameFactory } from "@dr.pogodin/babel-plugin-react-css-modules/utils";
import path from "path";

const CSS_MODULE_LOCAL_IDENT_NAME = "[local]_[hash:base64:5]";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3020,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@dr.pogodin/babel-plugin-react-css-modules",
            {
              generateScopedName: generateScopedNameFactory(
                CSS_MODULE_LOCAL_IDENT_NAME,
              ),
              attributeNames: { activeStyleName: "activeClassName" },
              filetypes: {
                ".less": {
                  syntax: "postcss-less",
                },
              },
              webpackHotModuleReloading: true,
              exclude: "node_modules",
              handleMissingStyleName: "warn",
            },
          ],
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 如需自定义组件其他 token, 在此处配置
        },
      },
    },
    modules: {
      generateScopedName: generateScopedNameFactory(
        CSS_MODULE_LOCAL_IDENT_NAME,
      ), // 自定义生成的类名
      localsConvention: "camelCase",
    },
  },
});
