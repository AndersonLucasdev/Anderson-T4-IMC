// const btnAnterior = document.getElementById("anterior");
// const btnProximo = document.getElementById("proximo");
// const conteudoCarrossel = document.querySelector(".container-main-pagina1");
// const totalPaginas = 2;

// let paginaAtual = 1;

// const mostrarPagina = (pagina) => {
//     const deslocamento = (pagina - 1) * 50;
//     conteudoCarrossel.style.transform = `translateX(-${deslocamento}%)`;
// }

// btnAnterior.addEventListener("click", () => {
//     paginaAtual = (paginaAtual - 1 + totalPaginas) % totalPaginas || totalPaginas;
//     mostrarPagina(paginaAtual);
// });

// btnProximo.addEventListener("click", () => {
//     paginaAtual = (paginaAtual % totalPaginas) + 1;
//     mostrarPagina(paginaAtual);
// });

// mostrarPagina(paginaAtual);


const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");
const pages = document.querySelectorAll(".page");

let paginaAtual = 0;

function mostrarPagina(pagina) {
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
