var db=require('../dbconnection'); //reference of dbconnection.js
var isActive=1;
var isActiveZero=0;
var isDeleted=0;
var isDeletedOne=1;
var createdBy=1;
var modifiedBy=1;
var today = new Date();
 var dd = today.getDate();
  var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
 if(dd<10)
 	{ dd='0'+dd; }
 	 if(mm<10)
 	 	{ mm='0'+mm; } 
 	 var createdOn = yyyy+'-'+mm+'-'+dd;
 	 var modifiedOn = yyyy+'-'+mm+'-'+dd;
var order={
 
getAllorder:function(callback){
 
return db.query("Select * from orders",callback);
 
},
 getorderById:function(id,callback){
 
return db.query("select * from orders where scid=?",[id],callback);
 },
 addorder:function(order,callback){
 return db.query("Insert into orders(uid,cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy) values(?,?,?,?,?,?,?,?)",
 [order.uid,order.cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy],callback);
 },
 deleteorder:function(id,callback){
  return db.query("update orders set isDeleted=?,isActive=?,modifiedOn=? where oid=?",
   [isDeletedOne,isActiveZero,modifiedOn,id],callback);
  },

 updateorder:function(id,order,callback){
  return db.query("update orders set isActive=?,modifiedOn=? where oid=?",
  [order.isActive,modifiedOn,id],callback);
 }
 
};
 module.exports=order;