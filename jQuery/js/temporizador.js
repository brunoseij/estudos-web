(function ($) {
    $.fn.temporizador = function (opcoes) {
        // caso não haja atributos nas opções, são setados valores padrões
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        // criação dos elementos html
        const horaDezena = $('<span class="digito">').html(0)
        const horaUnidade = $('<span class="digito">').html(0)
        const minutoDezena = $('<span class="digito">').html(0)
        const minutoUnidade = $('<span class="digito">').html(0)
        const segundoDezena = $('<span class="digito">').html(0)
        const segundoUnidade = $('<span class="digito">').html(0)
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
        const separadorHora = $('<span class="separador">').html(":")
        const separadorMinuto = $('<span class="separador">').html(":")

        const temporizador = $('<div class="temporizador">')
        temporizador.append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade,
            separadorMinuto, segundoDezena, segundoUnidade, mensagem)
        $(this).append(temporizador)

        // regex para xx:xx:xx
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // ao colocar () na regex, durante a execução da regex, retornará os valores em um array
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        // temporizador que atualizará o html a cada segundo
        let tempo = setInterval(() => {
            const agora = new Date()
            // é necessário configurar a data alvo manualmente
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaMili = alvo.getTime() - agora.getTime()

            if (diferencaMili >= 0) {
                const horario = new Date()
                horario.setTime(diferencaMili)
                const diferenca = regex.exec(horario.toISOString())

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }
            else {
                clearInterval(tempo)
                $(this).empty()
                $('form').css('display', 'block')
            }
        }, 1000)
        return tempo
    }
})(jQuery)