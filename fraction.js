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
    const m = new Fraction(this.numerator, this.denomirator);
    return m;
  }

  mul(otherFraction) {
    return new Fraction(
      this.numerator * otherFraction.numerator,
      this.denominator * otherFraction.denominator
    );
  }
  div(other) {
    // Very half baked. Should probably have a way to simplify the resulting fraction. 10/5 -> 2/1
    return new Fraction(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  simplify() {
    // Examples: 
    //     8/20 -> 2/5
    //     8/-2 -> -4/1
    const d = Math.abs(gcd(this.numerator, this.denominator));
    const isPos = 2 * (this.denominator > 0) - 1; // Don't ask me how i got this
    this.numerator /= d * isPos;
    this.denominator /= d * isPos;
  }
}

// Taken from:
//     https://en.wikipedia.org/wiki/Greatest_common_divisor
//     https://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
  if (b == 0)
    return a;
  else
    return gcd(b, a % b);
}

const f = new Fraction(4, 3);
const a = f.copy();
const d = new Fraction(2, 4);
console.log(`f = ${f}`);
d.simplify();
console.log(`d = ${d}`);
//console.log(`${f.toString(true)}`);

console.log(`f*d = ${f.mul(d)}`);
console.log(`a (f copy) = ${a}`);
console.log(`f/d = ${f.div(d)}`);
