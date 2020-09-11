'use strict'
const fastify = require('fastify')
const app = fastify()
const PORT = 3000

app.register(require('./routes/google-route'))
app.register(require('point-of-view'), {
    engine: {
        handlebars: require('handlebars')
    }
})

app.listen(PORT, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server Started on ${address}`)
})