const hamburger = document.querySelector(".hamburger");
const lists = document.querySelector(".menuLists");
const nav = document.querySelector("nav");

let menuLists = false;

const ham = function () {
  nav.classList.remove("nav--scrolled");
  if (menuLists) {
    menuLists = false;
  } else {
    menuLists = true;
  }
  hamburger.classList.toggle("is-active");
  lists.classList.toggle("hidden");
};

hamburger.addEventListener("click", ham);

document.querySelector(".footerclick").addEventListener("click", ham);

window.addEventListener("scroll", () => {
  console.log(scrollY);

  if (!menuLists) {
    if (scrollY > 10) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  }
});

//darkmode

let dark = localStorage.getItem("dark");
localStorage.setItem("dark", 0);
const btndark = document.querySelector(".dark--mode");

// window.addEventListener("load", function () {
//   if (dark) {
//     btndark.classList.remove("fa-moon");
//     btndark.classList.add("fa-sun");
//   } else {
//     btndark.classList.add("fa-moon");
//     btndark.classList.remove("fa-sun");
//   }
// });

btndark.addEventListener("click", function (e) {
  e.preventDefault();
  dark = localStorage.getItem("dark");
  console.log(dark);
  // if (dark) {
  //   console.log("inmside tru");
  //   lightMode();
  // } else {
  //   console.log("inside");
  //   darkMode();
  // }
  dark ? lightMode() : darkMode();
});

const darkMode = function () {
  btndark.classList.remove("fa-moon");
  btndark.classList.add("fa-sun");
  document.documentElement.style.setProperty("--background", "#000");
  document.documentElement.style.setProperty("--primary", "#F1F1F1");
  localStorage.setItem("dark", 1);
};

const lightMode = function () {
  localStorage.setItem("dark", 0);
  btndark.classList.add("fa-moon");
  btndark.classList.remove("fa-sun");
  document.documentElement.style.setProperty("--background", "#F1F1F1");
  document.documentElement.style.setProperty("--primary", "#313131");
};
