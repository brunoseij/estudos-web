// IIFE -> Immediately Invoked Function Expression
// é uma função que se auto invoca
// principal vantagem é por ela não tocar o escopo global

(function() {
    
    var nome = 'João'
    console.log(`Meu nome é ${nome}`)
})() // imagino q todo o código estaria dentro dessa função

// console.log(`Meu nome é ${nome}`)