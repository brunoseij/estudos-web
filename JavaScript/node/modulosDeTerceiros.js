// para instalar algum pacote no node, utiliza-se o npm (node package manager), semelhante ao pip do python
// utilize o código no terminal npm i pacote

const _ = require('lodash')

setInterval(() => console.log(_.random(0, 10)), 1000)


// para instalar algum modulo de forma global, utilizar o sudo npm i -g
// nodemon executa em tempo real (atualiza o código e executa)