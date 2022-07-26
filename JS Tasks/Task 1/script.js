/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", svorioKonv);

function svorioKonv(e) {
  e.preventDefault();
  document.getElementById("output").innerHTML = "";
  let svoris = document.getElementById("search").value;
  console.log(svoris);
  let svorisSvarais = svoris * 2.2046;
  console.log(svorisSvarais);
  let svaruTekstas = document.createElement("h2");
  svaruTekstas.textContent = `Svoris svarais: ${svorisSvarais} lb.`;
  document.getElementById("output").appendChild(svaruTekstas);
  let svorisGramais = svoris / 0.001;
  console.log(svorisGramais);
  let gramuTekstas = document.createElement("h2");
  gramuTekstas.textContent = `Svoris gramais: ${svorisGramais} g.`;
  document.getElementById("output").appendChild(gramuTekstas);
  let svorisUncijomis = svoris * 35.274;
  console.log(svorisUncijomis);
  let uncijuTekstas = document.createElement("h2");
  uncijuTekstas.textContent = `Svoris uncijomis: ${svorisUncijomis} oz.`;
  document.getElementById("output").appendChild(uncijuTekstas);
}
