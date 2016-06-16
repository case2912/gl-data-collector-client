import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';
export default {
    entry: 'src/index.ts',
    dest: 'bundle.js',
    plugins: [
        typescript(),
        babel(),
        uglify()
    ],
    sourceMap: true
}
