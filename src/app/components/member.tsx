"use client";
import React from "react";
import InputSpace from "@/app/components/inputSpace";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Member({
	children,
}: {
	children: React.ReactNode | null;
}) {
	const router = useRouter();
	const [error, setError] = useState("");
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
		},
		{
			label: "phoneNumber",
			type: "text",
			classList: "mb-2",
		},
		{
			label: "Email",
			type: "email",
			classList: "mb-2",
		},
		{
			label: "Password",
			type: "password",
			classList: "mb-2",
		},
	];

	async function userData() {
		try {
			const response = await axios.post("/api/users/member", user);
			console.log("signup successful");
			const success = response.data.success;
			const existingUser = await response.data.message;
			if (!success) {
				setError(existingUser);
			} else if (success) {
				if (window.history.length > 1) {
					console.log(window.history.length);
					router.back();
				} else {
					router.push("/");
				}
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
		<div>
			<div className="flex justify-between text-center items-center">
				<h2>Become a member</h2>
				<h5 className='text-red-600 text-sm'>{error}</h5>
				{children}
			</div>
			<p className="my-4 text-center">
				Become a member and forgo the deals, offers, discounts
				and bonus vouchers.
			</p>
			<form className="flex flex-col" onSubmit={userData}>
				{inputarr.map(({ label, type, classList }, index) => {
					const stateChange = label
						.toLowerCase()
						.replace(" ", "");
					return (
						<InputSpace
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
										e.target.value,
								});
							}}
						/>
					);
				})}

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
					type="submit"
				>
					Become a member
				</button>
			</form>

			<button className="text-center w-full py-3">
				<Link href={"/login"}>Sign In</Link>
			</button>
		</div>
	);
}
