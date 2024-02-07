// 1.0 Aprendendo funções

function soma(a, b) {
    return a + b;
};

function menos(a, b) {
    return a - b
}

console.log(soma (3, 4));
console.log(menos (14, 5));

//-----------------------------------------------
//1.1 Aprendendo funções - Arrey 

function simpleArraySum(ar) {
    let soma = 0;
    for(let index = 0; index < ar.length; index += 1) {
        soma = soma + ar[index]
    }
    return soma;
};

console.log(simpleArraySum([1, 2, 3]));
