// 20 pontos de atributo para distribuir
var card1 = {
    nome: 'Charizard',
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 5,
    }
}

var card2 = {
    nome: 'Lapras',
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 6
    }
}

var card3 = {
    nome: 'Greninja',
    atributos: {
        ataque: 4,
        defesa: 6,
        magia: 10
    }
}

var card4 = {
    nome: 'Vaporeon',
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 8
    }
}

var card5 = {
    nome: 'Arcanine',
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 5
    }
}

var card6 = {
    nome: 'MewTwo',
    atributos: {
        ataque: 6,
        defesa: 4,
        magia: 10
    }
}

var card7 = {
    nome: 'Scyther',
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 5
    }
}

var card8 = {
    nome: 'Gengar',
    atributos: {
        ataque: 3,
        defesa: 7,
        magia: 10
    }
}

var card9 = {
    nome: 'Alakazan',
    atributos: {
        ataque: 2,
        defesa: 8,
        magia: 10
    }
}

var card10 = {
    nome: 'Dragonite',
    atributos: {
        ataque: 8,
        defesa: 4,
        magia: 8
    }
}

var card11 = {
    nome: 'Vileplume',
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 6
    }
}

var card12 = {
    nome: 'Jolteon',
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 8
    }
}

var card13 = {
    nome: 'Golduck',
    atributos: {
        ataque: 4,
        defesa: 6,
        magia: 10
    }
}

var card14 = {
    nome: 'Blastoise',
    atributos: {
        ataque: 6,
        defesa: 9,
        magia: 5
    }
}

var card15 = {
    nome: 'Venusaur',
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 6
    }
}

var card16 = {
    nome: 'Machamp',
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 5
    }
}

var card17 = {
    nome: 'Tyranitar',
    atributos: {
        ataque: 7,
        defesa: 7,
        magia: 6
    }
}

var card18 = {
    nome: 'Gardevoir',
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 8
    }
}

var card19 = {
    nome: 'Raichu',
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 7
    }
}

var card20 = {
    nome: 'Milotic',
    atributos: {
        ataque: 5,
        defesa: 6,
        magia: 9
    }
}

var cartas = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20]
var botCard
var playerCard
var contador = 0

function musica() {
    var musica = document.getElementById('audio')

    musica.volume = 0.5

}


function sortearCarta() {
    var pokemonSorteado = document.getElementById('pokemonSorteado')
    var botPokemonSorteado = document.getElementById('pokemonBotSorteado')
    var botCardNum = parseInt(Math.random() * 20)
    botCard = cartas[botCardNum]
    var playerCardNum = parseInt(Math.random() * 20)
    playerCard = cartas[playerCardNum]
    console.log(playerCard)
    while (botCardNum == playerCardNum) {
        botCardNum = parseInt(Math.random() * 20)
        playerCardNum = parseInt(Math.randow() * 20)
        return
    }
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    pokemonSorteado.style.display = 'flex'
    botPokemonSorteado.style.display = 'flex'
    pokemonSorteado.innerHTML = `O seu Pokemon Sorteado é: ${playerCard['nome']}`
    botPokemonSorteado.innerHTML = `O seu adversário é: ${botCard['nome']}`


    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var indicarAtributo = document.getElementById('align')
    var opcoesTexto = ''
    indicarAtributo.innerHTML = 'Escolha o seu atributo'
    for (var atributo in playerCard.atributos) {
        opcoesTexto += "<input type='radio' id='teste' checked name='atributo' value='" + atributo + "'>" + atributo + " " + playerCard.atributos[atributo]
        opcoes.innerHTML = opcoesTexto
    }
}

function atributeSelection() {
    var radioAtributes = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributes.length; i++) {
        if (radioAtributes[i].checked == true) {
            return radioAtributes[i].value

        }
    }
}

function jogar() {
    var btnResetar = document.getElementById('reiniciar')
    var apagar = document.getElementById('apagar')
    var atributeSelected = atributeSelection()
    var elementRes = document.getElementById('resultado')
    var playerCardValue = playerCard.atributos[atributeSelected]
    var botCardValue = botCard.atributos[atributeSelected]
    var atributosOponente = document.getElementById('atributosOponente')
    var vitorias = document.getElementById('numTentativas')
    atributosOponente.innerHTML = 'Os atributos do seu oponente eram: </br>'
    atributosOponente.innerHTML += `Ataque ${botCard.atributos['ataque']} </br>`
    atributosOponente.innerHTML += `Defesa ${botCard.atributos['defesa']} </br>`
    atributosOponente.innerHTML += `Magia ${botCard.atributos['magia']} </br>`
    if (playerCardValue > botCardValue) {
        ++contador
        elementRes.innerHTML = 'Você venceu!'
        vitorias.innerHTML = contador
    } else if (botCardValue > playerCardValue) {
        --contador
        elementRes.innerHTML = 'Você perdeu!'
        vitorias.innerHTML = contador
    } else {
        elementRes.innerHTML = 'Empatou!'
    }

    if (contador == 10) {
        elementRes.innerHTML = 'PARABÉNS!!! Você ganhou o jogo!'
        vitorias.innerHTML = ''
        atributosOponente.innerHTML = ''
        btnResetar.innerHTML = ''
    }



    elementRes.style.color = 'white'
    elementRes.style.fontSize = '4rem'
    elementRes.style.display = 'block'
    if (elementRes.style.display == 'block') {
        apagar.style.display = 'none'
        btnResetar.style.display = 'block'
    }
}

function resetar() {
    var pokemonSorteado = document.getElementById('pokemonSorteado')
    var botPokemonSorteado = document.getElementById('pokemonBotSorteado')
    var btnReset = document.getElementById('reiniciar')
    var atributeSelected = atributeSelection()
    var elementRes = document.getElementById('resultado')
    var apagar = document.getElementById('apagar')
    var botCardNum = parseInt(Math.random() * 20)
    botCard = cartas[botCardNum]
    var playerCardNum = parseInt(Math.random() * 20)
    playerCard = cartas[playerCardNum]
    console.log(playerCard)
    console.log(botCard)
    if (botCardNum == playerCardNum) {
        botCardNum = parseInt(Math.random() * 20)
    }
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    pokemonSorteado.innerHTML = `O seu Pokemon Sorteado é: ${playerCard['nome']} `
    botPokemonSorteado.innerHTML = `O seu adversário é: ${botCard['nome']} `
    var playerCardValue = playerCard.atributos[atributeSelected]
    var botCardValue = botCard.atributos[atributeSelected]
    apagar.style.display = 'block'
    btnReset.style.display = 'none'
    elementRes.style.display = 'none'
    playerCardValue = ''
    botCardValue = ''
    exibirOpcoes()
}



