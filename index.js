import Server from "./config/server.js";

const runServer= new Server();

runServer.load();
/*console.log("hola");

import express,{ Router } from "express";
import bodyParser from "body-parser";

const route= Router();
const app= express();

app.use(bodyParser.json());

app.post('/',(req,res)=>{
    console.log(req.body);
    res.status(200).send({success:true,aprllido:req.body.apellido})
})

app.use("/product",
    route.get("/:nombre/:apellido",(req,res)=>{
        console.log(req.params);
        const {nombre, apellido} =req.params;
        res.status(200).send({
            msg:'product',
            nombre:nombre,
            apellido:apellido,
        })
    })


)
//console.log(11122221)
app.listen(4200,()=>{
    console.log("servidor on!");
})
*/