import { Favorite, Product } from "@/model/schema";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import DatabaseConnection from "@/dbConfig/dbConfig";

DatabaseConnection()

export async function POST(req: NextRequest) {

      const addto = req.nextUrl.searchParams.get('query');
      try {
            if (addto === 'addtoCart') {
                  const { _id } = await req.json()
                  const product = await Favorite.updateOne({ _id }, { cart: true, favorite: false })
                  console.log('successfully added to cart', product)
                  return NextResponse.json({
                        message: 'added to cart successfully'
                  })
            }
            console.log('it reached till here')
            const { img, name, price, articleCode, colour } = await req.json()
            console.log(img, name, price, articleCode, colour)

            const token = cookies().get('name')?.value
            console.log('this is the token', token)
            let user;
            if (!token) {
                  return NextResponse.json({
                        message: 'user is not logged in'
                  })
            };
            user = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload
            console.log(user)
            const newProduct = await Product.create({
                  img,
                  name,
                  price,
                  colour,
                  articleCode,
            })

            const product = await Product.findOne({ articleCode })
            console.log(newProduct)

            const addFavorite = await Favorite.create({
                  user: new mongoose.Types.ObjectId(String(user.user_id)),
                  favorite: true,
                  cart: false,
                  product: new mongoose.Types.ObjectId(String(product._id))
            })
            console.log(addFavorite)
            return NextResponse.json({
                  message: 'showing the favorites and cart'
            })

      } catch (err) {
            console.error(err)
            return NextResponse.json({
                  message: err
            })
      }
}