import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import componentTagger from "vite-plugin-component-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: true,
    port: 3000,
    open: true,
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '78cdce76d20e.ngrok-free.app',
      '.ngrok-free.app', // Allow any ngrok-free.app subdomain
      '.ngrok.io', // Allow any ngrok.io subdomain
    ],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable for production performance
    minify: 'esbuild', // Faster minification
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: (id) => {
        return id.includes('@rollup/rollup') && !id.includes('virtual:');
      },
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-supabase': ['@supabase/supabase-js'],
          'vendor-chart': ['chart.js', 'react-chartjs-2']
        },
        format: 'es',
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || 
            warning.code === 'CIRCULAR_DEPENDENCY' ||
            warning.code === 'MISSING_NODE_BUILTINS' ||
            warning.code === 'CASE_SENSITIVE_IMPORT') {
          return;
        }
        warn(warning);
      }
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'unsupported-jsx-comment': 'silent',
      'parse-error': 'silent',
      'missing-module': 'silent',
      'case-sensitivity': 'silent'
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      '@supabase/supabase-js',
      'chart.js', 
      'react-chartjs-2'
    ],
    exclude: ['@vite/client', '@vite/env']
  }
}));
