/*
 * Merge Sort Divide and Conquer:
 * Divide
 * 	- the array A into two adjacent subarrays, each half the size. To do this,
 *	  find the midpoint of the array A, and split A into two subarrays B and C.
 *
 * Conquer
 * 	- the problem by sorting B and C recursively using merge-sort. We represent
 * 	  these subarrays using indices: (low, middle, and high).
 *
 * Combine
 * 	- the problem by merging two sorted subarrays B and C back into A.
 */

function merge(array, low, middle, high) {
	let leftSubarray = new Array(middle - low);
	let rightSubarray = new Array(high - middle);

	for (let index = 0; index < leftSubarray.length; ++index) {
		leftSubarray[index] = array[index + low];
	}
	
	for (let index = 0; index < rightSubarray.length; ++index) {
		rightSubarray[index] = array[index + middle];
	}

	let leftSubarrayIndex = 0;
	let rightSubarrayIndex = 0;
	let originalArrayIndex = low;

	while ((leftSubarrayIndex < leftSubarray.length) && (rightSubarrayIndex < rightSubarray.length)) {
		if (leftSubarray[leftSubarrayIndex] < rightSubarray[rightSubarrayIndex]) {
			array[originalArrayIndex++] = leftSubarray[leftSubarrayIndex++];
		} else {
			array[originalArrayIndex++] = rightSubarray[rightSubarrayIndex++];
		}
	}

	while (leftSubarrayIndex < leftSubarray.length) {
		array[originalArrayIndex++] = leftSubarray[leftSubarrayIndex++];
	}

	while (rightSubarrayIndex < rightSubarray.length) {
		array[originalArrayIndex++] = rightSubarray[rightSubarrayIndex++];
	}
}

function mergeSortInner(array, start, end) {
	if (end < (start + 2)) {
		// base case
		return;
	} else {
		// "Recursive Case"

		// divide by finding midpoint
		const midpoint = Math.floor((end + start) / 2);

		// conquer by sorting recursively
		mergeSortInner(array, start, midpoint);
		mergeSortInner(array, midpoint, end);

		// combine by merging
		merge(array, start, midpoint, end);
	}
}

function mergeSort(array) {
	mergeSortInner(array, 0, array.length);
}

let a = [3, 2, 1, 13, 8, 5, 0, 1, 99, -1, 4, 21312, 2];
let b = [3, 2];
mergeSort(a);

console.log(a);
