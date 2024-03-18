import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
      try {
            const reqBody = await request.json()
            if (reqBody === true) {
                  cookies().delete('token')
                  return NextResponse.json({
                        message: 'Member has been successfully logged Out', success: false
                  })
            }
            const cookie = cookies().get('token')?.value
            // const decodedToken: any = jwt.verify(cookie, process.env.SECRET_KEY!)
            console.log(cookie)
            if (cookie) {
                  return NextResponse.json({
                        success: true, HTTP: 200, message: 'member is logged In'
                  })
            }
            return NextResponse.json({
                  success: false, HTTP: 200, message: 'member is logged Out'
            })
      } catch (error: any) {
            return NextResponse.json({
                  message: 'failed to check for the token', success: false, HTTP: 500
            })
      }

}