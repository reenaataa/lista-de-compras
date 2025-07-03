function salvarLista(listaCompras, listaComprados) {
    const itensCompras = [];
    const itensComprados = [];

    listaCompras.querySelectorAll("li").forEach(li => {
        const texto = li.querySelector("p")?.innerText;
        if (texto) itensCompras.push(texto);
    });

    listaComprados.querySelectorAll("li").forEach(li => {
        const texto = li.querySelector("p")?.innerText;
        if (texto) itensComprados.push(texto);
    });

    localStorage.setItem("itensLista", JSON.stringify(itensCompras));
    localStorage.setItem("itensComprados", JSON.stringify(itensComprados));
}

export default salvarLista;