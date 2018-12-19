var db=require('../dbconnection'); //reference of dbconnection.js
 
var seller_login_check={
 
getAllseller:function(callback){
return db.query("Select * from users WHERE isActive=1",callback); 
},

 getsellerByuser_Id:function(id,callback){
return db.query("select * from users where username=? AND isActive=1",[id],callback);
 },
  addseller:function(seller_tbl_model,callback){
  return db.query("Insert into users(name,address,zipcode,mobileNum1,mobileNum2,username,pass,isActive,isDeleted,createdOn,modifiedOn,createdBy,modifiedBy,rid) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [seller_tbl_model.name,seller_tbl_model.address,seller_tbl_model.zipcode,seller_tbl_model.mobileNum1,seller_tbl_model.mobileNum2,seller_tbl_model.username,seller_tbl_model.pass,seller_tbl_model.isActive,seller_tbl_model.isDeleted,seller_tbl_model.createdOn,seller_tbl_model.modifiedOn,seller_tbl_model.createdBy,seller_tbl_model.modifiedBy,seller_tbl_model.rid],callback);
  }

//  deleteuser:function(id,callback){
//   return db.query("delete from user_tbl where user_id=?",[id],callback);
//  },

//  updateuser:function(id,user_tbl_model,callback){
//   return db.query("update user_tbl set user_firstname=?,user_middlename=?,user_lastname=?,designation=?,joining_date=?,email_id=?,address=?,city_id=?,contact_number=?,gender=?,date_of_birth=?,password=?,isactive=? where user_id=?",
//   [user_tbl_model.user_firstname,user_tbl_model.user_middlename,user_tbl_model.user_lastname,user_tbl_model.designation,user_tbl_model.joining_date,user_tbl_model.email_id,user_tbl_model.address,user_tbl_model.city_id,user_tbl_model.contact_number,user_tbl_model.gender,user_tbl_model.date_of_birth,user_tbl_model.password,user_tbl_model.isactive,id],callback);
//  }
 
};
 module.exports=seller_login_check;