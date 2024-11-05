let total = 0;

function agregarProducto(productoNumero) {
    let nombreProducto = "";
    let precioProducto = 0;

    if (productoNumero === 1) {
        nombreProducto = "Producto 1";
        precioProducto = 10000;
    } else if (productoNumero === 2) {
        nombreProducto = "Producto 2";
        precioProducto = 20000;
    } else if (productoNumero === 3) {
        nombreProducto = "Producto 3";
        precioProducto = 15999;
    } else {
        console.log("Producto no disponible.");
        return;
    }

    total += precioProducto;
    
    console.log("Producto agregado: " + nombreProducto + " - $" + precioProducto);
    console.log("Total acumulado: $" + total);
}

function iniciarCarrito() {
    while (true) {
        let productoNumero = parseInt(prompt("Ingrese el número del producto a agregar:\n1. Producto 1 ($10.000)\n2. Producto 2 ($20.000)\n3. Producto 3 ($15.999)\nIngrese otro número para finalizar."));

        if (productoNumero === 1 || productoNumero === 2 || productoNumero === 3) {
            agregarProducto(productoNumero);
        } else {
            console.log("Ha decidido no agregar más productos.");
            break;
        }
    }
    verTotal();
}

function verTotal() {
    console.log("Total acumulado: $" + total);
}

iniciarCarrito();
