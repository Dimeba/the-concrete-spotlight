export const useHexToRgba = (hex, alpha) => {
	// Remove the hash at the beginning if it's there
	hex = hex.replace(/^#/, '')

	// Parse the hex color string
	let r, g, b
	if (hex.length === 3) {
		// In case of shorthand hex color code
		r = parseInt(hex.charAt(0) + hex.charAt(0), 16)
		g = parseInt(hex.charAt(1) + hex.charAt(1), 16)
		b = parseInt(hex.charAt(2) + hex.charAt(2), 16)
	} else if (hex.length === 6) {
		// In case of full hex color code
		r = parseInt(hex.substring(0, 2), 16)
		g = parseInt(hex.substring(2, 4), 16)
		b = parseInt(hex.substring(4, 6), 16)
	} else {
		throw new Error('Invalid HEX color.')
	}

	return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`
}
