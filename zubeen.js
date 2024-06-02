// Scroll to top button
const scrollBtn = document.querySelector(".scroll-button a");

window.addEventListener("scroll", function () {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

// Navbar toggle
const menuBtn = document.querySelector(".menu-btn i");
const cancelBtn = document.querySelector(".cancel-btn i");
const menu = document.querySelector(".navbar .menu");

menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
});

cancelBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
});

// Typing effect
document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.querySelector(".text-typing");
  const text = typedText.getAttribute("data-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});