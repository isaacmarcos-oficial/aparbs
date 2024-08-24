import { Flex, Heading, Text, Img } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      direction="column"
      w="100%"
      maxW="1280px"
      align="center"
      justify="center"
      color="primary"
      py="48px"
      px={{ base: 4, lg: "none" }}
    >
      <Flex
        w="100%"
        direction="column"
        align="center"
        justify="center"
        maxW="71.25rem"
        textAlign="center"
      >
        <Heading as="h1">
          <a href="#sobreaaparbs">APARBS Soluções Automotivas</a>
        </Heading>

        <Text fontSize="1rem" fontWeight="500" w={{ base: "100%", md: "50%" }}>
          Há mais de 25 anos no mercado atendendo com qualidade, garantindo
          eficiência em serviços automotivos.
        </Text>
      </Flex>

      <Flex
        w="100%"
        gap="50px"
        mt="14"
        direction={{ lg: "row", md: "row", base: "column" }}
        align="center"
      >
        <Flex w={{ lg: "33%", base: "50%" }}>
          <Img src="/Fachada1.png" w="100%" alt="Fachada da oficina mecânica APARBS na cidade de Porteirinha MG e na cidade de Riacho dos Machados" objectFit="contain" />
        </Flex>
        <Flex w={{ lg: "72%", base: "100%" }} direction="column" >
          <Heading as="h2" color="primary" mb="0.75rem" textAlign={{base:"center", md:"initial", lg:"initial"}}>
            Conheça Nossa História
          </Heading>
          <Text
            fontWeight="400"
            fontSize={{lg:"18px", base:"16px"}}
            lineHeight="28px"
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
  );
}
