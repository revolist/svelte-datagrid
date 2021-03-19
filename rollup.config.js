import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy'

export default {
  input: 'build/revogrid.js',
  output: {
    file: 'dist/revogrid.js',
    format: 'es'
  },
  external: (id) => {
    // inline @revolist/revogrid deps
    if (id === '@revolist/revogrid') {
      return false;
    }
    // anything else is external
    // Windows: C:\xxxxxx\xxx
    const colonPosition = 1;
    return !(id.startsWith('.') || id.startsWith('/') || id.charAt(colonPosition) === ':');
  },
  plugins: [
    resolve({
      module: true,
    }),
    copy({
      targets: [
        { src: 'build/revogrid.d.ts', dest: 'dist' }
      ]
    })
  ]
};
