import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
      try {
            const cookie = cookies().get('token')?.value
            if (cookie) {
                  return NextResponse.json({
                        success: true, message: 'member is logged In'
                  })
            }
            return NextResponse.json({
                  success: false, message: 'member is logged Out'
            })
      } catch (error: any) {
            return NextResponse.json({
                  message: 'Something went wrong, Please try again later', success: false
            })
      }

}