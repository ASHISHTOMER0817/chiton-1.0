'use client'
import React, { ReactNode, useState } from "react";
import InputSpace from "@/app/components/inputSpace";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login({children}:{children:ReactNode | null}) {

	const router = useRouter();
	const [user, setUser] = useState<{ [key: string]: string }>({
		email: "",
		password: "",
		
	});
	const [warning, setWarning] = useState(true);

	async function loginDetails() {
		try {
			const response = await axios.post("/api/users/login", user);
			const success = await response.data.success;
			setWarning(success);
			const message = await response.data.message;
			console.log(success, message);
			if (success) {
				if (window.history.length > 1) {
					router.back();
				} else {
					router.push("/");
				}
			} else {
				console.log(message);
			}
		} catch (error: any) {
			console.log("loginPage has some error", error);
		}
	}

	const inputarr = [
		{
			label: "Email",
			type: "Email",
			classList: "mb-2",
		},
		{
			label: "Password",
			type: "password",
			classList: "mb-2",
		},
	];

	return (
		<div>
			<div className="flex justify-between text-center items-center">
				<h2>Sign in</h2>
				<p
					className={`text-red-600 text-sm ${
						warning && "hidden"
					}`}
				>
					The password/Email doesn&apos;t belong to one of
					our member
				</p>
				{children}
			</div>
			<p className="my-4 text-center">
				Become a member and never forgo the deals, offers,
				discounts and bonus vouchers.
			</p>
			<form className="flex flex-col" action={loginDetails}>
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
							placeholder={""}
							value={user[stateChange]}
							setValue={function (
								e: React.ChangeEvent<HTMLInputElement>
							) {
								setUser({
									...user,
									[stateChange]:
										e.target.value,
								});
							}}
						/>
					);
				})}
				<div className="flex justify-between items-center text-xs">
					<input type="checkbox" id="checkbox" />
					<label
						htmlFor="checkbox"
						className="mr-auto cursor-pointer"
					>
						Remember me
					</label>
					<div
						className="underline cursor-pointer"
					>
						<Link href={'/resetPassword'}></Link>Forget Password?
					</div>
				</div>

				<button
					className="bg-black text-center text-white py-3 my-4 w-4/5 mx-auto block"
					type="submit"
				>
					Sign in
					
				</button>
			</form>

			<button className="text-center py-3 w-4/5 mx-auto block border border-black">
				{" "}<Link href={"/member"}>Become a member</Link>
				
			</button>
		</div>
	);
}
