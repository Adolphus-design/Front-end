
const express = require('express');
router = express.Router();
con = require('./conn')

router.post('/stork',(req,res)=>{
    let stork = {
    
        storkCode:req.body.storkCode,
        name:req.body.name,
        storkSize:req.body.storkSize,
        storkPrice:req.body.storkPrice,
        totalStork:req.body.totalStork,
        
       }; 
 
    
       //let email = req.body.email;
     sql = "INSERT INTO stork SET ?";
    
    con.query(sql,[stork],function(err,result){
        console.log('Succefully Added!!')

        if(err)throw err;
        
        else
        { 
        con.query('select * from stork',function(err,result){
            if (err) throw err;
            else{
               
                return res.send(result)
            }

        })
    }

})
})
    //calculate for inserting the total price of the stork
router.put('/stork',(req,res)=>{
    let stork = {
    
        storkCode:req.body.storkCode,
        storkPrice:req.body.storkPrice,
        totalStork:req.body.totalStork,
        totalStorkPrice:req.body.totalStorkPrice
        
       }; 
 
    var sql = "UPDATE stork SET totalStorkPrice = totalStork *  totalPrice WHERE storkCode = storkCode";
    
    con.query(sql,[stork],function(err,result){
        console.log('Succefully Added!!')

        if(err)throw err;
        
        else
        { 
        con.query('select * from stork',function(err,result){
            if (err) throw err;
            else{
               
                return res.send(result)
            }

        })
    }

})
})

   //select and fetch all data from the table
   router.get('/stork',(req,res)=>{

    con.query('SELECT * FROM stork',function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send(result);
    }
   })



})


module.exports = router;