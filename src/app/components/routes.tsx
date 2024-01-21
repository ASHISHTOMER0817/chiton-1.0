' use client'

import { useRouter } from 'next/router'
import React from 'react'


export default function routes () {

const route = useRouter()

const items = () => {
      
      route.push('./productPage')
}
  return (
    <div>
      
    </div>
  )
}
