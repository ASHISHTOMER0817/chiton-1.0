"use client";
import DeliveryStats from "../components/deliveryStats";

import Header from "../components/header";

export default function page() {
	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto">
				<DeliveryStats />
				<h1>shopping Bag</h1>
				<div className="flex flex-col justify-between">
					<section className="w-3/5"></section>
					<section className="w-2/5">
                              <h6>discounts</h6> <h6>apply discount</h6>
                              </section>
				</div>
			</div>
		</>
	);
}
