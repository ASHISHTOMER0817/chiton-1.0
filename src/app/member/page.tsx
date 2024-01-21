// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import Inputspace from "../components/inputSpace";
import Image from "next/image";
import  close  from "@/../public/close.png";


export default function login() {
	const inputarr = [
		{     label: "Name",
			type: "text",
			classList: "mb-2",
		},
		{     label: "Contact Number",
			type: "text",
			classList: "mb-2",
		},
		{     label: "Password",
			type: "password",
			classList: "mb-2",
		},
		{     label: "repeat Password",
			type: "password",
			classList: "mb-2",
		},
	];
	return (
		<div className="">
			<div className="bg-slate-400 p-3 m-auto w-1/2 ">
				<div className="flex justify-between text-center">
					<h2>Become a member</h2>
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
								classList={classList}
								placeholder=""
							/>
						);
					})}
				</div>
				<div className="flex justify-between items-center mt-3">
					<input type="checkbox" id="checkbox" />
					<label htmlFor="checkbox" className="mr-auto text-xs">
						Do you agree to the terms and conditions?
					</label>
					<div className="underline text-xs">Forget Password?</div>
				</div>

				<button className="bg-black text-center py-3 text-white w-full">
					Become a member
				</button>
				<button className="text-center w-full py-3"> Sign in</button>
			</div>
		</div>
	);
}
