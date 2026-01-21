// Mobile menu
const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

hamburger.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex"
})


// Typing Effect
const typedText = document.getElementById("typedText");


const sentences = [
    "A Web Developer who focuses on clean, modern, and efficient solutions.",
    "Passionate about UI/UX and high-impact digital interfaces.",
    "Committed to building products that solve real problems."
];
["I am Ardi", "Frontend Developer", "Backend Developer", "Fullstack Development"];

let index = 0;
let charIndex = 0;
let typingSpeed = 90;
let deletingSpeed = 50;
let deleting = false;

function typeEffect() {
    const current = sentences[index];

    if (!deleting) {
        typedText.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typedText.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            index = (index + 1) % sentences.length;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 65);
}


typeEffect();

// Slideshow background
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

if (slides.length > 0) {
    setInterval(showSlides, 4000);
}


// Cek apa user punya preferensi sebelumnya
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️";
}

/* ===== SCROLL REVEAL EFFECT ===== */
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));
