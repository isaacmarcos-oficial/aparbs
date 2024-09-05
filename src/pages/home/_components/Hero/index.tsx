import { Box } from "@chakra-ui/react";
import Image from 'next/image'

export default function Hero() {
  return (
    <Box
      w="100%"
      h={{ base: "250px", md: "400px", lg: "600px" }}
      mt={{ base: "66px", lg: "66px" }}
      position="relative"
    >
      <Image
        fill={true}
        src="https://res.cloudinary.com/diqaqpm8y/image/upload/v1725478190/aparbsfachada.jpg"
        alt="Fachada da oficina mecânica APARBS na cidade de Porteirinha MG"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
}
