import pgService from "../services/pg.services.js";

export const getProductModel = async(userId) =>{
    const pg = new pgService();
    try{
        const products = await pg.connection.query(`select * from product where id_user = $1`,[userId]);
        if (products[0]) {
            return {success:"Productos encontrados", status:200, data:products} ;
        }
        return  {message:"Productos no encontrados", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
  
}

export const deleteProductModel = async(productId) =>{
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from product where id= $1`,[productId]);
        if (product[0]) {
            await pg.connection.query(`delete from product where id= $1`,[productId]);
            return {success:"Producto eliminado exitosamente", status:200, msg:"Delete product"};
        }
        return {message:"Producto no encontrado", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
}

export const createProductModel = async(data) =>{
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from product where name = $1 `,[data.name]);
        if (product[0]) {
            return {error:"Ya existe un producto con ese nombre", status:409, msg: "Product don't save"};
        }
        if(!data.name || !data.description || !data.price || !data.url_image || data.price <= 0 || !data.stock){
            return {error : "Todos los atributos del producto son obligatorios y el precio debe ser mayor a cero",status : 400, msg:"Product don't save"};
        }
       await pg.connection.query(`insert into product(name,description,price,stock,id_user,url_image)  values($1,$2,$3,$4,$5,$6)`,[data.name,  data.description, data.price, data.stock, data.id_user, data.url_image]);
       return {success:"Producto guardado exitosamente", status:201, msg:"Product save"};
    }catch(e){
        console.log(e)
        return {error:"error interno del servidor", status:500, msg:"Product don't save"};
    }
}

export const updateProductModel = async(data, productId) =>{
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from product where id=$1`,[productId]);
        if (!product[0]) {
            return {success:"Producto no existente ", status:404, msg:"Product don't update"};
        }else if(!data.name || !data.description || !data.price || !data.url_image || data.price <= 0 || !data.stock){
            return {error : "Todos los atributos del producto son obligatorios y el precio debe ser mayor a cero",status : 400, msg:"Product don't update"};
        }else if(product[0].name == data.name){
            await pg.connection.query(`update product set name=$1, description=$2,price=$3,stock=$4, url_image=$6 where id=$5`,[data.name, data.description, data.price, data.stock, productId, data.url_image]);
            return {success:"Producto actualizado exitosamente", status:200};
        }else{
            const product1 = await  pg.connection.query(`select * from product where name = $1`,[data.name]);
            if (product1[0]) {
                return {error:"Ya existe un producto con ese nombre", status:409, msg: "Product don't update"};
            }
            await pg.connection.query(`update product set name=$1, description=$2,price=$3,stock=$4 where id=$5`,[data.name, data.description, data.price, data.stock, productId]);
            return {success:"Producto actualizado exitosamente", status:200}
        }
        
    }catch(e){
        return {error:"Error interno sel servidor", status:500, msg:"Product don't update"};
    }
   
}

export const getProductByIdModel = async(productId) =>{
    const pg = new pgService();
    try{
        const product = await pg.connection.query(`select * from product where id = $1`,[productId]);
        if (product[0]) {
            return {success:"Producto encontrado", status:200, data:product} ;
        }
        return  {message:"Producto no encontrado", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
  
}