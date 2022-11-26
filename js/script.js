const hamburger = document.querySelector(".hamburger");
const lists = document.querySelector(".menuLists");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function () {
  if (nav.classList.contains("nav-scrolled")) {
    nav.classList.toggle("nav-scrolled");
  }

  hamburger.classList.toggle("is-active");
  lists.classList.toggle("hidden");
});

//navbar

const header = document.querySelector(".hero-parent");
const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("nav-scrolled");
  else nav.classList.remove("nav-scrolled");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

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
  document.documentElement.style.setProperty("--primary", "#eef1ff");
};

const lightMode = function () {
  btndark.classList.remove("fa-sun");
  btndark.classList.add("fa-moon");
  document.documentElement.style.setProperty("--background", "#eef1ff");
  document.documentElement.style.setProperty("--primary", "#313131");
};

//navbar

// window.onscroll = function () {
//   console.log(scrollY);
//   if (scrollY > 200) {
//     document.querySelector(".nav").classList.add("nav-scrolled");
//   } else {
//     document.querySelector(".nav").classList.remove("nav-scrolled");
//   }
// };
