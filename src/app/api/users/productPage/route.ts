import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { Cart, User } from "@/model/schema";
import dbConfig from "@/dbConfig/dbConfig";


dbConfig()
export async function POST(request: NextRequest) {
      try {

            const reqBody = await request.json()
            const { url, name, price, netQuantity, articleCode } = reqBody

            const getCookies = request.cookies.get('token')?.value || ''
            const decodedToken: any = jwt.verify(getCookies, process.env.SECRET_KEY!)
            
            if (getCookies === undefined) {

                  return NextResponse.json({
                        message: 'didnt find any cookies', success: false
                  })
            }
            const {email} = decodedToken
            const user = await User.findOne({email})
            console.log('whawt is this -- ',user)

            const newProduct = await new Cart({
                  email_id: user.email,
                  product: { url, name, price, netQuantity, articleCode }
            })
            console.log(newProduct)
            
            // IT IS WORKING TILL HERE
            
            const addProduct = await newProduct.save();
            console.log( 'product added',addProduct)

            return NextResponse.json({
                  message: 'Order has been added', success: true
            })

      } catch (error: any) {
            return NextResponse.json({
                  message: 'productPage route is having problems', success: false
            })
      }
}