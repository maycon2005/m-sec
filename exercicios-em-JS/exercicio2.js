// EXERCÍCIO 2 -  Página 41 do livro Lógica de Progamação e Algaritmos com JavaScript de Edécio Iepsen

// Elaborar um progama que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO:
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
 //--------------------------------------------

 let valorjantar = 80;
 let taxa = 10;
 let total = 0;

 total = 80 + (taxa / 100) * 80;

 console.log("Valor do jantar: " + valorjantar + ",00");

 console.log("Taxa do garçom:" + (taxa / 100) * 80 );

 console.log("Total a pagar" + total + ",00");

