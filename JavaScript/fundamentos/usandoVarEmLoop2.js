const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// por conta de var ser de escopo global, houve uma sobrescrição (o ultimo valor definido para var foi retornado nas funções)