import { createPool } from 'mysql2/promise' //CON ESTE POOL VAMOS A PODER EJECUTAR CONSULTAS ATRAVEZ DEL METODO LLAMADO QUERY 

export const connection = createPool({ //IMPORTANTE PONER EN LA CONSTANTE DE CREATEPOOL ALGUNAS PROPIEDADES DE LA BASE DE DATOS
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'taskdb'
})