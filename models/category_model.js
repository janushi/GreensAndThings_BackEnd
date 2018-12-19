var db=require('../dbconnection'); //reference of dbconnection.js
var isActive=1;
var isDeleted=0;
var isActiveZero=0;
var isDeletedOne=1;
var createdBy=1;
var modifiedBy=1;
// var today=new Date();
// var createdOn=today.getDate();
// var modifiedOn=today.getDate();
var today = new Date();
 var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0! 
var yyyy = today.getFullYear();
 if(dd<10)
 	{ dd='0'+dd; }
 	 if(mm<10)
 	 	{ mm='0'+mm; } 
 	 var createdOn = yyyy+'-'+mm+'-'+dd;
 	 var modifiedOn = yyyy+'-'+mm+'-'+dd;
var category={
 
getAllcategory:function(callback){
 
return db.query("Select * from category",callback);
 
},
 getcategoryById:function(id,callback){
 
return db.query("select * from category where cid=?",[id],callback);
 },
 addcategory:function(category,callback){
 return db.query("Insert into category(name,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy) values(?,?,?,?,?,?,?)",
 [category.name,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy],callback);
 },
 deletecategory:function(id,callback){
  return db.query("update category set isDeleted=?,isActive=?,modifiedOn=?,modifiedBy=? where cid=?",
  [isDeletedOne,isActiveZero,modifiedOn,modifiedBy,id],callback);
 },

 updatecategory:function(id,category,callback){
  return db.query("update category set name=?,modifiedOn=?,modifiedBy=? where cid=?",
  [category.name,modifiedOn,modifiedBy,id],callback);
 }
 
};
 module.exports=category;