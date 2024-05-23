/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"you-black": "#0f0f0f",
				"you-red": "#ff0000",
				"you-grey": "#272727",
				"you-hover": "#3d3d3d",
			},
		},
	},
	plugins: [],
};
