//HACK 5: Clonar un array
array = [100,200,300,400,500,600,700]
let a = [... array]
let b = Object.assign([],array) 
console.log(b)
console.log(a)

