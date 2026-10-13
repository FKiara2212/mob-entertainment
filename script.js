document.addEventListener("DOMContentLoaded", () => {
  const paginaActual =
    location.pathname.split("/").pop() || "Pagina principal.html";

  document.querySelectorAll("nav a").forEach((enlace) => {
    if (enlace.getAttribute("href") === paginaActual) {
      enlace.classList.add("active");
    }
  });


  document.documentElement.style.scrollBehavior = "smooth";


  const boton = document.createElement("button");
  boton.textContent = "↑";
  boton.id = "backToTop";
  document.body.appendChild(boton);


  const estilos = document.createElement("style");
  estilos.textContent = `
    nav a.active {
      color: #ff00ff;
      background: rgba(255, 0, 255, 0.15);
    }
    #backToTop {
      position: fixed;
      right: 24px;
      bottom: 24px;
      width: 48px;
      height: 48px;
      border: none;
      border-radius: 50%;
      background: #ff00ff;
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      display: none;
      z-index: 50;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    #backToTop:hover {
      transform: translateY(-3px);
    }
  `;
  document.head.appendChild(estilos);


  boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  window.addEventListener("scroll", () => {
    boton.style.display = window.scrollY > 400 ? "block" : "none";
  });
});
