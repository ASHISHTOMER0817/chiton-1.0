import nodemailer from 'nodemailer';
import {User} from "@/model/schema";
import bcryptjs from 'bcryptjs'


export const sendEmail = async({email, password, userId}: any) => {
      try {
            //create a hashed token 
            // const hashedToken = await bcryptjs.hash(userId.toString(), 10)
            // await User.findByIdAndUpdate(userId, {verifyToken: hashedToken
            // })


            var transport = nodemailer.createTransport({
                  host: "sandbox.smtp.mailtrap.io",
                  port: 2525,
                  auth: {
                    user: "92bf0080cc328c",
                    pass: "f161e22398acc0"
                    //  These auth object needs to be stored in .env file
                  }
                });



const mailOptions = {
      from: 'Ashish@gmail.com',
      to: email,
      subject: 'Verify ',
      html: '<p>lorem ipsum </p>'
}

const mailResponse = await transport.sendMail(mailOptions)

      return mailResponse
      }catch(error: any) {
      }
}





