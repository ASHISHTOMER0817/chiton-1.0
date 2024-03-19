"use client";
import close from "@/../public/close.png";
import { useRouter } from "next/navigation";
import Login from "@/app/components/login";
import Image from "next/image";
import Modal from "@/app/components/modal";

export default function AuthLogin() {
	const router = useRouter();

	const back = () => {
		router.back();
	};
	return (
		<Modal>
			<Login>
				<Image
					onClick={back}
					src={close}
					alt="close"
					className="h-4 w-4 cursor-pointer"
				/>
			</Login>
		</Modal>
	);
}
