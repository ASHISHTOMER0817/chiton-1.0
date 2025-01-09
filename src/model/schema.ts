
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

const productsSchema = new mongoose.Schema({
      img: {
            type: String,
      },
      name: {
            type: String,
      },
      price: {
            type: String,

      },
      colour: {
            type: String,

      },
      articleCode: {
            type: String,
      },
})

const Product = mongoose.models.products || mongoose.model('products', productsSchema)

const favoritesSchema = new mongoose.Schema({
      user: {
            type: mongoose.Schema.ObjectId,
            ref: 'users'
      },
      product: {
            type: mongoose.Schema.ObjectId,
            ref: 'products',
      },
      favorite: {
            type: Boolean,
            // required:true
      },
      cart: {
            type: Boolean,
      }
})

const Favorite = mongoose.models.favorites || mongoose.model('favorites', favoritesSchema)


// const CartSchema = new mongoose.Schema({
//       email: {
//             type: String,
//             unique: true,
//             required: true
//       },
//       product: [productsSchema],
//       favorite: [favorites]


// })

// const Cart = mongoose.models.carts || mongoose.model('carts', CartSchema)
export { User, Favorite, Product }

