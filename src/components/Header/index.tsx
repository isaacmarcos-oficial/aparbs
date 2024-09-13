import React from "react";
import { LinkIcons } from "../LinkIcons";
import { Sidebar } from "../Sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";

export function Header() {
	return (
		<div className="flex fixed top-0 items-center justify-center h-[66px] w-full bg-primary z-50">
			<div className="grid grid-cols-3 max-w-[1280px] w-full items-center px-5">
				<Sidebar />

				<Link href="/" className="flex items-center justify-center">
					<Image
						width={150}
						height={150}
						src="/Aparbs Dark 10.svg"
						alt="logo da APARBS Soluções Automotivas"
					/>
				</Link>

				<div className="flex items-center justify-end">
					<LinkIcons theme="bgRed" />
				</div>
			</div>
		</div>
	);
}
