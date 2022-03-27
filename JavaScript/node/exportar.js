console.log(this == module.exports)
console.log(exports == module.exports)
console.log(module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3
console.log(module.exports)

exports = null
console.log(module.exports)

exports = {publico: false}
console.log(module.exports)

module.exports = {publico: true}