import { NextResponse, NextRequest } from "next/server";
import dbConfig from "@/dbConfig/dbConfig";
import { Favorite } from "@/model/schema";
import jwt, { JwtPayload } from "jsonwebtoken"

dbConfig()
export async function DELETE(request: NextRequest) {

      try {

            const reqBody = await request.json()
            console.log("this is productCode--", reqBody)
            const getCookies = request.cookies.get('name')?.value || ''
            const decodedToken = jwt.verify(getCookies, process.env.SECRET_KEY!) as JwtPayload

            if (!getCookies) {
                  return NextResponse.json({
                        message: 'didnt find any cookies', success: false
                  })
            }

            const { user_id } = decodedToken
            console.log("This is email", user_id)
            const cart = await Favorite.updateOne({ user:user_id }, { $pull: { product: { articleCode: reqBody } } })

            // const cart = Cart.findOneAndDelete({reqBody})
            console.log("This is removed product", cart)

            return NextResponse.json({
                  message: 'Product has been successfully deleted', success: true,
            })
      } catch (error: any) {
            return NextResponse.json({
                  message: 'Product was unable to delete', success: false,
            })
      }

}