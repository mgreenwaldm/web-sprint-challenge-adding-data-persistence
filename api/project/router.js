const server = require('../server');
const models = require('./model');
const middleware = require('./middleware');

server.get('/api/projects', async (req, res)=>{
    return res.send(await models.get());
});


server.post('/api/projects', middleware.validateBody, async (req, res)=>{
    return res.send(await models.insert(req.body));
});
