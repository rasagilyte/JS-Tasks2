/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

//1var
const showObjectKeys = Object.entries(audi);
console.log(showObjectKeys);

//2var
const showObjectKeys2 = Object.keys(audi).map((key) => [
  Number(key),
  audi[key],
]);
console.log(showObjectKeys2);
