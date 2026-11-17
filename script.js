
const productosCompra = [
    { precio: 100, cantidadId: "cantidad-1", subtotalId: "subtotal-1" },
    { precio: 1900, cantidadId: "cantidad-2", subtotalId: "subtotal-2" },
    { precio: 1500, cantidadId: "cantidad-3", subtotalId: "subtotal-3" },
    { precio: 2700, cantidadId: "cantidad-4", subtotalId: "subtotal-4" }
];


function calcularCompra() {
    let total = 0;
    for (const producto of productosCompra) {
        const campo = document.getElementById(producto.cantidadId);
        const cantidad = Number(campo.value);

        
        if (campo.value.trim() === "" || !Number.isInteger(cantidad) || cantidad < 0) {
            alert("Escribe cantidades enteras iguales o mayores que cero.");
            campo.focus();
            return null;
        }

        const subtotal = producto.precio * cantidad;
        document.getElementById(producto.subtotalId).textContent = subtotal.toFixed(2);
        total += subtotal;
    }
    return total;
}


document.getElementById("calcular-compra").addEventListener("click", () => {
    const importe = calcularCompra();
    if (importe === null) return;

    let descuento = 0;
    if (importe >= 1000) {
        descuento = importe * 0.10;
    } else {
        descuento = 0;
    }

    const totalPagar = importe - descuento;

    
    document.getElementById("importe-compra").textContent = importe.toFixed(2);
    document.getElementById("descuento-compra").textContent = descuento.toFixed(2);
    document.getElementById("total-compra").textContent = totalPagar.toFixed(2);
});
