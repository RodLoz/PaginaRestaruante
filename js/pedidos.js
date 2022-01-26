const carro = new Carrito();
const carrito = document.getElementById('carritoIcon');
const producto = document.getElementById('contenido');
const listaProductos = document.querySelector('lista-carrito tbody');

cargarEventos();

function cargarEventos(){
    producto.addEventListener('click', (e) =>{
        carro.comprarProducto(e)
    });
   
}
