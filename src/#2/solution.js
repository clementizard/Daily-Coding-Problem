const solution = (array) => {
	const ret = [];
	
	for (let i = 0; i < array.length; i++) {
		ret.push(array.reduce((acc, val, j) => (i !== j ? acc * val : acc), 1));
	}
	return ret;
};

module.exports = solution;
