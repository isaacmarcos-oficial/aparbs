import { Flex } from "@chakra-ui/react";
import Image from "next/image";

interface LogosProps {
  LogoImage: string;
  LogoAlt: string
}

export function BusinessLogos({LogoImage, LogoAlt}: LogosProps) {
  return (
    <Flex 
      boxSize="sm"
      position="relative"
      maxH={10}
      maxW={20}
      opacity="0.5"
      filter="grayscale(80%)"
      transition="0.3s"
      _hover={{ opacity: "1", filter: "none" }}
    >
      <Image
        width={500}
        height={500}
        quality={40}
        alt={LogoAlt}
        src={LogoImage}
        loading="lazy"
        style={{ objectFit: "contain",  }}
      />
    </Flex>
  )
}