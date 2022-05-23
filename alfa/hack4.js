//HACK 4 - Eliminar los items 300 y 500

let array = [100, 200, 300, 400, 500, 600, 700];
array.splice(2, 1);
array.splice(3, 1);
console.log(array); //[ 100, 200, 400, 600, 700 ]