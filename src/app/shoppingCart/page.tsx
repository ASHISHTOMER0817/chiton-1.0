'use client'
import axios from "axios";
import DeliveryStats from "../components/deliveryStats";

import Header from "../components/header";
import { useEffect } from "react";

export default function Page() {


	useEffect(()=> {
		async function getData () {
			try{
	
				const response = await axios.get('/api/users/shoppingCart')
				const data = response.data
				console.log(data)
				const message = await response.data.message
				console.log( message)
				return message;
			}catch(error: any) {
	
				console.log('shoppingCart page has some error',error.message)
				return error.message 
			}
	
		}
		getData()
	}, [])
	
	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto">
				<DeliveryStats />
				<h1 >shopping Bag</h1>
				<div className="flex flex-col justify-between">
					<section className="w-3/5"></section>
					<section className="w-2/5">
                              <h6>discounts</h6> <h6>apply discount</h6>
                              </section>
				</div>
			</div>
		</>
	);
}
