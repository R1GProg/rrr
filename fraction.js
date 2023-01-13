console.log("Hi, mom!");
console.error("Stack oveflow");
console.warn("useless word");

class Fraction {
	constructor(num, denum) {
		this.num = num;
		this.denum = denum;
	}

	toString(mixed=true) {
		if (mixed) {
			const whole = Math.floor(this.num/this.denum);
			const mixed_num = this.num % this.denum;
			return `${whole} ${mixed_num}/${this.denum}`;
		}
		return `${this.num}/${this.denum} | ${this.num/this.denum}`;
	}

	copy(other) {
		return new Fraction(this.num, this.denum);
	}

	add(other) {
		// idk
	}

	sub(other) {
		// who knows
	}

	mul(other) {
		// why
	}

	div(other) { // ME!!!!!!!!!!!
		this.num *= other.denum;
		this.denum *= other.num;
	}
}

f = new Fraction(7, 3);
d = f.copy();
d.num = 600;
f.div(new Fraction(7, 3));
console.log(f.toString(false));
console.log(f.toString(false));
console.log(f.toString(true));