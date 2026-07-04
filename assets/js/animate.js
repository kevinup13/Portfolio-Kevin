// ... seu código anterior do menu mobile continua aqui ...

// ANIMATION ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-scroll");
      // Se quiser que a animação aconteça apenas UMA vez, desative a linha abaixo:
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.15 // Dispara a animação quando 15% da seção estiver visível
});

// Seleciona todas as seções marcadas e joga no monitor do observer
const hiddenElements = document.querySelectorAll(".hidden-scroll");
hiddenElements.forEach((el) => observer.observe(el));