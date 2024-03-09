'use client'
import React from "react";
import Inputspace from "./inputSpace";
import Image from "next/image";
import close from "@/../public/close.png";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";


export default function Member({
	classList,
	overlay, LoginOverlay
}: {
	classList: string;
	overlay:()=> void, LoginOverlay:()=> void
}) {
	const [existingUser, setExistingUser] = useState("");
	const memberRef = useRef<HTMLDivElement>(null)
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
			const success = response.data.success;
			const messageRecd = await response.data.message;
			if (success !== true) {
				setExistingUser(messageRecd);
			} else if (success === true) {
			}
		} catch (error) {
			console.log(" Problem in user data function", error);
		}
	}

	// window.addEventListener("click", (e) => {
	// 	if (
	// 		e.target !== memberRef.current
			
	// 	) {
	// 		overlay();
	// 	}
	// });

	return (
		<div className={`font-sans bg-slate-400 p-3 m-auto w-[34%] ${ classList ? 'fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50' : 'hidden'}`}>
				<div className="flex justify-between text-center items-center">
					<h2>Become a member</h2>
					
						<Image
						onClick={overlay}
							height={12}
							width={12}
							src={close}
							alt="close"
							className="w-3 h-3"
						/>
					
				</div>
				<p className="my-4 text-center">
					Become a member and forgo the deals, offers,
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
				<h5 className={`text-red-700 mt-2 `}>{existingUser}</h5>
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
				<button onClick={LoginOverlay} className="text-center w-full py-3">
					Sign In
				</button>
		</div>
	);
}
