// EXERCÍCIO 3 - Pagina 45 do livro Lógica de Programação e Algoritimos com JavaScript de Edécio Iepsen

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// à vista: R$54,00
// Ou 3x de R$20,00
//---------------------------------------------

let preço = 60;
let avista = 54;
let vezes = 0;

vezes = 60 / 3

console.log("O preço do produto é R$" + (preço) + ",00");
console.log("Comprando à vista, ele sai por R$" + (avista) + ",00");
console.log("Pagando no cartão em 3x, à partir de R$" + (vezes) + ",00");
console.log("OBRIGADO, VOLTE SEMPRE!!!");

