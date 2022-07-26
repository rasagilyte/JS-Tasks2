/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.sum = function () {
  const suma = this.a + this.b;
  return `Skaiciu suma yra ${suma}`;
};

Calculator.prototype.subtraction = function () {
  const skirt = this.a - this.b;
  return `Skaiciu skirtumas yra ${skirt}`;
};

Calculator.prototype.multiplication = function () {
  const sand = this.a * this.b;
  return `Skaiciu sandauga yra ${sand}`;
};

Calculator.prototype.division = function () {
  const dalm = this.a / this.b;
  return `Skaiciu dalmuo yra ${dalm}`;
};

const calculator1 = new Calculator(10, 5);
console.log(calculator1);
console.log(calculator1.sum());
console.log(calculator1.subtraction());
console.log(calculator1.multiplication());
console.log(calculator1.division());

// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   sum() {
//     const suma = this.a + this.b;
//     return `Skaiciu suma yra ${suma}`;
//   }
//   subtraction() {
//     const skirt = this.a - this.b;
//     return `Skaiciu skirtumas yra ${skirt}`;
//   }
//   multiplication() {
//     const sand = this.a * this.b;
//     return `Skaiciu sandauga yra ${sand}`;
//   }
//   division() {
//     const dalm = this.a / this.b;
//     return `Skaiciu dalmuo yra ${dalm}`;
//   }
// }

// const calculator1 = new Calculator(10, 3);
// console.log(calculator1);
// console.log(calculator1.sum());
// console.log(calculator1.subtraction());
// console.log(calculator1.multiplication());
// console.log(calculator1.division());
