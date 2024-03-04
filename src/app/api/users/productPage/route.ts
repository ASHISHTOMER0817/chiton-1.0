import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { Cart, User } from "@/model/schema";
import dbConfig from "@/dbConfig/dbConfig";



dbConfig()
export async function POST(request: NextRequest) {
      try {

            const reqBody = await request.json()
            // const { url, name, price, netQuantity, articleCode } = reqBody
            const {productDetails, context} = reqBody
            const { url, name, price, netQuantity, articleCode } = productDetails 
            const getCookies = request.cookies.get('token')?.value || ''
            const decodedToken: any = jwt.verify(getCookies, process.env.SECRET_KEY!)

            if (getCookies === undefined) {

                  return NextResponse.json({
                        message: 'didnt find any cookies', success: false
                  })
            } else {

                  const { email } = decodedToken
                  const user = await User.findOne({ email })
                  const cart = await Cart.findOne({ email })
                  console.log('what is this -- ', user)

                  if (cart === null) {
                        const newCart = await new Cart({
                              email: user.email,
                              [context]: {
                                    url, name, price, netQuantity, articleCode
                              }
                        })
                        const savedCart = await newCart.save();
                        console.log(savedCart)
                        console.log('Successfully created', newCart)
                        return NextResponse.json({
                              message: 'Successfully created new Cart', success: true
                        })

                  } else {
                        const query = { email: cart.email };
                        const update = { $push: { [context]: { url, name, price, netQuantity, articleCode } } };
                        // const options = { upsert: true };
                        const newProduct = await Cart.updateOne(
                              query, update
                        )
                        console.log('Successfully pushed -', newProduct)
                        return NextResponse.json({
                              message: 'Successfully added new Product', success: true
                        })


                  }
            }

      } catch (error: any) {
            return NextResponse.json({
                  message: 'productPage route is having problems', success: false
            })
      }
}