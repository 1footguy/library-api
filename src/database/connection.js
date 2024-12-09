import { Sequelize } from "sequelize";

const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;

const connection = new Sequelize(db, user, pass, { host, dialect: "mysql" }); 

async function auth(){
    try {
        await connection.authenticate();
        await connection.sync();
        console.log("Conexão bem sucedida!");
        
    } catch (error) {
        console.log(error);
        console.log("Conexão com o banco de dados falhou!");
    } 
}

export default auth;
export {connection}