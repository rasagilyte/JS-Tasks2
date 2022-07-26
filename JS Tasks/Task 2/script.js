/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.getElementById("btn__element").addEventListener("click", kiekKartu);

let paspaudimuSkaicius = 0;
function kiekKartu() {
  paspaudimuSkaicius = paspaudimuSkaicius = paspaudimuSkaicius + 1;
  document.getElementById("btn__state").textContent = paspaudimuSkaicius;
}
