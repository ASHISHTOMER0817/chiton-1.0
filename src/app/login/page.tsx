// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import Inputspace from "../components/inputSpace";
import Image from "next/image";
import  close  from "@/../public/close.png";
import Link from "next/link";


export default function login() {
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
		<div className="">
			<div className="bg-slate-400 p-3 m-auto w-1/2 ">
				<div className="flex justify-between text-center">
					<h2>Sign in</h2>
					<Image src={close} alt="close" />
				</div>
				<p className="my-4 text-center">
					Become a member -don't miss out on deals, offers,
					discounts and bonus vouchers.
				</p>
				<div className="flex flex-col">
					{inputarr.map(({ label, type, classList }) => {
						return (
							<Inputspace
								label={label}
								type={type}
								classList={classList} placeholder={""}	/>
						);
					})}
				</div>
				<div className="flex justify-between items-center text-xs">
					<input type="checkbox" id="checkbox" />
					<label htmlFor="checkbox" className="mr-auto">
						Remember me
					</label>
					<div className="underline">Forget Password?</div>
				</div>

				<button className="bg-black text-center text-white py-3">
					Sign in
				</button>
				<button className="text-center py-3" > <Link href={'/member'}> Register </Link></button>
			</div>
		</div>
	);
}
