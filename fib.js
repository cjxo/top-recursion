// Fibonacci Recurrence Relation:
// Let F_i denote the ith fibonacci number. Then,
// - the base case (for n < 2),
// 		F_0 = 0, F_1 = 1.
// - the recursive case, (for n >= 2),
// 		F_n = F_(n - 1) + F_(n - 2)
//
function fibs(n) {
	let a = 0;
	let b = 1;
	let c = 0;
	let result = [];
	while (n-- > 0) {
		result.push(c);
		a = b;
		b = c;
		c = a + b;
	}

	return result;
}

function fibsRecInner(n, array) {
	if (n < 2) {
		return n;
	} else if (array[n] != null) {
		return array[n];
	} else {
		let fibval = fibsRecInner(n - 1, array) + fibsRecInner(n - 2, array);
		array[n] = fibval;

		return fibval;
	}
}

function fibsRec(n) {
	let result = new Array(n);
	result.fill(null);
	result[0] = 0;
	result[1] = 1;
	if (n > 2) {
		fibsRecInner(n - 1, result);
	}
	return result;
}

console.log(fibs(8))
console.log(fibsRec(8))
