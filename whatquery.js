var express=require('express');
var app=express();

app.get('/search',function(req,res){
    var obj=req.query;
    
    res.send(obj);
}).listen(process.argv[2]);
//GO COOGS whooping UCONN!!