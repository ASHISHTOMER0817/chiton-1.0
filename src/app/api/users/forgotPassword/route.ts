import { User } from "@/model/schema";
import dbConfig from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import mail from "@sendgrid/mail";

dbConfig()
export async function POST(request: NextRequest) {

      try {
            const email = await request.json()
            console.log(email)
            const user = await User.findOne({email})
            // console.log(user)
            if (!user) {
                  return NextResponse.json({
                        message: "User associated with this email doesn't exist",
                        success: false
                  })
            }
            else {
                  //Change the anchor tag !important
                  //SendGrid mail
                  mail.setApiKey(process.env.SENDGRID_API_KEY!);
                  const message = `
                   Name:Chiton \r\n
                   Email: This email ${email} used to register with Kapa Jobs\r\n
                   Message: This is your link to reset password  --> <a href="http://localhost:3000/resetPassword"> Reset Password </a>
                   `
                  const data = {
                        to: {email},
                        from: 'ashish0817tomer@gmail.com',
                        subject: 'Verification email !',
                        text: message,
                        html: message.replace(/\r\n/g, '<br>')
                  }

                  mail.send(data)

                  return NextResponse.json({
                        message: "successfully", success: true
                  })
            }

      } catch (error: any) {
            return NextResponse.json({
                  message: " Some error occured Please try again later", success: false
            })
      }
}