import verifyEmptyList from "./verificarListaVazia.js";
import GerarData from "./gerarData.js";
import salvarLista from "./salvarLista.js";

const inputItem = document.getElementById("input-item");
const listaCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("itens-comprados");
let cont = 0;

function criarNovoItem( marcado = false) {
    if(inputItem.value == ""){
        alert("O item não pode estar em branco!");
        return;
    }

    // ADICIONAR NOVOS ITENS
    const listItem = document.createElement("li");
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + cont++;

    const itemName = document.createElement("p");
    itemName.innerText = inputItem.value;

    // BOTÕES EDITAR E APAGAR
    const botoesContainer = document.createElement("div");
    botoesContainer.classList.add("botoes-item");

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("botao-editar");
    btnEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 20.5H3v-3.5L16.732 3.732z"/></svg>`;

    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("botao-excluir");
    btnExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/> </svg>`;

    botoesContainer.appendChild(btnEditar);
    botoesContainer.appendChild(btnExcluir);  
    
    if (marcado) {
        inputCheckbox.checked = true;
        itemName.style.textDecoration = "line-through";
        itemName.style.color = "#7a7a7a";
        botoesContainer.style.display = "none";
    }

    // EVENTO CHECKBOX
    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            itemName.style.textDecoration = "line-through";
            itemName.style.color = "#7a7a7a";
            botoesContainer.style.display = "none";
            listaComprados.appendChild(listItem);
        } else {
            itemName.style.textDecoration = "none";
            itemName.style.color = "#000";
            botoesContainer.style.display = "flex";
            listaCompras.appendChild(listItem);
        }

        salvarLista(listaCompras, listaComprados);
        verifyEmptyList(listaCompras, listaComprados);
    });

    // EVENTO EDITAR
    btnEditar.addEventListener("click", function() {
        const novoTexto = prompt("Editar item:", itemName.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            itemName.innerText = novoTexto.trim();
            salvarLista(listaCompras, listaComprados);
        }
    });

    // EVENTO EXCLUIR
    btnExcluir.addEventListener("click", function(){
        listItem.remove();
        verifyEmptyList(listaCompras, listaComprados);
        salvarLista(listaCompras, listaComprados);
    });

    // MONTAGEM
    listItemContainer.appendChild(inputCheckbox);
    listItemContainer.appendChild(itemName);
    listItemContainer.appendChild(botoesContainer);

    listItem.appendChild(listItemContainer);

    const dataCompleta = GerarData();
    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerText = dataCompleta;

    listItem.appendChild(itemData);

    inputItem.value = '';
    return listItem;
}

export default criarNovoItem;