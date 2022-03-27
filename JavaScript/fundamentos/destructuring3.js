function rand({min = 0, max = 1000}) {
    const num = Math.random() * (max - min) + min
    return Math.ceil(num)
}

const obj = {
    min: 40,
    max: 70,
}
console.log(rand(obj))
console.log(rand({min: 10, max: 30}))
console.log(rand({}))