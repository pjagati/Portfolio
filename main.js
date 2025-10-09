const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Typewriter Effect
const typewriterTexts = [
  "Business Analyst",
  "Data Visualization Specialist",
  "Market Research Intern",
  "Business Intelligence Enthusiast",
];

let currentTextIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  const currentText = typewriterTexts[currentTextIndex];
  typewriterElement.textContent = currentText.slice(0, charIndex);
  charIndex++;

  if (charIndex > currentText.length) {
    setTimeout(() => {
      charIndex = 0;
      currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
    }, 2000);
  }

  setTimeout(typeEffect, 100);
}
typeEffect();

// Scroll animation for header
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal Animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

// Animated Hero Counters
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".hero__info-number");
  const speed = 80; // smaller number = faster animation

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCount = () => {
        const increment = Math.ceil(target / speed);
        if (count < target) {
          count += increment;
          counter.textContent = count;
          setTimeout(updateCount, 40);
        } else {
          counter.textContent = target + "+";
        }
      };
      updateCount();
    });
  };

  // Trigger animation once when hero section is visible
  const heroSection = document.querySelector(".hero__info");
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        startCounting();
        observer.unobserve(heroSection);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(heroSection);
});


sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });
sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__item, .service__card, .project__content",
  { delay: 500, interval: 100 }
);
sr.reveal(".contact__content", { origin: "left" });
sr.reveal(".contact__btn", { origin: "right" });

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector(".footer__copyright");
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = yearSpan.innerHTML.replace("{currentYear}", currentYear);
});

