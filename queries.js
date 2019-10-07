const Pool = require('pg').Pool

const pool = new Pool({
    user: 'admin',
    host: '127.0.0.1',
    database: 'elements',
    password: 'admin',
    port: 2223,
})