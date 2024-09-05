import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" py="2rem">
      <Flex w="100%" maxW="1280px" direction="column" px={{ base: "4", md: "4", lg: "0" }}>
        <Flex
          w="100%"
          direction="column"
          align="center"
          justify="center"
          color="primary"
        >
          <Heading as="h1" >
            <a href="#sobreaaparbs">APARBS Soluções Automotivas</a>
          </Heading>

          <Text textAlign="center" fontSize="16px" fontWeight="500" w={{ base: "100%", md: "50%" }}>
            Há mais de 25 anos no mercado atendendo com qualidade, garantindo
            eficiência em serviços automotivos.
          </Text>
        </Flex>

        <Flex
          w="100%"
          gap="3.125rem"
          mt="14"
          direction={{ lg: "row", md: "row", base: "column" }}
          align="center"
        >
          <Box 
            maxW="33%" w="100%"
          >
            <Image
              width={400}
              height={500}
              src="/Fachada1.webp"
              alt="Fachada da oficina mecânica APARBS na cidade de Porteirinha MG e na cidade de Riacho dos Machados"
              loading="lazy"
            />
          </Box>

          <Flex w={{ lg: "72%", base: "100%" }} direction="column" >
            <Heading as="h2" color="primary" mb="12px" textAlign={{base:"center", md:"initial", lg:"initial"}}>
              Conheça Nossa História
            </Heading>
            <Text
              fontWeight="400"
              fontSize={{lg:"1.125rem", base:"1rem"}}
              lineHeight="1.75rem"
              fontFamily="Hind"
              color="gray.600"
            >
              A Aparbs é referência no ramo de soluções automotivas. Assim como os
              carros precisam das engrenagens para funcionar, a Aparbs também
              trabalha assim, cada irmão é uma engrenagem que faz tudo rodar e
              correr da melhor forma para atender às demandas dos clientes.
              <br /> <br />
              Na sua simbologia, pode-se observar o círculo, que é sinônimo de
              movimento.
              <br /> <br />
              Ele simboliza também a eternidade, as engrenagens que mantém tudo
              funcionando em ordem. Além disso, o elo dá referência à família por
              trás do negócio, que trabalha junta para a melhoria contínua da
              Aparbs!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
