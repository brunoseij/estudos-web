function trocaVetores(v1, v2) {
    if (v1.length == v2.length){
        let i = 0
        v1.forEach(n => {
            v1[i] = v2[i]
            v2[i] = n
            i++
        })
        return `v1 = ${v1}, v2 = ${v2}`
    } else {
        return 'Vetores de tamanho diferente'
    }
}

console.log(trocaVetores([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))