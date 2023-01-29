const express= require('express')
const router=express.Router();
const User = require('../config/customer');
const Order=require('../config/order');
const bcrypt=require('bcrypt');
const aut=require('./auth');
router.post('/dummy',async(req,res)=>{
 console.log(req.body);
 console.log('enter')
 res.send('babu');

})
//For new user: url/add-user
router.post('/add-user',async(req, res)=> {//post form data
 const obj=req.body;
 obj.password = await bcrypt.hash(req.body.password,8);//storing hashed password
 try{
 const user=new User(req.body);//sending form data to database
 user.save()
 res.send(user)
 }
 catch(err){
  console.log(err);
  return;
 }
})
//For Login user: url/login-user
router.post('/login-user',async(req, res)=>{
 const id=req.body.phone;
 const user=await User.find({id});
 const isMatch=bcrypt.compare(req.body.password,user.password);
 if(!isMatch){
  res.status(400).send()
 }
 res.send(user);
 
})

//For adding new order:route
router.post('/add-order',async(req, res)=>{
 console.log(req.body);
 try{
  const order=new Order(req.body)
  order.save();
  res.send(order);

 }catch(e){
  console.log(err);
  return;
 }


})
//Get order detail:route
router.get('/get-orders/:id',async(req, res)=>{
 const id=req.params.id;
 console.log('enter')
 try{
 const data= await Order.find({id});
 res.render('index', {data: data});
 }
 catch(err){
  console.log(err);
 return;}


})

module.exports =router;