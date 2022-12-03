import { Router } from 'express'
import { connection } from '../db.js'

const router = Router();

router.get('/ping', async (req, res) => {    
    const [rows] = await connection.query('SELECT 1+1 as result');
    console.log(rows[0]);
    res.json(rows[0])

})

export default router;