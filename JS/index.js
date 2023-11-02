const btnAnterior = document.getElementById("prev");
const btnProximo = document.getElementById("next");
const conteudoCarrossel = document.querySelector(".container-main-pagina1");
const totalPaginas = 2;

let paginaAtual = 1;

const mostrarPagina = (pagina) => {
    const deslocamento = (pagina - 1) * 50;
    conteudoCarrossel.style.transform = `translateX(-${deslocamento}%)`;
}

btnAnterior.addEventListener("click", () => {
    paginaAtual = (paginaAtual - 1 + totalPaginas) % totalPaginas || totalPaginas;
    mostrarPagina(paginaAtual);
});

btnProximo.addEventListener("click", () => {
    paginaAtual = (paginaAtual % totalPaginas) + 1;
    mostrarPagina(paginaAtual);
});

mostrarPagina(paginaAtual);