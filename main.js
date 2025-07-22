// ===== Mobile Navbar Toggle =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
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

// ✅ Set Cookie
function setCookie(name, value, hours) {
  const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// ✅ Get Cookie
function getCookie(name) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  const cookieConsent = getCookie("cookieConsent");
  if (!cookieConsent) {
    banner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 1);
    banner.style.display = "none";
  });

  rejectBtn.addEventListener("click", function () {
    setCookie("cookieConsent", "rejected", 1);
    banner.style.display = "none";
  });
});
