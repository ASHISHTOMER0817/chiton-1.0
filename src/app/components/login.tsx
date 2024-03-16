'use client'
import React, { useEffect, useState } from "react";
import Inputspace from "./inputSpace";
import Image from "next/image";
import  close  from "@/../public/close.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";


export default function Login({classList, overlay, memberOverlay}:{classList:boolean, overlay:()=> void, memberOverlay:()=> void}) {
	const router = useRouter()
	const [user, setUser] = useState<{[key:string]:string}>({
		email: '',
		password: '',
	})
	const [warning, setWarning] = useState(true)

	const loginRef = useRef<HTMLDivElement>(null)
	async function loginDetails () {
		try{

			const response = await axios.post('/api/users/login', user)
			
			const verify = await response.data.success
			setWarning(verify)
			const message = await response.data.message
			console.log(verify, message)
			if(verify === true) {
				
				overlay()

			}else{
				console.log(message)
				

			}
		}catch(error: any) {
			console.log("loginPage has some error", error)
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
		<div ref={loginRef} className= {`font-sans bg-slate-400 p-3 m-auto w-[34%] ${ classList ? 'fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50' : 'hidden'}`} >
				<div className="flex justify-between text-center items-center">
					<h2>Sign in</h2>
					<p className= {`text-red-600 text-sm ${warning && "hidden"}`}>The password/Email doesn&apos;t belong to one of our member</p>
					<Image src={close} alt="close" className="h-4 w-4 cursor-pointer" onClick={overlay} />
				</div>
				<p className="my-4 text-center">
					Become a member and never forgo the deals, offers,
					discounts and bonus vouchers.
				</p>
				<form className="flex flex-col" >
					{inputarr.map(({ label, type, classList }, index) => {
						const stateChange = label.toLowerCase().replace(" ","")
						return (
							<Inputspace
							key={index}
								label={label}
								type={type}
								classList={classList} placeholder={""} value={user[stateChange]} setValue={function (e: React.ChangeEvent<HTMLInputElement>) {
									setUser({...user, [stateChange]:e.target.value})

								} }	/>
						);
					})}
				</form>
				<div className="flex justify-between items-center text-xs">
					<input type="checkbox" id="checkbox" />
					<label htmlFor="checkbox" className="mr-auto cursor-pointer">
						Remember me
					</label>
					<div className="underline cursor-pointer">Forget Password?</div>
				</div>

				<button className="bg-black text-center text-white py-3 my-4 w-4/5 mx-auto block"  type="submit" onClick={loginDetails}>
					Sign in
				</button>
				<button onClick={memberOverlay} className="text-center py-3 w-4/5 mx-auto block border border-black" > Become a member</button>
			
		</div>
	);
}
