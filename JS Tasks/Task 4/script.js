/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
console.log(ENDPOINT);

document.querySelector("body").addEventListener("click", fetchData);
async function fetchData() {
  const response = await fetch("./cars.json");
  const data = await response.json();
  console.log(data);

  data.forEach((element, i) => {
    const card = document.createElement("div");
    card.className = "card";
    let brandas = document.createElement("h2");
    brandas.textContent = data[i].brand;
    document.getElementById("output").appendChild(card);
    card.appendChild(brandas);
    let modeliai = document.createElement("p");
    modeliai.textContent = data[i].models;
    card.appendChild(modeliai);
  });
}

fetchData();
