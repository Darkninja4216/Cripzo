// Scroll Animations
const menuItems = document.querySelectorAll('.menu-item img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "scale(1.1) rotate(3deg)";
    } else {
      entry.target.style.transform = "scale(1)";
    }
  });
});

menuItems.forEach(item => observer.observe(item));
