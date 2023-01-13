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
    const m = new Fraction(this.numerator, this.denominator);
    return m;
  }
  mul(otherFraction) {
    return new Fraction(
      this.numerator * otherFraction.numerator,
      this.denominator * otherFraction.denominator
    ); 
  }
}

const f = new Fraction(4, 3);
const a = f.copy();
const d = new Fraction(2, 4);
console.log(`f = ${f}`);
console.log(`d = ${d}`);
//console.log(`${f.toString(true)}`);
console.log(`f*d = ${f.mul(d)}`);
console.log(`a (f copy) = ${a}`);
