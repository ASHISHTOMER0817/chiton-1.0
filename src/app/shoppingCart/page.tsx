'use client'
import axios from "axios";
import DeliveryStats from "../components/deliveryStats";
import Image from "next/image";
import Header from "../components/header";
import { useEffect, useState } from "react";
import trash from "@/../public/trash-can-svgrepo-com (1).svg";
import heart from "@/../public/heart.svg";
import delivery from "@/../public/package-delivery-box-13-svgrepo-com.svg";
import arrowDropDown from "@/../public/arrowDropDown.svg";
import Link from "next/link";

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
	const [productCard, setProductCard] = useState<[card]>();
	const [totalPrice, setTotalPrice] = useState(0)
	const [data, setData] = useState('')



	useEffect(() => {
		const getData = async()=> {
			try {
				const response = await axios.get(
					"/api/users/shoppingCart"
				);
				const data = response.data.Headers;
				
				setProductCard(data);
				if (data.length > 0) {
					const totalPrice = data.reduce((acc:number, { price }:{price:string}) => acc + parseInt(price), 0);
					setTotalPrice(totalPrice);
				  }
				
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
		console.log(productCard);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	

	const removeit = async() => {
		try{
			console.log(data)
			const response = await axios.delete("/api/users/removeProduct",{data})
			const success = await response.data.success
			console.log(success, await response.data.message)
		}catch(error:any){
			console.log("failed to remove the product"), error.message
		}
	};

	const removeProduct = (d:string)=> {
		console.log(d)
		setData(d)
		removeit()
	}
	

	return (
		<div className="bg-gray-200 flex-grow ">
			<div className=" bg-gray-200 w-2/3 mx-auto sm:w-10/12 ">
				<div className="flex justify-around text-xs sm:text-nowrap py-3">
					<DeliveryStats />
				</div>
				<h1 className="text-4xl font-extrabold text-center py-6">
					shopping Bag
				</h1>

					{productCard === undefined ? (
						<div className="font-semibold text-sm text-center text-red-800">
							You should login/ Be a member First OR
							Else you didn&apos;t select choose
							any product
						</div>
					) : (
						<>
							<div className="flex flex-col float-left border w-7/12 ">
								{productCard.map(({url,name,articleCode, size, color, price,}, index) => {
									return (
										<>
											<section key={index} className=" bg-white mt-7 py-3  flex  border border-gray-300">
												<Image
													src={
														url
													}
													alt={
														"iamge"
													}
													width={
														135
													}
													className="h-auto ml-3"
													height={
														160
													}
												/>
												<div className="pt-3 text-sm mx-5 w-full ">
													<div className=" font-bold">
														{
															name
														}{" "}
														<Image
															onClick={
																()=>removeProduct(articleCode)
															}
															src={
																trash
															}
															alt={
																"iamge"
															}
															className="  w-4 float-right cursor-pointer"
														/>
													</div>
													<div className="text-lg text-red-600">
														{" "}
														Rs.
														{
															price
														}{" "}
													</div>
													<ul className="text-xs grid  grid-cols-4 my-4 mt-5 gap-x-2">
														<li>
															Art.
															No.
														</li>
														<li>
															{
																articleCode
															}{" "}
														</li>
														<li>
															Size:
														</li>
														<li>
															{productCard !==
															undefined
																? size
																: "something"}{" "}
														</li>
														<li>
															Color{" "}
														</li>
														<li>
															{productCard !==
															undefined
																? color
																: "something"}{" "}
														</li>
														<li>
															Total{" "}
														</li>
														<li>
															{price}
														</li>
													</ul>
													<div className="flex items-center">
														<Image
															src={
																heart
															}
															alt="hello"
															className="w-10"
														/>
														<button className="border w-10 h-10 ml-3">
															1
														</button>
													</div>
												</div>
											</section>
										</>
									);
								})}
							</div>
							<section className=" w-4/12 float-right bg-white mt-7 p-3 border border-gray-300">
								<div className="text-gray-400 text-xs font-medium hover:underline underline-offset-2">
									<div className="float-right text-black hover:underline underline-offset-2">
										Apply discounts
									</div>
									discounts
								</div>
								<p className="mt-4 text-sm">
									Login in to use your
									personal offers !
								</p>
								<button className="border border-black font-extrabold hover:text-gray-500 p-3 mt-1 mb-4 w-full mx-auto">
								<Link href="/login"></Link>	Login
								</button>
								<hr className="mb-3" />

								<div className="text-sm mb-1">
									<div className="float-right ">
										4500
									</div>
									Order value
								</div>

								<div className="text-sm mb-1">
									<div className="float-right  text-red-600">
										{" "}
										-3500
									</div>
									Discount
								</div>

								<div className="text-sm mb-1">
									<div className="float-right ">
										FREE
									</div>
									Delivery
								</div>
								<hr className=" mt-7 border-black " />
								<div className="text-sm mt-1 font-bold">
									<div className="float-right font-bold">
										Rs.{totalPrice}
									</div>
									Total
								</div>
								<button className=" bg-black text-white p-3 mt-9 mb-4 w-full mx-auto">
									continue to checkout
								</button>
								<p className="mt-3 text-sm">
									We accept
								</p>
								<p className="mt-3 text-sm">
									cash on delivery
								</p>
								<p className="mt-6 text-left text-[10px]">
									Prices and delivery costs
									are not confirmed until
									you&apos;ve reached the
									checkout. 15 days <br />
									free returns. Read more
									about return and refund
									policy. Customers would
									receive an SMS/WhatsApp
									notifications regarding
									deliveries on the
									registered phone numbe
								</p>
								<div className="flex items-center mt-3  justify-between bg-gray-200">
									<Image
										src={delivery}
										alt={
											"return policy"
										}
										className="w-8 "
									/>
									<p className="text-sm">
										Delivery and return
										policy{" "}
									</p>
									<Image
										src={arrowDropDown}
										className="-rotate-90 w-12"
										alt={"forward"}
									/>
								</div>
							</section>
						</>
					)}
			</div>
		</div>
	);
}
