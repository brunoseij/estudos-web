const tela = document.querySelector('[wm-flappy]')
let voando = false
// teste mecanismo parar funções
let colidiu = false
const botao = document.querySelector('button')
botao.onclick = (e) => {
    colidiu = true
    clearInterval(teste)
}
function numAleatorio(min, max) {
    const num = Math.random() * (max - min) + min
    return num
}

// Posiciona verticalmente os obstaculos
function sortearAltura(elem) {
    const posicao = numAleatorio(10, 70)
    elem.children[0].style.height = posicao + '%'
    elem.children[1].style.height = (80 - posicao) + '%' 
}


// movimentação dos obstáculos
function mover(elem, callback, inicio = 900, fim = -100, passo = 1, taxa = 7) {
    if (!colidiu) {
        let novoInicio = inicio - passo
        if (novoInicio == fim) {
            console.log('cabou')
            callback(elem)
        } else {
            elem.style.left = novoInicio + 'px'
            setTimeout(() => mover(elem, callback, novoInicio), taxa)
        }
    }
}

// ao final do movimento, o obstáculo volta para a posição inicial e é sorteado uma nova posição vertical
function redefinirPosicao(elem) {
    elem.style.left = '900px'
    sortearAltura(elem)
    verificarPosicao(elem)
}

// recebe o obstáculo que está 'esperando' e retorna a posição do obstáculo à frente
function posCanoAFrente(atual) {
    const idAtual = atual.getAttribute('cano')
    const idProximo = idAtual == 1 ? '4' : idAtual - 1
    return document.querySelector(`[cano="${idProximo}"]`).style.left
}

// loop verificando a posição do obstáculo a frente, caso o elemento à frente chegue na posição esperada, o movimento é iniciado
function verificarPosicao(elem) {
    if (posCanoAFrente(elem) == '600px') {
        mover(elem, redefinirPosicao)
    } else {
        setTimeout(() => verificarPosicao(elem), 7)
    }
}

// utilizado para inserir dinamicamente os obstaculos no HTML
function clonar(elem, copias) {
    for (let i = 0; i < copias; i++) {
        let clone = elem.cloneNode(true)
        clone.setAttribute('cano', (2 * Number(elem.attributes.cano.value) + i))
        tela.appendChild(clone)
    }
}

function iniciar() {
    clonar(document.querySelector('[cano]'), 3)
    const canos = document.querySelectorAll('[cano]')
    canos.forEach((cano, indice) => {
        indice == 0? mover(cano, redefinirPosicao):redefinirPosicao(cano) // inicio do movimento, se for o primeiro obstaculo, se move, se for os seguintes, prepara o movimento
    })
    
    
}

window.onkeydown = function(e){
    voando = true
}

window.onkeyup = function(e){
    voando = false
}

const teste = setInterval(voar, 7)

function voar(){
    console.log('alo')
    const passaro = document.querySelector('[bird] img')
    const posicaoPassaro = passaro.offsetTop // 550 - tamanhoPassaro limite inferior / 0 + tamanhoPassaro = limite superior
    const limiteInferior = tela.offsetHeight - passaro.offsetHeight
    if(!colidiu){
        if(voando){
            passaro.style.top = posicaoPassaro > 0? passaro.offsetTop - 2.5 + 'px': passaro.offsetTop + 'px'
        } else{
            passaro.style.top = posicaoPassaro < limiteInferior? passaro.offsetTop + 1.5 + 'px': passaro.offsetTop + 'px'
        }
    }
}

iniciar()
// adicionar colisões, contagem de pontos