// Botão para voltar ao topo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.opacity = "1";
  } else {
    document.getElementById("myBtn").style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// ------------------------------------------------------------------------------

// Animação do Main

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(20px)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ------------------------------------------------------------------------------
