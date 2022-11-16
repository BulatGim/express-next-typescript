import next from "next";
const express = require("express")
const path = require("path")
let staticFiles = require('node-static');

let fileServer = new staticFiles.Server(path.resolve(__dirname, 'static'));

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;


require('dotenv').config();
const sequelize = require('./db');
const models = require("./models/models");
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandlingMiddleware = require("./middleware/ErrorHandlingMiddleware");
const server = express();
const {Request, Response} = require("./consts/consts")

server.use(cors());
server.use(express.json());
server.use(fileUpload({}));
server.use('/api', router);
server.use("/images", function(req:any,res:any){
    fileServer.serve(req,res)
});


//обработка ошибок всегда самым последним тк последний middleware
server.use(errorHandlingMiddleware);

(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    try {
        await app.prepare();
        /*server.all('*!/images/!*', (request: typeof Request, response: typeof Response)=>{
            request.addListener('end', ()=> {
                fileServer.serve(request, response);
                console.log('works')
            }).resume();
        })*/
        server.all("*", (req: typeof Request, res: typeof Response) => {
            return handle(req, res);
        });

        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();



export {};
