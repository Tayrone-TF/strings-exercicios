const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a)

const minhaStringSemEspacos = minhaString.trim()
console.log(minhaStringSemEspacos)

//b)
const qtdCaractMinhaString = minhaString.length
console.log(qtdCaractMinhaString)
const qtdCaractMinhaStringSemEspacos = minhaStringSemEspacos.length
console.log(qtdCaractMinhaStringSemEspacos)

//c)
const subistutuindoCaracter = minhaStringSemEspacos.replace('_', 's').replace('_', 't').replace('_', 'i').replace('_', 'c').replace('_', 'i').replace('_', 'o').replace('_', 's').replace('_', 'o')

console.log(subistutuindoCaracter)