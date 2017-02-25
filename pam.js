var express=require("express");
var app=express();
var crypto=require('crypto');

app.put('/message/:id', function(req,res){
    var id=req.params.id;
    var apple=crypto.createHash('SHA1')
        .update(new Date()
        .toDateString()+id)
        .digest('hex');
    res.send(apple);
    }).listen(process.argv[2]);