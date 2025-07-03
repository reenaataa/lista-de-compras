import criarNovoItem from "./criarNovoItem.js";

function carregarLista(listaCompras, listaComprados) {
    const compras = JSON.parse(localStorage.getItem("itensLista")) || [];
    const comprados = JSON.parse(localStorage.getItem("itensComprados")) || [];

    const input = document.getElementById("input-item");

    compras.forEach(texto => {
        input.value = texto;
        const novoItem = criarNovoItem(false); // não comprado
        if (novoItem) listaCompras.appendChild(novoItem);
    });

    comprados.forEach(texto => {
        input.value = texto;
        const novoItem = criarNovoItem(true); // já comprado
        if (novoItem) listaComprados.appendChild(novoItem);
    });

    input.value = '';
}

export default carregarLista;
