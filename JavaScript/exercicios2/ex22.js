function funcaoDaSorte(n, min = 0, max = 10){
    const sorteado = (Math.random() * (max - min) + min).toFixed(0)
    console.log(n == sorteado ? `Parabéns, o numero sorteado foi ${sorteado}` : `Que pena! O número sorteado foi ${sorteado}`)
}

funcaoDaSorte(1)
