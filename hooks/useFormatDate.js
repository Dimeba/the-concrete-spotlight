export const useFormatDate = dateString => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]

	// Parse the date
	const date = new Date(dateString)

	// Format the day
	const day = date.getDate()
	let daySuffix
	switch (day) {
		case 1:
		case 21:
		case 31:
			daySuffix = 'st'
			break
		case 2:
		case 22:
			daySuffix = 'nd'
			break
		case 3:
		case 23:
			daySuffix = 'rd'
			break
		default:
			daySuffix = 'th'
	}

	// Format the month and year
	const month = months[date.getMonth()]
	const year = date.getFullYear()

	return `${month} ${day}${daySuffix}, ${year}`
}
