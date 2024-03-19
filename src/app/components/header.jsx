"use client";

import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import fetchedData from "./fetchedData";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
// import { cookies } from "next/headers";
import Cookies from "js-cookie"

export default function Header() {
	const [variety, setVariety] = useState("");
	const [group, setGroup] = useState();
	const [articles, setArticles] = useState("hidden");
	const [trigger, setTrigger] = useState(false);
	const [search, setSearch] = useState("");
	const router = useRouter();
	const [toggle, setToggle] = useState(false);

	const navbar = [
		"Women",
		"Divided",
		"Men",
		"Baby",
		"Kids",
		"H&M HOME",
		"Beauty",
		"Sport",
	];

	useEffect(() => {
		async function fetchNewData() {
			try {
				const response = await fetchedData(
					"categories",
					"list",
					"",
					"",
					"",
					""
				);
				for (let i = 0; i < response.length - 1; i++) {
					if (response[i].CatName === variety) {
						console.log(
							"the response i is: ",
							response[i]
						);
						setGroup(response[i]);
						return;
					}
				}
			} catch (error) {
				console.log("yes this is error", error);
			}
		}
		if (trigger) {
			fetchNewData();
		}
	}, [variety, trigger]);
	{
		/*  variety could be a mistake here*/
	}

	useEffect(() => {
		async function identification() {
			try {
				const response = await axios.get("/api/users/knownPerson");
				const success = await response.data.success;
				console.log( "token check operation --",success, message);
				setToggle(success);
			} catch {
				console.log("Failed");
			}
		}
		identification();
	}, []);

	async function triggerLogout() {
		try{
			const response = await axios.delete("/api/users/removeToken")
			const success = await response.data.success
			const message = await response.data.message
			console.log(success, message)
			if(success){
				router.refresh()
			}
		}catch{
			console.log("Something went Wrong, please try again later")
		}
	}

	//Header dropdown menu Start
	function triggerfetchedData() {
		setTrigger(true);
		setArticles("");
	}

	function triggerWindowCollapse() {
		articles !== "hidden" ? setArticles("hidden") : "";
		setTrigger(false);
	}

	function SearchIncludes() {
		for (let i = 0; i < navbar.length; i++) {
			const category = navbar[i].toLowerCase;
			if (search.includes(category)) {
				router.push(`/allProduct/Men/men_jeans/Jeans}`);
			}
		}
	}
	return (
		<header
			className={`border ${
				trigger ? "border-b-2 border-b-black" : ""
			}`}
		>
			<div className="flex justify-between text-sm">
				<Link href={"./"}>
					<Image
						priority={true}
						quality={100}
						width={150}
						className="max-w-40 h-auto"
						src={Logo}
						alt="Logo"
					/>
				</Link>
				<nav className="flex items-center">
					
					<div className="mr-3 hover:text-gray-600 cursor-pointer">
						{" "}
						{!toggle ? (
						
								<Link
									className="flex items-center"
									href={"/login"}
								>  <CiLogin className="w-5 h-5 mr-2"/>
									<div className="mr-3 hover:text-gray-600 cursor-pointer">
										Login
									</div>
								</Link>
							
						) : (
							<div
								onClick={triggerLogout}
								className="flex items-center"
							>
								<CiLogout className="w-5 h-5 mr-2" />
								<div className="mr-3 hover:text-gray-600 cursor-pointer">
									Logout
								</div>
							</div>
						)}
					</div>
					{/* <div className="mr-3 hover:text-gray-600 cursor-pointer"><Link href={'/login'}>Login</Link> </div> */}

					<CiHeart className="mr-2 w-5 h-5"/>
					<div className="mr-3 hover:cursor-pointer hover:text-gray-600" >
						Favorites
					</div>
					<CiShoppingCart className="mr-2 w-5 h-5"
					/>
					<div className="mr-3 hover:text-gray-600 cursor-pointer">
						{" "}
						<Link href={"/shoppingCart"}>
							Shopping bag
						</Link>
					</div>
				</nav>
			</div>
			<div className="flex items-center justify-between sm:flex-col">
				<ul className=" font-semibold text-sm  mt-3 ml-[29%] grid grid-rows-1 grid-flow-col gap-11 w-1/3   sm:flex sm:flex-col sm:items-center sm:justify-normal sm:mx-auto sm:h-2/4    ">
					{navbar.map((e, index) => {
						const handleMouseEnter = (category) => {
							setVariety(category);
							triggerfetchedData();
						};

						return (
							<>
								<li
									onMouseEnter={() => {
										handleMouseEnter(e);
									}}
									onMouseLeave={
										triggerWindowCollapse
									}
									className="hover:underline underline-offset-4 hover:text-gray-600"
									key={index}
								>
									{e}
								</li>
							</>
						);
					})}
				</ul>
				<search className="flex ml-auto h-fit sm:w-1/3 sm:mr-0 ">
					<CiSearch />
					<input
						value={search}
						className=" text-sm focus:outline-none underline underline-offset-2 bg-[#FAF9F8]"
						placeholder="Search...                        "
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</search>
			</div>
			<section
				onMouseEnter={() => {
					setArticles("");
				}}
				onMouseLeave={() => {
					setArticles("hidden");
				}}
				className={`w-[68%] mx-auto    border-t-0 ${articles} flex justify-around items-start  text-nowrap text-sm  `}
			>
				{group !== undefined || null
					? group.CategoriesArray.map(
							(
								{
									CategoryValue,
									CategoriesArray,
								},
								index
							) => {
								const category = group.CatName;
								return (
									<table
										key={index}
										className="mr-14 w-3/5"
									>
										<thead>
											<tr className="mb-10 pt-10 font-semibold">
												{
													CategoryValue
												}
											</tr>
										</thead>
										<tbody>
											{CategoriesArray
												? CategoriesArray.map(
														(
															{
																CategoryValue,
																tagCodes,
																CatName,
															},
															index
														) => {
															return (
																<>
																	<tr
																		key={
																			index
																		}
																		className="mb-10 hover:underline underline-offset-4 "
																	>
																		<Link
																			href={`/allProduct/${category}/${tagCodes[0]}/${CatName}`}
																		>
																			{
																				CategoryValue
																			}
																		</Link>
																	</tr>
																</>
															);
														}
												  )
												: ""}
										</tbody>
									</table>
								);
							}
					  )
					: ""}
			</section>
		</header>
	);
}
