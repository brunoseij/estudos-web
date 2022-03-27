const calularSalario = (horas, salario) => `Salário igual à R$ ${parseFloat(horas * salario).toFixed(2).replace('.',',')}`
console.log(calularSalario(150, 40.5))