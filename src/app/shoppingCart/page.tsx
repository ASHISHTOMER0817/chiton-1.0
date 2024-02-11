"use client";
import axios from "axios";
import DeliveryStats from "../components/deliveryStats";
import Image from "next/image";
import Header from "../components/header";
import { useEffect, useState } from "react";
import trash from "@/../public/trash-can-svgrepo-com (1).svg";
import heart from "@/../public/heart.svg";

export default function Page() {
	interface card {
		color: string;
		size: string;
		url: string;
		name: string;
		price: string;
		articleCode: string;
		quantity: string;
	}
	const [productCard, setProductCard] = useState<card>();
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					"/api/users/shoppingCart"
				);
				const data = response.data.Headers;
				console.log( 'response',response)
				console.log('data',data);
				setProductCard(data[0]);
				
				const message = await response.data.message;
				console.log(message);
				return message;
			} catch (error: any) {
				console.log(
					"shoppingCart page has some error",
					error.message
				);
				return error.message;
			}
		}
		getData();
		console.log(productCard)
	}, []);

	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto">
				<DeliveryStats />
				<h1 className="text-4xl font-extrabold">shopping Bag</h1>
				<div className=" w-3/4 flex flex-col justify-between">
					<section className="w-3/5">
						<Image
							src={productCard?.url!}
							alt={"iamge"}
							width={126} className="h-auto"
							height={150}
						/>

						<div>
							<div>
								<h6>{productCard?.name}</h6>
								<Image
									src={trash}
									alt={"iamge"}
								/>
							</div>
							<div>{productCard?.price} </div>
							<ul>
								<li>Art. No.</li>
								<li>
									{productCard?.articleCode}{" "}
								</li>
								<li>Size:</li>
								<li>
									{productCard !== undefined
										? productCard?.size
										: "something"}{" "}
								</li>
								<li>Color </li>
								<li>
									{productCard !== undefined
										? productCard?.color
										: "something"}{" "}
								</li>
								<li>Total </li>
								<li>rs.65,745 </li>
							</ul>
							<div>
								<Image
									src={heart}
									alt="hello"
								/>
								<button className="border ">15</button>
							</div>
						</div>
					</section>
					<section className="w-2/5">
						<div><div className="float-right">Apply discounts</div>discounts</div>
						<p>Login in to use your personal offers !</p>
						<button className="p-3 m-2">Login</button>
						<br className="text-gray-500"/>
						
							<div><div className="float-right">4500</div>Order value</div>
							
							<div><div className="float-right">3500</div>Discount</div>
							
							<div><div className="float-right">FREE</div>Delivery</div>
						<br className="text-black"/>
						<div><div>Rs.45433</div>Total</div>
						<button className="p-3 m-2">continue to checkout</button>
						<p>We accept</p>

					</section>
				</div>
			</div>
		</>
	);
}
