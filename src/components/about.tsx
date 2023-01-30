import { Flex, Heading, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="primary"  py="48px">
      <Flex w="100%" direction="column" align="center" justify="center" maxW="71.25rem" px="32px" color="terciary" textAlign="center" >
        <Heading >
          <a href="#sobreaaparbs">
            APARBS Soluções Automotivas
          </a>
        </Heading>

        <Text fontSize="1rem" fontWeight="500" w={{ base:"100%", md:"50%"}} >
          Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos.
        </Text>
      </Flex>
    </Flex>
  )
}