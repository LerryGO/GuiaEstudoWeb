/*
 * Utilizando Strings é possível tanto usar " " como ' ' , e depois com a nova versão também é possível usar ´ ´ 
*/ 

const escola = 'Cod3r'

console.log(escola.charAt(4)) //O comando charArt devolve a leta ou número no indice indicado!
console.log(escola.charAt(5)) //Quando o índice indicado não existe o JS retorna um valor Nulo
console.log(escola.charCodeAt(3)) //Esse comando retorna o valor do caracter da tabela ASCII do indice 
console.log(escola.indexOf('3')) //Retorna o ÍNDICE que o caracter informado está alocado
console.log(escola.substring(1)) //Retornará os valores a partir do indice informado
console.log(escola.substring(0,3)) /*Retornará os valores a partir do primeiro indice informado
até o segundo. Obs: O segundo valor não é incluso */ 


//Concatenação
console.log('Escola: '.concat(escola).concat('!'))
console.log('Escola: ' + escola + '!')

//Substituição
console.log(escola.replace(3, 'e')) //Substitui a letra do indice informado.

//Gerando Array a partir de um texto e separando
console.log('Ana,Maria,Pedro,Joao'.split(',')) //Split informa o parametro que deve ser usado como separador

/*
 * Usando o Template string
 * que é usado para não ficar concatenando com + 
 * e sim usando uma maneira mais eficiente de concatenação.
 * o Template possibilita quebrar linhas sem dar Erros 
*/

const nome = 'Rebeca'
//O template reconhece Quebras de linhas e espaços!
const template = `
    Olá
    ${nome}!`

console.log(template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)
