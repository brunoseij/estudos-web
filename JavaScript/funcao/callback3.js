// ocorre um evento, e faz o callback de uma função

// aplicação do callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { // e é o evento de click, se não for utilizado, não é preciso declarar
    console.log('O evento ocorreu')
}

document.getElementsByTagName('body')[0].onclick = () => console.log('O evento ocorreu')