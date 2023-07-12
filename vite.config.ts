import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import { compression } from 'vite-plugin-compression2';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    compression({
      include: [/\.(js)$/, /\.(css)$/, /\.(webp)$/],
      threshold: 1400,
    }),
  ],
});
