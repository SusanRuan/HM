let mainEl = document.querySelector("main");

mainEl.innerHTML = "<h1>SEI Rocks! Susan</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// menuLinks.forEach((e) => console.log(e.text, e.href));

menuLinks.forEach((e) => {
  let a = document.createElement("a");
  a.setAttribute("href", e.href);
  a.textContent = e.text;
  a.style.color = "white";
  topMenuEl.appendChild(a);
});
