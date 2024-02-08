import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import {Cart} from "@/model/schema"
import jwt from "jsonwebtoken"


dbConfig()
export async function GET (request: NextRequest) {
      try {

            // const product_Code = request.json()
            const cookies =  request.cookies.get('token')?.value ||''

            const decodedToken:any = jwt.verify(cookies, process.env.JWT_SECRET_KEY!)
            const userId = decodedToken.id

            //Make sure userId exist in token
            if(userId !== undefined) {
                  const cart = await Cart.findOne({userId})
                  const products = cart.products
                  return NextResponse.json({
                      Headers:  products, success: true, message: 'product being shown in the cart'
                  })
            }

            // const user = await Cart.findOne()
            // if(!user) {
            //       console.log(user)
            //       return NextResponse.json({
            //             message: 'No Order has been placed', success: false
            //       })
            // }

            return NextResponse.json({
                  message: 'First you have to login', success: false
            })
      }catch(error: any) {
          return  NextResponse.json({
                  message: 'frone-End failed to request the product details', success: false, 
            })
      }

}