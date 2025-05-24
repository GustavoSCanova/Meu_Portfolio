 window.addEventListener("load", () => {
    const bot = document.getElementById("chatbot");

    // Espera 5 segundos, depois aplica a classe que some com ele
    setTimeout(() => {
      bot.classList.add("hide");
    }, 3000);
  });