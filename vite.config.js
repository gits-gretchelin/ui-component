import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    exclude: ['./src/**/**.stories.ts'],
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'GitsUi',
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [
        {
          name: 'remove-collection-handlers',
          transform(code, id) {
            if (
              id.endsWith('reactivity.esm-bundler.js') ||
              id.endsWith('runtime-core.esm-bundler.js')
            ) {
              return code
                .replace(`mutableCollectionHandlers,`, `null,`)
                .replace(`readonlyCollectionHandlers,`, `null,`);
            }
          },
        },
      ],
    },
  },
  optimizeDeps: {
    include: [
      'vue-remix-icons',
      'vee-validate',
      '@headlessui/vue',
      'pagino',
      '@popperjs/core',
      'vue-feather',
      'vue-router',
      'yup',
    ],
  },
});
