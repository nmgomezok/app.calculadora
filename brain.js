let sumar = (a,b) => a+b;
let restar = (a,b) => a-b;
let dividir = (a,b) => {
    if (a==0) {return "no se puede dividir por cero"}
    else {return a/b}};
let multiplicar = (a,b) => a*b;

module.exports = {sumar, restar, dividir, multiplicar};