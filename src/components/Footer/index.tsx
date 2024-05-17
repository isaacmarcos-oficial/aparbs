import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import { LinkIcons } from "../linkIcons";

export function Footer() {
  const currentYear = new Date().getFullYear() 

  return (
    <Flex
      w="100%"
      direction="column"
      mt="3rem"
      pt="3rem"
      bgColor="secundary"
      align="center"
      justify="center"
    >
      <Flex
        maxW="1280px"
        w="100%"
        mb="10"
        px={{ base: "8", md: "4", lg: "0" }}
        align={{ base: "center", md: "center", lg: "initial" }}
        textAlign={{ base: "center", md: "center", lg:"left"}}
      >
        <Grid
          w="100%"
          templateColumns={{
            lg: "repeat(5, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={{ base: 8, md: "none", lg: "none" }}
        >
          {/* Serviços */}
          <GridItem>
            <Flex direction="column" fontSize="14px" lineHeight="1.75rem">
              <Heading fontSize="1.375rem" mb={1} color="primary">
                Nossos Serviços
              </Heading>
              <Text>Mecânica em Geral</Text>
              <Text>Elétrica Automotiva</Text>
              <Text>Troca de Óleo</Text>
              <Text>Auto Socorro</Text>
              <Text>Ar Condicionado</Text>
              <Text>Injeção Eletrônica</Text>
              <Text>Limpeza de Bico</Text>
              <Text>Peças e Baterias</Text>
            </Flex>
          </GridItem>

          {/* APARBS Porteirinha */}
          <GridItem>
            <Flex direction="column" fontSize="14px" lineHeight="1.75rem">
              <Heading fontSize="1.375rem" mb={1} color="primary">
                Porteirinha/MG
              </Heading>
              <Text color="gray.300" fontWeight="300">
                07.263.234/0001-70
              </Text>
              <Text>
                Av. Dalton Cunha, 201
                <br />
                Bairro Eldorado
                <br />
                Porteirinha/MG
                <br />
                CEP: 39520-000
              </Text>
            </Flex>
          </GridItem>

          {/* APARBS Riacho dos Machados */}
          <GridItem>
            <Flex direction="column" fontSize="14px" lineHeight="1.75rem">
              <Heading fontSize="1.375rem" mb={1} color="primary">
                Riacho dos Machados/MG
              </Heading>
              <Text color="gray.300" fontWeight="300">
                37.555.350/0001-24
              </Text>
              <Text>
                Av. Salviana Alves da Cruz, 70
                <br />
                Bairro Lourdes
                <br />
                Riacho dos Machados/MG
                <br />
                CEP: 39529-000
              </Text>
            </Flex>
          </GridItem>

          {/* APARBS Transportes */}
          <GridItem>
            <Flex direction="column" fontSize="14px" lineHeight="1.75rem">
              <Heading fontSize="1.375rem" mb={1} color="primary">
                APARBS Transportes
              </Heading>
              <Text color="gray.300" fontWeight="300">
                51.494.204/0001-67
              </Text>
              <Text>
                Av. Gabriel Mendes Santos, 330
                <br />
                Paciência
                <br />
                Porteirinha/MG
                <br />
                CEP: 39520-000
              </Text>
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 2, lg: 1}}>
            <Flex
              w="100%"
              direction="column"
              gap="4"
              align={{ lg: "start", md: "center", base: "center" }}
            >
              <Heading display={{ base:"none", lg:"flex" }} fontSize="1.375rem" mb={1} color="primary">
                APARBS Soluções Automotivas
              </Heading>
              
              <Img src="/Aparbs Dark 3.svg" alt="APARBS Soluções Automotivas" h="5rem" />
              
              <Text fontFamily="Hind" fontSize="14px">
                Há mais de 17 anos no mercado atendendo com qualidade,
                <br/> garantindo eficiência em serviços automotivos.
              </Text>

              <Flex>
                <LinkIcons />
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Flex
        lineHeight={10}
        //bg="gray.800"
        borderTop="0.1px solid"
        borderColor="gray.600"
        w="100%"
        align="center"
        justify="center"
      >
        <Flex
          w="100%"
          maxW="1280px"
          fontSize="sm"
          align="center"
          justify="space-between"
          px={{ base: "8", md: "4", lg: "0" }}
          direction={{ lg: "row", md: "row", base: "column" }}
        >
          <Text>Copyright © {currentYear} APARBS Soluções Automotivas</Text>
          <Text color="terciary" fontWeight="300">
            © Created by
            <Link
              href="https://www.isaacmarcos.com.br"
              ml="0.5rem"
              fontWeight="600"
              target="_blank"
              _focus={{ border: "none" }}
              _hover={{ textDecoration: "none", color: "primary" }}
            >
              Isaac Marcos
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
