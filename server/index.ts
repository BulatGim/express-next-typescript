import next from "next";
import express, { Request, Response } from "express";
import path from "path";

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

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, 'static')));
server.use(fileUpload({}));
server.use('/api', router);

//обработка ошибок всегда самым последним тк последний middleware
server.use(errorHandlingMiddleware);

(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    try {
        await app.prepare();

        server.all("*", (req: Request, res: Response) => {
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