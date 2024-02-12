'use client'
import React, { useState } from "react";
import Inputspace from "../components/inputSpace";
import Image from "next/image";
import  close  from "@/../public/close.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";


export default function Page() {
	const router = useRouter()
	const [user, setUser] = useState<{[key:string]:string}>({
		email: '',
		password: '',
	})

	async function loginDetails () {
		try{

			const response = await axios.post('/api/users/login', user)
			
			const verify = await response.data.success
			
			const message = await response.data.message
			console.log(verify, message)
			if(verify === true) {
				router.push('/member')

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
			// login:user.email,
		},
		{
			label: "Password",
			type: "password",
			classList: "mb-2",
			// login: user.password
		},
	];
	return (
		<div className=" font-sans">
			<div className="bg-slate-400 p-3 m-auto w-1/3 ">
				<div className="flex justify-between text-center items-center">
					<h2>Sign in</h2>
					<Image src={close} alt="close" className="h-4 w-4"  />
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
					<label htmlFor="checkbox" className="mr-auto">
						Remember me
					</label>
					<div className="underline">Forget Password?</div>
				</div>

				<button className="bg-black text-center text-white py-3 my-4 w-4/5 mx-auto block"  type="submit" onClick={loginDetails}>
					Sign in
				</button>
				<button className="text-center py-3 w-4/5 mx-auto block border border-black" > <Link href={'/member'}> Become a member </Link></button>
			</div>
			
		</div>
	);
}
