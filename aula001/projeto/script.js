function calcMedia() {
    var nota1 = document.getElementById('notaum')
    var nota2 = document.getElementById('notadois')
    var nota3 = document.getElementById('notatres')
    var nota4 = document.getElementById('notaquatro')
    if (Number(nota1.value) < 0 || Number(nota1.value) > 10) {
        alert('[ERRO] Insira um valor entre 0 e 10')
    } else if (Number(nota2.value) < 0 || Number(nota2.value) > 10) {
        alert('[ERRO] Insira um valor entre 0 e 10')
    } else if (Number(nota3.value) < 0 || Number(nota3.value) > 10) {
        alert('[ERRO] Insira um valor entre 0 e 10')
    } else if (Number(nota4.value) < 0 || Number(nota4.value) > 10) {
        alert('[ERRO] Insira um valor entre 0 e 10')
    } else {
        var notaFinal = (Number.parseInt(nota1.value) + Number.parseInt(nota2.value) + Number(nota3.value) + Number.parseInt(nota4.value)) / 4
        var media = notaFinal.toFixed(1)
        var resultado = document.getElementById('media')
        resultado.innerHTML = `A sua nota média é ${media}`
        resultado.style.paddingTop = '25px'

        if (media > 7) {
            alert('Aprovado')
        } else if (media < 7) {
            alert('Reprovado')
        } else {
            alert('Insira os valores')
            resultado.innerHTML = ''
        }
    }
}

function alterarTema() {
    document.body.classList.toggle('dark')
}