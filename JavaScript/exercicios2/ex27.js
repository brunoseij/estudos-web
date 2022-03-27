function inverter(obj) {
    const novoObjeto = {}
    Object.keys(obj).forEach(k => {novoObjeto[obj[k]] = k})
    console.log(novoObjeto)
}

inverter({ a: 1, b: 2, c: 3})