import { Flex, Heading, Skeleton, Wrap, WrapItem } from "@chakra-ui/react";
import BusinessLogos from "./BusinessLogos";

export default function Parceiros({ partners }) {
	if (!partners || !Array.isArray(partners)) {
		return <Skeleton height="200px" w="100%" />;
	}

	return (
		<Flex direction="column" w="100%" align="center" justify="center" py="3rem">
			<Flex
				w="100%"
				direction="column"
				align="center"
				justify="center"
				maxW="1140px"
			>
				<Heading as="h2" color="primary" mb="2rem">
					<a href="#NossosServicos">Nossos Clientes</a>
				</Heading>
				<Flex direction="column" w="100%" align="center" justify="center">
					<Wrap spacing="8" mx="4" align="center" justify="center">
						{partners.map((partner) => {
							return (
								<WrapItem key={partner.id} gap="8">
									<BusinessLogos
										LogoImage={partner.image.url}
										LogoAlt={partner.business}
									/>
								</WrapItem>
							);
						})}
					</Wrap>
				</Flex>
			</Flex>
		</Flex>
	);
}
