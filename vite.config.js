import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function inlineMainCssPlugin() {
  return {
    name: 'inline-main-css',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlAsset = bundle['index.html'];
      if (!htmlAsset || htmlAsset.type !== 'asset') return;

      let html = String(htmlAsset.source);
      const cssKeys = Object.keys(bundle).filter((k) => k.endsWith('.css'));

      for (const cssKey of cssKeys) {
        const cssAsset = bundle[cssKey];
        if (!cssAsset || cssAsset.type !== 'asset') continue;

        const cssText = String(cssAsset.source);
        const linkRegex = new RegExp(
          `<link[^>]+href=["']/?${cssKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`,
          'i'
        );

        if (linkRegex.test(html)) {
          html = html.replace(linkRegex, `<style>${cssText}</style>`);
          delete bundle[cssKey];
        }
      }

      htmlAsset.source = html;
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), inlineMainCssPlugin()],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide-icons';
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
