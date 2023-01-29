var mongoose = require('mongoose');
  const OrderSchema  = new mongoose.Schema({
    oderid:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
    },

    oderDetails: {//name oof the products
        type : String,
       
    },
    phone: {//quantity avliable 
     type :Number,
     required : true,
    },
    

  });
  
  const Order= mongoose.model('Order',OrderSchema );
  module.exports =Order;