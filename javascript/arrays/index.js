var dias = []; // Array vacio
var marcasAuto = ["Suzuki", "Mazda", "Toyota", "Nissan", "Kia"];
console.log(marcasAuto);
console.log(marcasAuto.length);

console.log(marcasAuto[2]);

console.log(marcasAuto.sort());

console.log(marcasAuto.sort().reverse());

//agregar elemento al final del array
marcasAuto.push("Ferrari");
console.log(marcasAuto);

//eliminar el ultimo elemento
marcasAuto.pop();
console.log(marcasAuto);
marcasAuto.shift();
console.log(marcasAuto);

//setear elemento del array conociendo el index
marcasAuto[0]="XX";
console.log(marcasAuto);

//borrar un elemento conociendo el index
delete marcasAuto[0];
console.log(marcasAuto);

//var numeros = [54, 10, 3, 17, 92];
//console.log(numeros.sort());