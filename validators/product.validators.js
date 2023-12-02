import { checkSchema } from "express-validator";

export const prodcutValidator = checkSchema({
    product :{
        errorMessage: 'Producto Necesario',
        notEmpty : true
    }
},["query"])