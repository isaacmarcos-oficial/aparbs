import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { links } from "./LinksList";

type LinkIconsProps = {
	theme: "bgRed" | "bgBlack" | "bgWhite";
};

export function LinkIcons({ theme }: LinkIconsProps) {
	return (
		<div className={`flex items-center justify-center gap-4 text-${theme === "bgRed" ? "terciary" : theme === "bgBlack" ? "terciary" : "secundary"}`}
			color={
				theme === "bgRed"
					? "terciary"
					: theme === "bgBlack"
						? "terciary"
						: "secundary"
			}
		>
			{links.map((link) => (
				<Link
					key={link.actionLink}
					href={link.actionLink}
					aria-label={link.actionDescription}
					target="_blank"
				>
					<div className={`hover:text-${theme === "bgRed" ? "secundary" : theme === "bgBlack" ? "primary" : "primary"}`}>
						<Icon
							as={link.icon}
							className=""
							boxSize="24px"
							_hover={{
								color:
									theme === "bgRed"
										? "secundary"
										: theme === "bgBlack"
											? "primary"
											: "primary",
							}}
							transition="0.2s"
						/>
					</div>
				</Link>
			))}
		</div>
	);
}
