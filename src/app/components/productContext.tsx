'use client'
import React, { useContext } from 'react';
import { UserContext } from './abc';

 export default function ProductContext( productCode:string) {
  const { user, setUser } = useContext(UserContext);
  setUser(productCode);
  console.log(user, 'is')

}

