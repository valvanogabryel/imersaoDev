var numSecreto = 9

function chutar() {
    var chute = Number.parseInt(document.getElementById('valor').value)
    var resposta = document.getElementById('res')

    if (chute < numSecreto || chute > numSecreto) {
        resposta.innerHTML = 'Errou'
    } else {
        resposta.innerHTML = 'Acertou'
    }

}