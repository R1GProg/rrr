class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  toString(mixed = false) {
    if (mixed) {
      if (this.denominator != 0) {
        const whole = Math.floor(this.numerator / this.denominator);
        const numerator = this.numerator % this.denominator;
        return `${whole} ${numerator}/${this.denominator}`;
      }
    }
    return `${this.numerator}/${this.denominator}`;
  }
  copy() {
    // return new object with the same num & denum
    const m = new Fraction(this.numerator, this.denomerator);
    return m;
  }
  div(other) {
	// Very half baked. Should probably have a way to simplify the resulting fraction. 10/5 -> 2/1
	return new Fraction(this.numerator * this.denominator, this.denomerator * other.numerator);
  }
}

const f = new Fraction(4, 3);
const a = f.copy();
const d = new Fraction(2, 4);
console.log(`f = ${f}`);
console.log(`d = ${d}`);
//console.log(`${f.toString(true)}`);
console.log(`f*d = ${f.mul(d)}`);
console.log(a+' your number');