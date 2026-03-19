import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import { visualizer } from 'rollup-plugin-visualizer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default [
  // Main bundle with all components
  {
    input: 'src/export.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false, // Disable sourcemaps for smaller bundles
        compact: true, // Minify the output
        // Ensure compatibility with older Node.js versions
        generatedCode: {
          preset: 'es2015',
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
        },
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false, // Disable sourcemaps for smaller bundles
        compact: true, // Minify the output
        // Ensure compatibility with older Node.js versions
        generatedCode: {
          preset: 'es2015',
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
        },
      },
    ],
    treeshake: {
      moduleSideEffects: false, // Assume modules have no side effects
      propertyReadSideEffects: false, // Ignore property access side effects
      tryCatchDeoptimization: false, // Don't turn off try-catch-tree-shaking
    },
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
      }),
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss(),
          cssnano({
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              colormin: true,
              reduceIdents: true,
              mergeIdents: true,
            }]
          })
        ],
        extract: true,
        minimize: true,
        sourceMap: false, // Disable source maps for smaller CSS
      }),
      visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    external: (id) => {
      // Externalize all node_modules except for small utility libraries
      if (id.includes('node_modules')) {
        // Keep small utilities bundled
        const keepBundled = [
          'clsx',
          'class-variance-authority',
          'tailwind-merge',
          'deepmerge',
          'merge-refs'
        ];
        return !keepBundled.some(lib => id.includes(lib));
      }

      // Always externalize React and core dependencies
      const alwaysExternal = [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@babel/runtime'
      ];

      return alwaysExternal.some(ext => id.startsWith(ext));
    },
  },
  {
    input: 'dist/esm/types/export.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
