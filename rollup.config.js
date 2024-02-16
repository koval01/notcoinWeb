import { spawn, execSync } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import sveltePreprocess from 'svelte-preprocess';
import { cleandir } from "rollup-plugin-cleandir";
import { createHash } from 'crypto';

const production = !process.env.ROLLUP_WATCH;
const gitCommitId = execSync('git rev-parse HEAD').toString().trim();
const hash = (name) => createHash('md5').update(`${name}-${Date.now() + Math.random()}`).digest('hex').slice(0, 8);

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
		dir: 'public/build',
		chunkFileNames: ({ name }) => `chunks/${name}.${hash(name)}.js`
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
				cssHash: ({ hash, css }) => `_${hash(css)}`
			},
			preprocess: sveltePreprocess()
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		postcss({
			extract: true,
			minimize: true,
			sourceMap: !production,
			plugins: [
				cssnano({ preset: ["advanced", { zindex: false }] })
			]
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
		!production && cleandir(),

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
			'process.env.GIT_COMMIT': JSON.stringify(gitCommitId)
        })
	],
	watch: {
		clearScreen: false
	}
};
