//constantes para socios formulario
const socios = [
  {
    id:1,
    nombre: "Gonzalo",
    mail: "gonzalodurante22@hotmail.com",
    password: "gonza22",
    esSocio: true,
  },
  {
    id:2,
    nombre: "Juan Ignacio",
    mail: "juanignacio294@gmail.com",
    password: "juan22",
    esSocio: true,
  },
  {
    id:3,
    nombre: "Pedro",
    mail: "pedro294@gmail.com",
    password: "pedro22",
    esSocio: true,
  },
];

//productos para no hardcodearlos
const indumentaria = [
  {
    id:01,
    tituloItem: "Cuota Social",
    itemPrice: 2200,
    itemImage: "./img/huracanCuotaSocial.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id:02,
    tituloItem: "Camiseta de Juego",
    itemPrice: 1600,
    itemImage: "./img/huracanCamisetaJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id:03,
    tituloItem: "Pantalon de Juego",
    itemPrice: 1200,
    itemImage: "./img/huracanPantalonJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id:04,
    tituloItem: "Medias de juego",
    itemPrice: 900,
    itemImage: "./img/huracanMediasJuego.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id:05,
    tituloItem: "Campera",
    itemPrice: 2500,
    itemImage: "./img/huracanCampera.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
  {
    id:06,
    tituloItem: "Pantalon Largo",
    itemPrice: 2400,
    itemImage: "./img/huracanPantalonLargo.jpg",
    btnAgregaCarrito: "Añadir Carrito",
  },
];
                  //hasta aca llegue con el fetch Flor clavo un ternario complejo y me re perdi de lo que queria hacer 

// const tarjetaindumentaria = document.querySelectorAll('indumentaria'),

// const crearTarjetaIndumentaria = async ()=>{
//      const muestraJson = await fetch('./js/data.json');
//      const dataJson = await muestraJson.json();

//      crearTarjetaIndumentaria.forEach((element,index) => {
//       for(const item of dataJson){

//       }
//      })
// }

// seteo el localStorage con la info de los socios (array)
localStorage.setItem("listaUsuarios", JSON.stringify(socios));

// guardo el formulario
const formulario = document.getElementById("usuarioFormulario");

// paro el comportamiento del formulario
const guardarInfo = (e) => {
  e.preventDefault();

  // guardo los valores en variables
  //const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const esSocio = document.getElementById("esSocio").checked;

  // genero un objeto con esas variables
  const nuevoSocio = {
    //id:id,
    nombre: nombre,
    email: email,
    password: password,
    esSocio: esSocio,
  };

  // busco en el storage y lo guardo en una constante
  const listaUsuarios = localStorage.getItem("listaUsuarios");
  // parseo la info, si no existe que guarde array vacio
  const listaSociosParseada = JSON.parse(listaUsuarios) || [];
  // hago un push para agregar esta nueva info al array
  listaSociosParseada.push(nuevoSocio);
  // Lo convierto a string para guardarlo en storage
  localStorage.setItem("listaUsuarios", JSON.stringify(listaSociosParseada));
  localStorage.setItem("usuarioActual", JSON.stringify(nuevoSocio));

  formulario.style = "display: none";
  mostrarTienda();
};

//?Gonza pregunta: prodria colocar una promesa aqui? darle mas robustez con un evento futuro? onda si el usuario logueado es socio y si no catch error ejemplo un alert? No se como hacerlo

// ---------------------------- Seteo eventos -----------------------------
formulario.onsubmit = (e) => guardarInfo(e);

function cerrarSesion() {
  localStorage.removeItem("usuarioActual");
  location.reload();
}
//?Gonza comenta: aca, o sale el alert o cierra la sesión. no se como colocarlo bien

// const btnCerrarSesion = document.getElementById("btnCerrarSesion");
// btnCerrarSesion.addEventListener("click", cerrarSesion);
btnCerrarSesion.addEventListener("click", () => {
  Swal.fire({
    title: "Estas Cerrando Secion",
    text: "Cerras secion",
    showCancelButton: true,
    confirmButtonText: "Cerrar",
    cancelButtonText: "No Cerrar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Vuelva Pronto",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  });
});
//

function mostrarTienda() {
  const usuarioActual = localStorage.getItem("usuarioActual");
  const usuarioActualParseado = JSON.parse(usuarioActual);
  //Traje el contenedor de la tienda mediante el id
  const contentIndumentaria = document.querySelector("#contentIndumentaria");
  //aca itero el array de indumentaria
  indumentaria.forEach((item, indice) => {
    //traje la tarjeta completa del producto
    contentIndumentaria.innerHTML += `
                    <div class="col-12 col-md-6">
                      <div class="item shadow mb-4">
                          <h3 class="item-title">${item.tituloItem}</h3>
                          <img class="item-image" src=${item.itemImage}>
                          <div class="item-details" id="${indice}">
                              <h4 class="item-price">$${
                                usuarioActualParseado.esSocio
                                  ? item.itemPrice
                                  : "Precio no disponible"
                              }</h4> 
                              <button class="item-button btn btn-primary agregaCarrito">AÑADIR AL CARRITO</button> //?aca tambien deberia colocar el boton oculto para no socios por que cuando hace click  suma añadir carrito
                          </div>
                      </div>
                    </div>`;
  });
  //los botones "agregar carrito"
  const traeTodosLosBotones = document.querySelectorAll(".agregaCarrito");
  traeTodosLosBotones.forEach((agregaCarritoBoton) => {
    agregaCarritoBoton.addEventListener("click", agregaCarritoClickeando);
  });

  const seccionCarrito = document.getElementById("seccionCarrito");
  seccionCarrito.style = "display: block";
}

//boton de comprar abajo
const botonComprar = document.querySelector(".botonComprar");
botonComprar.addEventListener("click", botonComprarClick);
//esta lleva los items al carrito
const contenedorDeItems = document.querySelector(".contenedorDeItems");

//aca los agrega al carrito

function agregaCarritoClickeando(event) {
  // const id = event.parentNode.id;

  // const producto = indumentaria[id];

  // carrito.push(producto);

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

      //?esta funcion antes me da dolores de cabeza. Con el carrito vacio agredas 2 o mas del mismo producto y no lo suma en el carrito, luego si agregas otro producto distinto te suma todo

      elementQuantity.value++;
      document.querySelector(".toast").toast("show");
      updateShoppingCartTotal();
      return;
      //   elementQuantity.value++;
      //   $(".toast").toast("show");
      //   updateShoppingCartTotal();
      //   return;
      // }
    }
//?comentado por que si no, no me carga otro articulo
//?tambien voy a usarlo en otra parte del proyecto general estaria para url a dominio futbol
    // btnAgregaCarrito.onclick = () => {
    //   Toastify({
    //     text: `Agregaste ${carrito.length} unidades al carrito Luminuso`,
    //     duration: 2000,
    //     style: {
    //       background: "linear-gradient(#f0d024 1px, #0f5f2b)",
    //       color: "black",
    //       width: "250px",
    //       height: "100px",
    //     },
    //     offset: {
    //       x: "10%",
    //       y: 300,
    //     },
    //   }).showToast();
    // };
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
  shoppingCartRow.innerHTML = shoppingCartContent;
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
    title: "Compraste en la tienda Luminosa",
    text: "Retira por la sede",
    icon: "info",
    iconColor: "#f0d024",
    confirmButtonText: "Gracias",
    position: "top-center",
  });
}

