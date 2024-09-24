/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-color': '#10B981',
				'logo-color': '#1b1c57',
				'first-white-color': '#F0F3FD',
				'border-page-color': 'rgba(255, 255, 255, 0.3)',
				'green-first': '#D1FAE5',
			},
			fontFamily: {
				'main-ff': ['"Lexend", sans-serif'],
			},
		},
	},
	plugins: [],
}
