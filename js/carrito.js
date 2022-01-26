class Carrito{
    //Añadir producto al carrito
    comprarProducto (e){
        e.preventDefault();
        if(e.target.classList.contains('btnComp')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);                                                             
        }               
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen: producto.querySelector('.card-img').src,
            titulo: producto.querySelector('.card-title').textContent,
            precio: producto.querySelector('#prec').textContent,
            id: producto.querySelector('.data').getAttribute('data-id'),
            cantidad: 1
        }       
        this.insertarCarrito(infoProducto);        
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src= "${producto.imagen}" width = 100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
         `;
         listaProductos.appendChild(row);
    }
}