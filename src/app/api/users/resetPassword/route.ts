import { User } from "@/model/schema";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs"


export async function POST(request: NextRequest) {

      try {
            const reqBody = await request.json()
            const { email, password } = reqBody
            console.log(email)
            const user = await User.findOne({ email })
            console.log(user)
            if (!user) {
                  return NextResponse.json({
                        message: "User associated with this email doesn't exist",
                        success: false
                  })
            }
            else {
                  const salt = await bcryptjs.genSalt(10)
                  const hashedPassword = await bcryptjs.hash(password, salt);
                  const updatePassword = await User.findOneAndUpdate({ email }, { $set: { password: hashedPassword } })
                  console.log(updatePassword)
            }

      } catch (error: any) {
            return NextResponse.json({
                  message: " Some error occured Please try again later", success: false
            })
      }
}