import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers";


export function getDataFromToken(request: NextRequest) {
      try {

            const cookie = cookies().get('token')?.value || ''
            const decodedToken = jwt.verify(cookie, process.env.SECRET_KEY!) as JwtPayload;
           
                  return decodedToken.email
      } catch (error: any) {
            throw new Error(error.message)
      }
}