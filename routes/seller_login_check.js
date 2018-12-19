var express = require('express');
var router = express.Router();
var seller_login_check=require('../models/seller_login_check_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
seller_login_check.getsellerByuser_Id(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
seller_login_check.getAllseller(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/',function(req,res,next){

seller_login_check.addseller(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });

//  router.delete('/:id',function(req,res,next){
 
// user_table.deleteuser(req.params.id,function(err,count){
 
// if(err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(count);
//   }
 
// });
//  });
// router.put('/:id',function(req,res,next){
 
// user_table.updateuser(req.params.id,req.body,function(err,rows){
 
// if(err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(rows);
//   }
//   });
//  });
 module.exports = router;