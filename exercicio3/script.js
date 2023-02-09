//Crie a const para a frase aqui

//a)
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"'

//b)
const trocandoCor = frase.replace('verde', 'rosa').replace('azul','laranja')

//c)
const verificaCorVerde = trocandoCor.includes('verde')
const verificaCorLaranja = trocandoCor.includes('laranja')

//extra
const letrasMaiusculas = trocandoCor.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR')

//TESTES
console.log(frase)
console.log('----------------------------')
console.log(trocandoCor)
console.log('----------------------------')
console.log(verificaCorVerde)
console.log(verificaCorLaranja)
console.log('----------------------------')
console.log(letrasMaiusculas)
