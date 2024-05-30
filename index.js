const express = require('express');
const {filter,open} = require('./middelwhere/midd');
const app = express();
const port = 4000 ;
const path = require('path')

app.set('views','./views');
app.set('view engine', 'pug');


// app.get('/',(req,res)=>{
//     res.end('welcome to express')

// });
app.use(express.static(path.join(__dirname,"public")))
app.use(open)
app.get('/home', function(req, res){
// let {nom} = req.params;
    res.render('Home_page');
});

app.get('/contact', function(req,res){
    res.render('Contact_us')
});

app.get('/our', function(req,res){
    res.render('Our_Services')
});







app.listen(port , (err=>{
    if(err){
        console.error(err);
    }else {
        console.log("server run");
    }
}));

// app.get('/user/:id',(req,res)=>{
//     let {id} = req.params ;
//     console.log(id);
//     res.status(200);
//     res.send('<h1>hello</h1>')
// });


// app.get('/user/:id', filter , 
    
// (req,res)=>{
//     res.end('date ok')
// }) ;



