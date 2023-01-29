var mongoose = require('mongoose');
  const UserSchema  = new mongoose.Schema({

    name: {//name oof the products
        type : String,
        required : true, 
    },
    phone: {//quantity avliable 
     type :Number,
     required : true,
    },
    password: {//name oof the products
     type : String,
     required : true, 
 },

  });
  
  const User= mongoose.model('User',UserSchema );
  module.exports =User;