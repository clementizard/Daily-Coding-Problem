const test = require('ava');
const casual = require('casual');

const solution = require('./solution.js');

test('Statement', t => {
	let result = solution([10, 15, 3, 7], 17);
	t.is(result, true);
});

test('Performance', t => {
	const array = casual.array_of_integers(10000);
	
	console.time('solution #1 with 10000 integers');
	solution(array);
	console.timeEnd('solution #1 with 10000 integers');
	t.pass();
});
