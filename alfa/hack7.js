//HACK 7 - Reemplazar el item 300 por tu alias

let array = [100, 200, 300, 400, 500, 600, 700];
array.splice(2, 1, "foo");
console.log(array); //[ 100, 200, 'foo', 400, 500, 600, 700 ]