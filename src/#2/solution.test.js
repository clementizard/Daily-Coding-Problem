const test = require('ava');
const casual = require('casual');

const solution = require('./solution.js');

test('Statement', t => {
	let result = solution([1, 2, 3, 4, 5]);
	t.deepEqual(result, [120, 60, 40, 30, 24]);
	result = solution([3, 2, 1]);
	t.deepEqual(result, [2, 3, 6]);
});

test('Performance', t => {
	const array = casual.array_of_integers(10000);
	
	console.time('solution #2 with 10000 integers');
	solution(array);
	console.timeEnd('solution #2 with 10000 integers');
	t.pass();
});
