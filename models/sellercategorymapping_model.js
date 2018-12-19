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
var sellercategorymapping={
 
getAllsellercategorymapping:function(callback){
 
return db.query("Select * from sellercategorymapping",callback);
 
},
 getsellercategorymappingById:function(id,callback){
 
return db.query("select * from sellercategorymapping where scid=?",[id],callback);
 },
 addsellercategorymapping:function(sellercategorymapping,callback){
 return db.query("Insert into sellercategorymapping(uid,cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy) values(?,?,?,?,?,?,?,?)",
 [sellercategorymapping.uid,sellercategorymapping.cid,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy],callback);
 },
 deletesellercategorymapping:function(id,callback){
  return db.query("update sellercategorymapping set isDeleted=?,isActive=?,modifiedOn=? where scid=?",
   [isDeletedOne,isActiveZero,modifiedOn,id],callback);
  },

 updatesellercategorymapping:function(id,sellercategorymapping,callback){
  return db.query("update sellercategorymapping set isActive=?,modifiedOn=? where scid=?",
  [sellercategorymapping.isActive,modifiedOn,id],callback);
 }
 
};
 module.exports=sellercategorymapping;