function contarCaractere(c, str) {
    return str.split('').filter(e => e == c).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))