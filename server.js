const express = require('express');

const hbs=require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('upperText', (message)=>{
    return message.toUpperCase();
});
app.set('view engine','hbs');



app.use(express.static(__dirname+"/public"));

app.use((req,res,next)=>{
    res.render('middle.hbs');
    next();
});

app.get('/',(req, res)=>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        welcomeMessage: 'Hello !!! Welcome to our brand new website',
        currentYear:new Date().getFullYear()
        
    });
});


app.get('/About',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear:new Date().getFullYear()
    });
});


app.get('/bad',(req, res)=>{
    res.send({
        erroCode:'ER001',
        errorDesc:'Wrong attribute passed'
    });
});

app.listen(3000,()=>{
    console.log('Server is listening to port 3000');
});