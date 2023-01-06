let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks! Susan</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((e) => {
  let a = document.createElement("a");
  a.setAttribute("href", e.href);
  a.textContent = e.text;
  topMenuEl.appendChild(a);
});
