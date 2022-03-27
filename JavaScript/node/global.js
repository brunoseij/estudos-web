// cuidado ao fazer modificações no escopo global, se possivel, utilize objetos que não podem ser modificados (freezados)
globalThis.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})