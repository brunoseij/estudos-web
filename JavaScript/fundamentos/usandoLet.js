let numero = 2
{
    {
        {
            {
                let numero = 1
                console.log(`dentro = ${numero}`) //dá preferencia pra variáveis mais próximas, porém pode acessar variáveis do escopo global também
            }
        }
    }
}
console.log(`fora = ${numero}`)