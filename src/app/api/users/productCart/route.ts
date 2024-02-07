import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import {Cart} from "@/model/schema"


dbConfig()
export async function productCart (request: NextRequest) {
      try {

            const product_Code = request.json()
            // check if user exist

            const user = await Cart.findOne(product_Code)
            if(user) {
                  console.log(user)
                  return NextResponse.json({
                        message: 'the Product is already in the cart', success: false
                  })
            }

            return NextResponse.json({

            })
      }catch(error: any) {

      }

}