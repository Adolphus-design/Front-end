const mysql = require('mysql');
const express = require('express');


/*const mysqlConn =mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'',
  database:'selling_db'

})*/

const config = {
  user: "KAMOGELO_LAPTOP",
  password: "",
  server:"localhost",
  database: "users",

  options:{
    trustedconnection: true,
    enableArithAort: true,
    instancename: 'SQLEXPRESS',
    port: 1433 
  }
}


config.connect((err)=>{

if(!err)
    console.log('db connection succeed');
else
    console.log('db connection failed');
});

module.exports =config;
