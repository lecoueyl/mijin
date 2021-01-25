import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/tailwind-preset.js',
  output: {
    file: 'dist/tailwind-preset.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [commonjs(), resolve()],
};
