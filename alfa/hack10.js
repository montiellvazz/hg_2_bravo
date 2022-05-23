//HACK 10 - Agregar después del item 500 los alias qux y thud

let array = [100, 200, 300, 400, 500, 600, 700];
array.splice(5, 0, "qux", "thud");
console.log(array); //[ 100, 200, 300, 400, 500, 'qux', 'thud', 600, 700 ]