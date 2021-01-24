import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';
import { coffeescript, } from 'svelte-preprocess';
// const mode = process.env.NODE_ENV;
// const dev = mode === 'development';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const preprocess = sveltePreprocess({ coffeescript: true, });

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
    svelte({
      preprocess,
      // dev,
      // hydratable: true,
      // emitCss: true
    }),
		resolve()
	]
};
