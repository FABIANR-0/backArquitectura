import pgService from "../services/pg.services.js";

export const getUsuario = async (access)=> {
    const pg =  new pgService(); 
    return  await pg.connection.query(`SELECT id FROM usuario where username = $1 and password = $2`, [access.username, access.password]);
}