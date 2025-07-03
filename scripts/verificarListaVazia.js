const mensagemComprasVazia = document.getElementById("mensagem-compras");
const mensagemCompradosVazia = document.getElementById("mensagem-comprados");

function verifyEmptyList(listaCompras, listaComprados) {
    const itensCompra =  listaCompras.querySelectorAll("li");
    const itensComprado = listaComprados.querySelectorAll("li");

    if (itensCompra.length === 0) {
        mensagemComprasVazia.style.display = "block";
    } else {
            mensagemComprasVazia.style.display = "none";
        }

    if (itensComprado.length === 0) {
        mensagemCompradosVazia.style.display = "block";
    } else {
            mensagemCompradosVazia.style.display = "none";
        }
}

export default verifyEmptyList;