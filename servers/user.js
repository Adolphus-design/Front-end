const { Message } = require('@angular/compiler/src/i18n/i18n_ast');
const express = require('express');
router = express.Router();
con = require('./conn')


router.post('/user',(req,res)=>{
    let user = {
    
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        
       }; 
 
       let email = req.body.email;
       let sql = "SELECT * FROM user WHERE email = ?"
    //var sql = "INSERT INTO user set ?";
    con.query(sql,[email],function(err,result){

        if(result.length > 0){
           
            res.send({
                data: err,
                code: 401,
                Message:"Sorry, The email alreay exist"
                    })
        }
        
        else
        { 
            let sql = "INSERT INTO user set ?"
        con.query(sql,[user],function(err,result){
            if (err) throw err;
            else{
               
                return res.send(result)
            }

        })
    }
})

})

    //select and fetch all data from the table
router.get('/user',(req,res)=>{

    con.query('SELECT * FROM user',function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send(result);
    }
   })

})

    //select and fetch by ID
router.get('/user/:id',(req,res)=>{
    con.query('SELECT name, surname, email FROM user WHERE id = ?',
    [req.params.id],(err,result)=>{
        if(!err)
            res.send(result);
        else
            console.log(err);
    })

    //Delete a student
router.delete('/user/:id',(req,res)=>{

    con.query('DELETE FROM user WHERE id = ?',[req.params.id],
    (err,result,fields)=>{
        if(!err){
            res.send(result);
            console.log('Succefully deleted!!')
        }
        else
            console.log(err);
    }) 
});


// Update user


//verify login
router.get('/usr/:email',(req,res)=>{

    con.query('SELECT name FROM user WHERE email = ?',
    [req.params.email],(err,result)=>{
         if(!err){
        res.send(result);
        console.log('Succeful')
    }
    else
        console.log(err);
}) 
})

    
});


module.exports = router;