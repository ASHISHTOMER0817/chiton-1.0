'use server'
import { cookies } from "next/headers"

const DeleteCookie = () => {
cookies().delete('token')
}

export default DeleteCookie;