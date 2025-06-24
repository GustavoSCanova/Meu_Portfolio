 window.addEventListener("load", () => {
    const bot = document.getElementById("chatbot");

    // Espera 5 segundos, depois aplica a classe que some com ele
    setTimeout(() => {
      bot.classList.add("hide");
    }, 3000);
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
  btnTopo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    function mudarSlide(index) {
        const carousel = new bootstrap.Carousel(document.getElementById('carouselCertificados'));
        carousel.to(index);
    }