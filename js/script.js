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

//navbar

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

const header = document.querySelector(".hero-parent");
const navHeight = nav.getBoundingClientRect().height;

//slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;
  const maxSlide = slides.length;

  //functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  goToSlide(0);

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  });

  setInterval(nextSlide, 4000);
};
slider();

//Revealing elements on scroll
const allSections = document.querySelectorAll("section");

// const revealSection = function (entries) {
//   const [entry] = entries;

//   // if (!entry.isIntersecting) return;
//   // entry.target.classList.remove("section--hidden");
//   // observer.unobserve(entry.target);

//   if (entry.isIntersecting) {
//     entry.target.classList.remove("section--hidden");
//   }
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.3,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
// });

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

const plus = document.querySelectorAll(".plus");
const cardContain = document.querySelectorAll(".card-contain");

cardContain.forEach(function (entry, i) {
  entry.addEventListener("click", function () {
    document.querySelector(`.plus--${i + 1}`).classList.toggle("plus--active");
    document
      .querySelector(`.card-content--${i + 1}`)
      .classList.toggle("hidden");
  });
});

//dark mode

//navbar

// window.onscroll = function () {
//   console.log(scrollY);
//   if (scrollY > 200) {
//     document.querySelector(".nav").classList.add("nav-scrolled");
//   } else {
//     document.querySelector(".nav").classList.remove("nav-scrolled");
//   }
// };

///dark mode

if (!localStorage.getItem("dark")) {
  localStorage.setItem("dark", false);
}
let dark = localStorage.getItem("dark");
const btndark = document.querySelector(".dark--mode");

window.addEventListener("load", function () {
  if (dark) {
    btndark.classList.remove("fa-moon");
    btndark.classList.add("fa-sun");
  } else {
    btndark.classList.add("fa-moon");
    btndark.classList.remove("fa-sun");
  }
});

btndark.addEventListener("click", function (e) {
  e.preventDefault();
  dark = localStorage.getItem("dark");
  console.log(dark);
  if (dark) {
    console.log("inmside tru");
    lightMode();
  } else {
    console.log("inside");
    btndark.classList.remove("fa-moon");
    btndark.classList.add("fa-sun");
    document.documentElement.style.setProperty("--background", "#000");
    document.documentElement.style.setProperty("--primary", "#F1F1F1");
    localStorage.setItem("dark", 1);
  }
  // dark ? lightMode() : darkMode();
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
