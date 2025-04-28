import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'], // Transforma JSX
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Procesa estos archivos
        }),
        commonjs(),
        terser()],
};