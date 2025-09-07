const input = document.getElementById("pesquisa");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let valor = input.value.toLowerCase().trim();

        const paginas = {
            "pânico 1": "filme1.html",
            "pânico 2": "filme2.html",
            "pânico 3": "filme3.html",
            "pânico 4": "filme4.html",
            "pânico 5": "filme5.html",
            "pânico 6": "filme6.html"
        };

        if (paginas[valor]) {
            window.location.href = paginas[valor];
        } 
        else {
            alert("Filme não encontrado. Tente: Pânico 1, Pânico 2, ...");
        }
    }
});


//TOAST NOTIFICATION
function showToast(mensagem, imagem) {
  const container = document.getElementById("toastContainer");

  // Cria o toast
  const toast = document.createElement("div");
  toast.classList.add("toast");

  toast.innerHTML = `
    <img src="${imagem}" alt="Ghostface">
    <span>${mensagem}</span>
  `;

  container.appendChild(toast);

  // remove depois de 5s
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Quando a página carregar, mostra o toast do Ghostface
window.addEventListener("load", () => {
  showToast("Qual é o seu filme de terror favorito?", "./src/assets/img/iconghostface.png");
});



// SIDEBAR
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// Abre sidebar
menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// Fecha sidebar clicando no X
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Fecha sidebar clicando no overlay
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});