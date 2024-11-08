import tailwindScrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'custom-purple': 'rgba(145, 10, 103, 1)',
			},
		},
	},
	plugins: [tailwindScrollbarHide],
};