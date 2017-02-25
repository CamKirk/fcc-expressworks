var path=require("path");
var express=require("express");
var app=express();



app.get('/home',function(req,res){
    //app.set('views',path.join(__dirname,process.argv[3])); //should this be pathjoin or just process.argv[3]
    app.set('view engine','jade');//pug or jade?
    app.set('views',process.argv[3]);
    res.render('index',{date: new Date().toDateString()});
    }).listen(process.argv[2])