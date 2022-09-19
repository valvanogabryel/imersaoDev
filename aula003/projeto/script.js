var numSecreto = Number.parseInt(Math.random() * 11)
var numTentativas = 5
function chutar() {
    var chute = Number.parseInt(document.getElementById('valor').value)
    var resposta = document.getElementById('res')
    var tentativas = document.getElementById('tentativas')
    var input = document.getElementById('valor')
    if (numTentativas >= 1) {
        if (chute < 0 || chute > 10) {
            alert('Insira um número entre 0 e 10')
        } else if (input.value.length == 0) {
            alert('Insira um valor para jogar.')
            resposta.innerHTML = ''
            tentativas.innerHTML = ''
        } else if (chute < numSecreto) {
            resposta.innerHTML = `Errou! O número sorteado é maior que ${chute}.`
            tentativas.innerHTML = `Restam ${numTentativas} tentativas`
        } else if (chute > numSecreto) {
            resposta.innerHTML = `Errou! O número sorteado é menor que ${chute}.`
            tentativas.innerHTML = `Restam ${numTentativas} tentativas`
        } else {
            resposta.innerHTML = `Acertou!`
            tentativas.innerHTML = `Restavam ${numTentativas} tentativa(s).`
        }
        numTentativas--
    } else {
        resposta.innerHTML = ''
        tentativas.innerHTML = 'Suas tentativas esgotaram.'
    }
}

function reiniciar() {
    var chute = Number.parseInt(document.getElementById('valor').value)
    var resposta = document.getElementById('res')
    var tentativas = document.getElementById('tentativas')
    document.getElementById('valor').value = ''
    chute.value = ''
    resposta.innerHTML = ''
    tentativas.innerHTML = ''
    numTentativas = 5
    numSecreto = Number.parseInt(Math.random() * 11)
}


