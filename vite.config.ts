import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			include: '**/*.svg'
		})
	],
	server: {
		port: 4001,
		allowedHosts: ['localhost', '127.0.0.1', 'fleet-buffalo-advanced.ngrok-free.app']
	}
});
