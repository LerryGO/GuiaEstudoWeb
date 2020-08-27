/*
 * Arrays em JS é um vetor, como uma variavel porem com varios,
 * todos em posições lineares
 * Diferentemente de linguagens de tipagem forte, o JS é bem flexivel por poder
 * ajustar o tamanho, deferentemente de outras linguagens que se definir
 * 5 posições, será sempre 5 posições o Array, e no JS não é assim.
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //Consultando valores do array
console.log(valores[4]) //Quando não existe o indice, ele dará indefinido

valores[4] = 10 //Dando valor em indices não definido
console.log(valores)
console.log(valores.length) //Retornará quantos indices existe no array

//Adicionando novos elementos no Array
valores.push({id: 3}, false, null, 'teste') //O Array é heterogêneo, isso é, aceita todos tipos de valores
console.log(valores)

//Retirando valores do Array
console.log(valores.pop()) // pop() Irá retirar o ultimo elemento do array
delete valores[0] //Outra forma de retirar/deletar valor do array
console.log(valores)

console.log(typeof valores)