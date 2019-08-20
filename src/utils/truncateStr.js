export const shorten = (str, n) => {
	return (str.match(RegExp('.{' + n + '}\\S*')) || [str])[0] + '...'
}
