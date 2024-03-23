'use server'
import { cookies } from "next/headers"

const HasCookie =() => {
    const cookie = cookies().has('name')
    return  cookie
 
}

export default HasCookie;