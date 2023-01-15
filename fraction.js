class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  toString(mixed = false) {
    if (mixed) {
      if (this.denominator != 0) {
        const whole = trunc(this.numerator / this.denominator);
        const numerator = this.numerator % this.denominator;
        return `${whole} ${Math.abs(numerator)}/${this.denominator}`;
      }
    }
    return `${this.numerator}/${this.denominator}`;
  }
  copy() {
    const m = new Fraction(this.numerator, this.denominator);
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
  add(otherFraction) {
    const sumDenominator = this.denominator * otherFraction.denominator;
    const sumNumerator =
      this.numerator * otherFraction.denominator +
      otherFraction.numerator * this.denominator;
    return new Fraction(sumNumerator, sumDenominator).simplify();
  }
  sub(otherFraction) {
    const subDenominator = this.denominator * otherFraction.denominator;
    const subNumerator =
      this.numerator * otherFraction.denominator -
      otherFraction.numerator * this.denominator;
    return new Fraction(subNumerator, subDenominator).simplify();
  }
  simplify() {
    // Examples: 
    //     8/20 -> 2/5
    //     8/-2 -> -4/1
    const d = Math.abs(gcd(this.numerator, this.denominator));
    const isPos = 2 * (this.denominator > 0) - 1; // Don't ask me how i got this
    this.numerator /= d * isPos;
    this.denominator /= d * isPos;

    // I added this just so you could write one liners
    return this;
  }
  toLaTeX(mixed = false) {      
    let sign = "";
    if((this.numerator<0&&this.denominator>0)||(this.numerator>0&&this.denominator<0)){
      sign = "-";
    }
    if(Math.abs(this.numerator)>=Math.abs(this.denominator)){
      mixed = true;
    }
    const start = "\\begin{align*}\n";
    const frac = "\\frac"+`{${Math.abs(this.numerator)}}{${Math.abs(this.denominator)}}`+"\\\\\n";
    const finish = "\\end{align*}";
    const whole = trunc(this.numerator / this.denominator);
    const newfrac = new Fraction (this.numerator % this.denominator,this.denominator);
    const unwhole = "\\frac"+`{${Math.abs(newfrac.numerator)}}{${Math.abs(newfrac.denominator)}}`+"\\\\\n"
    //{${Math.abs(numerator)}}{${this.denominator}}
    if(this.denominator==0){
      return start+"illegal\\:expression\n"+finish;
    }
    if(this.numerator==0){    
      return start+"0\n"+finish;
    }
    if(this.numerator!=0&&this.denominator!=0){
      if(mixed){
        if(newfrac.numerator==0){
          return start+whole+"\n"+finish;
        }else{
          return start+whole+unwhole+finish;
        }
        
      }else{
        return start+sign+frac+finish;
      }
    }
  }
  scalarMul(constant) {
    return new Fraction(this.numerator * constant, this.denominator * constant);
  }
  pow(power) {
    return new Fraction(
      Math.pow(this.numerator, power),
      Math.pow(this.denominator, power),
    ).simplify();
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

// Math.trunc() not supported for older browsers, so i made this
function trunc(a) {
  if (a > 0)
    return Math.floor(a);
  else
    return Math.ceil(a);
}

const f = new Fraction(15,-4);
const a = f.copy();
const d = new Fraction(8, 18).simplify();
console.log(`f = ${f}`);
console.log(`d = ${d}`);
//console.log(`${f.toString(true)}`);

console.log(`f*d = ${f.mul(d)}`);
console.log(`a (f copy) = ${a}`);
console.log(`f/d = ${f.div(d)}`);
console.log(`f+d = ${f.add(d)}`);
console.log(`f scalarMul with 3 = ${f.scalarMul(3)}`);

const g = new Fraction(13, 9).add(new Fraction(9, 7)).sub(new Fraction(1, 63));
console.log(g.toString(true));

console.log(`${new Fraction(4, 2).pow(3)}`);
console.log(`${f.toLaTeX()}`);
console.log(`${f.simplify().toLaTeX()}`);