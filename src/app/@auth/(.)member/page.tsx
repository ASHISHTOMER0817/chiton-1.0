"use client";
import { useRouter } from "next/navigation";
import Member from "@/app/components/member";
import Image from "next/image";
import close from "@/../public/close.png";
import Modal from "@/app/components/modal";
export default function MemberPage() {
	const router = useRouter();
	const back = () => {
		router.back();
	};
	return (
		<>
			<Modal>
				<Member>
					{" "}
					<Image
						onClick={back}
						height={12}
						width={12}
						src={close}
						alt="close"
						className="w-3 h-3 cursor-pointer"
					/>
				</Member>
			</Modal>
		</>
	);
}
