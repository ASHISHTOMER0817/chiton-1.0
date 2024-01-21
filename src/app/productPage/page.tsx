import React from "react";
import Header from "@/app/components/header"
import fetchedData from "../components/fetchedData";
// import pants from '@/../public/pants.webp'
// import Image from 'next/image'


export default function page() {

	const data = fetchedData()
	return (
		<div>
			<Header/>
			<section>
				<div>
					{/* <Image src={} alt=""/> */}
				</div>
				{/* <Image src={pants} alt="image" className='w-1/2'/> */}
				
			</section>
		</div>
	);
}
