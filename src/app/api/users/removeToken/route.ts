import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(request: NextRequest) {
      try {
            cookies().delete('token')
            return NextResponse.json({
                  message: 'Member has been successfully logged Out', success: true
            })
      } catch (error: any) {
            return NextResponse.json({
                  message: 'Something went wrong, Please try again later', success: false
            })
      }

}