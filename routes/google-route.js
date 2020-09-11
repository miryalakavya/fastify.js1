const fastify = require('fastify')
async function routes(fastify, option) {
    fastify.get('/g', async (req, res) => {
        res.view('./views/google-view.html')
    })
}

module.exports = routes