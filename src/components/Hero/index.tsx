import { Flex, Text, Heading } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex direction="column"  w="100%" >
      <Flex bgColor="#000000e0" h={{ base:"500px", lg:"600px" }} w="100%" align="end" justify="center" bgImage="/AparbsFront.jpg" bgSize="cover" bgBlendMode="overlay" bgPosition={{base:"90% 40%", lg:"50% 40%"}} >

        <Flex w={{ base:"80%", lg:"100%"}} mb="3rem" direction="column" >
          <Heading color="primary" textAlign="center" letterSpacing="0.1rem" fontFamily="Montserrat, sans-serif" fontSize={{base:"2rem", lg:"2.5rem"}} fontWeight="600" >
            APARBS Soluções Automotivas
          </Heading>
          <Text textAlign="center" letterSpacing="0.1rem" fontFamily="Montserrat, sans-serif" fontSize={{ base:"1.2rem", lg:"1.3rem"}} fontWeight="300" >
            Especializada em <strong>soluções</strong> de problemas automotivos
          </Text>
        </Flex>
        
      </Flex>
    </Flex>
  )
}