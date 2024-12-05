// Clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Variables globales
let productos = [
    new Producto("RTX 4080 SUPER", 10000, "images/RTX 4080s.jpg"),
    new Producto("RTX 4090 24GB", 20000, "images/RTX 4090.jpg"),
    new Producto("RX 7900 XTX 24GB", 15999, "images/RX 7900 XTX.jpg")
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para renderizar productos
function renderizarProductos() {
    const contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = ""; // Limpiar el contenedor

    productos.forEach(function(producto, index) {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarProducto(${index})">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
}

// Función para renderizar el carrito
function renderizarCarrito() {
    const contenedorCarrito = document.getElementById("carrito-items");
    const totalElemento = document.getElementById("total");
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        carrito.forEach(function(producto, index) {
            const div = document.createElement("div");
            div.className = "carrito-item";
            div.innerHTML = `
                <span>${producto.nombre} - $${producto.precio}</span>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            `;
            contenedorCarrito.appendChild(div);
        });
    }

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalElemento.textContent = `Total: $${total}`;

    // Guardar el carrito en el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para agregar un producto al carrito
function agregarProducto(index) {
    carrito.push(productos[index]);
    renderizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    renderizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("¡Gracias por tu compra!");
        carrito = [];
        renderizarCarrito();
    }
}

// Renderizar contenido inicial
renderizarProductos();
renderizarCarrito();