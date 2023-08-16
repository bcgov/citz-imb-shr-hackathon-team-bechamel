const { Client } = require("pg")
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, '..', '.env') });

const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })
 
        await client.connect()
        console.log("CONNECTED TO DB")
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
/*
workstream (weighted avg 1-4)
educaiton
position
other dummy data points
intenral equity of other individuals (all band 2's that are fin managers make x we can use this in the )
*/
connectDb()