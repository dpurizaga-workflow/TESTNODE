import express from 'express'
import { createPool } from 'mysql2/promise'


const app = express()

createPool(
    {
        host: 'mysqldb',
        user: 'root',
        password: "123456",
        port: 3306
    }
)

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/ping', async(req, res) => {
    const result = await Pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)
console.log('server on port', 3000)