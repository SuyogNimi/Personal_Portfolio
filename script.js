// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Active section scroll indicator
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  const scrollPosition = window.scrollY + 180; // offset to trigger active state slightly early

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
      current = section.getAttribute('id');
    }
  });

  // Fallback for very top of the page (Hero section / home)
  if (window.scrollY < 100) {
    current = 'home';
  }

  // Force active state to last section if scrolled to the very bottom
  if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20) {
    current = 'contact';
  }

  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href').substring(1);
    if (href === current) {
      item.classList.add('active');
    }
  });
}

// Initial call and scroll listener
highlightNav();
window.addEventListener('scroll', highlightNav);