import http from 'http';

async function init(){
    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    httpServer.listen(PORT,()=>{
        console.log(`Http server Started at ${PORT}`);
    })
}
