const Clickbutton = document.querySelectorAll('.btnComp')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
  })


  function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.carta')
    const itemTittle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('#prec').textContent;
    const itemImg = item.querySelector('.card-img').src;
    
    const newItem = {
        title: itemTittle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)    
}


function addItemCarrito(newItem){
    
    
    carrito.push(newItem)    
    renderCarrito()
}

function renderCarrito(){
    //tbody.innerHTML = ' ';
   // console.log(carrito)
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = 
        ` <th scope="row">1</th>
          <td class="tableProductos">
            <img src= ${item.img} alt="">
            <h6 class="tittle"> ${item.title}</h6>
        </td>
        <td class="tablePrecio"><p>${item.precio}</p></td>
        <td class="tableCantidad">
            <input type="number" min="1" value=${item.cantidad} class="input_element">
            <button class="delete btn btn-danger">x</button>
        </td> `

        tr.innerHTML = Content;
        tbody.append(tr)
})   

}