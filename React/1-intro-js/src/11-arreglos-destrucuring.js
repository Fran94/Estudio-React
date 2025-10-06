

const users = ['Pepe', 'Ana', 'Maria', 'Juan', 'Sebastian', 'Carlos', 'Josefa'];

const [pepe, ana, maria, ...rest] = users;

console.log(pepe, ana, maria, ...rest);