import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { LinkIcons } from "../LinkIcons";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      w="100%"
      direction="column"
      mt="3rem"
      pt="3rem"
      bgColor="secundary"
      color="terciary"
      align="center"
      justify="center"
    >
      <Flex
        maxW="1280px"
        w="100%"
        mb="10"
        px={{ base: "8", md: "4", lg: "0" }}
        align={{ base: "center", md: "center", lg: "initial" }}
        textAlign={{ base: "center", md: "center", lg: "left" }}
      >
        <Grid
          w="100%"
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(1, 1fr)",
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

          <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
            <Flex
              w="100%"
              direction="column"
              gap="4"
              align={{ lg: "start", md: "center", base: "center" }}
            >
              <Heading display={{ base: "none", lg: "flex" }} fontSize="1.375rem" mb={1} color="primary">
                APARBS Soluções Automotivas
              </Heading>

              <Image
                width={150}
                height={80}
                src="/Aparbs Dark 3.svg" alt="APARBS Soluções Automotivas" />

              <Text fontFamily="Hind" fontSize="14px">
                Há mais de 25 anos no mercado atendendo com qualidade,
                garantindo eficiência em serviços automotivos.
              </Text>

              <Flex>
                <LinkIcons theme="bgBlack" />
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Flex
        py="4"
        lineHeight={10}
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
          <Text color="terciary" fontWeight="300">
            Copyright © {currentYear}
            <Link
              href="#"
              ml="0.5rem"
              fontWeight="600"
              target="_blank"
              _focus={{ border: "none" }}
              _hover={{ textDecoration: "none", color: "primary" }}
            >
              APARBS Soluções Automotivas
            </Link>
          </Text>

          <Link href="https://www.isaacmarcos.com.br" target="_blank" _hover={{ textDecoration: "none" }}>
            <Flex align="center" justify="center" border="1px solid" borderColor="#1e293b" w="270px" borderRadius="md" bg="#0f172a" _hover={{bg: "#334155"}} textColor="white" transition="0.2s"
            className="flex items-center h-8 w-[270px] rounded border border-slate-800 hover:border-yellow-500 shadow bg-slate-900 hover:bg-slate-800">
              <Text>
                Construído por Isaac
              </Text>
              <Text fontWeight="600">Marcos</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
