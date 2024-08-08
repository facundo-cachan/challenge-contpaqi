import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';

//include the following directions
/// <reference types="vitest" />
/// <reference types="vite/client" />

const viteConfig = defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/test'] })],
  base: '',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
    },
  },
});

export default mergeConfig(viteConfig, {});