//constantes para socios formulario

const socios = [
  {
    id: 1,
    name: "Gonzalo",
    mail: "gonzalodurante294@gmail.com",
    password: "gonza22",
  },
  {
    id: 2,
    name: "Juan Ignacio",
    mail: "juanignacio294@gmail.com",
    password: "juan22",
  },
  {
    id: 3,
    name: "Pedro",
    mail: "pedro294@gmail.com",
    password: "pedro22",
  },
];

//productos para no hardcodearlos
const indumentaria = [
  {
    id: 01,
    tituloItem: "Cuota Social",
    itemPrice: 2200,
    itemImage: "./img/huracanCuotaSocial.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id: 02,
    tituloItem: "Camiseta de Juego",
    itemPrice: 1600,
    itemImage: "./img/huracanCamisetaJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id: 03,
    tituloItem: "Pantalon de Juego",
    itemPrice: 1200,
    itemImage: "./img/huracanPantalonJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id: 04,
    tituloItem: "Medias de juego",
    itemPrice: 900,
    itemImage: "./img/huracanMediasJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id: 05,
    tituloItem: "Campera",
    itemPrice: 2500,
    itemImage: "./img/huracanCampera.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id: 06,
    tituloItem: "Pantalon Largo",
    itemPrice: 2400,
    itemImage: "./img/huracanPantalonLargo.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
];
// guardo el formulario
const formulario = document.getElementById("mostrandoInfoFormulario");
// botón para mostrar informacion
const botonMostrar = document.getElementById("mostrandoInfoGuardada");
// botón para borrar informacion
const botonBorrar = document.getElementById("borrarInfoGuardada");
// guardo el elemento que va a contener informacion de los socios
const infoContenedor = document.getElementById("infoContenedo");

// paro el comportamiento del formulario
const guardarInfo = (e) => {
  e.preventDefault();

  // guardo los valores en variables no estoy seguro las ultimas 2
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const esSocio = document.getElementById("esSocio").checked;

  // genero un objeto con esas variables
  // const socios = {
  //   name:name,
  //   email:email,
  //   password:password,
  //   esSocio:esSocio,

  // };
  // busco en el storage y lo guardo en una constante
  const listaSocios = localStorage.getItem("listaSocios");
  // parseo la info, si no existe que guarde array vacio
  const listaSociosParseada = JSON.parse(listaSocios) || [];
  // hago un push para agregar esta nueva info al array
  listaSociosParseada.push(socios);
  // Lo convierto a string para guardarlo en storage
  localStorage.setItem("listaSocios", JSON.stringify(listaSociosParseada));

  // reseteo los datos que cargaron
  formulario.reset();
  // ejecuto función para mostrar cuando se agrega uno nuevo
  mostrarInfo(); // ejecuto función para mostrar cuando se agrega uno nuevo
};

const mostrarInfo = () => {
  // me aseguro que no tenga nada al momento de mostrar la info
  infoContenedor.innerHTML = "";
  // guardo en una variable lo que tengo en el storage
  const infoDesdeStorage = localStorage.getItem("listaSocios");

  // si existe la info, que la muestre. Sino que muestre un mensaje del html
  if (infoDesdeStorage) {
    // lo convierto a objeto para poder operar con JS
    const infoParseada = JSON.parse(infoDesdeStorage);
    // hago un foreach() para iterar el array que obtengo del storage, para mostrar la info de cada usuario
    infoParseada.forEach((user, indexDelUser) => {
      // el forEach devuelve el elemento, junto con el índice del mismo dentro del array
      // creo una nueva tarjeta (contenedor de la info del usuario)
      const nuevoUsuario = document.createElement("div");
      // agrego una clase, para el estilo
      nuevoUsuario.className = "usuarioNuevo";
      // le agrego el contenido de la tarjeta, utilizo backticks para facilitar
      nuevoUsuario.innerHTML = ` 
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.password}</p> 
        <p>${user.esSocio ? "Es Socio" : "No Es Socio"}</p>
        
        // <button type="button" onclick="borrarItemEspecifico(${indexDelUser})">Borrar Item</button> //aca teniamos que agregar algo dentro del $
        
      `;
      // aqui arriba no se si sirve traer el pass

      // Le agrego al botón "borrar item" mediante el onclick, la función para borrar el item. Le paso como parámetro el índice del elemento actual.
      // Con "user.programador" estoy haciendo un if ternario: Que muestre 'programador' si es true, y que muestre 'no es programador' si es false.
      // Por último, agrego la tarjeta al contenedor de tarjetas.
      infoContenedor.append(nuevoUsuario);
    });
  } else {
    infoContenedor.innerHTML = "<h2>No hay info para mostrar</h2>"; // mensaje para cuando no hay info
  }
};

const borrarListaStorage = () => {
  localStorage.removeItem("listaSocios"); // elimino el item donde guardaba la info en el storage

  mostrarInfo(); // vuelvo a ejecutar para mostrar actualización
};

const borrarItemEspecifico = (indiceDelUsuario) => {
  const infoDesdeStorage = localStorage.getItem("listaSocios"); // guardo en una variable lo que tengo en el storage
  const infoParseada = JSON.parse(infoDesdeStorage); // lo convierto a objeto para poder operar con JS

  if (infoParseada.length === 1) {
    // si hay un solo elemento dentro del array, borra todo el item del storage
    borrarListaStorage();
  } else {
    // si hay más de un elemento guardado, ejecuto lo siguiente
    infoParseada.splice(indiceDelUsuario, 1); // ejecuto un splice para eliminar desde el indice, un espacio
    localStorage.setItem("listaSocios", JSON.stringify(infoParseada)); // guardo el array actualizado
    mostrarInfo(); // ejecuto función para mostrar la info actualizada
  }
};

// ---------------------------- Seteo eventos -----------------------------
// formulario.onsubmit = (e) => guardarInfo(e);
// botonMostrar.onclick = () => mostrarInfo();
// botonBorrar.onclick = () => borrarListaStorage();

//Traje el contenedor de la tienda mediante el id lo entendi
const contentIndumentaria = document.querySelector("#contentIndumentaria");
//aca itero el array de indumentaria
indumentaria.forEach((item) => {
  //entendi que debia solo traer un div y luego dinamicamente js agrega todos
  contentIndumentaria.innerHTML += `
                      <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">${item.tituloItem}</h3>
                            <div class="item-details">
                                <h4 class="item-price">$${item.itemPrice}</h4>
                                
                            
                            <img class="item-image" src=${item.itemImage}>
                            <button class="item-button btn btn-primary agregaCarrito">AÑADIR AL CARRITO</button>

                            </div>
                        </div>
                      </div>`;
});
//los botones "agregar carrito"
const traeTodosLosBotones = document.querySelectorAll(".agregaCarrito");
traeTodosLosBotones.forEach((agregaCarritoBoton) => {
  agregaCarritoBoton.addEventListener("click", agregaCarritoClickeando);
});
//boton de comprar abajo
const botonComprar = document.querySelector(".botonComprar");
botonComprar.addEventListener("click", botonComprarClick);
//esta lleva los items al carrito
const contenedorDeItems = document.querySelector(".contenedorDeItems");

//aca los agrega al carrito

function agregaCarritoClickeando(event) {
  const boton = event.target;
  const item = boton.closest(".item");

  const tituloItem = item.querySelector(".item-title").textContent;
  const itemPrice = item.querySelector(".item-price").textContent;
  const itemImage = item.querySelector(".item-image").src;

  addItemToShoppingCart(tituloItem, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = contenedorDeItems.getElementsByClassName(
    "shoppingCartItemTitle"
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        ".shoppingCartItemQuantity"
      );
      elementQuantity.value++;
      $(".toast").toast("show");
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement("div");

  const shoppingCartContent = `
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
  </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent; //limpio el html
  contenedorDeItems.append(shoppingCartRow);

  shoppingCartRow //borrar el carrito
    .querySelector(".buttonDelete")
    .addEventListener("click", removeShoppingCartItem);

  shoppingCartRow
    .querySelector(".shoppingCartItemQuantity")
    .addEventListener("change", quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

  const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      ".shoppingCartItemPrice"
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace("$", "")
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      ".shoppingCartItemQuantity"
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
  botonClick.closest(".shoppingCartItem").remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function botonComprarClick() {
  contenedorDeItems.innerHTML = "";
  updateShoppingCartTotal();
  Swal.fire({
    title: 'Compraste en la tienda Luminosa',
    text: 'Retira por la sede',
    icon: 'info',
    iconColor: '#81f40e',
    confirmButtonText: 'Gracias',
    position: 'top-center'
})

  
}
