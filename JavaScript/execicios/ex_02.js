function qualTriangulo(a, b, c) {
    if (a === b && b === c){
        console.log('Equilátero')
    } else if (a === b || b === c || a === c) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

qualTriangulo(1, 3, 5)
qualTriangulo(3, 5, 5)
qualTriangulo(3, 2, 3)
qualTriangulo(3, 3, 3)