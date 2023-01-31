const retornoCard = (prenda) => {
    return `<div class="card col-sm-6 m-1">
                <img src="${prenda.imagen}" class="card-img-top" alt="Tete Clothes">
                <div class="card-body">
                    <h5 class="card-title">${prenda.nombre}</h5>
                    <p class="card-text">$${prenda.precio}</p> 
                    <button class="btn btn-primary" id="${prenda.id}" title="Click para agregar '${prenda.nombre}' al carrito">Agregar al Carrito</button>
                </div>
            </div>`
}

const armarTablaHtml = (prenda) => {
    return `<tr>
                <td><img class="img-carrito" src=".${prenda.imagen}"</td>
                <td>${prenda.nombre}</td>
                <td>${prenda.precio}</td>
                <td><button id=${prenda.nombre} class="btn-delete" title="Eliminar del carrito"><img class="img-close" src="../resources/cross.png"></button></td>
            </tr>`
}
