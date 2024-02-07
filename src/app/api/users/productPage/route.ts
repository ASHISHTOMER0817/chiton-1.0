import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

import { Cart, User } from "@/model/schema";
import dbConfig from "@/dbConfig/dbConfig";


dbConfig()
export async function POST(request:NextRequest) {
      try{

            const reqBody = await request.json()
            const {url, name, price, netQuantity, articleCode} = reqBody

                  const getCookies =   request.cookies.get('token')?.value || ''
                  if(getCookies !== undefined) {
                        const decodedToken: any = jwt.verify(getCookies!, process.env.JWT_SECRET_KEY!)
                       const userId = decodedToken.id
                       const user = await User.findOne(userId)
                        const newProduct = new Cart({
                              user_id: user._id,
                              product:{url,name,price,netQuantity, articleCode}
                        })
                        const productSaved = await newProduct.save()
                        console.log(productSaved)
                        return NextResponse.json({
                              message: 'Order has been added', success: true
                        })
                  }
            
            return NextResponse.json({
                  message: "no user is logged in", success: false
            })
      }catch(error: any) {
            return NextResponse.json({
                  message: 'productPage route is having problems', success: false
            })
      }
}