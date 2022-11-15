import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    viteTsconfigPaths(),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
