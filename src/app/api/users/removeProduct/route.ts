import { NextResponse, NextRequest } from "next/server";
import dbConfig from "@/dbConfig/dbConfig";
import { Cart } from "@/model/schema";
import jwt from "jsonwebtoken"

dbConfig()
export async function DELETE (request: NextRequest)  {

      try {

            const reqBody = await request.json()
            console.log("this is productCode--",reqBody)
            const getCookies = request.cookies.get('token')?.value || ''
            const decodedToken: any = jwt.verify(getCookies, process.env.SECRET_KEY!)

            if (getCookies === undefined) {

                  return NextResponse.json({
                        message: 'didnt find any cookies', success: false
                  })
            } else {

                  const { email } = decodedToken
                  console.log("This is email",email)
                  const cart = await Cart.findOneAndUpdate({ email }, { $pull: { product: { articleCode: reqBody } } })

                  // const cart = Cart.findOneAndDelete({reqBody})
                  console.log("This is removed product",cart)

                  return NextResponse.json({
                        message: 'Product has been successfully deleted', success: true,
                  })
            }
      } catch (error: any) {
            return NextResponse.json({
                  message: 'Product was unable to delete', success: false,
            })
      }

}