import { Flex, Img, Link, Text } from "@chakra-ui/react";

export function Footer(){
  return (
    <Flex direction="column" py="3rem" bgColor="secundary" align="center" justify="center"  w="100%">
      <Flex display="column" mb="10" align="center" justify="center" >
        <Flex display={{ base:"column", lg:"flex" }} align="center" justify="center">
          <Flex align="center" justify="center" mb={{ base:"1.2rem" }} >
            <Img src="/Aparbs Dark 3.svg" alt="logo APARBS" h="5rem" />
          </Flex>
          
          <Flex display="column" ml={{ lg: "8" }} textAlign="center" justify="center" fontSize={{ base: "0.5rem", lg: "0.75rem" }}>
            <Text mt="0.75rem" color="primary" fontWeight="800" fontSize={{ base:"1.25rem", lg: "1.5rem" }} >
              (38) 3220-8767
            </Text>
            <Text>
              MATRIZ PORTEIRINHA: Av. Dalton Cunha, 201 - Porteirinha, MG, 39520-000
            </Text>
            <Text mt="1">
              FILIAL RIACHO DOS MACHADOS: Av. Salviana Alves da Cruz, 70 - Riacho dos Machados, MG, 39529-000
            </Text>
          </Flex>

        </Flex>
      </Flex>
    <Flex lineHeight={10}>
      <Text color="terciary" fontSize="sm" fontWeight="300">
          © Created by
          <Link href="https://www.scdesign.com.br" ml="0.5rem" fontWeight="600" target="_blank" _focus={{ border: "none" }} _hover={{ textDecoration: "none", color: "primary" }}>
            SC Design
          </Link>
      </Text>
    </Flex>
    </Flex>
  )
}