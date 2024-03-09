import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import {Cart} from "@/model/schema"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

dbConfig()
export async function GET (request: NextRequest) {
      try {
            
            
            const cookie =  cookies().get('token')?.value ||''
            const decodedToken:any =  jwt.verify(cookie, process.env.SECRET_KEY!)
            console.log(decodedToken)
            const {email} = decodedToken;
                        
            if(email !== null) {
                  const cart = await Cart.findOne({email})
                  console.log('cart--', cart)
                  const products =  await cart.product
                  console.log('products ---',products)
                  return NextResponse.json({
                      Headers:  products, success: true, HTTP: 200 , message: 'product being shown in the cart'
                  })
            }

            return NextResponse.json({
                  message: 'First you have to login', success: false, HTTP: 400
            })
      }catch(error: any) {
          return  NextResponse.json({
                  message: 'frone-End failed to request the product details', success: false, HTTP: 500
            })
      }

}