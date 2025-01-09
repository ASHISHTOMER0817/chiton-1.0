import { Favorite } from "@/model/schema";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET() {

      try {
            const token = cookies().get('name')?.value
            console.log('this is the token', token)
            let user;
            if (!token) {
                  return NextResponse.json({
                        message:'user is not logged in'
                  })
            };
            user = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload
            console.log(user)

            const favorites = await Favorite.find({ user: user.user_id, favorite:true }).populate('product')
            console.log(favorites)
            return NextResponse.json({
                  message:'showing the favorites and cart', data:favorites
            })

      }catch(err){
            console.error(err)
            return NextResponse.json({
                  message:err
            })
      }
}