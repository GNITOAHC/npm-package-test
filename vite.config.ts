import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    dts({
      // rollupTypes: true,
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
    }),
    // react(),
  ],
  // plugins: [dts(), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'npm-package-test',

      formats: ['es'],

      fileName: 'index',
    },
    rollupOptions: {
      external: [/node_modules/],
      output: {
        // Ensures that your library is split into chunks for each component
        preserveModules: true,
        preserveModulesRoot: 'src',
        format: 'es',
        entryFileNames: `[name].js`,
        inlineDynamicImports: false,
      },
    },
  },
})
