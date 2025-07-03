import criarNovoItem from "./scripts/criarNovoItem.js";
import verifyEmptyList from "./scripts/verificarListaVazia.js";
import salvarLista from "./scripts/salvarLista.js";
import carregarLista from "./scripts/carregarLista.js";

const btnNovaLista = document.getElementById("nova-lista");
const listaCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("itens-comprados");
const saveItem = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item");

// NOVA LISTA
btnNovaLista.addEventListener("click", () => {
    const confirma = confirm("Deseja criar uma nova lista? Todos os itens serão perdidos.");
    if (confirma) {
        listaCompras.innerHTML = "";
        listaComprados.innerHTML = "";
        
        localStorage.removeItem("itensLista");
        localStorage.removeItem("itensComprados");

        verifyEmptyList(listaCompras, listaComprados);
    }
});

// SALVAR ITEM NA LISTA
saveItem.addEventListener("click", (event) => {
    event.preventDefault();
    const listItem = criarNovoItem(false);

    if (listItem) {
        listaCompras.appendChild(listItem);
        verifyEmptyList(listaCompras, listaComprados);
        salvarLista(listaCompras, listaComprados);
    }
});

// CRIAR NOVO ITEM COM ENTER
inputItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        saveItem.click();
    }
});

// CARREGAR LISTA SALVA
window.addEventListener("load", () => {
    carregarLista(listaCompras, listaComprados);
    verifyEmptyList(listaCompras, listaComprados);
});

// TOGGLE FOOTER MENU
document.querySelector(".infoBtn").addEventListener("click", function () {
        document.querySelector(".infoMenu").classList.toggle("show");
});