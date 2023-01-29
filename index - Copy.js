const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

app.use(bodyParser.json());
app.use(function(req, res, next) {
 console.log(req.url);
 res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

const moongoose=require('./config/mongoose');
const router=require('./router/userRoutes');

//app.use(cors);
app.use(router);

//app.use(express.urlencoded({ extended: false }));//parse data
app.set("view engine", "ejs");//setup for view engine
app.set("views", "./views");//giving location from view

app.listen(5000,()=>{
 console.log('listening on port 5000')
})
const myfun=()=>{
 const token=jwt.sign({_id:'abc'},'myname',{expiresIn:'7 days'})
console.log(token)
const data=jwt.verify(token,'myname')
console.log(data)
}
myfun()