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
var sellerproductdetail={
 
getAllsellerproductdetail:function(callback){
 
return db.query("Select * from productdetails",callback);
 
},
 getsellerproductdetailById:function(id,callback){
 
return db.query("select * from productdetails where pdid=?",[id],callback);
 },
 addsellerproductdetail:function(sellerproductdetail,callback){
 return db.query("Insert into productdetails(uid,cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy) values(?,?,?,?,?,?,?,?)",
 [sellerproductdetail.uid,sellerproductdetail.cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy],callback);
 },
 deletesellerproductdetail:function(id,callback){
  return db.query("update productdetails set isDeleted=?,isActive=?,modifiedOn=? where pdid=?",
   [isDeletedOne,isActiveZero,modifiedOn,id],callback);
  },

 updatesellerproductdetail:function(id,sellerproductdetail,callback){
  return db.query("update productdetails set isActive=?,modifiedOn=? where pdid=?",
  [sellerproductdetail.isActive,modifiedOn,id],callback);
 }
 
};
 module.exports=sellerproductdetail;