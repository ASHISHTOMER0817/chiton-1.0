import dbConfig from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { User } from "@/model/schema";


dbConfig()

export async function POST(request: NextRequest) {
      try{
            const reqBody = await request.json()
            const {token} = reqBody
            console.log(token)
            User.findOne({token})

      }catch(error: any) {
            return NextResponse.json({
                  error: error.message
            }, {status: 500})
      }
}