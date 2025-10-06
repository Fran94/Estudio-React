

const products = ['mesa', 'silla', 'notebook', 'teclado'];
const products2 = products.concat('pantalla lcd', 'sony tv');

const fruits = ["Peras", "Manzanas","Sandias", "Frutillas"];
const mercado = [...products2, ...fruits, "Lechuga", "Papas", "Uvas"];

console.log(products);
console.log(products2);
console.log(mercado);