import dbConfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import {User} from "@/model/schema";
import bcryptjs from 'bcryptjs'

dbConfig()
export async function POST(request: NextRequest) {
      try {

            const reqBody = await request.json()
            const { name, phonenumber, email, password } = reqBody;
            console.log('reqBody')

            //Check if user exists
            const user = await User.findOne({ email });
            if (user) {
                  return NextResponse.json(
                        {message:'the Email belongs to existing member', success: false
                        }
                        // console.log('User already exist !!')

                  )
            }
            //hash Password
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt);

            const newUser = new User({
                  name,
                  phonenumber,
                  email,
                  password:hashedPassword,
            })

            const savedUser = await newUser.save();
            console.log(savedUser)

            return NextResponse.json({
                  message: "User created successfully",
                  success: true,
                  // savedUser
            })
      } catch (error: any) {
            console.log("route.ts got some problem")
            return NextResponse.json({ error: error.message }, { status: 500 },)
      }

}