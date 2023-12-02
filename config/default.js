import dotenv from "dotenv"

dotenv.config();

const config = {
    host: 'databaseapp.postgres.database.azure.com',
    user: 'postgres',     
    password: 'karen_1234',
    database: 'arquitectura',
    port: 5432,
    ssl: true
};
export const exports={
    port : process.env.PORT || 3000,
    postgres : config,
    secret : process.env.SECRET_KEY
}