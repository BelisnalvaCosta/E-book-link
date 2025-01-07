document.addEventListener('DOMContentLoaded', () => {
// Suavizar a rolagem ao clicar nos links do menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(e.target.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Botões de navegação (próximo e anterior)
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
    });
  });
});  