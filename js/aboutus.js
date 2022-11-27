let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');
 
const scrollInProgress = () => {
	didScroll = true
}
 
const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}
 

 
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

const hamburger = document.querySelector(".hamburger");
const lists = document.querySelector(".menuLists");
const nav = document.querySelector("nav");

let menuLists = false;

hamburger.addEventListener("click", function () {
  nav.classList.remove("nav--scrolled");
  if (menuLists) {
    menuLists = false;
  } else {
    menuLists = true;
  }
  hamburger.classList.toggle("is-active");
  lists.classList.toggle("hidden");
});

//navbar

window.addEventListener("scroll", () => {
  console.log(scrollY);

  if (!menuLists) {
    if (scrollY > 150) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  }
});
const btndark = document.querySelector(".dark--mode");
let dark = false;
btndark.addEventListener("click", function () {
  if (!dark) {
    darkMode();
    dark = true;
  } else {
    dark = false;
    lightMode();
  }
});

const darkMode = function () {
  btndark.classList.remove("fa-moon");
  btndark.classList.add("fa-sun");

  
  document.documentElement.style.setProperty("--background", "#000");
  document.documentElement.style.setProperty("--primary", "#F1F1F1");
  document.body.style.backgroundColor = "#000";
  document.querySelector(".paragraph").style.color= "white"
  document.querySelector(".bw").style.color= "white"
};

const lightMode = function () {
  btndark.classList.remove("fa-sun");
  btndark.classList.add("fa-moon");
  
  document.documentElement.style.setProperty("--background", "#F1F1F1");
  document.documentElement.style.setProperty("--primary", "#313131");
  document.body.style.backgroundColor = "#f1f1f1";
  document.querySelector(".paragraph").style.color= "#000"
  document.querySelector(".bw").style.color= "#000"
};