import "./globals.css";

import TopBar from "../components/TopBar";
import React from "react";

const Home = () => {
	return (
		<div>
			<TopBar />
			<div className="flex flex-row justify-between">
				<div className="rounded-md m-12 w-56 h-svh outline outline-1" />
				<div className="rounded-md m-12 w-60 h-40 outline outline-1 -ml-2" />
				<div className="rounded-md m-12 w-60 h-40 outline outline-1 -ml-2" />
				<div className="rounded-md m-12 w-60 h-40 outline outline-1 -ml-2 -mr-2" />
				<div className="rounded-md m-12 w-56 h-svh outline outline-1" />
			</div>
		</div>
	);
};

export default Home;
