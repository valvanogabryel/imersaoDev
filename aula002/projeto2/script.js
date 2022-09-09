function converter() {
    var tempCelsius = document.getElementById('temp')
    var tempFaren = Number(tempCelsius.value) * 1.8 + 32
    var res = document.getElementById('tempConvertido')
    res.innerHTML = `${tempFaren}°F`

    if (tempCelsius > 25 || tempFaren > 77) {
        document.body.style.backgroundImage = 'url(img/background-calor.jpg)'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundImage = 'url(img/background-frio.jpg)'
        document.body.style.color = 'black'
    }
}