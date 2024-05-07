"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TopBar = () => {
	const router = useRouter();

	const redirect = (location) => router.push(location);

	const menu = [
		{ link: "/", text: "Home" },
		{ link: "/report", text: "Report" },
		{ link: "/wallets", text: "Wallets" },
		{ link: "/transactions", text: "Transaction" },
	];

	const buttonComponent = (redirectionLink, text) => (
		<button className="outline outline-1 p-2 rounded-lg" onClick={(e) => redirect(redirectionLink)}>
			{text}
		</button>
	);

	return (
		<div className="flex flex-row w-full p-4 justify-between">
			<div className="flex flex-row gap-2">
				{menu.map(({ link, text }) => buttonComponent(link, text))}
			</div>
			<button onClick={(e) => redirect("/login")}>Login</button>
		</div>
	);
};

export default TopBar;
