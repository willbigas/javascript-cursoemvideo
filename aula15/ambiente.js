let num = [5,8,2,9,3];
num[5] = 7;
num.push(4);
num.sort();
console.log(`Quantidade de posiçoes : ${num.length}` );
console.log(`nosso vetor é o ${num}`);
let posicao = num.indexOf(8);
for(let pos in num) {
    console.log(num[pos])
}
for (let index = 0; index < num.length; index++) {
    console.log(index);
}

console.log(`A posição do valor 8 é ${posicao}`)