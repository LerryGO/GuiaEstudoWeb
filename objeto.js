//Definindo um objeto
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 44.90
prod1['Desconto Legal'] = 0.40 //É possivel usar nomes de identificadores com espaço
//OBS.: EVITAR atributos com ESPAÇOS

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla : 1,
        obj: {
            blabla2 : 3
        }
    }
}
/* Dentro de um objeto pode ter outro objeto
 * e assim, podemos usar nomes semelhantes pois só existe o objeto dentro do objeto
*/
console.log(prod2)