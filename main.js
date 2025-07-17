// ===== Mobile Navbar Toggle =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

   // Disable scroll when menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");

   document.body.style.overflow = "auto";
});

// ===== ScrollReveal Animations =====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__subheader", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container .btn", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".feature__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 500 });

