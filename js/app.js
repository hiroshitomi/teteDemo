const carrito = []
const cards = document.getElementById("cards")
const inputSearch = document.querySelector("input#inputSearch")


const cargarProductos = (array) => {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(prenda => {
                contenido += retornoCard(prenda)
            })
            cards.innerHTML = contenido
        }
}
cargarProductos(prendas)


const botonesAdd = document.querySelectorAll("button.btn.btn-primary")

const activarClickBotones = () => {
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () =>{
            let resultado = prendas.find(prod => prod.id === parseInt(btn.id))
            carrito.push(resultado)
            toast(`'${resultado.nombre}' se agregó al carrito`, '#15042d')
            //Acá guardo el carrito en el LocalStorage
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
        })
    })
}

activarClickBotones()

/* Para buscar productos a traves del input */
const filtrarProductos = () => {
    let resultado = prendas.filter(prenda => prenda.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            cargarProductos(resultado)
            activarClickBotones()
        } else {
            alert("No se han encontrado coincidencias.")
        }
}

inputSearch.addEventListener("search", ()=> {
    
    if (inputSearch.value.trim() !== "") {
        filtrarProductos()
    } else {
        cargarProductos(prendas)
    }
})

inputSearch.addEventListener("change", ()=> activarClickBotones())

const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 2500,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true,
        style: { background: bgcolor, fontSize: '20px'}
    }).showToast();
}


