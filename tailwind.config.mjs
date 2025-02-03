/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'openSans': ['OpenSans', 'sans-serif'],
				'openSansB': ['OpenSansBold', 'sans-serif']
			},
			colors: {
				'pink': 'hsl(322, 100%, 66%)',
				'vPaleCyan': 'hsl(193, 100%, 96%)',
				'vDarkCyan': 'hsl(192, 100%, 9%)',
				'grayBlue': 'hsl(208, 11%, 55%)'
			}
		},
	},
	plugins: [],
}