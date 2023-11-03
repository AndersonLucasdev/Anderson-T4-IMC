const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");
const pages = document.querySelectorAll(".page");

let paginaAtual = 0;

const mostrarPagina = (pagina) => {
    pages.forEach((page, index) => {
        if (index === pagina) {
            page.style.display = "block";
        } else {
            page.style.display = "none";
        }
    });
}

btnAnterior.addEventListener("click", () => {
    paginaAtual = (paginaAtual - 1 + pages.length) % pages.length;
    mostrarPagina(paginaAtual);
});

btnProximo.addEventListener("click", () => {
    paginaAtual = (paginaAtual + 1) % pages.length;
    mostrarPagina(paginaAtual);
});

mostrarPagina(paginaAtual);
