/**
 * Returns n-th entry in Fibonacci sequence. Recall, the sequence starts with 0-th entry and the first two entries are 0 and 1. 
 * @param {number} n - Entry number
 * @returns {number} Value of the n-th entry
 */
function fn(n: number) {
	let seq: number[] = [0, 1];
	let i: number;

	for ( i = 2; i < n; i++) {
		let e: number = seq[i-1] + seq[i-2];
		seq.push(e);
	}

	return seq;
}