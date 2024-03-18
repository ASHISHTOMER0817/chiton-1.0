import { User } from "@/model/schema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import dbConfig from "@/dbConfig/dbConfig";
import { cookies } from "next/headers";


dbConfig()
export async function POST(request: NextRequest) {
      try {
            
            const reqBody = await request.json()
            const { email, password,  } = reqBody
            console.log(reqBody)

            const user = await User.findOne({ email })
            console.log(user._id)

            const validPassword = await bcryptjs.compare(
                  password, user.password
            )
                  console.log( validPassword)
            if (!user || !validPassword) {
                  return NextResponse.json({
                        message: 'Email or Password is not correct !', success: false
                  })
            }

            else {
                  const tokenData = {
                        user_id: user._id,
                        username: user.username,
                        email: user.email
                  }
                  const token = jwt.sign(tokenData, process.env.SECRET_KEY!)
                  const timeLeft =   30 * 1000
                  cookies().set('token', token, { expires: Date.now() - timeLeft, secure: true })
                  const response = NextResponse.json({
                        message: "User Logged In",
                        success: true
                  })
                  return response
            }
      } catch (error: any) {
            return NextResponse.json({
                  message: "the login server doesn't work as intended", success: false
            })
      }

}