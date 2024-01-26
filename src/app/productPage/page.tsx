'use client'

import React, { useContext } from "react";
import Header from "@/app/components/header"
import fetchedData from "../components/fetchedData";
import { UserContext } from "../components/abc";

// import pants from '@/../public/pants.webp'
// import Image from 'next/image'

// import uniqueCode from "../components/userConsumer";
export default function page() {
	

	const {user} = useContext(UserContext)
	 
{/*const data = await fetchedData('detail', code, '', '')*/}
	return (
		<div>
			<Header/>
			<section>
				<div>
					{user}
					{/* {data?.product?.name} */}
				</div>
				{/* <Image src={pants} alt="image" className='w-1/2'/> */}
				
			</section>
		</div>
	);
}
