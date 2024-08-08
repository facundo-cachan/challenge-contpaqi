import { configDefaults, defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

import type { ErrorWithDiff, ParsedStack } from 'vitest';

dotenv.config();

const testExlussions = [
  ...configDefaults.exclude,
  '**/node_modules/**',
  'vitest.setup.ts',
  '.eslint*.*',
  'tailwind.config.ts',
];

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    diff: './vitest.diff.ts',
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['html', 'json'],
      reportOnFailure: true,
      reportsDirectory: './coverage',
      thresholds: {
        branches: 80,
        lines: 80,
        functions: 90,
        statements: 90,
      },
      watermarks: {
        statements: [90, 100],
        branches: [80, 100],
        functions: [90, 100],
        lines: [80, 100],
      },
      exclude: testExlussions,
    },
    exclude: testExlussions,
    reporters: ['verbose'],
    globals: true,
    setupFiles: './src/setupTests.ts',
    onStackTrace(error: ErrorWithDiff, { file }: ParsedStack): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return;
      }

      // Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false;
      }
    },
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      return !(log === 'message from third party library' && type === 'stdout');
    },
  },
});