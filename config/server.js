
import express from "express";
import bodyParser from "body-parser";
import router from "../routes/index.routes.js";
import { exports } from "./default.js";
import pgService from "../services/pg.services.js";
import middle from "../middlewares/index.middleware.js";
import cors from "cors"

const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204
  };

export default class Server{

    constructor(){
        this.app = express();
        this.app.use(cors(corsOptions))
        this.port = exports.port;
    }

   async connectionDb_(){
    new pgService();
    }

    middelware(){
        this.app.use(bodyParser.json());
        this.app.use(middle);
    }

    route(){
        this.app.use(router);
    }

    runServer(){
        this.app.listen(this.port,()=>{
            console.log("server on!");
        })
    }

    load(){
        this.connectionDb_();
        this.middelware();
        this.route();
        this.runServer();
    }
}