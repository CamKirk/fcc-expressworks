var express=require('express');
var fs=require('fs');
var app=express();
//console.log(process.argv)
app.get('/books/',function(req,res){
    
    fs.readFile(process.argv[3],function(err,data){
        
        var obj=JSON.parse(data);
        res.json(obj);
        
    });
  
   
    
}).listen(process.argv[2])