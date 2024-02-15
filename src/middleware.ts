import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
      const path = request.nextUrl.pathname

      const isPublicPath = path === '/login' || path === '/signup'

      const cookie = cookies().get('token')?.value || ''

      if (isPublicPath && cookie) {
            return NextResponse.redirect(new URL('/', request.url),)
      }


      if (!isPublicPath && !cookie) {
            return NextResponse.redirect(new URL('/login', request.url))
      }
}



// See "Matching Paths" below to learn more
export const config = {

      matcher: [

            // '/',
            '/productPage',
            '/shoppingCart',


      ]
}