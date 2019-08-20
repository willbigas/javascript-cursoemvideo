/**
 * Parametros Opcionais do Javascript
 * @param {*} n1 
 * @param {*} n2 
 */
// Define uma parametro default caso não tenha valor. 
function soma(n1=0 , n2=0) { 
    return n1 + n2;
}

// pode rebecer só 1 parametro q vai funcionar devido ao param default.
console.log(soma(2)); 