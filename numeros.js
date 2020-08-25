//Declaração de números
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Testa se o número é Inteiro

//--------------------------------------------------------------------
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Limita o número de casas decimais após a virgula!! Obs.: Não altera o valor da variavel
console.log(media.toString(2))//Transforma o valor em número binário
console.log(typeof media) //Indica qual tipo é a variavel

/*
 * O 'number' com letra minuscula indica o tipo do dado
 * O 'Number' com letra maiúscula indica uma função!
*/


//ALGUNS CUIDADOS COM NÚMEROS EM JS
console.log(7 / 0) //Em JS temos um tipo chamado Infinity, que seria infinito
console.log('10' / 2) //JS por ser uma Tipagem FRACA, permite que use na conta um valor caracter com numero
console.log('Show!' * 2) //Em JS não se replica, isso daria um erro NaN(Not a Number)
console.log(0.1 + 0.7)//Em pontos flutuantes o JS tem imprecisões (Essa especificacao da lingaguem JS faz ser muito mais rapido o calculo)
