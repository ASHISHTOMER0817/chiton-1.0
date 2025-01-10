import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
// import {Cart} from "@/model/schema"
import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers";
import { Favorite } from "@/model/schema";

dbConfig()
export async function GET(req:NextRequest) {
      try {
            const query = req.nextUrl.searchParams;
            const _id = query.get('favProductId')
            console.log(_id)

            if(_id){
                  const removeFromCart =await Favorite.updateOne({_id}, {cart:false, favorite:true})
            }
            const cookie = cookies().get('name')?.value || ''
            const { user_id } = jwt.verify(cookie, process.env.SECRET_KEY!) as JwtPayload
            console.log(user_id)

            if (user_id) {
                  console.log('working till here')
                  const cart = await Favorite.find({ cart: true, user:user_id }).populate('product')
                  console.log('this is cart', cart)
                  return NextResponse.json({cart})
            }

            return NextResponse.json({
                  message: 'First you have to login', success: false, HTTP: 400
            })
      } catch (error: any) {
            return NextResponse.json({
                  message: 'frone-End failed to request the product details', success: false, HTTP: 500
            })
      }

}