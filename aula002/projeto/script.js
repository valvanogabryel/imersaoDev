function converter() {
    var valorElemento = document.getElementById('valor')
    var valor = Number.parseFloat(valorElemento.value).toFixed(2)

    if (valor < 0) {
        alert('[ERRO] Não são permitidos valores menores que zero')
    } else {
        var conversão = document.getElementById('valorConvertido')
        var valorReal = valor * 5.20
        var valorConvertido = valorReal.toFixed(2).replace('.', ',')
        var gif = document.createElement('img')
        var teste = document.getElementById('gif')
        gif.setAttribute('id', 'amogus')
        gif.setAttribute('src', 'gif/giphy.gif')
        conversão.innerHTML = `O valor em reais é R$${valorConvertido}`
        teste.innerHTML = gif
        conversão.appendChild(gif)

        conversão.style.position = 'absolute'



    }


}