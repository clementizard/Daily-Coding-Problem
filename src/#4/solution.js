const solution = (array) => {
	array.sort((a, b) => a < b ? -1 : 1);
	let i = array.findIndex(e => e > 0);
	if (i === -1) return false;
	for (i; i < array.length; i++) {
		if (array[i + 1] !== array[i]
			&& array[i + 1] !== array[i] + 1) return array[i] + 1;
	}
	return false;
};

module.exports = solution;
