import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import {Cart} from "@/model/schema"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { ObjectId } from "mongoose";

dbConfig()
export async function GET (request: NextRequest) {
      try {
            
            
            const cookie =  cookies().get('token')?.value ||''
            // console.log(cookie)
            const decodedToken:any =  jwt.verify(cookie, process.env.SECRET_KEY!)
            // console.log(decodedToken)
            const {email_id} = decodedToken;
                        
            if(email_id !== undefined) {
                  const cart = await Cart.findOne({email_id})
                  // console.log('cart--', cart)
                  const products =  await cart.product
                  // console.log(products)
                  return NextResponse.json({
                      Headers:  products, success: true, message: 'product being shown in the cart'
                  })
            }

            return NextResponse.json({
                  message: 'First you have to login', success: false
            })
      }catch(error: any) {
          return  NextResponse.json({
                  message: 'frone-End failed to request the product details', success: false, 
            })
      }

}