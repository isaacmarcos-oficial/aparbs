import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { links } from "./LinksList";

type LinkIconsProps = {
	theme: "bgRed" | "bgBlack" | "bgWhite";
};

export function LinkIcons({ theme }: LinkIconsProps) {
	return (
		<div
			className={`flex items-center justify-center gap-4 text-${theme === "bgRed" ? "terciary" : theme === "bgBlack" ? "terciary" : "primary"}`}
		>
			{links.map((link) => (
				<Link
					key={link.actionLink}
					href={link.actionLink}
					aria-label={link.actionDescription}
					target="_blank"
					rel="external"
				>
					<div
						className={`hover:text-${theme === "bgRed" ? "secundary" : theme === "bgBlack" ? "terciary" : "primary"}`}
					>
						<link.icon
							className={`size-6 hover:text-${theme === "bgRed" ? "secundary" : theme === "bgBlack" ? "primary" : "primary"} transition`}
						/>
					</div>
				</Link>
			))}
		</div>
	);
}
