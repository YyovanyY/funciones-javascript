const productos = [
  { nombre: "laptop", precio: 2000000, categoria: "tecnologia" },
  { nombre: "Celular", precio: 1100000, categoria: "tecnologia" },
  { nombre: "Camisa", precio: 180000, categoria: "ropa" },
  { nombre: "Zapatos", precio: 300000, categoria: "ropa" },
];

function filtrarPorCategoria(lista, categoria) {
  return lista.filter((producto) => producto.categoria === categoria);
}

const aplicarDescuento = (lista, porcentaje) => {
  return lista.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * (1 - porcentaje),
    };
  });
};

const productoMasCaro = (lista) => {
  return lista.reduce((max, producto) => {
    return producto.precio > max.precio ? producto : max;
  });
};

console.log("Productos por tecnologia");
console.log(filtrarPorCategoria(productos, "tecnologia"));

console.log("Productos con descuento");
console.log(aplicarDescuento(productos, 0.1));

console.log("Producto mas caro");
console.log(productoMasCaro(productos));
