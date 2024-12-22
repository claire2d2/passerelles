/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			main: "#80A1C1",
      maindarker: "#5c7791",
			button: "#BA3F1D",
      active: "#AB2B08",
      white : "white",
      disabled: "#94a3b8",
      text: "#0f172a"
		},
	},
	plugins: [],
};
