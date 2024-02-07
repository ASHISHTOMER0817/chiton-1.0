"use client";
import React from "react";
import Inputspace from "../components/inputSpace";
import Image from "next/image";
import close from "@/../public/close.png";
import { useState } from "react";
import DatabaseConnection from "../../dbConfig/dbConfig";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

// export function emailExistence(user: any) {
// 	const [visibility, setVisibility] = useState("");
// 	const [margin, setMargin] = useState("");
// 	if (user) {
// 		setVisibility("hidden");
// 		setMargin("mt-2");
// 	}
// }
export default function login() {
	const [existingUser, setExistingUser] = useState('')
	const router = useRouter()
	const [user, setUser] = useState<{ [key: string]: string }>({
		name: "",
		phonenumber: "",
		email: "",
		password: "",
	});

	const inputarr = [
		{
			label: "Name",
			type: "text",
			classList: "mb-2",
			//  value :user.name
		},
		{
			label: "phoneNumber",
			type: "text",
			classList: "mb-2",
			// value :user.phonenumber
		},
		{
			label: "Email",
			type: "email",
			classList: "mb-2",
			// value :user.email
		},
		{
			label: "Password",
			type: "password",
			classList: "mb-2",
			// value :user.password
		},
	];

	async function userData() {
		try {
			const response = await axios.post("/api/users/member", user);
			console.log("signup successful");
			const success = response.data.success
			const messageRecd = await response.data.message
			if(success !== true) {
				setExistingUser(messageRecd)

			}
			else if(success === true) {
				router.push('@/app/login')
			}

		} catch (error) {
			console.log(" Problem in user data function", error);
		}
	}

	return (
		<div className="">
			<div className="bg-slate-400 p-3 m-auto w-1/2 ">
				<div className="flex justify-between text-center items-center">
					<h2>Become a member</h2>
					<Link href={"/"} >
					<Image
					
						src={close}
						// width={15}
						// height={15}
						alt="close"
						className="w-3 h-3"
						/>
						</Link>
				</div>
				<p className="my-4 text-center">
					Become a member -don't miss out on deals, offers,
					discounts and bonus vouchers.
				</p>
				<form className="flex flex-col">
					{inputarr.map(
						({ label, type, classList }, index) => {
							const stateChange = label
								.toLowerCase()
								.replace(" ", "");
							return (
								<Inputspace
									key={index}
									label={label}
									type={type}
									classList={classList}
									placeholder=""
									value={user[stateChange]}
									setValue={(
										e: React.ChangeEvent<HTMLInputElement>
									) => {
										setUser({
											...user,
											[stateChange]:
												e.target
													.value,
										});
									}}
								/>
							);
						}
					)}
				</form>
				<h5 className={`text-red-700 mt-2 `}>
					{existingUser}
				</h5>
				<div className="flex justify-between items-center mt-3">
					<input type="checkbox" id="checkbox" />
					<label
						htmlFor="checkbox"
						className="mr-auto text-xs"
					>
						Do you agree to the terms and conditions?
					</label>
					<div className="underline text-xs">
						Forget Password?
					</div>
				</div>

				<button
					className="bg-black text-center py-3 text-white w-full"
					onClick={userData}
				>
					Become a member
				</button>
				<button className="text-center w-full py-3">
					<Link href={'/login'}>
					Sign in
					</Link>
				</button>
			</div>
		</div>
	);
}
