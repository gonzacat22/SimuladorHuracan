
//vienen todas las tarjetas que tienen añadir carrito
const traeTodosLosBotones = document.querySelectorAll('.agregaCarrito');
traeTodosLosBotones.forEach((agregaCarritoBoton) => {
    agregaCarritoBoton.addEventListener('click', agregaCarritoClickeando);
});

const botonComprar = document.querySelector('.botonComprar');
botonComprar.addEventListener('click', botonComprarClick);

const contenedorDeItems = document.querySelector(
  '.contenedorDeItems'
);


const socios = [{
  nombre: 'Gonzalo',
  mail: 'gonzalodurante294@gmail.com',
  pass: 'gonza22'
},
{
  nombre: 'Juan Ignacio',
  mail: 'juanignacio294@gmail.com',
  pass: 'juan22'
},
{
  nombre: 'Pedro',
  mail: 'lpedro294@gmail.com',
  pass: 'pedro22'
}]



//productos para no hardcodearlos
const indumentaria = [{
  tituloItem: 'Cuota Social',
  itemPrice: '$2200',
  itemImage: './img/huracanCuotaSocial.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
},{
  tituloItem: 'Camiseta de Juego',
  itemPrice: '$1600',
  itemImage: './img/huracanCamisetaJuego.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
},{
  tituloItem: 'Pantalon de Juego',
  itemPrice: '$1200',
  itemImage: './img/huracanPantalonJuego.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
},{
  tituloItem: 'Medias de juego',
  itemPrice: '$900',
  itemImage: './img/huracanMediasJuego.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
},{
  tituloItem: 'Campera',
  itemPrice: '$2500',
  itemImage: './img/huracanCampera.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
},{
  tituloItem: 'Pantalon Largo',
  itemPrice: '$2400',
  itemImage: './img/huracanPantalonLargo.jpg',
  btnAgregaCarrito: 'Añadir Carrito'
}]



function agregaCarritoClickeando(event) {
  const boton = event.target;
  const item = boton.closest('.item');

  const tituloItem = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(tituloItem, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = contenedorDeItems.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  



  /*const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;*/
  shoppingCartRow.innerHTML = shoppingCartContent;//limpio el html
  contenedorDeItems.append(shoppingCartRow);

  shoppingCartRow//borrar el carrito
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const botonClick = event.target;
  botonClick.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function botonComprarClick() {
    contenedorDeItems.innerHTML = '';
  updateShoppingCartTotal();
}
