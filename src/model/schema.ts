
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


const User = mongoose.models.users || mongoose.model('users', UserSchema)
const CartSchema = new mongoose.Schema({
      user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: true

      },
      product_Code: {
            type: String,
            required: true,
            unique: true,
      }
})

const Cart = mongoose.models.carts || mongoose.model('carts', CartSchema)
export {User, Cart}

