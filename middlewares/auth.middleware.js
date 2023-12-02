import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";

export const verifyToken = (req, res, next) => {

    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send({
            msg: 'Autorizacion requerida '
        });
    }
   
    const t = token.split(" ");
    if(t[0] !=="Bearer"){
        return res.status(401).send({
            msg: 'Autorizacion requerida '
        })
    }

    jwt.verify(t[1], exports.secret, (err, decoded) =>{
        if(err){
            console.log(err)
            return res.status(401).send({
                msg: 'Autorizacion requerida '
            });
        }
        next();
    })

} 