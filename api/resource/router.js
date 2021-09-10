const server = require('../server');
const models = require('./model');
const middleware = require('./middleware');

server.get('/api/resources', async (req, res)=>{
    return res.send(await models.get());
});


server.post('/api/resources', middleware.validateBody, async (req, res)=>{
    try {
        return res.send(await models.insert(req.body));
    } catch (err) {
        return res.sendStatus(400);
    }
});
