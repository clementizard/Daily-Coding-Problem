const solution = (array, target) => {
	let ret = false;
	
	array.forEach((num1, index1) => {
		ret = (array.findIndex((num2, index2) => (index1 !== index2 && (num1 + num2) === target)) !== -1) || ret;
	});
	return ret;
};

module.exports = solution;
