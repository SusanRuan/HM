let titleEl = document.querySelector("h1");
const body = document.querySelector("body");
// body.style.backgroundColor = "navy";
body.classList.add("blackout", "large");
body.classList.remove("large");
titleEl.style.color = "red";
titleEl.style.fontSize = "50px";
titleEl.style.textAlign = "center";

let p = document.querySelector("p");
p.style.color = "green";
p.style.textAlign = "center";
p.style.fontSize = "50px";
p.setAttribute("fontWeight", "bold");

// p.innerText = "Hello world";
// p.innerHTML = "Hello <b> world </b>";

let a = document.createElement("a");

a.setAttribute("href", "https://www.google.com");
a.textContent = "google";
a.style.color = "white";
body.appendChild(a);

const listItems = document.querySelectorAll("li");

for (let i of listItems) {
  i.style.color = "blue";
  i.innerText = "Hello world";
  i.style.fontSize = "40px";
}
