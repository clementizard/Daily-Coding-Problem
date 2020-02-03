const test = require('ava');
const casual = require('casual');

const solution = require('./solution.js');

test('Statement', t => {
	let result = solution([3, 4, -1, 1]);
	t.is(result, 2);
	result = solution([1, 2, 0]);
	t.is(result, 3);
});

test('Performance', t => {
	const array = casual.array_of_integers(10000);
	
	console.time('solution #4 with 10000 integers');
	solution(array);
	console.timeEnd('solution #4 with 10000 integers');
	t.pass();
});
