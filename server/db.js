import { createPool } from 'mysql2/promise' //CON ESTE POOL VAMOS A PODER EJECUTAR CONSULTAS ATRAVEZ DEL METODO LLAMADO QUERY 

export const connection = createPool({ //IMPORTANTE PONER EN LA CONSTANTE DE CREATEPOOL ALGUNAS PROPIEDADES DE LA BASE DE DATOS
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3306",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "root123",
    database: process.env.DATABASE || "taskdb"
})