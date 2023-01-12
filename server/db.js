import { createPool } from 'mysql2/promise' //CON ESTE POOL VAMOS A PODER EJECUTAR CONSULTAS ATRAVEZ DEL METODO LLAMADO QUERY 
import {    
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} from './config.js'

export const connection = createPool({ //IMPORTANTE PONER EN LA CONSTANTE DE CREATEPOOL ALGUNAS PROPIEDADES DE LA BASE DE DATOS
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME
})