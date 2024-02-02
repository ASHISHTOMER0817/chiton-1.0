"use client";
import React, { useContext } from "react";
import { UserContext } from "./abc";

export default function ProductContext() {
	const { user, indexNo } = useContext(UserContext);
	return {user, indexNo}
}

