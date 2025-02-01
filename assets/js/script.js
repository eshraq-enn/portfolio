document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const menuToggle = document.getElementById('mobile-menu');
  const navUl = document.querySelector('#navbar ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });
  }

  // Défilement fluide pour tous les liens de navigation
  const navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Fermer le menu mobile si ouvert
      if (navUl.classList.contains('active')) {
        navUl.classList.remove('active');
      }
      const targetID = link.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});