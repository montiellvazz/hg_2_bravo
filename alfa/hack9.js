//HACK 9 - Agregar alias al inicio del array

let array = [100, 200, 300, 400, 500, 600, 700];
array.unshift("foo");
console.log(array); //[ 'foo', 100, 200, 300, 400, 500, 600, 700 ]