let config = require('./dbconfig');
const sql = require('mssql');


async function getUsers(){
    try{
        let pool = sql.connect(config) //create connection to the database
        let users = (await pool).request().query("SELECT firstName, SurName, IDNumber  FROM Sedibeng")   //Create a request to the database to fetch information
        return users.recordset 
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getUsers : getUsers
}