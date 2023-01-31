const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const recuperarCarrito = () => {
    let tablaHtml = ""
    const tbody = document.querySelector("tbody")
    
    if (carrito.length > 0) {
        carrito.forEach(prenda => {
            tablaHtml += armarTablaHtml(prenda)
        });  
    } 
    tbody.innerHTML = tablaHtml
    calcularTotal()
}

recuperarCarrito()

function activarBotonesDelete() {
    const buttonsDelete = document.querySelectorAll("button.btn-delete")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let pos = carrito.findIndex(prenda => prenda.nombre === btn.id)            
                if (pos > -1) {
                    carrito.splice(pos, 1)
                    localStorage.setItem("miCarrito", JSON.stringify(carrito))
                    recuperarCarrito()
                    activarBotonesDelete()
                }
        })
    })
}

activarBotonesDelete()

function calcularTotal() {
    let total = document.querySelector("h3#total")
    let totalCarrito = carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
        total.innerText = `Total: $ ${totalCarrito.toLocaleString()}`
}

const btnVaciarCarrito = document.querySelector("#vaciarCarrito")
if (carrito.length > 0) {
    btnVaciarCarrito.classList.remove("desactivar-btn")
}
btnVaciarCarrito.addEventListener("click", () => {
    localStorage.removeItem("miCarrito")
    carrito.length = 0
    recuperarCarrito()
    location.href = '../pages/carrito.html'
})

const btnComprar = document.querySelector("#comprarCarrito")
if (carrito.length > 0) {
    btnComprar.classList.remove("desactivar-btn")
}

btnComprar.addEventListener("click" , () => {
    Swal.fire({
        title: '¿Confirma la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#15042d',
        cancelButtonColor: '#b983ff',
        confirmButtonText: 'Si',
        cancelButtonText: 'Seguir comprando'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("miCarrito")
            carrito.length = 0

            Swal.fire({
                title: '¡Gracias por su compra!',
                icon: 'success',
                confirmButtonColor: '#15042d'
            })
                .then(() => {
                    location.href = '../index.html'
                })
            }
    })
})