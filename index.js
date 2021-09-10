const server = require('./api/server');

server.listen(process.env.PORT || 5000, ()=>{
    console.log(`server is running and listening on ${process.env.PORT || 5000}`);
});
