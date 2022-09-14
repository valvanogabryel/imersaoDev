function mutar() {
    var botaoMutar = document.getElementById('btnMute')
    var audio = document.getElementById('audio')


    audio.toggleAttribute('muted')
    audio.toggleAttribute('autoplay')

}

var card1 = {
    nome: 'Charizard',
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 7
    }
}

var card2 = {
    nome: 'Lapras',
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 8
    }
}

var card3 = {
    nome: 'Greninja',
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 10
    }
}

var card4 = {
    nome: 'Vaporeon',
    atributos: {
        ataque: 7,
        defesa: 7,
        magia: 9
    }
}

var card5 = {
    nome: 'Arcanine',
    atributos: {
        ataque: 10,
        defesa: 6,
        magia: 6
    }
}

var card6 = {
    nome: 'MewTwo',
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 10
    }
}

var card7 = {
    nome: 'Scyther',
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 8
    }
}

var card8 = {
    nome: 'Gengar',
    atributos: {
        ataque: 3,
        defesa: 8,
        magia: 10
    }
}

var card9 = {
    nome: 'Alakazan',
    atributos: {
        ataque: 3,
        defesa: 8,
        magia: 10
    }
}

var card10 = {
    nome: 'Dragonite',
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 8
    }
}

var cartas = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]
var botCard
var playerCard

function sortearCarta() {
    var pokemonSorteado = document.getElementById('pokemonSorteado')
    var botPokemonSorteado = document.getElementById('pokemonBotSorteado')
    var botCardNum = parseInt(Math.random() * 10)
    botCard = cartas[botCardNum]
    var playerCardNum = parseInt(Math.random() * 10)
    playerCard = cartas[playerCardNum]
    console.log(playerCard)
    while (botCardNum == playerCardNum) {
        playerCardNum = parseInt(Math.random() * 10)
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
    var opcoesTexto = ''
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


    atributosOponente.innerHTML = 'Os atributos do seu oponente eram: </br>'
    atributosOponente.innerHTML += `Ataque ${botCard.atributos['ataque']} </br>`
    atributosOponente.innerHTML += `Defesa ${botCard.atributos['defesa']} </br>`
    atributosOponente.innerHTML += `Magia ${botCard.atributos['magia']} </br>`


    if (playerCardValue > botCardValue) {
        elementRes.innerHTML = 'Você venceu!'
        // audio vitoria
    } else if (botCardValue > playerCardValue) {
        elementRes.innerHTML = 'Você perdeu!'
        // audio derrota
    } else {
        elementRes.innerHTML = 'Empatou!'
        // audio empate
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
    var botCardNum = parseInt(Math.random() * 10)
    botCard = cartas[botCardNum]
    var playerCardNum = parseInt(Math.random() * 10)
    playerCard = cartas[playerCardNum]
    console.log(playerCard)
    console.log(botCard)
    while (botCardNum == playerCardNum) {
        playerCardNum = parseInt(Math.random() * 10)
    }
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    pokemonSorteado.innerHTML = `O seu Pokemon Sorteado é: ${playerCard['nome']}`
    botPokemonSorteado.innerHTML = `O seu adversário é: ${botCard['nome']}`
    var playerCardValue = playerCard.atributos[atributeSelected]
    var botCardValue = botCard.atributos[atributeSelected]
    apagar.style.display = 'block'
    btnReset.style.display = 'none'
    elementRes.style.display = 'none'
    playerCardValue = ''
    botCardValue = ''
    exibirOpcoes()
}



