const comidasFavoritas = (nome, comida1, comida2, comida3) => {
    const mensagem = `Estas são as comidas favoritas do ${nome}:\n
    - ${comida1}\n 
    - ${comida2}\n 
    - ${comida3}\n `

    console.log(mensagem)
}

const nomeDoUsuario = prompt('Qual é o seu nome?')
const comidaFavorita1 = prompt('Qual é a sua primeira comida favorita?')
const comidaFavorita2 = prompt('Qual é a sua segunda comida favorita?')
const comidaFavorita3 = prompt('Qual é a sua terceira comida favorita?')

comidasFavoritas(nomeDoUsuario,comidaFavorita1,comidaFavorita2,comidaFavorita3)