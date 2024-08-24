import { Flex, Text, Heading, Image } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      pt={{ base: "66px", lg: "66px" }}
    >
      <Image
        w="100%"
        h={{ base: "250px", md:"400px", lg: "600px" }}
        src="/Fachada.jpg"
        alt="Fachada da oficina mecânica APARBS na cidade de Porteirinha MG"
        objectFit="cover"
      />
    </Flex>
  );
}
