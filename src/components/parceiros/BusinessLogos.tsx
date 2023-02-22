import { Flex, Img } from "@chakra-ui/react";

interface LogosProps {
  LogoImage: string;
  LogoAlt: string
}

export function BusinessLogos({LogoImage, LogoAlt}: LogosProps) {
  return (
    <Flex>
      <Img
        maxH="4rem"
        maxW="15rem"
        opacity="0.5"
        filter="grayscale(80%)"
        _hover={{ opacity: "1", filter: "none" }}
        transition="0.3s"
        alt={LogoAlt}
        src={LogoImage}
        />
    </Flex>
  )
}