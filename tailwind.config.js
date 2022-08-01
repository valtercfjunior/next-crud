module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		/bg-/,
		/to-/,
		/from-/,
		/text-/
	],
	theme: {
		extend: {
			fontFamily: {
				'myfont': ['Roboto Condensed']
			}
		},
	},
	plugins: [],
};
