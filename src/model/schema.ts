
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

const favorites = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      url:{
            type:String,
            required: true,
      },
      price:{
            type:String,
            required:true
      }
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
      email: {
            type: String,
            unique: true,
            required: true
      },
      product: [products],
      favorite: [favorites]
           
      
})

const Cart = mongoose.models.carts || mongoose.model('carts', CartSchema)
export {User, Cart}

