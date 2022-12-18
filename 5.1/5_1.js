let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks! Susan</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");

// Menu data structure
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// menuLinks.forEach((e) => console.log(e.text, e.href));

let topMenuLinks = [];

menuLinks.forEach((e) => {
  let a = document.createElement("a");
  a.setAttribute("href", e.href);
  a.textContent = e.text;
  topMenuEl.appendChild(a);
  topMenuLinks.push(a);
});

// console.log(topMenuLinks);

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let showingSubMenu = false;

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();

  let text = e.target.textContent;
  if (
    text === "about" ||
    text === "catalog" ||
    text === "orders" ||
    text === "account"
  ) {
    // console.log(text);
  } else {
    return;
  }

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  for (let i of topMenuLinks) {
    i.classList.remove("active");
  }
  e.target.classList.add("active");

  if (text === "about") {
    mainEl.innerHTML = `<h1>${text}</h1>`;
  }

  menuLinks.forEach((obj) => {
    if (obj.hasOwnProperty("subLinks")) {
      showingSubMenu = true;
      if (obj.text === text) {
        let linkArr = [];
        obj.subLinks.forEach((el) => {
          let link = document.createElement("a");
          link.setAttribute("href", el.href);
          link.textContent = el.text;
          linkArr.push(link);
        });
        subMenuEl.innerHTML = "";
        subMenuEl.append(...linkArr);
        subMenuEl.style.top = "100%";
      }
    } else {
      showingSubMenu = false;
      subMenuEl.style.top = "0";
    }
  });
});

subMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "A") {
    console.log(e.target.textContent);
  } else {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  for (let i of topMenuLinks) {
    i.classList.remove("active");
  }

  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
});
