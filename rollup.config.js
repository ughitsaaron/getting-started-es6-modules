import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';

export default {
  entry: 'index.js',
  plugins: [
    babel({
      "presets": ["es2015-rollup"]
    }),
    npm({
      jsnext: true,
      main: true
    })
  ]
};
