const { Pool } = require("pg/lib");

const pool = new Pool({
    user:'postgres',
    password:'postgres',
    host:'localhost',
    port:5432,
    database:'todos_authenticate'
});

module.exports=pool;