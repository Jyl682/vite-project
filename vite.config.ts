import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-project/', // Replace with your repository name
  build: {
    outDir: 'dist', // This is the default, but you can specify it explicitly
  },
});
