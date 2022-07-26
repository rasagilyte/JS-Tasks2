/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

cardWrapper = document.createElement("section");
document.getElementById("output").appendChild(cardWrapper);

document.getElementById("btn").addEventListener("click", githubVartotojai);

async function githubVartotojai() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);

  data.forEach((element, i) => {
    const card = document.createElement("div");
    card.className = "card";
    let loginas = document.createElement("h2");
    loginas.textContent = data[i].login;
    document.querySelector("section").appendChild(card);
    card.appendChild(loginas);
    let img = document.createElement("img");
    img.src = data[i].avatar_url;
    card.appendChild(img);
  });

  document.getElementById("message").style.display = "none";
}
