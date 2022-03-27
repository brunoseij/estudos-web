const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 3', function() {
    console.log(new Date().getSeconds())
})// segundo, minuto, hora, dia do mes, mes, dia da semana

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.day = 9
regra.hour = 9
regra.second = [5, 10, 15]


const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2', new Date().getSeconds())
})