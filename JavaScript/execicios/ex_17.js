function reajusteSalario(plano, salario) {
    switch (plano) {
        case 'A':
            return salario + (0.1 * salario)
        case 'B':
            return salario + (0.15 * salario)
        case 'C':
            return salario + (0.2 * salario)
        default:
            return 'plano inválido'
    }
}

console.log(reajusteSalario('A', 1500))
console.log(reajusteSalario('B', 1500))
console.log(reajusteSalario('C', 1500))