import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'unit',
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['e2e/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**'],
      exclude: ['src/test/**', 'src/**/*.d.ts', 'src/routeTree.gen.ts', 'src/main.tsx'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
})
