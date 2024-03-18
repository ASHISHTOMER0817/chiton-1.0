"use client";
import React, { useState } from "react";
import InputSpace from "@/app/components/inputSpace";
import Image from "next/image";
import close from "@/../public/close.png";
import axios from "axios";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/modal";

export default function Login() {
	const router = useRouter();
	const [user, setUser] = useState<{ [key: string]: string }>({
		email: "",
		password: "",
	});
	const [warning, setWarning] = useState(true);

	async function loginDetails() {
		try {
			const response = await axios.post("/api/users/login", user);

			const verify = await response.data.success;
			setWarning(verify);
			const message = await response.data.message;
			console.log(verify, message);
			if (verify === true) {
				if (window.history.length > 1) {
					console.log(window.history.length);
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

	// useEffect(()=>
	// 	{
	// 		if(window)

	// 		window.addEventListener("click", (e) => {
	// 			if (
	// 				e.target !== loginRef.current
	// 				) {
	// 					overlay();
	// 				}

	// })},[])

	return (
		<Modal>
			<>
				<div className="flex justify-between text-center items-center">
					<h2>Sign in</h2>
					<p
						className={`text-red-600 text-sm ${
							warning && "hidden"
						}`}
					>
						The password/Email doesn&apos;t belong to
						one of our member
					</p>
					<Image
						src={close}
						alt="close"
						className="h-4 w-4 cursor-pointer"
					/>
				</div>
				<p className="my-4 text-center">
					Become a member and never forgo the deals, offers,
					discounts and bonus vouchers.
				</p>
				<form className="flex flex-col" action={loginDetails}>
					{inputarr.map(
						({ label, type, classList }, index) => {
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
												e.target
													.value,
										});
									}}
								/>
							);
						}
					)}
					<div className="flex justify-between items-center text-xs">
						<input type="checkbox" id="checkbox" />
						<label
							htmlFor="checkbox"
							className="mr-auto cursor-pointer"
						>
							Remember me
						</label>
						<div className="underline cursor-pointer">
							Forget Password?
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
					{" "}
					Become a member
				</button>
			</>
		</Modal>
	);
}
