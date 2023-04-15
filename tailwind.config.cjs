/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
