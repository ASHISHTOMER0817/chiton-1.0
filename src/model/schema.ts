
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      phonenumber: {
            type: String,
            unique: true,
            required: true
      },
      email: {
            type: String,
            unique: true,
            required: true
      },
      password: {
            type: String,
            required: true
      },

})

const products = new mongoose.Schema({
      url: {
            type: String,
            required: true,
      },
      name: {
            type: String,
            required: true,
      },
      price: {
            type: String,
            
      },
      netQuantity: {
            type: String,
            
      },
      articleCode: {
            type: String,
            required: true,
            unique: true
      },
})


const User = mongoose.models.users || mongoose.model('users', UserSchema)
const CartSchema = new mongoose.Schema({
      user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true
      },
      product: [products]
           
      
})

const Cart = mongoose.models.carts || mongoose.model('carts', CartSchema)
export {User, Cart}

