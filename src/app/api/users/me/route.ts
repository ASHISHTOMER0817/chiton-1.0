import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import dbConfig from "@/dbConfig/dbConfig";
import { User } from "@/model/schema";


dbConfig();



export async function GET(request: NextRequest) {
      try {
            const { email } = await getDataFromToken(request)
            console.log({ email })
            const user = await User.findOne({ email }).select("-password")
            console.log(user)
            return NextResponse.json({
                  message: "user found", data: user
            })

      } catch (error: any) {
            return NextResponse.json({
                  error: error.message
            }, { status: 400 })
      }
}