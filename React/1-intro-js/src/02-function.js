
const sayHello = (name = "Pepe", age = 0) => `Hello World! ${name} edad ${age}`;

const result = sayHello('Andres', 10);

console.log(result);