// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Variables necesarias
let productos = [
    new Producto("Producto 1", 10000),
    new Producto("Producto 2", 20000),
    new Producto("Producto 3", 15999)
];
let carrito = [];

// Función para mostrar opciones de productos
function mostrarOpcionesProductos() {
    let opciones = "Ingrese el número del producto a agregar:\n";
    productos.forEach(function(producto, index) {
        opciones += (index + 1) + ". " + producto.nombre + " - $" + producto.precio + "\n";
    });
    opciones += "Ingrese otro número para finalizar.";
    return prompt(opciones);
}

// Función para agregar un producto al carrito
function agregarProducto() {
    let productoNumero = parseInt(mostrarOpcionesProductos());
    if (productoNumero >= 1 && productoNumero <= productos.length) {
        let producto = productos[productoNumero - 1];
        carrito.push(producto);
        console.log("Producto agregado: " + producto.nombre + " - $" + producto.precio);
    } else {
        console.log("Ha decidido no agregar más productos.");
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        return "El carrito está vacío.";
    } else {
        let listadoCarrito = "Productos en el carrito:\n";
        carrito.forEach(function(producto, index) {
            listadoCarrito += (index + 1) + ". " + producto.nombre + " - $" + producto.precio + "\n";
        });
        return listadoCarrito;
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = carrito.reduce(function(acc, producto) {
        return acc + producto.precio;
    }, 0);
    return "El total a pagar es: $" + total;
}

// Función para eliminar un producto del carrito
function eliminarProducto() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no hay productos para eliminar.");
        return;
    }

    let opcionesEliminar = "Seleccione el número del producto a eliminar:\n";
    carrito.forEach(function(producto, index) {
        opcionesEliminar += (index + 1) + ". " + producto.nombre + " - $" + producto.precio + "\n";
    });
    let productoNumero = parseInt(prompt(opcionesEliminar));

    if (productoNumero >= 1 && productoNumero <= carrito.length) {
        let productoEliminado = carrito.splice(productoNumero - 1, 1);
        alert("Producto eliminado: " + productoEliminado[0].nombre); // Mostrar el mensaje de eliminación
    } else {
        alert("Opción inválida.");
    }
}

// Función para iniciar el carrito
function iniciarCarrito() {
    let opciones = 
        "Seleccione una opción:\n" +
        "1. Agregar producto\n" +
        "2. Mostrar carrito\n" +
        "3. Calcular total\n" +
        "4. Eliminar producto\n" +
        "0. Salir";
    
    let opcion;
    do {
        opcion = parseInt(prompt(opciones));
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                alert(mostrarCarrito()); // Mostrar carrito en un alert
                break;
            case 3:
                alert(calcularTotal()); // Mostrar total en un alert
                break;
            case 4:
                eliminarProducto(); // Eliminar producto
                break;
            case 0:
                alert("Gracias por usar el carrito.");
                break;
            default:
                alert("Opción inválida.");
        }
    } while (opcion !== 0);
}

// Ejecutar el simulador
iniciarCarrito();
