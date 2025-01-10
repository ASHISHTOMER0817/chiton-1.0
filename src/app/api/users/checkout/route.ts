import { NextResponse, NextRequest } from "next/server";
// import DatabaseConnection from "@/dbConfig/dbConfig";
import { Stripe } from "stripe";

export async function POST(req: NextRequest) {

      try {
            const stripe = new Stripe("sk_test_51OximYSBnrUlVANBWuJnkEQqgzzybtNBnPuC3v8vtcEj475dmBLMULuRxMhb8ObPAEoweilqaQw7b5vkQlk1Hu2R00OydQNaTd")

            const {productCard} = await req.json()
            console.log('this is checkoutProduct', productCard)
            const items = productCard.map(({ product }: { product: { name: string, price: string, img: string } }) => {
                  const { name, price, img } = product;
                  console.log('this is name', name)
                  return {
                        price_data: {
                              currency: 'inr',
                              product_data: {
                                    name: name,
                                    images: [img],
                              },
                              unit_amount: Number(price.slice(2)) * 100
                        },
                        quantity: 1
                  }
            })
            const session = await stripe.checkout.sessions.create({
                  line_items: items,

                  mode: 'payment',
                  success_url: `https://www.bing.com/search?pglt=899&q=stripe&cvid=84b97efb72c74deeb007ea096da8a33e&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQRRg8MgYICBBFGDzSAQkxMjcwMmowajGoAgiwAgE&FORM=ANNTA1&PC=W069`,
                  cancel_url: `https://www.bing.com/search?pglt=899&q=stripe&cvid=84b97efb72c74deeb007ea096da8a33e&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQRRg8MgYICBBFGDzSAQkxMjcwMmowajGoAgiwAgE&FORM=ANNTA1&PC=W069`,
            });
            return NextResponse.json({ url: session.url });
      } catch (err) {
            return NextResponse.json({
                  message: 'something went wrong', status: 500
            })
      }
}