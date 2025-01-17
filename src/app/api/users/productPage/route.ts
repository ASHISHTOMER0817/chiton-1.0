import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"
import { Favorite, Product } from "@/model/schema";
import dbConfig from "@/dbConfig/dbConfig";
import { cookies } from "next/headers";



dbConfig()
export async function POST(request: NextRequest) {
      try {
            console.log('here')
            const { url, name, price, articleCode, colour } = await request.json()
            console.log('222222', url, name, price, articleCode, colour)
            const getCookies = cookies().get('name')?.value || ''
            console.log(getCookies)
            const decodedToken = jwt.verify(getCookies, process.env.SECRET_KEY!) as JwtPayload

            if (!getCookies) {
                  return NextResponse.json({
                        message: 'didnt find any cookies', success: false
                  })
            }
                  const { user_id } = decodedToken
                  const newProduct =await Product.create({
                        img:url,
                        name,
                        price,
                        articleCode,
                        colour
                  })
                  console.log(newProduct)

                  const favorite =await Favorite.create({
                        product:newProduct._id,
                        favorite:false,
                        cart:true,
                        user:user_id
                  })
                  console.log(favorite)
            return NextResponse.json({
                  message:'worked fine'
            })

      } catch (error: any) {
            return NextResponse.json({
                  message: 'productPage route is having problems', success: false
            })
      }
}