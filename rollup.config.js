import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'stats',
    output: {
      file: 'dist/stats.js',
      format: 'cjs',
    },
    plugins: [terser()],
  },
  {
    input: 'index',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      terser(),
      copy({
        targets: [
          {
            src: ['chalk.js', 'README.md', 'package.json', 'LICENSE'],
            dest: 'dist',
          },
        ],
      }),
    ],
  },
];
