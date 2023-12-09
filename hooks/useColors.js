export const useColors = category => {
	switch (category) {
		case 'Deals':
			return {
				dark: '#0f3838',
				light: '#a1bd00'
			}
		case 'Marketing':
			return {
				dark: '#31133f',
				light: '#8f5ec7'
			}
		case 'Branding':
			return {
				dark: '#561042',
				light: '#c760a9'
			}
		case 'Insights':
			return {
				dark: '#421b0c',
				light: '#f43f15'
			}
		default:
			return {
				dark: '#0f3838',
				light: '#a1bd00'
			}
	}
}
