// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero typing animation
const heroText = document.querySelector('.hero h2 span');
const texts = ["Dumindi Nirasha", "a Software Engineering Student"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  heroText.textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Wait 2s before next text
  } else {
    setTimeout(type, 150);
  }
})();

// Optional: Add shadow effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 15px rgba(0,188,212,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Mobile Navbar toggle (if you add a burger menu)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

if(burger){
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
}