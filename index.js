window.addEventListener("load", () => {
  const bot1 = document.getElementById("chatbot1");

  // Oculta a primeira após 3 segundos
  setTimeout(() => {
    if (bot1) bot1.classList.add("hide");
  }, 3000);

});

const certificadosModal = document.getElementById('certificadosModal');
const chatbot2 = document.getElementById('chatbot2');

certificadosModal.addEventListener('shown.bs.modal', function () {
  if (chatbot2) {
    chatbot2.classList.remove('hide'); // Exibe a mensagem

    setTimeout(() => {
      chatbot2.classList.add('hide'); // Oculta após 4 segundos
    }, 4000);
  }
});

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Rola suavemente para o topo quando clicado

let carouselInstance;

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.getElementById('carouselCertificados');
  if (carouselElement) {
    carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: false, // desativa autoplay se não quiser
      wrap: false
    });
  }
});

function mudarSlide(index) {
  if (carouselInstance) {
    carouselInstance.to(index);
  }
}