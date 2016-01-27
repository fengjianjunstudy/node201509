/**
 * npm install ejs
 *
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var fs = require('fs');
var app = express();
app.use(express.static(path.join(__dirname,'public'),{
    dotfiles:'deny',
    index:'inx.html',
    setHeaders:function(response){
        response.setHeader('name','zfpx');
    }
}));
app.use(function(req,res,next){
    next();
});
app.use(bodyParser.json());
//querystring  false
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){

    req.headers['content-type']="json";
    //......
    req.body = {name:'zfpx',age:6};
    //-------------
    req.fields = {name:'zfpx',age:6};
    req.files = {avatar:{originalName:'gigi.jpg',path:'./upload/gigi.jpg'}};
    next();
});
app.get('/post',function(req,res){
    console.log(req.body,"body")
    res.send(req.body);
});

app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);
app.get('/index',function(req,res){
    console.log(req)
 res.render('index',{
     name:'zfpx',
     age:6
 });
});
app.listen(8080,function(){
    console.log("start listening")
});
