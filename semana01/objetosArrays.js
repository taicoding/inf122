const persona = {
    nombre: "Carlos",
    edad: 25,
    ocupacion: "Desarrollador"
};
console.log(persona.edad);
persona["apellido"] = "Perez";
console.log(persona);
persona["ci"] = 1234567;
console.log(persona);
persona.nombre = "Pedrito";
console.log(persona);
persona.edad = 30;
console.log(persona);
persona.ocupacion = "Programador";
console.log(persona);
const colores = ["rojo", "verde", "azul"];
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
for (let i = 0; i < colores.length; i++) {
    console.log("Elemento: " + colores[i] + ", indice:" + i);
}
colores.push("amarillo");
console.log(colores);
colores.reverse();
console.log(colores);

colores.sort();
console.log(colores);
colores.push("Violeta");
colores.push("Amarrillo");
colores.sort();
console.log(colores);

colores.push(1);
colores.push(2);
colores.push(3);
console.log(colores);
colores.push([4, 5, 6]);
console.log(colores);
var elemento = colores.pop();
console.log(elemento);
console.log(colores);
// Para enteder esto primero hay que entender que es una funcion anonima
var encontrado = colores.find(function (elemento) {
    return elemento === "rojo";
});

var elemento = colores.findIndex(function (elemento) {
    return elemento === 1;
});
