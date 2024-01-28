const Pool = require('pg').Pool;

// Configure your PostgreSQL connection details
const pool = new Pool({
    user: "postgres",
    password: "admin", // Enter your password here
    database: "Transful", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});

// Function to execute a query
const execute = async(query1) => {
    const client = await pool.connect();// gets connection
    try {
        await client.query(query1); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        client.release(); // Release the client back to the pool
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "riigid" (
	    "nimi" VARCHAR(200) PRIMARY KEY NOT NULL,
	    "pealinn" VARCHAR(200) NOT NULL,
        "seosPealinn" VARCHAR(200),
        "seosPealinnPilt " VARCHAR(200),
        "lipp" VARCHAR(200), 
        "seosLipp" VARCHAR(200)
    );`;

/*
const createTblQuery2 = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;
*/


// A function to execute the previous query   
execute(createTblQuery1).then(result => {
    if (result) {
        console.log('If does not exists, table "riigid" is created');
    }
});

module.exports = pool;