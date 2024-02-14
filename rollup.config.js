import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', '--dev', '--single'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/app.js',
	output: {
		sourcemap: !production,
		format: 'es',
		name: 'app',
		dir: 'public/build'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},
			preprocess: sveltePreprocess()
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ 
			output: 'app.css',
			minify: true
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser({
			ecma: 5,
			toplevel: true,
			format: {
				ascii_only: true
			},
            compress: {
                pure_getters: true,
				drop_console: true,
				arguments: true,
				booleans_as_integers: true,

                unsafe: true,
				unsafe_math: true,
                unsafe_comps: true,
				unsafe_arrows: true,
				unsafe_methods: true,
				unsafe_Function: true
            }
        }),
		replace({
			preventAssignment: true,
            'process.env.PRODUCTION': production,
        }),
	],
	watch: {
		clearScreen: false
	}
};
