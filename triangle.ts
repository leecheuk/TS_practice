class Triangle {
	side_a: number;
	side_b: number;
	side_c: number;

	/**
	  * Construct a triangle object.
	  * @param {number} a - Side of triangle
	  * @param {number} b - Side of triangle
	  * @param {number} c - Side of triangle
	  * @returns null
	  */
	constructor(public a: number, public b: number, public c: number) {
		this.side_a = a;
		this.side_b = b;
		this.side_c = c;
	}

	/**
	  * Returns string with all three triangle lengths.
	  * @returns {string} 
	  */
	toString() {
		return `Triangle (${this.side_a}, ${this.side_b}, ${this.side_c})`
	}

	/**
	  * Check if triangle is a right triangle.
	  * @returns {boolean}
	  */
	isRight() {
		const {side_a, side_b, side_c} = this;
		const x = Math.pow(side_a, 2);
		const y = Math.pow(side_b, 2);
		const z = Math.pow(side_c, 2);
		return x + y == z || x + z == y || z + y == x;
	}
}
